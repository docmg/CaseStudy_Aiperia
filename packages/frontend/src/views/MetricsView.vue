<script setup lang="ts">
import { useTRPC } from "@/composables/useTRPC";
import type { Product, Store } from "api/prisma/client";
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
    selectedRange.value = [minDate.value, maxDate.value];
  }
});

const selectedStore = ref<Pick<Store, "id"> | null>(null);
const selectedProducts = ref<Pick<Product, "id">[]>([]);
const selectedRange = ref<Date[]>([]);
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
      :show-clear="true"
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
      v-model="selectedRange"
      :show-week="false"
      :show-icon="true"
    />
  </div>
</template>
