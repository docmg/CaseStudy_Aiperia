/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        aggregate: procedure.input($Schema.MetricsInputSchema.aggregate).query(({ ctx, input }) => checkRead(db(ctx).metrics.aggregate(input as any))),

        findFirst: procedure.input($Schema.MetricsInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).metrics.findFirst(input as any))),

        findFirstOrThrow: procedure.input($Schema.MetricsInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).metrics.findFirstOrThrow(input as any))),

        findMany: procedure.input($Schema.MetricsInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).metrics.findMany(input as any))),

        findUnique: procedure.input($Schema.MetricsInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).metrics.findUnique(input as any))),

        findUniqueOrThrow: procedure.input($Schema.MetricsInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).metrics.findUniqueOrThrow(input as any))),

        groupBy: procedure.input($Schema.MetricsInputSchema.groupBy).query(({ ctx, input }) => checkRead(db(ctx).metrics.groupBy(input as any))),

        count: procedure.input($Schema.MetricsInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).metrics.count(input as any))),

    }
    );
}
