/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        aggregate: procedure.input($Schema.ProductInputSchema.aggregate).query(({ ctx, input }) => checkRead(db(ctx).product.aggregate(input as any))),

        findFirst: procedure.input($Schema.ProductInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).product.findFirst(input as any))),

        findFirstOrThrow: procedure.input($Schema.ProductInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).product.findFirstOrThrow(input as any))),

        findMany: procedure.input($Schema.ProductInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).product.findMany(input as any))),

        findUnique: procedure.input($Schema.ProductInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).product.findUnique(input as any))),

        findUniqueOrThrow: procedure.input($Schema.ProductInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).product.findUniqueOrThrow(input as any))),

        groupBy: procedure.input($Schema.ProductInputSchema.groupBy).query(({ ctx, input }) => checkRead(db(ctx).product.groupBy(input as any))),

        count: procedure.input($Schema.ProductInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).product.count(input as any))),

    }
    );
}
