/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        aggregate: procedure.input($Schema.RecommendationInputSchema.aggregate).query(({ ctx, input }) => checkRead(db(ctx).recommendation.aggregate(input as any))),

        findFirst: procedure.input($Schema.RecommendationInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).recommendation.findFirst(input as any))),

        findFirstOrThrow: procedure.input($Schema.RecommendationInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).recommendation.findFirstOrThrow(input as any))),

        findMany: procedure.input($Schema.RecommendationInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).recommendation.findMany(input as any))),

        findUnique: procedure.input($Schema.RecommendationInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).recommendation.findUnique(input as any))),

        findUniqueOrThrow: procedure.input($Schema.RecommendationInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).recommendation.findUniqueOrThrow(input as any))),

        groupBy: procedure.input($Schema.RecommendationInputSchema.groupBy).query(({ ctx, input }) => checkRead(db(ctx).recommendation.groupBy(input as any))),

        count: procedure.input($Schema.RecommendationInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).recommendation.count(input as any))),

    }
    );
}
