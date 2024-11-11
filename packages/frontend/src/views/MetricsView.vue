<script setup lang="ts">
import ChartMetricBars from "@/components/charts/ChartMetricBars.vue";
import { useTRPC } from "@/composables/useTRPC";
import type { Prisma, Product, Store } from "api/prisma/client";
import { endOfDay, format } from "date-fns";
import { Button, DatePicker, MultiSelect, Select } from "primevue";
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

// Button clich handler - reset all inputs
const resetInputs = () => {
  selectedStore.value = null;
  selectedProducts.value.length = 0;
  if (minDate.value && maxDate.value) {
    selectedDateRange.value = [minDate.value, maxDate.value];
  }
};

const resetButtonEnabled = computed(() => {
  const [startDate, endDate] = selectedDateRange.value;
  return (
    startDate !== minDate.value ||
    endDate !== maxDate.value ||
    selectedStore.value !== null ||
    selectedProducts.value.length > 0
  );
});

const metricsQuery = computed<Prisma.MetricsGroupByArgs>(() => {
  const query: Prisma.MetricsGroupByArgs = {
    by: ["targetDate"],
    _sum: {
      recommendedQuantity: true,
      deliveredQuantity: true,
      salesQuantity: true,
      demandQuantity: true,
    },
    orderBy: {
      targetDate: "asc",
    },
    where: {
      targetDate: {
        gte: selectedDateRange.value[0],
        lte: endOfDay(
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
const { data: metricsData } = useTRPC().metrics.groupBy.useQuery(metricsQuery, {
  enabled: dateRangeIsSelected,
  select: data =>
    // Transform data after agreagation
    data.map(el => ({
      recommended: el._sum?.recommendedQuantity ?? 0,
      delivered: el._sum?.deliveredQuantity ?? 0,
      demandGap: (el._sum?.demandQuantity ?? 0) - (el._sum?.salesQuantity ?? 0),
      sales: el._sum?.salesQuantity ?? 0,
      date: format(el.targetDate, "dd.MM.yyyy"),
    })),
});
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
    <Button
      icon="pi pi-times"
      aria-label="Reset"
      severity="secondary"
      :disabled="!resetButtonEnabled"
      @click="resetInputs"
    />
  </div>
  <ChartMetricBars :metrics="metricsData || []"></ChartMetricBars>
</template>
