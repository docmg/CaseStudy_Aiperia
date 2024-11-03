/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        aggregate: procedure.input($Schema.DeliveryInputSchema.aggregate).query(({ ctx, input }) => checkRead(db(ctx).delivery.aggregate(input as any))),

        findFirst: procedure.input($Schema.DeliveryInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).delivery.findFirst(input as any))),

        findFirstOrThrow: procedure.input($Schema.DeliveryInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).delivery.findFirstOrThrow(input as any))),

        findMany: procedure.input($Schema.DeliveryInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).delivery.findMany(input as any))),

        findUnique: procedure.input($Schema.DeliveryInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).delivery.findUnique(input as any))),

        findUniqueOrThrow: procedure.input($Schema.DeliveryInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).delivery.findUniqueOrThrow(input as any))),

        groupBy: procedure.input($Schema.DeliveryInputSchema.groupBy).query(({ ctx, input }) => checkRead(db(ctx).delivery.groupBy(input as any))),

        count: procedure.input($Schema.DeliveryInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).delivery.count(input as any))),

    }
    );
}
