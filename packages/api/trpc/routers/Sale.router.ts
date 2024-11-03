/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        aggregate: procedure.input($Schema.SaleInputSchema.aggregate).query(({ ctx, input }) => checkRead(db(ctx).sale.aggregate(input as any))),

        findFirst: procedure.input($Schema.SaleInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).sale.findFirst(input as any))),

        findFirstOrThrow: procedure.input($Schema.SaleInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).sale.findFirstOrThrow(input as any))),

        findMany: procedure.input($Schema.SaleInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).sale.findMany(input as any))),

        findUnique: procedure.input($Schema.SaleInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).sale.findUnique(input as any))),

        findUniqueOrThrow: procedure.input($Schema.SaleInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).sale.findUniqueOrThrow(input as any))),

        groupBy: procedure.input($Schema.SaleInputSchema.groupBy).query(({ ctx, input }) => checkRead(db(ctx).sale.groupBy(input as any))),

        count: procedure.input($Schema.SaleInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).sale.count(input as any))),

    }
    );
}
