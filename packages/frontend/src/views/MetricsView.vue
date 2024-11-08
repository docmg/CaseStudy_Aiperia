<script setup lang="ts">
import { useTRPC } from "@/composables/useTRPC";
import type { Prisma, Product, Store } from "api/prisma/client";
import { endOfDay } from "date-fns";
import { DatePicker, MultiSelect, Select } from "primevue";
import { computed, ref, watch } from "vue";

const { data: stores, isLoading: isLoadingStores } =
  useTRPC().store.findMany.useQuery({
    select: {
      id: true,
      label: true,
    },
  });

const { data: products, isLoading: isLoadingProducts } =
  useTRPC().product.findMany.useQuery({
    select: {
      id: true,
      name: true,
    },
  });

const { data: dateRange, isLoading: isLoadingDates } =
  useTRPC().metrics.aggregate.useQuery({
    _max: {
      targetDate: true,
    },
    _min: {
      targetDate: true,
    },
  });

const minDate = computed(() =>
  dateRange.value?._min?.targetDate
    ? new Date(dateRange.value._min.targetDate)
    : undefined,
);
const maxDate = computed(() =>
  dateRange.value?._max?.targetDate
    ? new Date(dateRange.value._max.targetDate)
    : undefined,
);

// Set initial range
watch([isLoadingDates, minDate, maxDate], () => {
  if (minDate.value && maxDate.value) {
    selectedDateRange.value = [minDate.value, maxDate.value];
  }
});

const selectedStore = ref<Store["id"] | null>(null);
const selectedProducts = ref<Product["id"][]>([]);
const selectedDateRange = ref<[Date, Date] | []>([]);

const metricsQuery = computed<Prisma.MetricsFindManyArgs>(() => {
  const query: Prisma.MetricsFindManyArgs = {
    select: {
      targetDate: true,
      recommendedQuantity: true,
      salesQuantity: true,
      demandQuantity: true,
    },
    // Apply date range filtering
    where: {
      targetDate: {
        gte: selectedDateRange.value[0],
        lte: endOfDay(
          // Because query is disabled if no date is selected, there is always at least one
          // entry in the array containing date.
          selectedDateRange.value[1] ?? (selectedDateRange.value[0] as Date),
        ),
      },
    },
  };

  // Apply store filter if some store is selected
  if (selectedStore.value !== null) {
    query.where = {
      ...query.where,
      storeId: selectedStore.value,
    };
  }

  // Apply products filter if user hast selected some products
  if (selectedProducts.value.length) {
    query.where = {
      ...query.where,
      productId: { in: selectedProducts.value },
    };
  }

  return query;
});

const dateRangeIsSelected = computed(() =>
  selectedDateRange.value.some(el => !!el),
);
const { data: metricsData } = useTRPC().metrics.findMany.useQuery(
  metricsQuery,
  { enabled: dateRangeIsSelected },
);
</script>

<template>
  <div class="flex flex-row justify-center gap-1 p-3">
    <Select
      class="w-64"
      placeholder="All stores"
      :disabled="isLoadingStores"
      v-model="selectedStore"
      :options="stores"
      option-label="label"
      option-value="id"
      :show-clear="true"
    />
    <MultiSelect
      class="w-64"
      placeholder="All products"
      :disabled="isLoadingProducts"
      v-model="selectedProducts"
      :options="products"
      option-label="name"
      option-value="id"
    />
    <DatePicker
      class="w-64"
      input-id="dateRange"
      placeholder="Select date range"
      :disabled="isLoadingDates || (!minDate && !maxDate)"
      :min-date="minDate"
      :max-date="maxDate"
      :manual-input="false"
      selection-mode="range"
      v-model="selectedDateRange"
      :show-week="false"
      :show-icon="true"
      :number-of-months="2"
    />
  </div>
</template>
