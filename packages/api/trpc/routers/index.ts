/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "../../prisma/client";
import createStoreRouter from "./Store.router";
import createProductRouter from "./Product.router";
import createRecommendationRouter from "./Recommendation.router";
import createDeliveryRouter from "./Delivery.router";
import createSaleRouter from "./Sale.router";
import createMetricsRouter from "./Metrics.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        store: createStoreRouter(router, procedure),
        product: createProductRouter(router, procedure),
        recommendation: createRecommendationRouter(router, procedure),
        delivery: createDeliveryRouter(router, procedure),
        sale: createSaleRouter(router, procedure),
        metrics: createMetricsRouter(router, procedure),
    }
    );
}
