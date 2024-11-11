<script setup lang="ts">
import type { Metrics } from "api/prisma/client";
import { format } from "date-fns";
import type { EChartsOption } from "echarts";
import { BarChart, LineChart } from "echarts/charts";
import {
  DatasetComponent,
  GridComponent,
  LegendComponent,
  ToolboxComponent,
  TooltipComponent,
} from "echarts/components";
import { use as echartsUse } from "echarts/core";
import { UniversalTransition } from "echarts/features";
import { SVGRenderer } from "echarts/renderers";
import { computed, provide, ref } from "vue";
import VChart, { THEME_KEY } from "vue-echarts";

echartsUse([
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  BarChart,
  LineChart,
  SVGRenderer,
  UniversalTransition,
  DatasetComponent,
]);

provide(THEME_KEY, "white");

type Metric = {
  recommended: number;
  delivered: number;
  demandGap: number;
  sales: number;
  date: string;
};

const props = defineProps<{
  metrics: Metric[];
}>();

const option = ref<EChartsOption>({
  animation: false,
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  legend: {
    data: ["Recommendation", "Delivered", "Sales", "DemandGap"],
  },
  xAxis: {
    type: "category",
    axisLabel: {
      formatter: value => format(value, "dd.MM.yyyy"),
      interval: 0, // show label on every entry
    },
  },
  yAxis: {},
  dataset: {
    dimensions: ["date", "recommended", "delivered", "sales", "demandGap"],
    source: computed(() => props.metrics) as unknown as Metrics[],
  },
  series: [
    {
      type: "line",
      encode: { x: "date", y: "recommended" },
      name: "Recommendation",
    },
    {
      type: "bar",
      encode: { x: "date", y: "delivered" },
      name: "Delivered",
    },
    {
      type: "bar",
      encode: { x: "date", y: "sales" },
      name: "Sales",
      stack: "total",
    },
    {
      type: "bar",
      encode: { x: "date", y: "demandGap" },
      name: "DemandGap",
      stack: "total",
    },
  ],
});
</script>

<template>
  <VChart
    :style="{ height: '400px' }"
    class="chart"
    :option="option"
    autoresize
  />
</template>
