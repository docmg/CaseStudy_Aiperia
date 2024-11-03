/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        aggregate: procedure.input($Schema.StoreInputSchema.aggregate).query(({ ctx, input }) => checkRead(db(ctx).store.aggregate(input as any))),

        findFirst: procedure.input($Schema.StoreInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).store.findFirst(input as any))),

        findFirstOrThrow: procedure.input($Schema.StoreInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).store.findFirstOrThrow(input as any))),

        findMany: procedure.input($Schema.StoreInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).store.findMany(input as any))),

        findUnique: procedure.input($Schema.StoreInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).store.findUnique(input as any))),

        findUniqueOrThrow: procedure.input($Schema.StoreInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).store.findUniqueOrThrow(input as any))),

        groupBy: procedure.input($Schema.StoreInputSchema.groupBy).query(({ ctx, input }) => checkRead(db(ctx).store.groupBy(input as any))),

        count: procedure.input($Schema.StoreInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).store.count(input as any))),

    }
    );
}
