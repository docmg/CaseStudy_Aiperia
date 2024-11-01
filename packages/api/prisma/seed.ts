import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import dataStores from "../data/stores.json";
import dataProducts from "../data/products.json";
import dataRecommendations from "../data/recommendations.json";
import dataDeliveries from "../data/deliveries.json";
import dataSales from "../data/sales.json";

async function main() {
  const { store, product, recommendation, delivery, sale } = prisma;

  // Remove possible existing data
  await store.deleteMany();
  await product.deleteMany();
  await recommendation.deleteMany();
  await delivery.deleteMany();
  await sale.deleteMany();

  // Seed data using json files
  await Promise.all(
    dataStores.map((el) =>
      store.create({
        data: {
          id: el.id_store,
          label: el.store_label,
          number: el.number_store,
        },
      }),
    ),
  );

  await Promise.all(
    dataProducts.map((el) =>
      product.create({
        data: {
          id: el.id_product,
          name: el.name_product,
          number: el.number_product,
          price: el.price,
        },
      }),
    ),
  );

  await Promise.all(
    dataRecommendations.map((el) =>
      recommendation.create({
        data: {
          targetDate: new Date(el.target_date),
          storeId: el.id_store,
          productId: el.id_product,
          quantity: el.recommendation,
          value: el.recommendation_value_by_price,
        },
      }),
    ),
  );

  await Promise.all(
    dataDeliveries.map((el) =>
      delivery.create({
        data: {
          targetDate: new Date(el.target_date),
          storeId: el.id_store,
          productId: el.id_product,
          quantity: el.delivery_qty,
          value: el.delivery_value_by_price,
        },
      }),
    ),
  );

  await Promise.all(
    dataSales.map((el) =>
      sale.create({
        data: {
          targetDate: new Date(el.target_date),
          storeId: el.id_store,
          productId: el.id_product,
          salesQuantity: el.sales_qty,
          salesValue: el.sales_value,
          demandQuantity: el.demand_qty,
          demandValue: el.demand_value,
        },
      }),
    ),
  );
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
