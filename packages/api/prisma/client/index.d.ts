
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Store
 * 
 */
export type Store = $Result.DefaultSelection<Prisma.$StorePayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Recommendation
 * 
 */
export type Recommendation = $Result.DefaultSelection<Prisma.$RecommendationPayload>
/**
 * Model Delivery
 * 
 */
export type Delivery = $Result.DefaultSelection<Prisma.$DeliveryPayload>
/**
 * Model Sale
 * @@allow('read', true)
 */
export type Sale = $Result.DefaultSelection<Prisma.$SalePayload>
/**
 * Model Metrics
 * 
 */
export type Metrics = $Result.DefaultSelection<Prisma.$MetricsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Stores
 * const stores = await prisma.store.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Stores
   * const stores = await prisma.store.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.store`: Exposes CRUD operations for the **Store** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stores
    * const stores = await prisma.store.findMany()
    * ```
    */
  get store(): Prisma.StoreDelegate<ExtArgs>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs>;

  /**
   * `prisma.recommendation`: Exposes CRUD operations for the **Recommendation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recommendations
    * const recommendations = await prisma.recommendation.findMany()
    * ```
    */
  get recommendation(): Prisma.RecommendationDelegate<ExtArgs>;

  /**
   * `prisma.delivery`: Exposes CRUD operations for the **Delivery** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Deliveries
    * const deliveries = await prisma.delivery.findMany()
    * ```
    */
  get delivery(): Prisma.DeliveryDelegate<ExtArgs>;

  /**
   * `prisma.sale`: Exposes CRUD operations for the **Sale** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sales
    * const sales = await prisma.sale.findMany()
    * ```
    */
  get sale(): Prisma.SaleDelegate<ExtArgs>;

  /**
   * `prisma.metrics`: Exposes CRUD operations for the **Metrics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Metrics
    * const metrics = await prisma.metrics.findMany()
    * ```
    */
  get metrics(): Prisma.MetricsDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.21.1
   * Query Engine version: bf0e5e8a04cada8225617067eaa03d041e2bba36
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Store: 'Store',
    Product: 'Product',
    Recommendation: 'Recommendation',
    Delivery: 'Delivery',
    Sale: 'Sale',
    Metrics: 'Metrics'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "store" | "product" | "recommendation" | "delivery" | "sale" | "metrics"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Store: {
        payload: Prisma.$StorePayload<ExtArgs>
        fields: Prisma.StoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          findFirst: {
            args: Prisma.StoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          findMany: {
            args: Prisma.StoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>[]
          }
          create: {
            args: Prisma.StoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          createMany: {
            args: Prisma.StoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>[]
          }
          delete: {
            args: Prisma.StoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          update: {
            args: Prisma.StoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          deleteMany: {
            args: Prisma.StoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          aggregate: {
            args: Prisma.StoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStore>
          }
          groupBy: {
            args: Prisma.StoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoreCountArgs<ExtArgs>
            result: $Utils.Optional<StoreCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Recommendation: {
        payload: Prisma.$RecommendationPayload<ExtArgs>
        fields: Prisma.RecommendationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecommendationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecommendationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>
          }
          findFirst: {
            args: Prisma.RecommendationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecommendationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>
          }
          findMany: {
            args: Prisma.RecommendationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>[]
          }
          create: {
            args: Prisma.RecommendationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>
          }
          createMany: {
            args: Prisma.RecommendationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecommendationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>[]
          }
          delete: {
            args: Prisma.RecommendationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>
          }
          update: {
            args: Prisma.RecommendationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>
          }
          deleteMany: {
            args: Prisma.RecommendationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecommendationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RecommendationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>
          }
          aggregate: {
            args: Prisma.RecommendationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecommendation>
          }
          groupBy: {
            args: Prisma.RecommendationGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecommendationGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecommendationCountArgs<ExtArgs>
            result: $Utils.Optional<RecommendationCountAggregateOutputType> | number
          }
        }
      }
      Delivery: {
        payload: Prisma.$DeliveryPayload<ExtArgs>
        fields: Prisma.DeliveryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeliveryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeliveryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>
          }
          findFirst: {
            args: Prisma.DeliveryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeliveryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>
          }
          findMany: {
            args: Prisma.DeliveryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>[]
          }
          create: {
            args: Prisma.DeliveryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>
          }
          createMany: {
            args: Prisma.DeliveryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeliveryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>[]
          }
          delete: {
            args: Prisma.DeliveryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>
          }
          update: {
            args: Prisma.DeliveryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>
          }
          deleteMany: {
            args: Prisma.DeliveryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeliveryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DeliveryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>
          }
          aggregate: {
            args: Prisma.DeliveryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDelivery>
          }
          groupBy: {
            args: Prisma.DeliveryGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeliveryGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeliveryCountArgs<ExtArgs>
            result: $Utils.Optional<DeliveryCountAggregateOutputType> | number
          }
        }
      }
      Sale: {
        payload: Prisma.$SalePayload<ExtArgs>
        fields: Prisma.SaleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SaleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SaleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          findFirst: {
            args: Prisma.SaleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SaleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          findMany: {
            args: Prisma.SaleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>[]
          }
          create: {
            args: Prisma.SaleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          createMany: {
            args: Prisma.SaleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SaleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>[]
          }
          delete: {
            args: Prisma.SaleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          update: {
            args: Prisma.SaleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          deleteMany: {
            args: Prisma.SaleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SaleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SaleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          aggregate: {
            args: Prisma.SaleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSale>
          }
          groupBy: {
            args: Prisma.SaleGroupByArgs<ExtArgs>
            result: $Utils.Optional<SaleGroupByOutputType>[]
          }
          count: {
            args: Prisma.SaleCountArgs<ExtArgs>
            result: $Utils.Optional<SaleCountAggregateOutputType> | number
          }
        }
      }
      Metrics: {
        payload: Prisma.$MetricsPayload<ExtArgs>
        fields: Prisma.MetricsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MetricsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MetricsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricsPayload>
          }
          findFirst: {
            args: Prisma.MetricsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MetricsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricsPayload>
          }
          findMany: {
            args: Prisma.MetricsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricsPayload>[]
          }
          create: {
            args: Prisma.MetricsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricsPayload>
          }
          createMany: {
            args: Prisma.MetricsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MetricsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricsPayload>[]
          }
          delete: {
            args: Prisma.MetricsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricsPayload>
          }
          update: {
            args: Prisma.MetricsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricsPayload>
          }
          deleteMany: {
            args: Prisma.MetricsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MetricsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MetricsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricsPayload>
          }
          aggregate: {
            args: Prisma.MetricsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMetrics>
          }
          groupBy: {
            args: Prisma.MetricsGroupByArgs<ExtArgs>
            result: $Utils.Optional<MetricsGroupByOutputType>[]
          }
          count: {
            args: Prisma.MetricsCountArgs<ExtArgs>
            result: $Utils.Optional<MetricsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type StoreCountOutputType
   */

  export type StoreCountOutputType = {
    recommendations: number
    deliveries: number
    Sale: number
    Metrics: number
  }

  export type StoreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recommendations?: boolean | StoreCountOutputTypeCountRecommendationsArgs
    deliveries?: boolean | StoreCountOutputTypeCountDeliveriesArgs
    Sale?: boolean | StoreCountOutputTypeCountSaleArgs
    Metrics?: boolean | StoreCountOutputTypeCountMetricsArgs
  }

  // Custom InputTypes
  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreCountOutputType
     */
    select?: StoreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountRecommendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecommendationWhereInput
  }

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountDeliveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveryWhereInput
  }

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountSaleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleWhereInput
  }

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountMetricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetricsWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    recommendations: number
    deliveries: number
    Sale: number
    Metrics: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recommendations?: boolean | ProductCountOutputTypeCountRecommendationsArgs
    deliveries?: boolean | ProductCountOutputTypeCountDeliveriesArgs
    Sale?: boolean | ProductCountOutputTypeCountSaleArgs
    Metrics?: boolean | ProductCountOutputTypeCountMetricsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountRecommendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecommendationWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountDeliveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveryWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountSaleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountMetricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetricsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Store
   */

  export type AggregateStore = {
    _count: StoreCountAggregateOutputType | null
    _avg: StoreAvgAggregateOutputType | null
    _sum: StoreSumAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  export type StoreAvgAggregateOutputType = {
    id: number | null
    number: number | null
  }

  export type StoreSumAggregateOutputType = {
    id: number | null
    number: number | null
  }

  export type StoreMinAggregateOutputType = {
    id: number | null
    label: string | null
    number: number | null
  }

  export type StoreMaxAggregateOutputType = {
    id: number | null
    label: string | null
    number: number | null
  }

  export type StoreCountAggregateOutputType = {
    id: number
    label: number
    number: number
    _all: number
  }


  export type StoreAvgAggregateInputType = {
    id?: true
    number?: true
  }

  export type StoreSumAggregateInputType = {
    id?: true
    number?: true
  }

  export type StoreMinAggregateInputType = {
    id?: true
    label?: true
    number?: true
  }

  export type StoreMaxAggregateInputType = {
    id?: true
    label?: true
    number?: true
  }

  export type StoreCountAggregateInputType = {
    id?: true
    label?: true
    number?: true
    _all?: true
  }

  export type StoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Store to aggregate.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stores
    **/
    _count?: true | StoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoreMaxAggregateInputType
  }

  export type GetStoreAggregateType<T extends StoreAggregateArgs> = {
        [P in keyof T & keyof AggregateStore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStore[P]>
      : GetScalarType<T[P], AggregateStore[P]>
  }




  export type StoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreWhereInput
    orderBy?: StoreOrderByWithAggregationInput | StoreOrderByWithAggregationInput[]
    by: StoreScalarFieldEnum[] | StoreScalarFieldEnum
    having?: StoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoreCountAggregateInputType | true
    _avg?: StoreAvgAggregateInputType
    _sum?: StoreSumAggregateInputType
    _min?: StoreMinAggregateInputType
    _max?: StoreMaxAggregateInputType
  }

  export type StoreGroupByOutputType = {
    id: number
    label: string
    number: number
    _count: StoreCountAggregateOutputType | null
    _avg: StoreAvgAggregateOutputType | null
    _sum: StoreSumAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  type GetStoreGroupByPayload<T extends StoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoreGroupByOutputType[P]>
            : GetScalarType<T[P], StoreGroupByOutputType[P]>
        }
      >
    >


  export type StoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    number?: boolean
    recommendations?: boolean | Store$recommendationsArgs<ExtArgs>
    deliveries?: boolean | Store$deliveriesArgs<ExtArgs>
    Sale?: boolean | Store$SaleArgs<ExtArgs>
    Metrics?: boolean | Store$MetricsArgs<ExtArgs>
    _count?: boolean | StoreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["store"]>

  export type StoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    number?: boolean
  }, ExtArgs["result"]["store"]>

  export type StoreSelectScalar = {
    id?: boolean
    label?: boolean
    number?: boolean
  }

  export type StoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recommendations?: boolean | Store$recommendationsArgs<ExtArgs>
    deliveries?: boolean | Store$deliveriesArgs<ExtArgs>
    Sale?: boolean | Store$SaleArgs<ExtArgs>
    Metrics?: boolean | Store$MetricsArgs<ExtArgs>
    _count?: boolean | StoreCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StoreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Store"
    objects: {
      recommendations: Prisma.$RecommendationPayload<ExtArgs>[]
      deliveries: Prisma.$DeliveryPayload<ExtArgs>[]
      Sale: Prisma.$SalePayload<ExtArgs>[]
      Metrics: Prisma.$MetricsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      label: string
      number: number
    }, ExtArgs["result"]["store"]>
    composites: {}
  }

  type StoreGetPayload<S extends boolean | null | undefined | StoreDefaultArgs> = $Result.GetResult<Prisma.$StorePayload, S>

  type StoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StoreFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StoreCountAggregateInputType | true
    }

  export interface StoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Store'], meta: { name: 'Store' } }
    /**
     * Find zero or one Store that matches the filter.
     * @param {StoreFindUniqueArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoreFindUniqueArgs>(args: SelectSubset<T, StoreFindUniqueArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Store that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StoreFindUniqueOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoreFindUniqueOrThrowArgs>(args: SelectSubset<T, StoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Store that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindFirstArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoreFindFirstArgs>(args?: SelectSubset<T, StoreFindFirstArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Store that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindFirstOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoreFindFirstOrThrowArgs>(args?: SelectSubset<T, StoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Stores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stores
     * const stores = await prisma.store.findMany()
     * 
     * // Get first 10 Stores
     * const stores = await prisma.store.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storeWithIdOnly = await prisma.store.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StoreFindManyArgs>(args?: SelectSubset<T, StoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Store.
     * @param {StoreCreateArgs} args - Arguments to create a Store.
     * @example
     * // Create one Store
     * const Store = await prisma.store.create({
     *   data: {
     *     // ... data to create a Store
     *   }
     * })
     * 
     */
    create<T extends StoreCreateArgs>(args: SelectSubset<T, StoreCreateArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Stores.
     * @param {StoreCreateManyArgs} args - Arguments to create many Stores.
     * @example
     * // Create many Stores
     * const store = await prisma.store.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StoreCreateManyArgs>(args?: SelectSubset<T, StoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stores and returns the data saved in the database.
     * @param {StoreCreateManyAndReturnArgs} args - Arguments to create many Stores.
     * @example
     * // Create many Stores
     * const store = await prisma.store.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stores and only return the `id`
     * const storeWithIdOnly = await prisma.store.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StoreCreateManyAndReturnArgs>(args?: SelectSubset<T, StoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Store.
     * @param {StoreDeleteArgs} args - Arguments to delete one Store.
     * @example
     * // Delete one Store
     * const Store = await prisma.store.delete({
     *   where: {
     *     // ... filter to delete one Store
     *   }
     * })
     * 
     */
    delete<T extends StoreDeleteArgs>(args: SelectSubset<T, StoreDeleteArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Store.
     * @param {StoreUpdateArgs} args - Arguments to update one Store.
     * @example
     * // Update one Store
     * const store = await prisma.store.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StoreUpdateArgs>(args: SelectSubset<T, StoreUpdateArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Stores.
     * @param {StoreDeleteManyArgs} args - Arguments to filter Stores to delete.
     * @example
     * // Delete a few Stores
     * const { count } = await prisma.store.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StoreDeleteManyArgs>(args?: SelectSubset<T, StoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stores
     * const store = await prisma.store.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StoreUpdateManyArgs>(args: SelectSubset<T, StoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Store.
     * @param {StoreUpsertArgs} args - Arguments to update or create a Store.
     * @example
     * // Update or create a Store
     * const store = await prisma.store.upsert({
     *   create: {
     *     // ... data to create a Store
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Store we want to update
     *   }
     * })
     */
    upsert<T extends StoreUpsertArgs>(args: SelectSubset<T, StoreUpsertArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreCountArgs} args - Arguments to filter Stores to count.
     * @example
     * // Count the number of Stores
     * const count = await prisma.store.count({
     *   where: {
     *     // ... the filter for the Stores we want to count
     *   }
     * })
    **/
    count<T extends StoreCountArgs>(
      args?: Subset<T, StoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StoreAggregateArgs>(args: Subset<T, StoreAggregateArgs>): Prisma.PrismaPromise<GetStoreAggregateType<T>>

    /**
     * Group by Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoreGroupByArgs['orderBy'] }
        : { orderBy?: StoreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Store model
   */
  readonly fields: StoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Store.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recommendations<T extends Store$recommendationsArgs<ExtArgs> = {}>(args?: Subset<T, Store$recommendationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findMany"> | Null>
    deliveries<T extends Store$deliveriesArgs<ExtArgs> = {}>(args?: Subset<T, Store$deliveriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findMany"> | Null>
    Sale<T extends Store$SaleArgs<ExtArgs> = {}>(args?: Subset<T, Store$SaleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany"> | Null>
    Metrics<T extends Store$MetricsArgs<ExtArgs> = {}>(args?: Subset<T, Store$MetricsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricsPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Store model
   */ 
  interface StoreFieldRefs {
    readonly id: FieldRef<"Store", 'Int'>
    readonly label: FieldRef<"Store", 'String'>
    readonly number: FieldRef<"Store", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Store findUnique
   */
  export type StoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store findUniqueOrThrow
   */
  export type StoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store findFirst
   */
  export type StoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store findFirstOrThrow
   */
  export type StoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store findMany
   */
  export type StoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Stores to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store create
   */
  export type StoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The data needed to create a Store.
     */
    data: XOR<StoreCreateInput, StoreUncheckedCreateInput>
  }

  /**
   * Store createMany
   */
  export type StoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stores.
     */
    data: StoreCreateManyInput | StoreCreateManyInput[]
  }

  /**
   * Store createManyAndReturn
   */
  export type StoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Stores.
     */
    data: StoreCreateManyInput | StoreCreateManyInput[]
  }

  /**
   * Store update
   */
  export type StoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The data needed to update a Store.
     */
    data: XOR<StoreUpdateInput, StoreUncheckedUpdateInput>
    /**
     * Choose, which Store to update.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store updateMany
   */
  export type StoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stores.
     */
    data: XOR<StoreUpdateManyMutationInput, StoreUncheckedUpdateManyInput>
    /**
     * Filter which Stores to update
     */
    where?: StoreWhereInput
  }

  /**
   * Store upsert
   */
  export type StoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The filter to search for the Store to update in case it exists.
     */
    where: StoreWhereUniqueInput
    /**
     * In case the Store found by the `where` argument doesn't exist, create a new Store with this data.
     */
    create: XOR<StoreCreateInput, StoreUncheckedCreateInput>
    /**
     * In case the Store was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoreUpdateInput, StoreUncheckedUpdateInput>
  }

  /**
   * Store delete
   */
  export type StoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter which Store to delete.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store deleteMany
   */
  export type StoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stores to delete
     */
    where?: StoreWhereInput
  }

  /**
   * Store.recommendations
   */
  export type Store$recommendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    where?: RecommendationWhereInput
    orderBy?: RecommendationOrderByWithRelationInput | RecommendationOrderByWithRelationInput[]
    cursor?: RecommendationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecommendationScalarFieldEnum | RecommendationScalarFieldEnum[]
  }

  /**
   * Store.deliveries
   */
  export type Store$deliveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    where?: DeliveryWhereInput
    orderBy?: DeliveryOrderByWithRelationInput | DeliveryOrderByWithRelationInput[]
    cursor?: DeliveryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeliveryScalarFieldEnum | DeliveryScalarFieldEnum[]
  }

  /**
   * Store.Sale
   */
  export type Store$SaleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    where?: SaleWhereInput
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    cursor?: SaleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Store.Metrics
   */
  export type Store$MetricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metrics
     */
    select?: MetricsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricsInclude<ExtArgs> | null
    where?: MetricsWhereInput
    orderBy?: MetricsOrderByWithRelationInput | MetricsOrderByWithRelationInput[]
    cursor?: MetricsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MetricsScalarFieldEnum | MetricsScalarFieldEnum[]
  }

  /**
   * Store without action
   */
  export type StoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    number: number | null
    price: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    number: number | null
    price: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    name: string | null
    number: number | null
    price: number | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    name: string | null
    number: number | null
    price: number | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    number: number
    price: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    number?: true
    price?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    number?: true
    price?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    number?: true
    price?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    number?: true
    price?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    number?: true
    price?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    name: string
    number: number
    price: number
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    number?: boolean
    price?: boolean
    recommendations?: boolean | Product$recommendationsArgs<ExtArgs>
    deliveries?: boolean | Product$deliveriesArgs<ExtArgs>
    Sale?: boolean | Product$SaleArgs<ExtArgs>
    Metrics?: boolean | Product$MetricsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    number?: boolean
    price?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    number?: boolean
    price?: boolean
  }

  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recommendations?: boolean | Product$recommendationsArgs<ExtArgs>
    deliveries?: boolean | Product$deliveriesArgs<ExtArgs>
    Sale?: boolean | Product$SaleArgs<ExtArgs>
    Metrics?: boolean | Product$MetricsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      recommendations: Prisma.$RecommendationPayload<ExtArgs>[]
      deliveries: Prisma.$DeliveryPayload<ExtArgs>[]
      Sale: Prisma.$SalePayload<ExtArgs>[]
      Metrics: Prisma.$MetricsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      number: number
      price: number
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recommendations<T extends Product$recommendationsArgs<ExtArgs> = {}>(args?: Subset<T, Product$recommendationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findMany"> | Null>
    deliveries<T extends Product$deliveriesArgs<ExtArgs> = {}>(args?: Subset<T, Product$deliveriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findMany"> | Null>
    Sale<T extends Product$SaleArgs<ExtArgs> = {}>(args?: Subset<T, Product$SaleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany"> | Null>
    Metrics<T extends Product$MetricsArgs<ExtArgs> = {}>(args?: Subset<T, Product$MetricsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricsPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */ 
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly name: FieldRef<"Product", 'String'>
    readonly number: FieldRef<"Product", 'Int'>
    readonly price: FieldRef<"Product", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
  }

  /**
   * Product.recommendations
   */
  export type Product$recommendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    where?: RecommendationWhereInput
    orderBy?: RecommendationOrderByWithRelationInput | RecommendationOrderByWithRelationInput[]
    cursor?: RecommendationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecommendationScalarFieldEnum | RecommendationScalarFieldEnum[]
  }

  /**
   * Product.deliveries
   */
  export type Product$deliveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    where?: DeliveryWhereInput
    orderBy?: DeliveryOrderByWithRelationInput | DeliveryOrderByWithRelationInput[]
    cursor?: DeliveryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeliveryScalarFieldEnum | DeliveryScalarFieldEnum[]
  }

  /**
   * Product.Sale
   */
  export type Product$SaleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    where?: SaleWhereInput
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    cursor?: SaleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Product.Metrics
   */
  export type Product$MetricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metrics
     */
    select?: MetricsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricsInclude<ExtArgs> | null
    where?: MetricsWhereInput
    orderBy?: MetricsOrderByWithRelationInput | MetricsOrderByWithRelationInput[]
    cursor?: MetricsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MetricsScalarFieldEnum | MetricsScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Recommendation
   */

  export type AggregateRecommendation = {
    _count: RecommendationCountAggregateOutputType | null
    _avg: RecommendationAvgAggregateOutputType | null
    _sum: RecommendationSumAggregateOutputType | null
    _min: RecommendationMinAggregateOutputType | null
    _max: RecommendationMaxAggregateOutputType | null
  }

  export type RecommendationAvgAggregateOutputType = {
    storeId: number | null
    productId: number | null
    quantity: number | null
    value: number | null
  }

  export type RecommendationSumAggregateOutputType = {
    storeId: number | null
    productId: number | null
    quantity: number | null
    value: number | null
  }

  export type RecommendationMinAggregateOutputType = {
    targetDate: Date | null
    storeId: number | null
    productId: number | null
    quantity: number | null
    value: number | null
  }

  export type RecommendationMaxAggregateOutputType = {
    targetDate: Date | null
    storeId: number | null
    productId: number | null
    quantity: number | null
    value: number | null
  }

  export type RecommendationCountAggregateOutputType = {
    targetDate: number
    storeId: number
    productId: number
    quantity: number
    value: number
    _all: number
  }


  export type RecommendationAvgAggregateInputType = {
    storeId?: true
    productId?: true
    quantity?: true
    value?: true
  }

  export type RecommendationSumAggregateInputType = {
    storeId?: true
    productId?: true
    quantity?: true
    value?: true
  }

  export type RecommendationMinAggregateInputType = {
    targetDate?: true
    storeId?: true
    productId?: true
    quantity?: true
    value?: true
  }

  export type RecommendationMaxAggregateInputType = {
    targetDate?: true
    storeId?: true
    productId?: true
    quantity?: true
    value?: true
  }

  export type RecommendationCountAggregateInputType = {
    targetDate?: true
    storeId?: true
    productId?: true
    quantity?: true
    value?: true
    _all?: true
  }

  export type RecommendationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recommendation to aggregate.
     */
    where?: RecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recommendations to fetch.
     */
    orderBy?: RecommendationOrderByWithRelationInput | RecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recommendations
    **/
    _count?: true | RecommendationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecommendationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecommendationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecommendationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecommendationMaxAggregateInputType
  }

  export type GetRecommendationAggregateType<T extends RecommendationAggregateArgs> = {
        [P in keyof T & keyof AggregateRecommendation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecommendation[P]>
      : GetScalarType<T[P], AggregateRecommendation[P]>
  }




  export type RecommendationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecommendationWhereInput
    orderBy?: RecommendationOrderByWithAggregationInput | RecommendationOrderByWithAggregationInput[]
    by: RecommendationScalarFieldEnum[] | RecommendationScalarFieldEnum
    having?: RecommendationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecommendationCountAggregateInputType | true
    _avg?: RecommendationAvgAggregateInputType
    _sum?: RecommendationSumAggregateInputType
    _min?: RecommendationMinAggregateInputType
    _max?: RecommendationMaxAggregateInputType
  }

  export type RecommendationGroupByOutputType = {
    targetDate: Date
    storeId: number
    productId: number
    quantity: number
    value: number
    _count: RecommendationCountAggregateOutputType | null
    _avg: RecommendationAvgAggregateOutputType | null
    _sum: RecommendationSumAggregateOutputType | null
    _min: RecommendationMinAggregateOutputType | null
    _max: RecommendationMaxAggregateOutputType | null
  }

  type GetRecommendationGroupByPayload<T extends RecommendationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecommendationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecommendationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecommendationGroupByOutputType[P]>
            : GetScalarType<T[P], RecommendationGroupByOutputType[P]>
        }
      >
    >


  export type RecommendationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    targetDate?: boolean
    storeId?: boolean
    productId?: boolean
    quantity?: boolean
    value?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recommendation"]>

  export type RecommendationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    targetDate?: boolean
    storeId?: boolean
    productId?: boolean
    quantity?: boolean
    value?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recommendation"]>

  export type RecommendationSelectScalar = {
    targetDate?: boolean
    storeId?: boolean
    productId?: boolean
    quantity?: boolean
    value?: boolean
  }

  export type RecommendationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type RecommendationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $RecommendationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Recommendation"
    objects: {
      store: Prisma.$StorePayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      targetDate: Date
      storeId: number
      productId: number
      quantity: number
      value: number
    }, ExtArgs["result"]["recommendation"]>
    composites: {}
  }

  type RecommendationGetPayload<S extends boolean | null | undefined | RecommendationDefaultArgs> = $Result.GetResult<Prisma.$RecommendationPayload, S>

  type RecommendationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RecommendationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RecommendationCountAggregateInputType | true
    }

  export interface RecommendationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recommendation'], meta: { name: 'Recommendation' } }
    /**
     * Find zero or one Recommendation that matches the filter.
     * @param {RecommendationFindUniqueArgs} args - Arguments to find a Recommendation
     * @example
     * // Get one Recommendation
     * const recommendation = await prisma.recommendation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecommendationFindUniqueArgs>(args: SelectSubset<T, RecommendationFindUniqueArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Recommendation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RecommendationFindUniqueOrThrowArgs} args - Arguments to find a Recommendation
     * @example
     * // Get one Recommendation
     * const recommendation = await prisma.recommendation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecommendationFindUniqueOrThrowArgs>(args: SelectSubset<T, RecommendationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Recommendation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationFindFirstArgs} args - Arguments to find a Recommendation
     * @example
     * // Get one Recommendation
     * const recommendation = await prisma.recommendation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecommendationFindFirstArgs>(args?: SelectSubset<T, RecommendationFindFirstArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Recommendation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationFindFirstOrThrowArgs} args - Arguments to find a Recommendation
     * @example
     * // Get one Recommendation
     * const recommendation = await prisma.recommendation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecommendationFindFirstOrThrowArgs>(args?: SelectSubset<T, RecommendationFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Recommendations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recommendations
     * const recommendations = await prisma.recommendation.findMany()
     * 
     * // Get first 10 Recommendations
     * const recommendations = await prisma.recommendation.findMany({ take: 10 })
     * 
     * // Only select the `targetDate`
     * const recommendationWithTargetDateOnly = await prisma.recommendation.findMany({ select: { targetDate: true } })
     * 
     */
    findMany<T extends RecommendationFindManyArgs>(args?: SelectSubset<T, RecommendationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Recommendation.
     * @param {RecommendationCreateArgs} args - Arguments to create a Recommendation.
     * @example
     * // Create one Recommendation
     * const Recommendation = await prisma.recommendation.create({
     *   data: {
     *     // ... data to create a Recommendation
     *   }
     * })
     * 
     */
    create<T extends RecommendationCreateArgs>(args: SelectSubset<T, RecommendationCreateArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Recommendations.
     * @param {RecommendationCreateManyArgs} args - Arguments to create many Recommendations.
     * @example
     * // Create many Recommendations
     * const recommendation = await prisma.recommendation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecommendationCreateManyArgs>(args?: SelectSubset<T, RecommendationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recommendations and returns the data saved in the database.
     * @param {RecommendationCreateManyAndReturnArgs} args - Arguments to create many Recommendations.
     * @example
     * // Create many Recommendations
     * const recommendation = await prisma.recommendation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recommendations and only return the `targetDate`
     * const recommendationWithTargetDateOnly = await prisma.recommendation.createManyAndReturn({ 
     *   select: { targetDate: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecommendationCreateManyAndReturnArgs>(args?: SelectSubset<T, RecommendationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Recommendation.
     * @param {RecommendationDeleteArgs} args - Arguments to delete one Recommendation.
     * @example
     * // Delete one Recommendation
     * const Recommendation = await prisma.recommendation.delete({
     *   where: {
     *     // ... filter to delete one Recommendation
     *   }
     * })
     * 
     */
    delete<T extends RecommendationDeleteArgs>(args: SelectSubset<T, RecommendationDeleteArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Recommendation.
     * @param {RecommendationUpdateArgs} args - Arguments to update one Recommendation.
     * @example
     * // Update one Recommendation
     * const recommendation = await prisma.recommendation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecommendationUpdateArgs>(args: SelectSubset<T, RecommendationUpdateArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Recommendations.
     * @param {RecommendationDeleteManyArgs} args - Arguments to filter Recommendations to delete.
     * @example
     * // Delete a few Recommendations
     * const { count } = await prisma.recommendation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecommendationDeleteManyArgs>(args?: SelectSubset<T, RecommendationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recommendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recommendations
     * const recommendation = await prisma.recommendation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecommendationUpdateManyArgs>(args: SelectSubset<T, RecommendationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Recommendation.
     * @param {RecommendationUpsertArgs} args - Arguments to update or create a Recommendation.
     * @example
     * // Update or create a Recommendation
     * const recommendation = await prisma.recommendation.upsert({
     *   create: {
     *     // ... data to create a Recommendation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recommendation we want to update
     *   }
     * })
     */
    upsert<T extends RecommendationUpsertArgs>(args: SelectSubset<T, RecommendationUpsertArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Recommendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationCountArgs} args - Arguments to filter Recommendations to count.
     * @example
     * // Count the number of Recommendations
     * const count = await prisma.recommendation.count({
     *   where: {
     *     // ... the filter for the Recommendations we want to count
     *   }
     * })
    **/
    count<T extends RecommendationCountArgs>(
      args?: Subset<T, RecommendationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecommendationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recommendation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecommendationAggregateArgs>(args: Subset<T, RecommendationAggregateArgs>): Prisma.PrismaPromise<GetRecommendationAggregateType<T>>

    /**
     * Group by Recommendation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecommendationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecommendationGroupByArgs['orderBy'] }
        : { orderBy?: RecommendationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecommendationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecommendationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Recommendation model
   */
  readonly fields: RecommendationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recommendation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecommendationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    store<T extends StoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoreDefaultArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Recommendation model
   */ 
  interface RecommendationFieldRefs {
    readonly targetDate: FieldRef<"Recommendation", 'DateTime'>
    readonly storeId: FieldRef<"Recommendation", 'Int'>
    readonly productId: FieldRef<"Recommendation", 'Int'>
    readonly quantity: FieldRef<"Recommendation", 'Int'>
    readonly value: FieldRef<"Recommendation", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Recommendation findUnique
   */
  export type RecommendationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * Filter, which Recommendation to fetch.
     */
    where: RecommendationWhereUniqueInput
  }

  /**
   * Recommendation findUniqueOrThrow
   */
  export type RecommendationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * Filter, which Recommendation to fetch.
     */
    where: RecommendationWhereUniqueInput
  }

  /**
   * Recommendation findFirst
   */
  export type RecommendationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * Filter, which Recommendation to fetch.
     */
    where?: RecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recommendations to fetch.
     */
    orderBy?: RecommendationOrderByWithRelationInput | RecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recommendations.
     */
    cursor?: RecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recommendations.
     */
    distinct?: RecommendationScalarFieldEnum | RecommendationScalarFieldEnum[]
  }

  /**
   * Recommendation findFirstOrThrow
   */
  export type RecommendationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * Filter, which Recommendation to fetch.
     */
    where?: RecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recommendations to fetch.
     */
    orderBy?: RecommendationOrderByWithRelationInput | RecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recommendations.
     */
    cursor?: RecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recommendations.
     */
    distinct?: RecommendationScalarFieldEnum | RecommendationScalarFieldEnum[]
  }

  /**
   * Recommendation findMany
   */
  export type RecommendationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * Filter, which Recommendations to fetch.
     */
    where?: RecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recommendations to fetch.
     */
    orderBy?: RecommendationOrderByWithRelationInput | RecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recommendations.
     */
    cursor?: RecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recommendations.
     */
    skip?: number
    distinct?: RecommendationScalarFieldEnum | RecommendationScalarFieldEnum[]
  }

  /**
   * Recommendation create
   */
  export type RecommendationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * The data needed to create a Recommendation.
     */
    data: XOR<RecommendationCreateInput, RecommendationUncheckedCreateInput>
  }

  /**
   * Recommendation createMany
   */
  export type RecommendationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recommendations.
     */
    data: RecommendationCreateManyInput | RecommendationCreateManyInput[]
  }

  /**
   * Recommendation createManyAndReturn
   */
  export type RecommendationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Recommendations.
     */
    data: RecommendationCreateManyInput | RecommendationCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recommendation update
   */
  export type RecommendationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * The data needed to update a Recommendation.
     */
    data: XOR<RecommendationUpdateInput, RecommendationUncheckedUpdateInput>
    /**
     * Choose, which Recommendation to update.
     */
    where: RecommendationWhereUniqueInput
  }

  /**
   * Recommendation updateMany
   */
  export type RecommendationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recommendations.
     */
    data: XOR<RecommendationUpdateManyMutationInput, RecommendationUncheckedUpdateManyInput>
    /**
     * Filter which Recommendations to update
     */
    where?: RecommendationWhereInput
  }

  /**
   * Recommendation upsert
   */
  export type RecommendationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * The filter to search for the Recommendation to update in case it exists.
     */
    where: RecommendationWhereUniqueInput
    /**
     * In case the Recommendation found by the `where` argument doesn't exist, create a new Recommendation with this data.
     */
    create: XOR<RecommendationCreateInput, RecommendationUncheckedCreateInput>
    /**
     * In case the Recommendation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecommendationUpdateInput, RecommendationUncheckedUpdateInput>
  }

  /**
   * Recommendation delete
   */
  export type RecommendationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * Filter which Recommendation to delete.
     */
    where: RecommendationWhereUniqueInput
  }

  /**
   * Recommendation deleteMany
   */
  export type RecommendationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recommendations to delete
     */
    where?: RecommendationWhereInput
  }

  /**
   * Recommendation without action
   */
  export type RecommendationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
  }


  /**
   * Model Delivery
   */

  export type AggregateDelivery = {
    _count: DeliveryCountAggregateOutputType | null
    _avg: DeliveryAvgAggregateOutputType | null
    _sum: DeliverySumAggregateOutputType | null
    _min: DeliveryMinAggregateOutputType | null
    _max: DeliveryMaxAggregateOutputType | null
  }

  export type DeliveryAvgAggregateOutputType = {
    storeId: number | null
    productId: number | null
    quantity: number | null
    value: number | null
  }

  export type DeliverySumAggregateOutputType = {
    storeId: number | null
    productId: number | null
    quantity: number | null
    value: number | null
  }

  export type DeliveryMinAggregateOutputType = {
    targetDate: Date | null
    storeId: number | null
    productId: number | null
    quantity: number | null
    value: number | null
  }

  export type DeliveryMaxAggregateOutputType = {
    targetDate: Date | null
    storeId: number | null
    productId: number | null
    quantity: number | null
    value: number | null
  }

  export type DeliveryCountAggregateOutputType = {
    targetDate: number
    storeId: number
    productId: number
    quantity: number
    value: number
    _all: number
  }


  export type DeliveryAvgAggregateInputType = {
    storeId?: true
    productId?: true
    quantity?: true
    value?: true
  }

  export type DeliverySumAggregateInputType = {
    storeId?: true
    productId?: true
    quantity?: true
    value?: true
  }

  export type DeliveryMinAggregateInputType = {
    targetDate?: true
    storeId?: true
    productId?: true
    quantity?: true
    value?: true
  }

  export type DeliveryMaxAggregateInputType = {
    targetDate?: true
    storeId?: true
    productId?: true
    quantity?: true
    value?: true
  }

  export type DeliveryCountAggregateInputType = {
    targetDate?: true
    storeId?: true
    productId?: true
    quantity?: true
    value?: true
    _all?: true
  }

  export type DeliveryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Delivery to aggregate.
     */
    where?: DeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliveries to fetch.
     */
    orderBy?: DeliveryOrderByWithRelationInput | DeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Deliveries
    **/
    _count?: true | DeliveryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeliveryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeliverySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeliveryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeliveryMaxAggregateInputType
  }

  export type GetDeliveryAggregateType<T extends DeliveryAggregateArgs> = {
        [P in keyof T & keyof AggregateDelivery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDelivery[P]>
      : GetScalarType<T[P], AggregateDelivery[P]>
  }




  export type DeliveryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveryWhereInput
    orderBy?: DeliveryOrderByWithAggregationInput | DeliveryOrderByWithAggregationInput[]
    by: DeliveryScalarFieldEnum[] | DeliveryScalarFieldEnum
    having?: DeliveryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeliveryCountAggregateInputType | true
    _avg?: DeliveryAvgAggregateInputType
    _sum?: DeliverySumAggregateInputType
    _min?: DeliveryMinAggregateInputType
    _max?: DeliveryMaxAggregateInputType
  }

  export type DeliveryGroupByOutputType = {
    targetDate: Date
    storeId: number
    productId: number
    quantity: number
    value: number
    _count: DeliveryCountAggregateOutputType | null
    _avg: DeliveryAvgAggregateOutputType | null
    _sum: DeliverySumAggregateOutputType | null
    _min: DeliveryMinAggregateOutputType | null
    _max: DeliveryMaxAggregateOutputType | null
  }

  type GetDeliveryGroupByPayload<T extends DeliveryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeliveryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeliveryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeliveryGroupByOutputType[P]>
            : GetScalarType<T[P], DeliveryGroupByOutputType[P]>
        }
      >
    >


  export type DeliverySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    targetDate?: boolean
    storeId?: boolean
    productId?: boolean
    quantity?: boolean
    value?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["delivery"]>

  export type DeliverySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    targetDate?: boolean
    storeId?: boolean
    productId?: boolean
    quantity?: boolean
    value?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["delivery"]>

  export type DeliverySelectScalar = {
    targetDate?: boolean
    storeId?: boolean
    productId?: boolean
    quantity?: boolean
    value?: boolean
  }

  export type DeliveryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type DeliveryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $DeliveryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Delivery"
    objects: {
      store: Prisma.$StorePayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      targetDate: Date
      storeId: number
      productId: number
      quantity: number
      value: number
    }, ExtArgs["result"]["delivery"]>
    composites: {}
  }

  type DeliveryGetPayload<S extends boolean | null | undefined | DeliveryDefaultArgs> = $Result.GetResult<Prisma.$DeliveryPayload, S>

  type DeliveryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DeliveryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DeliveryCountAggregateInputType | true
    }

  export interface DeliveryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Delivery'], meta: { name: 'Delivery' } }
    /**
     * Find zero or one Delivery that matches the filter.
     * @param {DeliveryFindUniqueArgs} args - Arguments to find a Delivery
     * @example
     * // Get one Delivery
     * const delivery = await prisma.delivery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeliveryFindUniqueArgs>(args: SelectSubset<T, DeliveryFindUniqueArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Delivery that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DeliveryFindUniqueOrThrowArgs} args - Arguments to find a Delivery
     * @example
     * // Get one Delivery
     * const delivery = await prisma.delivery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeliveryFindUniqueOrThrowArgs>(args: SelectSubset<T, DeliveryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Delivery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryFindFirstArgs} args - Arguments to find a Delivery
     * @example
     * // Get one Delivery
     * const delivery = await prisma.delivery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeliveryFindFirstArgs>(args?: SelectSubset<T, DeliveryFindFirstArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Delivery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryFindFirstOrThrowArgs} args - Arguments to find a Delivery
     * @example
     * // Get one Delivery
     * const delivery = await prisma.delivery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeliveryFindFirstOrThrowArgs>(args?: SelectSubset<T, DeliveryFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Deliveries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Deliveries
     * const deliveries = await prisma.delivery.findMany()
     * 
     * // Get first 10 Deliveries
     * const deliveries = await prisma.delivery.findMany({ take: 10 })
     * 
     * // Only select the `targetDate`
     * const deliveryWithTargetDateOnly = await prisma.delivery.findMany({ select: { targetDate: true } })
     * 
     */
    findMany<T extends DeliveryFindManyArgs>(args?: SelectSubset<T, DeliveryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Delivery.
     * @param {DeliveryCreateArgs} args - Arguments to create a Delivery.
     * @example
     * // Create one Delivery
     * const Delivery = await prisma.delivery.create({
     *   data: {
     *     // ... data to create a Delivery
     *   }
     * })
     * 
     */
    create<T extends DeliveryCreateArgs>(args: SelectSubset<T, DeliveryCreateArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Deliveries.
     * @param {DeliveryCreateManyArgs} args - Arguments to create many Deliveries.
     * @example
     * // Create many Deliveries
     * const delivery = await prisma.delivery.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeliveryCreateManyArgs>(args?: SelectSubset<T, DeliveryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Deliveries and returns the data saved in the database.
     * @param {DeliveryCreateManyAndReturnArgs} args - Arguments to create many Deliveries.
     * @example
     * // Create many Deliveries
     * const delivery = await prisma.delivery.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Deliveries and only return the `targetDate`
     * const deliveryWithTargetDateOnly = await prisma.delivery.createManyAndReturn({ 
     *   select: { targetDate: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeliveryCreateManyAndReturnArgs>(args?: SelectSubset<T, DeliveryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Delivery.
     * @param {DeliveryDeleteArgs} args - Arguments to delete one Delivery.
     * @example
     * // Delete one Delivery
     * const Delivery = await prisma.delivery.delete({
     *   where: {
     *     // ... filter to delete one Delivery
     *   }
     * })
     * 
     */
    delete<T extends DeliveryDeleteArgs>(args: SelectSubset<T, DeliveryDeleteArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Delivery.
     * @param {DeliveryUpdateArgs} args - Arguments to update one Delivery.
     * @example
     * // Update one Delivery
     * const delivery = await prisma.delivery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeliveryUpdateArgs>(args: SelectSubset<T, DeliveryUpdateArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Deliveries.
     * @param {DeliveryDeleteManyArgs} args - Arguments to filter Deliveries to delete.
     * @example
     * // Delete a few Deliveries
     * const { count } = await prisma.delivery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeliveryDeleteManyArgs>(args?: SelectSubset<T, DeliveryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Deliveries
     * const delivery = await prisma.delivery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeliveryUpdateManyArgs>(args: SelectSubset<T, DeliveryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Delivery.
     * @param {DeliveryUpsertArgs} args - Arguments to update or create a Delivery.
     * @example
     * // Update or create a Delivery
     * const delivery = await prisma.delivery.upsert({
     *   create: {
     *     // ... data to create a Delivery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Delivery we want to update
     *   }
     * })
     */
    upsert<T extends DeliveryUpsertArgs>(args: SelectSubset<T, DeliveryUpsertArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Deliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryCountArgs} args - Arguments to filter Deliveries to count.
     * @example
     * // Count the number of Deliveries
     * const count = await prisma.delivery.count({
     *   where: {
     *     // ... the filter for the Deliveries we want to count
     *   }
     * })
    **/
    count<T extends DeliveryCountArgs>(
      args?: Subset<T, DeliveryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeliveryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Delivery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeliveryAggregateArgs>(args: Subset<T, DeliveryAggregateArgs>): Prisma.PrismaPromise<GetDeliveryAggregateType<T>>

    /**
     * Group by Delivery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeliveryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeliveryGroupByArgs['orderBy'] }
        : { orderBy?: DeliveryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeliveryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeliveryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Delivery model
   */
  readonly fields: DeliveryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Delivery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeliveryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    store<T extends StoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoreDefaultArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Delivery model
   */ 
  interface DeliveryFieldRefs {
    readonly targetDate: FieldRef<"Delivery", 'DateTime'>
    readonly storeId: FieldRef<"Delivery", 'Int'>
    readonly productId: FieldRef<"Delivery", 'Int'>
    readonly quantity: FieldRef<"Delivery", 'Int'>
    readonly value: FieldRef<"Delivery", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Delivery findUnique
   */
  export type DeliveryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * Filter, which Delivery to fetch.
     */
    where: DeliveryWhereUniqueInput
  }

  /**
   * Delivery findUniqueOrThrow
   */
  export type DeliveryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * Filter, which Delivery to fetch.
     */
    where: DeliveryWhereUniqueInput
  }

  /**
   * Delivery findFirst
   */
  export type DeliveryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * Filter, which Delivery to fetch.
     */
    where?: DeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliveries to fetch.
     */
    orderBy?: DeliveryOrderByWithRelationInput | DeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deliveries.
     */
    cursor?: DeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deliveries.
     */
    distinct?: DeliveryScalarFieldEnum | DeliveryScalarFieldEnum[]
  }

  /**
   * Delivery findFirstOrThrow
   */
  export type DeliveryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * Filter, which Delivery to fetch.
     */
    where?: DeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliveries to fetch.
     */
    orderBy?: DeliveryOrderByWithRelationInput | DeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deliveries.
     */
    cursor?: DeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deliveries.
     */
    distinct?: DeliveryScalarFieldEnum | DeliveryScalarFieldEnum[]
  }

  /**
   * Delivery findMany
   */
  export type DeliveryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * Filter, which Deliveries to fetch.
     */
    where?: DeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliveries to fetch.
     */
    orderBy?: DeliveryOrderByWithRelationInput | DeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Deliveries.
     */
    cursor?: DeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliveries.
     */
    skip?: number
    distinct?: DeliveryScalarFieldEnum | DeliveryScalarFieldEnum[]
  }

  /**
   * Delivery create
   */
  export type DeliveryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * The data needed to create a Delivery.
     */
    data: XOR<DeliveryCreateInput, DeliveryUncheckedCreateInput>
  }

  /**
   * Delivery createMany
   */
  export type DeliveryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Deliveries.
     */
    data: DeliveryCreateManyInput | DeliveryCreateManyInput[]
  }

  /**
   * Delivery createManyAndReturn
   */
  export type DeliveryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Deliveries.
     */
    data: DeliveryCreateManyInput | DeliveryCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Delivery update
   */
  export type DeliveryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * The data needed to update a Delivery.
     */
    data: XOR<DeliveryUpdateInput, DeliveryUncheckedUpdateInput>
    /**
     * Choose, which Delivery to update.
     */
    where: DeliveryWhereUniqueInput
  }

  /**
   * Delivery updateMany
   */
  export type DeliveryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Deliveries.
     */
    data: XOR<DeliveryUpdateManyMutationInput, DeliveryUncheckedUpdateManyInput>
    /**
     * Filter which Deliveries to update
     */
    where?: DeliveryWhereInput
  }

  /**
   * Delivery upsert
   */
  export type DeliveryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * The filter to search for the Delivery to update in case it exists.
     */
    where: DeliveryWhereUniqueInput
    /**
     * In case the Delivery found by the `where` argument doesn't exist, create a new Delivery with this data.
     */
    create: XOR<DeliveryCreateInput, DeliveryUncheckedCreateInput>
    /**
     * In case the Delivery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeliveryUpdateInput, DeliveryUncheckedUpdateInput>
  }

  /**
   * Delivery delete
   */
  export type DeliveryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * Filter which Delivery to delete.
     */
    where: DeliveryWhereUniqueInput
  }

  /**
   * Delivery deleteMany
   */
  export type DeliveryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deliveries to delete
     */
    where?: DeliveryWhereInput
  }

  /**
   * Delivery without action
   */
  export type DeliveryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
  }


  /**
   * Model Sale
   */

  export type AggregateSale = {
    _count: SaleCountAggregateOutputType | null
    _avg: SaleAvgAggregateOutputType | null
    _sum: SaleSumAggregateOutputType | null
    _min: SaleMinAggregateOutputType | null
    _max: SaleMaxAggregateOutputType | null
  }

  export type SaleAvgAggregateOutputType = {
    storeId: number | null
    productId: number | null
    salesQuantity: number | null
    salesValue: number | null
    demandQuantity: number | null
    demandValue: number | null
  }

  export type SaleSumAggregateOutputType = {
    storeId: number | null
    productId: number | null
    salesQuantity: number | null
    salesValue: number | null
    demandQuantity: number | null
    demandValue: number | null
  }

  export type SaleMinAggregateOutputType = {
    targetDate: Date | null
    storeId: number | null
    productId: number | null
    salesQuantity: number | null
    salesValue: number | null
    demandQuantity: number | null
    demandValue: number | null
  }

  export type SaleMaxAggregateOutputType = {
    targetDate: Date | null
    storeId: number | null
    productId: number | null
    salesQuantity: number | null
    salesValue: number | null
    demandQuantity: number | null
    demandValue: number | null
  }

  export type SaleCountAggregateOutputType = {
    targetDate: number
    storeId: number
    productId: number
    salesQuantity: number
    salesValue: number
    demandQuantity: number
    demandValue: number
    _all: number
  }


  export type SaleAvgAggregateInputType = {
    storeId?: true
    productId?: true
    salesQuantity?: true
    salesValue?: true
    demandQuantity?: true
    demandValue?: true
  }

  export type SaleSumAggregateInputType = {
    storeId?: true
    productId?: true
    salesQuantity?: true
    salesValue?: true
    demandQuantity?: true
    demandValue?: true
  }

  export type SaleMinAggregateInputType = {
    targetDate?: true
    storeId?: true
    productId?: true
    salesQuantity?: true
    salesValue?: true
    demandQuantity?: true
    demandValue?: true
  }

  export type SaleMaxAggregateInputType = {
    targetDate?: true
    storeId?: true
    productId?: true
    salesQuantity?: true
    salesValue?: true
    demandQuantity?: true
    demandValue?: true
  }

  export type SaleCountAggregateInputType = {
    targetDate?: true
    storeId?: true
    productId?: true
    salesQuantity?: true
    salesValue?: true
    demandQuantity?: true
    demandValue?: true
    _all?: true
  }

  export type SaleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sale to aggregate.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sales
    **/
    _count?: true | SaleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SaleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SaleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SaleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SaleMaxAggregateInputType
  }

  export type GetSaleAggregateType<T extends SaleAggregateArgs> = {
        [P in keyof T & keyof AggregateSale]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSale[P]>
      : GetScalarType<T[P], AggregateSale[P]>
  }




  export type SaleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleWhereInput
    orderBy?: SaleOrderByWithAggregationInput | SaleOrderByWithAggregationInput[]
    by: SaleScalarFieldEnum[] | SaleScalarFieldEnum
    having?: SaleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SaleCountAggregateInputType | true
    _avg?: SaleAvgAggregateInputType
    _sum?: SaleSumAggregateInputType
    _min?: SaleMinAggregateInputType
    _max?: SaleMaxAggregateInputType
  }

  export type SaleGroupByOutputType = {
    targetDate: Date
    storeId: number
    productId: number
    salesQuantity: number
    salesValue: number
    demandQuantity: number
    demandValue: number
    _count: SaleCountAggregateOutputType | null
    _avg: SaleAvgAggregateOutputType | null
    _sum: SaleSumAggregateOutputType | null
    _min: SaleMinAggregateOutputType | null
    _max: SaleMaxAggregateOutputType | null
  }

  type GetSaleGroupByPayload<T extends SaleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SaleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SaleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SaleGroupByOutputType[P]>
            : GetScalarType<T[P], SaleGroupByOutputType[P]>
        }
      >
    >


  export type SaleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    targetDate?: boolean
    storeId?: boolean
    productId?: boolean
    salesQuantity?: boolean
    salesValue?: boolean
    demandQuantity?: boolean
    demandValue?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sale"]>

  export type SaleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    targetDate?: boolean
    storeId?: boolean
    productId?: boolean
    salesQuantity?: boolean
    salesValue?: boolean
    demandQuantity?: boolean
    demandValue?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sale"]>

  export type SaleSelectScalar = {
    targetDate?: boolean
    storeId?: boolean
    productId?: boolean
    salesQuantity?: boolean
    salesValue?: boolean
    demandQuantity?: boolean
    demandValue?: boolean
  }

  export type SaleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type SaleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $SalePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sale"
    objects: {
      store: Prisma.$StorePayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      targetDate: Date
      storeId: number
      productId: number
      salesQuantity: number
      salesValue: number
      demandQuantity: number
      demandValue: number
    }, ExtArgs["result"]["sale"]>
    composites: {}
  }

  type SaleGetPayload<S extends boolean | null | undefined | SaleDefaultArgs> = $Result.GetResult<Prisma.$SalePayload, S>

  type SaleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SaleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SaleCountAggregateInputType | true
    }

  export interface SaleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sale'], meta: { name: 'Sale' } }
    /**
     * Find zero or one Sale that matches the filter.
     * @param {SaleFindUniqueArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SaleFindUniqueArgs>(args: SelectSubset<T, SaleFindUniqueArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Sale that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SaleFindUniqueOrThrowArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SaleFindUniqueOrThrowArgs>(args: SelectSubset<T, SaleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Sale that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindFirstArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SaleFindFirstArgs>(args?: SelectSubset<T, SaleFindFirstArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Sale that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindFirstOrThrowArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SaleFindFirstOrThrowArgs>(args?: SelectSubset<T, SaleFindFirstOrThrowArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sales
     * const sales = await prisma.sale.findMany()
     * 
     * // Get first 10 Sales
     * const sales = await prisma.sale.findMany({ take: 10 })
     * 
     * // Only select the `targetDate`
     * const saleWithTargetDateOnly = await prisma.sale.findMany({ select: { targetDate: true } })
     * 
     */
    findMany<T extends SaleFindManyArgs>(args?: SelectSubset<T, SaleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Sale.
     * @param {SaleCreateArgs} args - Arguments to create a Sale.
     * @example
     * // Create one Sale
     * const Sale = await prisma.sale.create({
     *   data: {
     *     // ... data to create a Sale
     *   }
     * })
     * 
     */
    create<T extends SaleCreateArgs>(args: SelectSubset<T, SaleCreateArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Sales.
     * @param {SaleCreateManyArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sale = await prisma.sale.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SaleCreateManyArgs>(args?: SelectSubset<T, SaleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sales and returns the data saved in the database.
     * @param {SaleCreateManyAndReturnArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sale = await prisma.sale.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sales and only return the `targetDate`
     * const saleWithTargetDateOnly = await prisma.sale.createManyAndReturn({ 
     *   select: { targetDate: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SaleCreateManyAndReturnArgs>(args?: SelectSubset<T, SaleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Sale.
     * @param {SaleDeleteArgs} args - Arguments to delete one Sale.
     * @example
     * // Delete one Sale
     * const Sale = await prisma.sale.delete({
     *   where: {
     *     // ... filter to delete one Sale
     *   }
     * })
     * 
     */
    delete<T extends SaleDeleteArgs>(args: SelectSubset<T, SaleDeleteArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Sale.
     * @param {SaleUpdateArgs} args - Arguments to update one Sale.
     * @example
     * // Update one Sale
     * const sale = await prisma.sale.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SaleUpdateArgs>(args: SelectSubset<T, SaleUpdateArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Sales.
     * @param {SaleDeleteManyArgs} args - Arguments to filter Sales to delete.
     * @example
     * // Delete a few Sales
     * const { count } = await prisma.sale.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SaleDeleteManyArgs>(args?: SelectSubset<T, SaleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sales
     * const sale = await prisma.sale.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SaleUpdateManyArgs>(args: SelectSubset<T, SaleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sale.
     * @param {SaleUpsertArgs} args - Arguments to update or create a Sale.
     * @example
     * // Update or create a Sale
     * const sale = await prisma.sale.upsert({
     *   create: {
     *     // ... data to create a Sale
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sale we want to update
     *   }
     * })
     */
    upsert<T extends SaleUpsertArgs>(args: SelectSubset<T, SaleUpsertArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleCountArgs} args - Arguments to filter Sales to count.
     * @example
     * // Count the number of Sales
     * const count = await prisma.sale.count({
     *   where: {
     *     // ... the filter for the Sales we want to count
     *   }
     * })
    **/
    count<T extends SaleCountArgs>(
      args?: Subset<T, SaleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SaleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SaleAggregateArgs>(args: Subset<T, SaleAggregateArgs>): Prisma.PrismaPromise<GetSaleAggregateType<T>>

    /**
     * Group by Sale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SaleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SaleGroupByArgs['orderBy'] }
        : { orderBy?: SaleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SaleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sale model
   */
  readonly fields: SaleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sale.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SaleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    store<T extends StoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoreDefaultArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sale model
   */ 
  interface SaleFieldRefs {
    readonly targetDate: FieldRef<"Sale", 'DateTime'>
    readonly storeId: FieldRef<"Sale", 'Int'>
    readonly productId: FieldRef<"Sale", 'Int'>
    readonly salesQuantity: FieldRef<"Sale", 'Int'>
    readonly salesValue: FieldRef<"Sale", 'Float'>
    readonly demandQuantity: FieldRef<"Sale", 'Int'>
    readonly demandValue: FieldRef<"Sale", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Sale findUnique
   */
  export type SaleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale findUniqueOrThrow
   */
  export type SaleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale findFirst
   */
  export type SaleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sales.
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales.
     */
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Sale findFirstOrThrow
   */
  export type SaleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sales.
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales.
     */
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Sale findMany
   */
  export type SaleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sales.
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Sale create
   */
  export type SaleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * The data needed to create a Sale.
     */
    data: XOR<SaleCreateInput, SaleUncheckedCreateInput>
  }

  /**
   * Sale createMany
   */
  export type SaleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sales.
     */
    data: SaleCreateManyInput | SaleCreateManyInput[]
  }

  /**
   * Sale createManyAndReturn
   */
  export type SaleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Sales.
     */
    data: SaleCreateManyInput | SaleCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sale update
   */
  export type SaleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * The data needed to update a Sale.
     */
    data: XOR<SaleUpdateInput, SaleUncheckedUpdateInput>
    /**
     * Choose, which Sale to update.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale updateMany
   */
  export type SaleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sales.
     */
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyInput>
    /**
     * Filter which Sales to update
     */
    where?: SaleWhereInput
  }

  /**
   * Sale upsert
   */
  export type SaleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * The filter to search for the Sale to update in case it exists.
     */
    where: SaleWhereUniqueInput
    /**
     * In case the Sale found by the `where` argument doesn't exist, create a new Sale with this data.
     */
    create: XOR<SaleCreateInput, SaleUncheckedCreateInput>
    /**
     * In case the Sale was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SaleUpdateInput, SaleUncheckedUpdateInput>
  }

  /**
   * Sale delete
   */
  export type SaleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter which Sale to delete.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale deleteMany
   */
  export type SaleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sales to delete
     */
    where?: SaleWhereInput
  }

  /**
   * Sale without action
   */
  export type SaleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
  }


  /**
   * Model Metrics
   */

  export type AggregateMetrics = {
    _count: MetricsCountAggregateOutputType | null
    _avg: MetricsAvgAggregateOutputType | null
    _sum: MetricsSumAggregateOutputType | null
    _min: MetricsMinAggregateOutputType | null
    _max: MetricsMaxAggregateOutputType | null
  }

  export type MetricsAvgAggregateOutputType = {
    storeId: number | null
    productId: number | null
    deliveredQuantity: number | null
    deliveredValue: number | null
    recommendedQuantity: number | null
    recommendedValue: number | null
    salesQuantity: number | null
    salesValue: number | null
    demandQuantity: number | null
    demandValue: number | null
  }

  export type MetricsSumAggregateOutputType = {
    storeId: number | null
    productId: number | null
    deliveredQuantity: number | null
    deliveredValue: number | null
    recommendedQuantity: number | null
    recommendedValue: number | null
    salesQuantity: number | null
    salesValue: number | null
    demandQuantity: number | null
    demandValue: number | null
  }

  export type MetricsMinAggregateOutputType = {
    targetDate: Date | null
    storeId: number | null
    productId: number | null
    deliveredQuantity: number | null
    deliveredValue: number | null
    recommendedQuantity: number | null
    recommendedValue: number | null
    salesQuantity: number | null
    salesValue: number | null
    demandQuantity: number | null
    demandValue: number | null
  }

  export type MetricsMaxAggregateOutputType = {
    targetDate: Date | null
    storeId: number | null
    productId: number | null
    deliveredQuantity: number | null
    deliveredValue: number | null
    recommendedQuantity: number | null
    recommendedValue: number | null
    salesQuantity: number | null
    salesValue: number | null
    demandQuantity: number | null
    demandValue: number | null
  }

  export type MetricsCountAggregateOutputType = {
    targetDate: number
    storeId: number
    productId: number
    deliveredQuantity: number
    deliveredValue: number
    recommendedQuantity: number
    recommendedValue: number
    salesQuantity: number
    salesValue: number
    demandQuantity: number
    demandValue: number
    _all: number
  }


  export type MetricsAvgAggregateInputType = {
    storeId?: true
    productId?: true
    deliveredQuantity?: true
    deliveredValue?: true
    recommendedQuantity?: true
    recommendedValue?: true
    salesQuantity?: true
    salesValue?: true
    demandQuantity?: true
    demandValue?: true
  }

  export type MetricsSumAggregateInputType = {
    storeId?: true
    productId?: true
    deliveredQuantity?: true
    deliveredValue?: true
    recommendedQuantity?: true
    recommendedValue?: true
    salesQuantity?: true
    salesValue?: true
    demandQuantity?: true
    demandValue?: true
  }

  export type MetricsMinAggregateInputType = {
    targetDate?: true
    storeId?: true
    productId?: true
    deliveredQuantity?: true
    deliveredValue?: true
    recommendedQuantity?: true
    recommendedValue?: true
    salesQuantity?: true
    salesValue?: true
    demandQuantity?: true
    demandValue?: true
  }

  export type MetricsMaxAggregateInputType = {
    targetDate?: true
    storeId?: true
    productId?: true
    deliveredQuantity?: true
    deliveredValue?: true
    recommendedQuantity?: true
    recommendedValue?: true
    salesQuantity?: true
    salesValue?: true
    demandQuantity?: true
    demandValue?: true
  }

  export type MetricsCountAggregateInputType = {
    targetDate?: true
    storeId?: true
    productId?: true
    deliveredQuantity?: true
    deliveredValue?: true
    recommendedQuantity?: true
    recommendedValue?: true
    salesQuantity?: true
    salesValue?: true
    demandQuantity?: true
    demandValue?: true
    _all?: true
  }

  export type MetricsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Metrics to aggregate.
     */
    where?: MetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metrics to fetch.
     */
    orderBy?: MetricsOrderByWithRelationInput | MetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Metrics
    **/
    _count?: true | MetricsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MetricsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MetricsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MetricsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MetricsMaxAggregateInputType
  }

  export type GetMetricsAggregateType<T extends MetricsAggregateArgs> = {
        [P in keyof T & keyof AggregateMetrics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMetrics[P]>
      : GetScalarType<T[P], AggregateMetrics[P]>
  }




  export type MetricsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetricsWhereInput
    orderBy?: MetricsOrderByWithAggregationInput | MetricsOrderByWithAggregationInput[]
    by: MetricsScalarFieldEnum[] | MetricsScalarFieldEnum
    having?: MetricsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MetricsCountAggregateInputType | true
    _avg?: MetricsAvgAggregateInputType
    _sum?: MetricsSumAggregateInputType
    _min?: MetricsMinAggregateInputType
    _max?: MetricsMaxAggregateInputType
  }

  export type MetricsGroupByOutputType = {
    targetDate: Date
    storeId: number
    productId: number
    deliveredQuantity: number
    deliveredValue: number
    recommendedQuantity: number
    recommendedValue: number
    salesQuantity: number
    salesValue: number
    demandQuantity: number
    demandValue: number
    _count: MetricsCountAggregateOutputType | null
    _avg: MetricsAvgAggregateOutputType | null
    _sum: MetricsSumAggregateOutputType | null
    _min: MetricsMinAggregateOutputType | null
    _max: MetricsMaxAggregateOutputType | null
  }

  type GetMetricsGroupByPayload<T extends MetricsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MetricsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MetricsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MetricsGroupByOutputType[P]>
            : GetScalarType<T[P], MetricsGroupByOutputType[P]>
        }
      >
    >


  export type MetricsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    targetDate?: boolean
    storeId?: boolean
    productId?: boolean
    deliveredQuantity?: boolean
    deliveredValue?: boolean
    recommendedQuantity?: boolean
    recommendedValue?: boolean
    salesQuantity?: boolean
    salesValue?: boolean
    demandQuantity?: boolean
    demandValue?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["metrics"]>

  export type MetricsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    targetDate?: boolean
    storeId?: boolean
    productId?: boolean
    deliveredQuantity?: boolean
    deliveredValue?: boolean
    recommendedQuantity?: boolean
    recommendedValue?: boolean
    salesQuantity?: boolean
    salesValue?: boolean
    demandQuantity?: boolean
    demandValue?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["metrics"]>

  export type MetricsSelectScalar = {
    targetDate?: boolean
    storeId?: boolean
    productId?: boolean
    deliveredQuantity?: boolean
    deliveredValue?: boolean
    recommendedQuantity?: boolean
    recommendedValue?: boolean
    salesQuantity?: boolean
    salesValue?: boolean
    demandQuantity?: boolean
    demandValue?: boolean
  }

  export type MetricsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type MetricsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $MetricsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Metrics"
    objects: {
      store: Prisma.$StorePayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      targetDate: Date
      storeId: number
      productId: number
      deliveredQuantity: number
      deliveredValue: number
      recommendedQuantity: number
      recommendedValue: number
      salesQuantity: number
      salesValue: number
      demandQuantity: number
      demandValue: number
    }, ExtArgs["result"]["metrics"]>
    composites: {}
  }

  type MetricsGetPayload<S extends boolean | null | undefined | MetricsDefaultArgs> = $Result.GetResult<Prisma.$MetricsPayload, S>

  type MetricsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MetricsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MetricsCountAggregateInputType | true
    }

  export interface MetricsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Metrics'], meta: { name: 'Metrics' } }
    /**
     * Find zero or one Metrics that matches the filter.
     * @param {MetricsFindUniqueArgs} args - Arguments to find a Metrics
     * @example
     * // Get one Metrics
     * const metrics = await prisma.metrics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MetricsFindUniqueArgs>(args: SelectSubset<T, MetricsFindUniqueArgs<ExtArgs>>): Prisma__MetricsClient<$Result.GetResult<Prisma.$MetricsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Metrics that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MetricsFindUniqueOrThrowArgs} args - Arguments to find a Metrics
     * @example
     * // Get one Metrics
     * const metrics = await prisma.metrics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MetricsFindUniqueOrThrowArgs>(args: SelectSubset<T, MetricsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MetricsClient<$Result.GetResult<Prisma.$MetricsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Metrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricsFindFirstArgs} args - Arguments to find a Metrics
     * @example
     * // Get one Metrics
     * const metrics = await prisma.metrics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MetricsFindFirstArgs>(args?: SelectSubset<T, MetricsFindFirstArgs<ExtArgs>>): Prisma__MetricsClient<$Result.GetResult<Prisma.$MetricsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Metrics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricsFindFirstOrThrowArgs} args - Arguments to find a Metrics
     * @example
     * // Get one Metrics
     * const metrics = await prisma.metrics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MetricsFindFirstOrThrowArgs>(args?: SelectSubset<T, MetricsFindFirstOrThrowArgs<ExtArgs>>): Prisma__MetricsClient<$Result.GetResult<Prisma.$MetricsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Metrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Metrics
     * const metrics = await prisma.metrics.findMany()
     * 
     * // Get first 10 Metrics
     * const metrics = await prisma.metrics.findMany({ take: 10 })
     * 
     * // Only select the `targetDate`
     * const metricsWithTargetDateOnly = await prisma.metrics.findMany({ select: { targetDate: true } })
     * 
     */
    findMany<T extends MetricsFindManyArgs>(args?: SelectSubset<T, MetricsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Metrics.
     * @param {MetricsCreateArgs} args - Arguments to create a Metrics.
     * @example
     * // Create one Metrics
     * const Metrics = await prisma.metrics.create({
     *   data: {
     *     // ... data to create a Metrics
     *   }
     * })
     * 
     */
    create<T extends MetricsCreateArgs>(args: SelectSubset<T, MetricsCreateArgs<ExtArgs>>): Prisma__MetricsClient<$Result.GetResult<Prisma.$MetricsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Metrics.
     * @param {MetricsCreateManyArgs} args - Arguments to create many Metrics.
     * @example
     * // Create many Metrics
     * const metrics = await prisma.metrics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MetricsCreateManyArgs>(args?: SelectSubset<T, MetricsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Metrics and returns the data saved in the database.
     * @param {MetricsCreateManyAndReturnArgs} args - Arguments to create many Metrics.
     * @example
     * // Create many Metrics
     * const metrics = await prisma.metrics.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Metrics and only return the `targetDate`
     * const metricsWithTargetDateOnly = await prisma.metrics.createManyAndReturn({ 
     *   select: { targetDate: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MetricsCreateManyAndReturnArgs>(args?: SelectSubset<T, MetricsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Metrics.
     * @param {MetricsDeleteArgs} args - Arguments to delete one Metrics.
     * @example
     * // Delete one Metrics
     * const Metrics = await prisma.metrics.delete({
     *   where: {
     *     // ... filter to delete one Metrics
     *   }
     * })
     * 
     */
    delete<T extends MetricsDeleteArgs>(args: SelectSubset<T, MetricsDeleteArgs<ExtArgs>>): Prisma__MetricsClient<$Result.GetResult<Prisma.$MetricsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Metrics.
     * @param {MetricsUpdateArgs} args - Arguments to update one Metrics.
     * @example
     * // Update one Metrics
     * const metrics = await prisma.metrics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MetricsUpdateArgs>(args: SelectSubset<T, MetricsUpdateArgs<ExtArgs>>): Prisma__MetricsClient<$Result.GetResult<Prisma.$MetricsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Metrics.
     * @param {MetricsDeleteManyArgs} args - Arguments to filter Metrics to delete.
     * @example
     * // Delete a few Metrics
     * const { count } = await prisma.metrics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MetricsDeleteManyArgs>(args?: SelectSubset<T, MetricsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Metrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Metrics
     * const metrics = await prisma.metrics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MetricsUpdateManyArgs>(args: SelectSubset<T, MetricsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Metrics.
     * @param {MetricsUpsertArgs} args - Arguments to update or create a Metrics.
     * @example
     * // Update or create a Metrics
     * const metrics = await prisma.metrics.upsert({
     *   create: {
     *     // ... data to create a Metrics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Metrics we want to update
     *   }
     * })
     */
    upsert<T extends MetricsUpsertArgs>(args: SelectSubset<T, MetricsUpsertArgs<ExtArgs>>): Prisma__MetricsClient<$Result.GetResult<Prisma.$MetricsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Metrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricsCountArgs} args - Arguments to filter Metrics to count.
     * @example
     * // Count the number of Metrics
     * const count = await prisma.metrics.count({
     *   where: {
     *     // ... the filter for the Metrics we want to count
     *   }
     * })
    **/
    count<T extends MetricsCountArgs>(
      args?: Subset<T, MetricsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MetricsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Metrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MetricsAggregateArgs>(args: Subset<T, MetricsAggregateArgs>): Prisma.PrismaPromise<GetMetricsAggregateType<T>>

    /**
     * Group by Metrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MetricsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MetricsGroupByArgs['orderBy'] }
        : { orderBy?: MetricsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MetricsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMetricsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Metrics model
   */
  readonly fields: MetricsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Metrics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MetricsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    store<T extends StoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoreDefaultArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Metrics model
   */ 
  interface MetricsFieldRefs {
    readonly targetDate: FieldRef<"Metrics", 'DateTime'>
    readonly storeId: FieldRef<"Metrics", 'Int'>
    readonly productId: FieldRef<"Metrics", 'Int'>
    readonly deliveredQuantity: FieldRef<"Metrics", 'Int'>
    readonly deliveredValue: FieldRef<"Metrics", 'Float'>
    readonly recommendedQuantity: FieldRef<"Metrics", 'Int'>
    readonly recommendedValue: FieldRef<"Metrics", 'Float'>
    readonly salesQuantity: FieldRef<"Metrics", 'Int'>
    readonly salesValue: FieldRef<"Metrics", 'Float'>
    readonly demandQuantity: FieldRef<"Metrics", 'Int'>
    readonly demandValue: FieldRef<"Metrics", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Metrics findUnique
   */
  export type MetricsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metrics
     */
    select?: MetricsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricsInclude<ExtArgs> | null
    /**
     * Filter, which Metrics to fetch.
     */
    where: MetricsWhereUniqueInput
  }

  /**
   * Metrics findUniqueOrThrow
   */
  export type MetricsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metrics
     */
    select?: MetricsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricsInclude<ExtArgs> | null
    /**
     * Filter, which Metrics to fetch.
     */
    where: MetricsWhereUniqueInput
  }

  /**
   * Metrics findFirst
   */
  export type MetricsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metrics
     */
    select?: MetricsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricsInclude<ExtArgs> | null
    /**
     * Filter, which Metrics to fetch.
     */
    where?: MetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metrics to fetch.
     */
    orderBy?: MetricsOrderByWithRelationInput | MetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Metrics.
     */
    cursor?: MetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Metrics.
     */
    distinct?: MetricsScalarFieldEnum | MetricsScalarFieldEnum[]
  }

  /**
   * Metrics findFirstOrThrow
   */
  export type MetricsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metrics
     */
    select?: MetricsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricsInclude<ExtArgs> | null
    /**
     * Filter, which Metrics to fetch.
     */
    where?: MetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metrics to fetch.
     */
    orderBy?: MetricsOrderByWithRelationInput | MetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Metrics.
     */
    cursor?: MetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Metrics.
     */
    distinct?: MetricsScalarFieldEnum | MetricsScalarFieldEnum[]
  }

  /**
   * Metrics findMany
   */
  export type MetricsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metrics
     */
    select?: MetricsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricsInclude<ExtArgs> | null
    /**
     * Filter, which Metrics to fetch.
     */
    where?: MetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metrics to fetch.
     */
    orderBy?: MetricsOrderByWithRelationInput | MetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Metrics.
     */
    cursor?: MetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metrics.
     */
    skip?: number
    distinct?: MetricsScalarFieldEnum | MetricsScalarFieldEnum[]
  }

  /**
   * Metrics create
   */
  export type MetricsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metrics
     */
    select?: MetricsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricsInclude<ExtArgs> | null
    /**
     * The data needed to create a Metrics.
     */
    data: XOR<MetricsCreateInput, MetricsUncheckedCreateInput>
  }

  /**
   * Metrics createMany
   */
  export type MetricsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Metrics.
     */
    data: MetricsCreateManyInput | MetricsCreateManyInput[]
  }

  /**
   * Metrics createManyAndReturn
   */
  export type MetricsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metrics
     */
    select?: MetricsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Metrics.
     */
    data: MetricsCreateManyInput | MetricsCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Metrics update
   */
  export type MetricsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metrics
     */
    select?: MetricsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricsInclude<ExtArgs> | null
    /**
     * The data needed to update a Metrics.
     */
    data: XOR<MetricsUpdateInput, MetricsUncheckedUpdateInput>
    /**
     * Choose, which Metrics to update.
     */
    where: MetricsWhereUniqueInput
  }

  /**
   * Metrics updateMany
   */
  export type MetricsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Metrics.
     */
    data: XOR<MetricsUpdateManyMutationInput, MetricsUncheckedUpdateManyInput>
    /**
     * Filter which Metrics to update
     */
    where?: MetricsWhereInput
  }

  /**
   * Metrics upsert
   */
  export type MetricsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metrics
     */
    select?: MetricsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricsInclude<ExtArgs> | null
    /**
     * The filter to search for the Metrics to update in case it exists.
     */
    where: MetricsWhereUniqueInput
    /**
     * In case the Metrics found by the `where` argument doesn't exist, create a new Metrics with this data.
     */
    create: XOR<MetricsCreateInput, MetricsUncheckedCreateInput>
    /**
     * In case the Metrics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MetricsUpdateInput, MetricsUncheckedUpdateInput>
  }

  /**
   * Metrics delete
   */
  export type MetricsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metrics
     */
    select?: MetricsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricsInclude<ExtArgs> | null
    /**
     * Filter which Metrics to delete.
     */
    where: MetricsWhereUniqueInput
  }

  /**
   * Metrics deleteMany
   */
  export type MetricsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Metrics to delete
     */
    where?: MetricsWhereInput
  }

  /**
   * Metrics without action
   */
  export type MetricsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metrics
     */
    select?: MetricsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const StoreScalarFieldEnum: {
    id: 'id',
    label: 'label',
    number: 'number'
  };

  export type StoreScalarFieldEnum = (typeof StoreScalarFieldEnum)[keyof typeof StoreScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    number: 'number',
    price: 'price'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const RecommendationScalarFieldEnum: {
    targetDate: 'targetDate',
    storeId: 'storeId',
    productId: 'productId',
    quantity: 'quantity',
    value: 'value'
  };

  export type RecommendationScalarFieldEnum = (typeof RecommendationScalarFieldEnum)[keyof typeof RecommendationScalarFieldEnum]


  export const DeliveryScalarFieldEnum: {
    targetDate: 'targetDate',
    storeId: 'storeId',
    productId: 'productId',
    quantity: 'quantity',
    value: 'value'
  };

  export type DeliveryScalarFieldEnum = (typeof DeliveryScalarFieldEnum)[keyof typeof DeliveryScalarFieldEnum]


  export const SaleScalarFieldEnum: {
    targetDate: 'targetDate',
    storeId: 'storeId',
    productId: 'productId',
    salesQuantity: 'salesQuantity',
    salesValue: 'salesValue',
    demandQuantity: 'demandQuantity',
    demandValue: 'demandValue'
  };

  export type SaleScalarFieldEnum = (typeof SaleScalarFieldEnum)[keyof typeof SaleScalarFieldEnum]


  export const MetricsScalarFieldEnum: {
    targetDate: 'targetDate',
    storeId: 'storeId',
    productId: 'productId',
    deliveredQuantity: 'deliveredQuantity',
    deliveredValue: 'deliveredValue',
    recommendedQuantity: 'recommendedQuantity',
    recommendedValue: 'recommendedValue',
    salesQuantity: 'salesQuantity',
    salesValue: 'salesValue',
    demandQuantity: 'demandQuantity',
    demandValue: 'demandValue'
  };

  export type MetricsScalarFieldEnum = (typeof MetricsScalarFieldEnum)[keyof typeof MetricsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    
  /**
   * Deep Input Types
   */


  export type StoreWhereInput = {
    AND?: StoreWhereInput | StoreWhereInput[]
    OR?: StoreWhereInput[]
    NOT?: StoreWhereInput | StoreWhereInput[]
    id?: IntFilter<"Store"> | number
    label?: StringFilter<"Store"> | string
    number?: IntFilter<"Store"> | number
    recommendations?: RecommendationListRelationFilter
    deliveries?: DeliveryListRelationFilter
    Sale?: SaleListRelationFilter
    Metrics?: MetricsListRelationFilter
  }

  export type StoreOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    number?: SortOrder
    recommendations?: RecommendationOrderByRelationAggregateInput
    deliveries?: DeliveryOrderByRelationAggregateInput
    Sale?: SaleOrderByRelationAggregateInput
    Metrics?: MetricsOrderByRelationAggregateInput
  }

  export type StoreWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StoreWhereInput | StoreWhereInput[]
    OR?: StoreWhereInput[]
    NOT?: StoreWhereInput | StoreWhereInput[]
    label?: StringFilter<"Store"> | string
    number?: IntFilter<"Store"> | number
    recommendations?: RecommendationListRelationFilter
    deliveries?: DeliveryListRelationFilter
    Sale?: SaleListRelationFilter
    Metrics?: MetricsListRelationFilter
  }, "id">

  export type StoreOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    number?: SortOrder
    _count?: StoreCountOrderByAggregateInput
    _avg?: StoreAvgOrderByAggregateInput
    _max?: StoreMaxOrderByAggregateInput
    _min?: StoreMinOrderByAggregateInput
    _sum?: StoreSumOrderByAggregateInput
  }

  export type StoreScalarWhereWithAggregatesInput = {
    AND?: StoreScalarWhereWithAggregatesInput | StoreScalarWhereWithAggregatesInput[]
    OR?: StoreScalarWhereWithAggregatesInput[]
    NOT?: StoreScalarWhereWithAggregatesInput | StoreScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Store"> | number
    label?: StringWithAggregatesFilter<"Store"> | string
    number?: IntWithAggregatesFilter<"Store"> | number
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    number?: IntFilter<"Product"> | number
    price?: FloatFilter<"Product"> | number
    recommendations?: RecommendationListRelationFilter
    deliveries?: DeliveryListRelationFilter
    Sale?: SaleListRelationFilter
    Metrics?: MetricsListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    number?: SortOrder
    price?: SortOrder
    recommendations?: RecommendationOrderByRelationAggregateInput
    deliveries?: DeliveryOrderByRelationAggregateInput
    Sale?: SaleOrderByRelationAggregateInput
    Metrics?: MetricsOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    number?: IntFilter<"Product"> | number
    price?: FloatFilter<"Product"> | number
    recommendations?: RecommendationListRelationFilter
    deliveries?: DeliveryListRelationFilter
    Sale?: SaleListRelationFilter
    Metrics?: MetricsListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    number?: SortOrder
    price?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    name?: StringWithAggregatesFilter<"Product"> | string
    number?: IntWithAggregatesFilter<"Product"> | number
    price?: FloatWithAggregatesFilter<"Product"> | number
  }

  export type RecommendationWhereInput = {
    AND?: RecommendationWhereInput | RecommendationWhereInput[]
    OR?: RecommendationWhereInput[]
    NOT?: RecommendationWhereInput | RecommendationWhereInput[]
    targetDate?: DateTimeFilter<"Recommendation"> | Date | string
    storeId?: IntFilter<"Recommendation"> | number
    productId?: IntFilter<"Recommendation"> | number
    quantity?: IntFilter<"Recommendation"> | number
    value?: FloatFilter<"Recommendation"> | number
    store?: XOR<StoreRelationFilter, StoreWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type RecommendationOrderByWithRelationInput = {
    targetDate?: SortOrder
    storeId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    value?: SortOrder
    store?: StoreOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type RecommendationWhereUniqueInput = Prisma.AtLeast<{
    storeId_productId_targetDate?: RecommendationStoreIdProductIdTargetDateCompoundUniqueInput
    AND?: RecommendationWhereInput | RecommendationWhereInput[]
    OR?: RecommendationWhereInput[]
    NOT?: RecommendationWhereInput | RecommendationWhereInput[]
    targetDate?: DateTimeFilter<"Recommendation"> | Date | string
    storeId?: IntFilter<"Recommendation"> | number
    productId?: IntFilter<"Recommendation"> | number
    quantity?: IntFilter<"Recommendation"> | number
    value?: FloatFilter<"Recommendation"> | number
    store?: XOR<StoreRelationFilter, StoreWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }, "storeId_productId_targetDate">

  export type RecommendationOrderByWithAggregationInput = {
    targetDate?: SortOrder
    storeId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    value?: SortOrder
    _count?: RecommendationCountOrderByAggregateInput
    _avg?: RecommendationAvgOrderByAggregateInput
    _max?: RecommendationMaxOrderByAggregateInput
    _min?: RecommendationMinOrderByAggregateInput
    _sum?: RecommendationSumOrderByAggregateInput
  }

  export type RecommendationScalarWhereWithAggregatesInput = {
    AND?: RecommendationScalarWhereWithAggregatesInput | RecommendationScalarWhereWithAggregatesInput[]
    OR?: RecommendationScalarWhereWithAggregatesInput[]
    NOT?: RecommendationScalarWhereWithAggregatesInput | RecommendationScalarWhereWithAggregatesInput[]
    targetDate?: DateTimeWithAggregatesFilter<"Recommendation"> | Date | string
    storeId?: IntWithAggregatesFilter<"Recommendation"> | number
    productId?: IntWithAggregatesFilter<"Recommendation"> | number
    quantity?: IntWithAggregatesFilter<"Recommendation"> | number
    value?: FloatWithAggregatesFilter<"Recommendation"> | number
  }

  export type DeliveryWhereInput = {
    AND?: DeliveryWhereInput | DeliveryWhereInput[]
    OR?: DeliveryWhereInput[]
    NOT?: DeliveryWhereInput | DeliveryWhereInput[]
    targetDate?: DateTimeFilter<"Delivery"> | Date | string
    storeId?: IntFilter<"Delivery"> | number
    productId?: IntFilter<"Delivery"> | number
    quantity?: IntFilter<"Delivery"> | number
    value?: FloatFilter<"Delivery"> | number
    store?: XOR<StoreRelationFilter, StoreWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type DeliveryOrderByWithRelationInput = {
    targetDate?: SortOrder
    storeId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    value?: SortOrder
    store?: StoreOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type DeliveryWhereUniqueInput = Prisma.AtLeast<{
    storeId_productId_targetDate?: DeliveryStoreIdProductIdTargetDateCompoundUniqueInput
    AND?: DeliveryWhereInput | DeliveryWhereInput[]
    OR?: DeliveryWhereInput[]
    NOT?: DeliveryWhereInput | DeliveryWhereInput[]
    targetDate?: DateTimeFilter<"Delivery"> | Date | string
    storeId?: IntFilter<"Delivery"> | number
    productId?: IntFilter<"Delivery"> | number
    quantity?: IntFilter<"Delivery"> | number
    value?: FloatFilter<"Delivery"> | number
    store?: XOR<StoreRelationFilter, StoreWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }, "storeId_productId_targetDate">

  export type DeliveryOrderByWithAggregationInput = {
    targetDate?: SortOrder
    storeId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    value?: SortOrder
    _count?: DeliveryCountOrderByAggregateInput
    _avg?: DeliveryAvgOrderByAggregateInput
    _max?: DeliveryMaxOrderByAggregateInput
    _min?: DeliveryMinOrderByAggregateInput
    _sum?: DeliverySumOrderByAggregateInput
  }

  export type DeliveryScalarWhereWithAggregatesInput = {
    AND?: DeliveryScalarWhereWithAggregatesInput | DeliveryScalarWhereWithAggregatesInput[]
    OR?: DeliveryScalarWhereWithAggregatesInput[]
    NOT?: DeliveryScalarWhereWithAggregatesInput | DeliveryScalarWhereWithAggregatesInput[]
    targetDate?: DateTimeWithAggregatesFilter<"Delivery"> | Date | string
    storeId?: IntWithAggregatesFilter<"Delivery"> | number
    productId?: IntWithAggregatesFilter<"Delivery"> | number
    quantity?: IntWithAggregatesFilter<"Delivery"> | number
    value?: FloatWithAggregatesFilter<"Delivery"> | number
  }

  export type SaleWhereInput = {
    AND?: SaleWhereInput | SaleWhereInput[]
    OR?: SaleWhereInput[]
    NOT?: SaleWhereInput | SaleWhereInput[]
    targetDate?: DateTimeFilter<"Sale"> | Date | string
    storeId?: IntFilter<"Sale"> | number
    productId?: IntFilter<"Sale"> | number
    salesQuantity?: IntFilter<"Sale"> | number
    salesValue?: FloatFilter<"Sale"> | number
    demandQuantity?: IntFilter<"Sale"> | number
    demandValue?: FloatFilter<"Sale"> | number
    store?: XOR<StoreRelationFilter, StoreWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type SaleOrderByWithRelationInput = {
    targetDate?: SortOrder
    storeId?: SortOrder
    productId?: SortOrder
    salesQuantity?: SortOrder
    salesValue?: SortOrder
    demandQuantity?: SortOrder
    demandValue?: SortOrder
    store?: StoreOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type SaleWhereUniqueInput = Prisma.AtLeast<{
    storeId_productId_targetDate?: SaleStoreIdProductIdTargetDateCompoundUniqueInput
    AND?: SaleWhereInput | SaleWhereInput[]
    OR?: SaleWhereInput[]
    NOT?: SaleWhereInput | SaleWhereInput[]
    targetDate?: DateTimeFilter<"Sale"> | Date | string
    storeId?: IntFilter<"Sale"> | number
    productId?: IntFilter<"Sale"> | number
    salesQuantity?: IntFilter<"Sale"> | number
    salesValue?: FloatFilter<"Sale"> | number
    demandQuantity?: IntFilter<"Sale"> | number
    demandValue?: FloatFilter<"Sale"> | number
    store?: XOR<StoreRelationFilter, StoreWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }, "storeId_productId_targetDate">

  export type SaleOrderByWithAggregationInput = {
    targetDate?: SortOrder
    storeId?: SortOrder
    productId?: SortOrder
    salesQuantity?: SortOrder
    salesValue?: SortOrder
    demandQuantity?: SortOrder
    demandValue?: SortOrder
    _count?: SaleCountOrderByAggregateInput
    _avg?: SaleAvgOrderByAggregateInput
    _max?: SaleMaxOrderByAggregateInput
    _min?: SaleMinOrderByAggregateInput
    _sum?: SaleSumOrderByAggregateInput
  }

  export type SaleScalarWhereWithAggregatesInput = {
    AND?: SaleScalarWhereWithAggregatesInput | SaleScalarWhereWithAggregatesInput[]
    OR?: SaleScalarWhereWithAggregatesInput[]
    NOT?: SaleScalarWhereWithAggregatesInput | SaleScalarWhereWithAggregatesInput[]
    targetDate?: DateTimeWithAggregatesFilter<"Sale"> | Date | string
    storeId?: IntWithAggregatesFilter<"Sale"> | number
    productId?: IntWithAggregatesFilter<"Sale"> | number
    salesQuantity?: IntWithAggregatesFilter<"Sale"> | number
    salesValue?: FloatWithAggregatesFilter<"Sale"> | number
    demandQuantity?: IntWithAggregatesFilter<"Sale"> | number
    demandValue?: FloatWithAggregatesFilter<"Sale"> | number
  }

  export type MetricsWhereInput = {
    AND?: MetricsWhereInput | MetricsWhereInput[]
    OR?: MetricsWhereInput[]
    NOT?: MetricsWhereInput | MetricsWhereInput[]
    targetDate?: DateTimeFilter<"Metrics"> | Date | string
    storeId?: IntFilter<"Metrics"> | number
    productId?: IntFilter<"Metrics"> | number
    deliveredQuantity?: IntFilter<"Metrics"> | number
    deliveredValue?: FloatFilter<"Metrics"> | number
    recommendedQuantity?: IntFilter<"Metrics"> | number
    recommendedValue?: FloatFilter<"Metrics"> | number
    salesQuantity?: IntFilter<"Metrics"> | number
    salesValue?: FloatFilter<"Metrics"> | number
    demandQuantity?: IntFilter<"Metrics"> | number
    demandValue?: FloatFilter<"Metrics"> | number
    store?: XOR<StoreRelationFilter, StoreWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type MetricsOrderByWithRelationInput = {
    targetDate?: SortOrder
    storeId?: SortOrder
    productId?: SortOrder
    deliveredQuantity?: SortOrder
    deliveredValue?: SortOrder
    recommendedQuantity?: SortOrder
    recommendedValue?: SortOrder
    salesQuantity?: SortOrder
    salesValue?: SortOrder
    demandQuantity?: SortOrder
    demandValue?: SortOrder
    store?: StoreOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type MetricsWhereUniqueInput = Prisma.AtLeast<{
    storeId_productId_targetDate?: MetricsStoreIdProductIdTargetDateCompoundUniqueInput
    AND?: MetricsWhereInput | MetricsWhereInput[]
    OR?: MetricsWhereInput[]
    NOT?: MetricsWhereInput | MetricsWhereInput[]
    targetDate?: DateTimeFilter<"Metrics"> | Date | string
    storeId?: IntFilter<"Metrics"> | number
    productId?: IntFilter<"Metrics"> | number
    deliveredQuantity?: IntFilter<"Metrics"> | number
    deliveredValue?: FloatFilter<"Metrics"> | number
    recommendedQuantity?: IntFilter<"Metrics"> | number
    recommendedValue?: FloatFilter<"Metrics"> | number
    salesQuantity?: IntFilter<"Metrics"> | number
    salesValue?: FloatFilter<"Metrics"> | number
    demandQuantity?: IntFilter<"Metrics"> | number
    demandValue?: FloatFilter<"Metrics"> | number
    store?: XOR<StoreRelationFilter, StoreWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }, "storeId_productId_targetDate">

  export type MetricsOrderByWithAggregationInput = {
    targetDate?: SortOrder
    storeId?: SortOrder
    productId?: SortOrder
    deliveredQuantity?: SortOrder
    deliveredValue?: SortOrder
    recommendedQuantity?: SortOrder
    recommendedValue?: SortOrder
    salesQuantity?: SortOrder
    salesValue?: SortOrder
    demandQuantity?: SortOrder
    demandValue?: SortOrder
    _count?: MetricsCountOrderByAggregateInput
    _avg?: MetricsAvgOrderByAggregateInput
    _max?: MetricsMaxOrderByAggregateInput
    _min?: MetricsMinOrderByAggregateInput
    _sum?: MetricsSumOrderByAggregateInput
  }

  export type MetricsScalarWhereWithAggregatesInput = {
    AND?: MetricsScalarWhereWithAggregatesInput | MetricsScalarWhereWithAggregatesInput[]
    OR?: MetricsScalarWhereWithAggregatesInput[]
    NOT?: MetricsScalarWhereWithAggregatesInput | MetricsScalarWhereWithAggregatesInput[]
    targetDate?: DateTimeWithAggregatesFilter<"Metrics"> | Date | string
    storeId?: IntWithAggregatesFilter<"Metrics"> | number
    productId?: IntWithAggregatesFilter<"Metrics"> | number
    deliveredQuantity?: IntWithAggregatesFilter<"Metrics"> | number
    deliveredValue?: FloatWithAggregatesFilter<"Metrics"> | number
    recommendedQuantity?: IntWithAggregatesFilter<"Metrics"> | number
    recommendedValue?: FloatWithAggregatesFilter<"Metrics"> | number
    salesQuantity?: IntWithAggregatesFilter<"Metrics"> | number
    salesValue?: FloatWithAggregatesFilter<"Metrics"> | number
    demandQuantity?: IntWithAggregatesFilter<"Metrics"> | number
    demandValue?: FloatWithAggregatesFilter<"Metrics"> | number
  }

  export type StoreCreateInput = {
    label: string
    number: number
    recommendations?: RecommendationCreateNestedManyWithoutStoreInput
    deliveries?: DeliveryCreateNestedManyWithoutStoreInput
    Sale?: SaleCreateNestedManyWithoutStoreInput
    Metrics?: MetricsCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateInput = {
    id?: number
    label: string
    number: number
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutStoreInput
    deliveries?: DeliveryUncheckedCreateNestedManyWithoutStoreInput
    Sale?: SaleUncheckedCreateNestedManyWithoutStoreInput
    Metrics?: MetricsUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreUpdateInput = {
    label?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    recommendations?: RecommendationUpdateManyWithoutStoreNestedInput
    deliveries?: DeliveryUpdateManyWithoutStoreNestedInput
    Sale?: SaleUpdateManyWithoutStoreNestedInput
    Metrics?: MetricsUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    recommendations?: RecommendationUncheckedUpdateManyWithoutStoreNestedInput
    deliveries?: DeliveryUncheckedUpdateManyWithoutStoreNestedInput
    Sale?: SaleUncheckedUpdateManyWithoutStoreNestedInput
    Metrics?: MetricsUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type StoreCreateManyInput = {
    id?: number
    label: string
    number: number
  }

  export type StoreUpdateManyMutationInput = {
    label?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
  }

  export type StoreUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
  }

  export type ProductCreateInput = {
    name: string
    number: number
    price: number
    recommendations?: RecommendationCreateNestedManyWithoutProductInput
    deliveries?: DeliveryCreateNestedManyWithoutProductInput
    Sale?: SaleCreateNestedManyWithoutProductInput
    Metrics?: MetricsCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    name: string
    number: number
    price: number
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutProductInput
    deliveries?: DeliveryUncheckedCreateNestedManyWithoutProductInput
    Sale?: SaleUncheckedCreateNestedManyWithoutProductInput
    Metrics?: MetricsUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    recommendations?: RecommendationUpdateManyWithoutProductNestedInput
    deliveries?: DeliveryUpdateManyWithoutProductNestedInput
    Sale?: SaleUpdateManyWithoutProductNestedInput
    Metrics?: MetricsUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    recommendations?: RecommendationUncheckedUpdateManyWithoutProductNestedInput
    deliveries?: DeliveryUncheckedUpdateManyWithoutProductNestedInput
    Sale?: SaleUncheckedUpdateManyWithoutProductNestedInput
    Metrics?: MetricsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: number
    name: string
    number: number
    price: number
  }

  export type ProductUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type RecommendationCreateInput = {
    targetDate: Date | string
    quantity: number
    value: number
    store: StoreCreateNestedOneWithoutRecommendationsInput
    product: ProductCreateNestedOneWithoutRecommendationsInput
  }

  export type RecommendationUncheckedCreateInput = {
    targetDate: Date | string
    storeId: number
    productId: number
    quantity: number
    value: number
  }

  export type RecommendationUpdateInput = {
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    value?: FloatFieldUpdateOperationsInput | number
    store?: StoreUpdateOneRequiredWithoutRecommendationsNestedInput
    product?: ProductUpdateOneRequiredWithoutRecommendationsNestedInput
  }

  export type RecommendationUncheckedUpdateInput = {
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    storeId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type RecommendationCreateManyInput = {
    targetDate: Date | string
    storeId: number
    productId: number
    quantity: number
    value: number
  }

  export type RecommendationUpdateManyMutationInput = {
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type RecommendationUncheckedUpdateManyInput = {
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    storeId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type DeliveryCreateInput = {
    targetDate: Date | string
    quantity: number
    value: number
    store: StoreCreateNestedOneWithoutDeliveriesInput
    product: ProductCreateNestedOneWithoutDeliveriesInput
  }

  export type DeliveryUncheckedCreateInput = {
    targetDate: Date | string
    storeId: number
    productId: number
    quantity: number
    value: number
  }

  export type DeliveryUpdateInput = {
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    value?: FloatFieldUpdateOperationsInput | number
    store?: StoreUpdateOneRequiredWithoutDeliveriesNestedInput
    product?: ProductUpdateOneRequiredWithoutDeliveriesNestedInput
  }

  export type DeliveryUncheckedUpdateInput = {
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    storeId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type DeliveryCreateManyInput = {
    targetDate: Date | string
    storeId: number
    productId: number
    quantity: number
    value: number
  }

  export type DeliveryUpdateManyMutationInput = {
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type DeliveryUncheckedUpdateManyInput = {
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    storeId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type SaleCreateInput = {
    targetDate: Date | string
    salesQuantity: number
    salesValue: number
    demandQuantity: number
    demandValue: number
    store: StoreCreateNestedOneWithoutSaleInput
    product: ProductCreateNestedOneWithoutSaleInput
  }

  export type SaleUncheckedCreateInput = {
    targetDate: Date | string
    storeId: number
    productId: number
    salesQuantity: number
    salesValue: number
    demandQuantity: number
    demandValue: number
  }

  export type SaleUpdateInput = {
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    salesQuantity?: IntFieldUpdateOperationsInput | number
    salesValue?: FloatFieldUpdateOperationsInput | number
    demandQuantity?: IntFieldUpdateOperationsInput | number
    demandValue?: FloatFieldUpdateOperationsInput | number
    store?: StoreUpdateOneRequiredWithoutSaleNestedInput
    product?: ProductUpdateOneRequiredWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateInput = {
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    storeId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    salesQuantity?: IntFieldUpdateOperationsInput | number
    salesValue?: FloatFieldUpdateOperationsInput | number
    demandQuantity?: IntFieldUpdateOperationsInput | number
    demandValue?: FloatFieldUpdateOperationsInput | number
  }

  export type SaleCreateManyInput = {
    targetDate: Date | string
    storeId: number
    productId: number
    salesQuantity: number
    salesValue: number
    demandQuantity: number
    demandValue: number
  }

  export type SaleUpdateManyMutationInput = {
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    salesQuantity?: IntFieldUpdateOperationsInput | number
    salesValue?: FloatFieldUpdateOperationsInput | number
    demandQuantity?: IntFieldUpdateOperationsInput | number
    demandValue?: FloatFieldUpdateOperationsInput | number
  }

  export type SaleUncheckedUpdateManyInput = {
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    storeId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    salesQuantity?: IntFieldUpdateOperationsInput | number
    salesValue?: FloatFieldUpdateOperationsInput | number
    demandQuantity?: IntFieldUpdateOperationsInput | number
    demandValue?: FloatFieldUpdateOperationsInput | number
  }

  export type MetricsCreateInput = {
    targetDate: Date | string
    deliveredQuantity: number
    deliveredValue: number
    recommendedQuantity: number
    recommendedValue: number
    salesQuantity: number
    salesValue: number
    demandQuantity: number
    demandValue: number
    store: StoreCreateNestedOneWithoutMetricsInput
    product: ProductCreateNestedOneWithoutMetricsInput
  }

  export type MetricsUncheckedCreateInput = {
    targetDate: Date | string
    storeId: number
    productId: number
    deliveredQuantity: number
    deliveredValue: number
    recommendedQuantity: number
    recommendedValue: number
    salesQuantity: number
    salesValue: number
    demandQuantity: number
    demandValue: number
  }

  export type MetricsUpdateInput = {
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveredQuantity?: IntFieldUpdateOperationsInput | number
    deliveredValue?: FloatFieldUpdateOperationsInput | number
    recommendedQuantity?: IntFieldUpdateOperationsInput | number
    recommendedValue?: FloatFieldUpdateOperationsInput | number
    salesQuantity?: IntFieldUpdateOperationsInput | number
    salesValue?: FloatFieldUpdateOperationsInput | number
    demandQuantity?: IntFieldUpdateOperationsInput | number
    demandValue?: FloatFieldUpdateOperationsInput | number
    store?: StoreUpdateOneRequiredWithoutMetricsNestedInput
    product?: ProductUpdateOneRequiredWithoutMetricsNestedInput
  }

  export type MetricsUncheckedUpdateInput = {
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    storeId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    deliveredQuantity?: IntFieldUpdateOperationsInput | number
    deliveredValue?: FloatFieldUpdateOperationsInput | number
    recommendedQuantity?: IntFieldUpdateOperationsInput | number
    recommendedValue?: FloatFieldUpdateOperationsInput | number
    salesQuantity?: IntFieldUpdateOperationsInput | number
    salesValue?: FloatFieldUpdateOperationsInput | number
    demandQuantity?: IntFieldUpdateOperationsInput | number
    demandValue?: FloatFieldUpdateOperationsInput | number
  }

  export type MetricsCreateManyInput = {
    targetDate: Date | string
    storeId: number
    productId: number
    deliveredQuantity: number
    deliveredValue: number
    recommendedQuantity: number
    recommendedValue: number
    salesQuantity: number
    salesValue: number
    demandQuantity: number
    demandValue: number
  }

  export type MetricsUpdateManyMutationInput = {
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveredQuantity?: IntFieldUpdateOperationsInput | number
    deliveredValue?: FloatFieldUpdateOperationsInput | number
    recommendedQuantity?: IntFieldUpdateOperationsInput | number
    recommendedValue?: FloatFieldUpdateOperationsInput | number
    salesQuantity?: IntFieldUpdateOperationsInput | number
    salesValue?: FloatFieldUpdateOperationsInput | number
    demandQuantity?: IntFieldUpdateOperationsInput | number
    demandValue?: FloatFieldUpdateOperationsInput | number
  }

  export type MetricsUncheckedUpdateManyInput = {
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    storeId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    deliveredQuantity?: IntFieldUpdateOperationsInput | number
    deliveredValue?: FloatFieldUpdateOperationsInput | number
    recommendedQuantity?: IntFieldUpdateOperationsInput | number
    recommendedValue?: FloatFieldUpdateOperationsInput | number
    salesQuantity?: IntFieldUpdateOperationsInput | number
    salesValue?: FloatFieldUpdateOperationsInput | number
    demandQuantity?: IntFieldUpdateOperationsInput | number
    demandValue?: FloatFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type RecommendationListRelationFilter = {
    every?: RecommendationWhereInput
    some?: RecommendationWhereInput
    none?: RecommendationWhereInput
  }

  export type DeliveryListRelationFilter = {
    every?: DeliveryWhereInput
    some?: DeliveryWhereInput
    none?: DeliveryWhereInput
  }

  export type SaleListRelationFilter = {
    every?: SaleWhereInput
    some?: SaleWhereInput
    none?: SaleWhereInput
  }

  export type MetricsListRelationFilter = {
    every?: MetricsWhereInput
    some?: MetricsWhereInput
    none?: MetricsWhereInput
  }

  export type RecommendationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeliveryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SaleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MetricsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StoreCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    number?: SortOrder
  }

  export type StoreAvgOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
  }

  export type StoreMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    number?: SortOrder
  }

  export type StoreMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    number?: SortOrder
  }

  export type StoreSumOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    number?: SortOrder
    price?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    price?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    number?: SortOrder
    price?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    number?: SortOrder
    price?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    price?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StoreRelationFilter = {
    is?: StoreWhereInput
    isNot?: StoreWhereInput
  }

  export type ProductRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type RecommendationStoreIdProductIdTargetDateCompoundUniqueInput = {
    storeId: number
    productId: number
    targetDate: Date | string
  }

  export type RecommendationCountOrderByAggregateInput = {
    targetDate?: SortOrder
    storeId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    value?: SortOrder
  }

  export type RecommendationAvgOrderByAggregateInput = {
    storeId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    value?: SortOrder
  }

  export type RecommendationMaxOrderByAggregateInput = {
    targetDate?: SortOrder
    storeId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    value?: SortOrder
  }

  export type RecommendationMinOrderByAggregateInput = {
    targetDate?: SortOrder
    storeId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    value?: SortOrder
  }

  export type RecommendationSumOrderByAggregateInput = {
    storeId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    value?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DeliveryStoreIdProductIdTargetDateCompoundUniqueInput = {
    storeId: number
    productId: number
    targetDate: Date | string
  }

  export type DeliveryCountOrderByAggregateInput = {
    targetDate?: SortOrder
    storeId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    value?: SortOrder
  }

  export type DeliveryAvgOrderByAggregateInput = {
    storeId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    value?: SortOrder
  }

  export type DeliveryMaxOrderByAggregateInput = {
    targetDate?: SortOrder
    storeId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    value?: SortOrder
  }

  export type DeliveryMinOrderByAggregateInput = {
    targetDate?: SortOrder
    storeId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    value?: SortOrder
  }

  export type DeliverySumOrderByAggregateInput = {
    storeId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    value?: SortOrder
  }

  export type SaleStoreIdProductIdTargetDateCompoundUniqueInput = {
    storeId: number
    productId: number
    targetDate: Date | string
  }

  export type SaleCountOrderByAggregateInput = {
    targetDate?: SortOrder
    storeId?: SortOrder
    productId?: SortOrder
    salesQuantity?: SortOrder
    salesValue?: SortOrder
    demandQuantity?: SortOrder
    demandValue?: SortOrder
  }

  export type SaleAvgOrderByAggregateInput = {
    storeId?: SortOrder
    productId?: SortOrder
    salesQuantity?: SortOrder
    salesValue?: SortOrder
    demandQuantity?: SortOrder
    demandValue?: SortOrder
  }

  export type SaleMaxOrderByAggregateInput = {
    targetDate?: SortOrder
    storeId?: SortOrder
    productId?: SortOrder
    salesQuantity?: SortOrder
    salesValue?: SortOrder
    demandQuantity?: SortOrder
    demandValue?: SortOrder
  }

  export type SaleMinOrderByAggregateInput = {
    targetDate?: SortOrder
    storeId?: SortOrder
    productId?: SortOrder
    salesQuantity?: SortOrder
    salesValue?: SortOrder
    demandQuantity?: SortOrder
    demandValue?: SortOrder
  }

  export type SaleSumOrderByAggregateInput = {
    storeId?: SortOrder
    productId?: SortOrder
    salesQuantity?: SortOrder
    salesValue?: SortOrder
    demandQuantity?: SortOrder
    demandValue?: SortOrder
  }

  export type MetricsStoreIdProductIdTargetDateCompoundUniqueInput = {
    storeId: number
    productId: number
    targetDate: Date | string
  }

  export type MetricsCountOrderByAggregateInput = {
    targetDate?: SortOrder
    storeId?: SortOrder
    productId?: SortOrder
    deliveredQuantity?: SortOrder
    deliveredValue?: SortOrder
    recommendedQuantity?: SortOrder
    recommendedValue?: SortOrder
    salesQuantity?: SortOrder
    salesValue?: SortOrder
    demandQuantity?: SortOrder
    demandValue?: SortOrder
  }

  export type MetricsAvgOrderByAggregateInput = {
    storeId?: SortOrder
    productId?: SortOrder
    deliveredQuantity?: SortOrder
    deliveredValue?: SortOrder
    recommendedQuantity?: SortOrder
    recommendedValue?: SortOrder
    salesQuantity?: SortOrder
    salesValue?: SortOrder
    demandQuantity?: SortOrder
    demandValue?: SortOrder
  }

  export type MetricsMaxOrderByAggregateInput = {
    targetDate?: SortOrder
    storeId?: SortOrder
    productId?: SortOrder
    deliveredQuantity?: SortOrder
    deliveredValue?: SortOrder
    recommendedQuantity?: SortOrder
    recommendedValue?: SortOrder
    salesQuantity?: SortOrder
    salesValue?: SortOrder
    demandQuantity?: SortOrder
    demandValue?: SortOrder
  }

  export type MetricsMinOrderByAggregateInput = {
    targetDate?: SortOrder
    storeId?: SortOrder
    productId?: SortOrder
    deliveredQuantity?: SortOrder
    deliveredValue?: SortOrder
    recommendedQuantity?: SortOrder
    recommendedValue?: SortOrder
    salesQuantity?: SortOrder
    salesValue?: SortOrder
    demandQuantity?: SortOrder
    demandValue?: SortOrder
  }

  export type MetricsSumOrderByAggregateInput = {
    storeId?: SortOrder
    productId?: SortOrder
    deliveredQuantity?: SortOrder
    deliveredValue?: SortOrder
    recommendedQuantity?: SortOrder
    recommendedValue?: SortOrder
    salesQuantity?: SortOrder
    salesValue?: SortOrder
    demandQuantity?: SortOrder
    demandValue?: SortOrder
  }

  export type RecommendationCreateNestedManyWithoutStoreInput = {
    create?: XOR<RecommendationCreateWithoutStoreInput, RecommendationUncheckedCreateWithoutStoreInput> | RecommendationCreateWithoutStoreInput[] | RecommendationUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutStoreInput | RecommendationCreateOrConnectWithoutStoreInput[]
    createMany?: RecommendationCreateManyStoreInputEnvelope
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
  }

  export type DeliveryCreateNestedManyWithoutStoreInput = {
    create?: XOR<DeliveryCreateWithoutStoreInput, DeliveryUncheckedCreateWithoutStoreInput> | DeliveryCreateWithoutStoreInput[] | DeliveryUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutStoreInput | DeliveryCreateOrConnectWithoutStoreInput[]
    createMany?: DeliveryCreateManyStoreInputEnvelope
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
  }

  export type SaleCreateNestedManyWithoutStoreInput = {
    create?: XOR<SaleCreateWithoutStoreInput, SaleUncheckedCreateWithoutStoreInput> | SaleCreateWithoutStoreInput[] | SaleUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutStoreInput | SaleCreateOrConnectWithoutStoreInput[]
    createMany?: SaleCreateManyStoreInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type MetricsCreateNestedManyWithoutStoreInput = {
    create?: XOR<MetricsCreateWithoutStoreInput, MetricsUncheckedCreateWithoutStoreInput> | MetricsCreateWithoutStoreInput[] | MetricsUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: MetricsCreateOrConnectWithoutStoreInput | MetricsCreateOrConnectWithoutStoreInput[]
    createMany?: MetricsCreateManyStoreInputEnvelope
    connect?: MetricsWhereUniqueInput | MetricsWhereUniqueInput[]
  }

  export type RecommendationUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<RecommendationCreateWithoutStoreInput, RecommendationUncheckedCreateWithoutStoreInput> | RecommendationCreateWithoutStoreInput[] | RecommendationUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutStoreInput | RecommendationCreateOrConnectWithoutStoreInput[]
    createMany?: RecommendationCreateManyStoreInputEnvelope
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
  }

  export type DeliveryUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<DeliveryCreateWithoutStoreInput, DeliveryUncheckedCreateWithoutStoreInput> | DeliveryCreateWithoutStoreInput[] | DeliveryUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutStoreInput | DeliveryCreateOrConnectWithoutStoreInput[]
    createMany?: DeliveryCreateManyStoreInputEnvelope
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
  }

  export type SaleUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<SaleCreateWithoutStoreInput, SaleUncheckedCreateWithoutStoreInput> | SaleCreateWithoutStoreInput[] | SaleUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutStoreInput | SaleCreateOrConnectWithoutStoreInput[]
    createMany?: SaleCreateManyStoreInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type MetricsUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<MetricsCreateWithoutStoreInput, MetricsUncheckedCreateWithoutStoreInput> | MetricsCreateWithoutStoreInput[] | MetricsUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: MetricsCreateOrConnectWithoutStoreInput | MetricsCreateOrConnectWithoutStoreInput[]
    createMany?: MetricsCreateManyStoreInputEnvelope
    connect?: MetricsWhereUniqueInput | MetricsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RecommendationUpdateManyWithoutStoreNestedInput = {
    create?: XOR<RecommendationCreateWithoutStoreInput, RecommendationUncheckedCreateWithoutStoreInput> | RecommendationCreateWithoutStoreInput[] | RecommendationUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutStoreInput | RecommendationCreateOrConnectWithoutStoreInput[]
    upsert?: RecommendationUpsertWithWhereUniqueWithoutStoreInput | RecommendationUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: RecommendationCreateManyStoreInputEnvelope
    set?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    disconnect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    delete?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    update?: RecommendationUpdateWithWhereUniqueWithoutStoreInput | RecommendationUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: RecommendationUpdateManyWithWhereWithoutStoreInput | RecommendationUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: RecommendationScalarWhereInput | RecommendationScalarWhereInput[]
  }

  export type DeliveryUpdateManyWithoutStoreNestedInput = {
    create?: XOR<DeliveryCreateWithoutStoreInput, DeliveryUncheckedCreateWithoutStoreInput> | DeliveryCreateWithoutStoreInput[] | DeliveryUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutStoreInput | DeliveryCreateOrConnectWithoutStoreInput[]
    upsert?: DeliveryUpsertWithWhereUniqueWithoutStoreInput | DeliveryUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: DeliveryCreateManyStoreInputEnvelope
    set?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    disconnect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    delete?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    update?: DeliveryUpdateWithWhereUniqueWithoutStoreInput | DeliveryUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: DeliveryUpdateManyWithWhereWithoutStoreInput | DeliveryUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: DeliveryScalarWhereInput | DeliveryScalarWhereInput[]
  }

  export type SaleUpdateManyWithoutStoreNestedInput = {
    create?: XOR<SaleCreateWithoutStoreInput, SaleUncheckedCreateWithoutStoreInput> | SaleCreateWithoutStoreInput[] | SaleUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutStoreInput | SaleCreateOrConnectWithoutStoreInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutStoreInput | SaleUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: SaleCreateManyStoreInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutStoreInput | SaleUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutStoreInput | SaleUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type MetricsUpdateManyWithoutStoreNestedInput = {
    create?: XOR<MetricsCreateWithoutStoreInput, MetricsUncheckedCreateWithoutStoreInput> | MetricsCreateWithoutStoreInput[] | MetricsUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: MetricsCreateOrConnectWithoutStoreInput | MetricsCreateOrConnectWithoutStoreInput[]
    upsert?: MetricsUpsertWithWhereUniqueWithoutStoreInput | MetricsUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: MetricsCreateManyStoreInputEnvelope
    set?: MetricsWhereUniqueInput | MetricsWhereUniqueInput[]
    disconnect?: MetricsWhereUniqueInput | MetricsWhereUniqueInput[]
    delete?: MetricsWhereUniqueInput | MetricsWhereUniqueInput[]
    connect?: MetricsWhereUniqueInput | MetricsWhereUniqueInput[]
    update?: MetricsUpdateWithWhereUniqueWithoutStoreInput | MetricsUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: MetricsUpdateManyWithWhereWithoutStoreInput | MetricsUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: MetricsScalarWhereInput | MetricsScalarWhereInput[]
  }

  export type RecommendationUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<RecommendationCreateWithoutStoreInput, RecommendationUncheckedCreateWithoutStoreInput> | RecommendationCreateWithoutStoreInput[] | RecommendationUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutStoreInput | RecommendationCreateOrConnectWithoutStoreInput[]
    upsert?: RecommendationUpsertWithWhereUniqueWithoutStoreInput | RecommendationUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: RecommendationCreateManyStoreInputEnvelope
    set?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    disconnect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    delete?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    update?: RecommendationUpdateWithWhereUniqueWithoutStoreInput | RecommendationUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: RecommendationUpdateManyWithWhereWithoutStoreInput | RecommendationUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: RecommendationScalarWhereInput | RecommendationScalarWhereInput[]
  }

  export type DeliveryUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<DeliveryCreateWithoutStoreInput, DeliveryUncheckedCreateWithoutStoreInput> | DeliveryCreateWithoutStoreInput[] | DeliveryUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutStoreInput | DeliveryCreateOrConnectWithoutStoreInput[]
    upsert?: DeliveryUpsertWithWhereUniqueWithoutStoreInput | DeliveryUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: DeliveryCreateManyStoreInputEnvelope
    set?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    disconnect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    delete?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    update?: DeliveryUpdateWithWhereUniqueWithoutStoreInput | DeliveryUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: DeliveryUpdateManyWithWhereWithoutStoreInput | DeliveryUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: DeliveryScalarWhereInput | DeliveryScalarWhereInput[]
  }

  export type SaleUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<SaleCreateWithoutStoreInput, SaleUncheckedCreateWithoutStoreInput> | SaleCreateWithoutStoreInput[] | SaleUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutStoreInput | SaleCreateOrConnectWithoutStoreInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutStoreInput | SaleUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: SaleCreateManyStoreInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutStoreInput | SaleUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutStoreInput | SaleUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type MetricsUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<MetricsCreateWithoutStoreInput, MetricsUncheckedCreateWithoutStoreInput> | MetricsCreateWithoutStoreInput[] | MetricsUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: MetricsCreateOrConnectWithoutStoreInput | MetricsCreateOrConnectWithoutStoreInput[]
    upsert?: MetricsUpsertWithWhereUniqueWithoutStoreInput | MetricsUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: MetricsCreateManyStoreInputEnvelope
    set?: MetricsWhereUniqueInput | MetricsWhereUniqueInput[]
    disconnect?: MetricsWhereUniqueInput | MetricsWhereUniqueInput[]
    delete?: MetricsWhereUniqueInput | MetricsWhereUniqueInput[]
    connect?: MetricsWhereUniqueInput | MetricsWhereUniqueInput[]
    update?: MetricsUpdateWithWhereUniqueWithoutStoreInput | MetricsUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: MetricsUpdateManyWithWhereWithoutStoreInput | MetricsUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: MetricsScalarWhereInput | MetricsScalarWhereInput[]
  }

  export type RecommendationCreateNestedManyWithoutProductInput = {
    create?: XOR<RecommendationCreateWithoutProductInput, RecommendationUncheckedCreateWithoutProductInput> | RecommendationCreateWithoutProductInput[] | RecommendationUncheckedCreateWithoutProductInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutProductInput | RecommendationCreateOrConnectWithoutProductInput[]
    createMany?: RecommendationCreateManyProductInputEnvelope
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
  }

  export type DeliveryCreateNestedManyWithoutProductInput = {
    create?: XOR<DeliveryCreateWithoutProductInput, DeliveryUncheckedCreateWithoutProductInput> | DeliveryCreateWithoutProductInput[] | DeliveryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutProductInput | DeliveryCreateOrConnectWithoutProductInput[]
    createMany?: DeliveryCreateManyProductInputEnvelope
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
  }

  export type SaleCreateNestedManyWithoutProductInput = {
    create?: XOR<SaleCreateWithoutProductInput, SaleUncheckedCreateWithoutProductInput> | SaleCreateWithoutProductInput[] | SaleUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutProductInput | SaleCreateOrConnectWithoutProductInput[]
    createMany?: SaleCreateManyProductInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type MetricsCreateNestedManyWithoutProductInput = {
    create?: XOR<MetricsCreateWithoutProductInput, MetricsUncheckedCreateWithoutProductInput> | MetricsCreateWithoutProductInput[] | MetricsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: MetricsCreateOrConnectWithoutProductInput | MetricsCreateOrConnectWithoutProductInput[]
    createMany?: MetricsCreateManyProductInputEnvelope
    connect?: MetricsWhereUniqueInput | MetricsWhereUniqueInput[]
  }

  export type RecommendationUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<RecommendationCreateWithoutProductInput, RecommendationUncheckedCreateWithoutProductInput> | RecommendationCreateWithoutProductInput[] | RecommendationUncheckedCreateWithoutProductInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutProductInput | RecommendationCreateOrConnectWithoutProductInput[]
    createMany?: RecommendationCreateManyProductInputEnvelope
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
  }

  export type DeliveryUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<DeliveryCreateWithoutProductInput, DeliveryUncheckedCreateWithoutProductInput> | DeliveryCreateWithoutProductInput[] | DeliveryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutProductInput | DeliveryCreateOrConnectWithoutProductInput[]
    createMany?: DeliveryCreateManyProductInputEnvelope
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
  }

  export type SaleUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<SaleCreateWithoutProductInput, SaleUncheckedCreateWithoutProductInput> | SaleCreateWithoutProductInput[] | SaleUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutProductInput | SaleCreateOrConnectWithoutProductInput[]
    createMany?: SaleCreateManyProductInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type MetricsUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<MetricsCreateWithoutProductInput, MetricsUncheckedCreateWithoutProductInput> | MetricsCreateWithoutProductInput[] | MetricsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: MetricsCreateOrConnectWithoutProductInput | MetricsCreateOrConnectWithoutProductInput[]
    createMany?: MetricsCreateManyProductInputEnvelope
    connect?: MetricsWhereUniqueInput | MetricsWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RecommendationUpdateManyWithoutProductNestedInput = {
    create?: XOR<RecommendationCreateWithoutProductInput, RecommendationUncheckedCreateWithoutProductInput> | RecommendationCreateWithoutProductInput[] | RecommendationUncheckedCreateWithoutProductInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutProductInput | RecommendationCreateOrConnectWithoutProductInput[]
    upsert?: RecommendationUpsertWithWhereUniqueWithoutProductInput | RecommendationUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: RecommendationCreateManyProductInputEnvelope
    set?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    disconnect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    delete?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    update?: RecommendationUpdateWithWhereUniqueWithoutProductInput | RecommendationUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: RecommendationUpdateManyWithWhereWithoutProductInput | RecommendationUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: RecommendationScalarWhereInput | RecommendationScalarWhereInput[]
  }

  export type DeliveryUpdateManyWithoutProductNestedInput = {
    create?: XOR<DeliveryCreateWithoutProductInput, DeliveryUncheckedCreateWithoutProductInput> | DeliveryCreateWithoutProductInput[] | DeliveryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutProductInput | DeliveryCreateOrConnectWithoutProductInput[]
    upsert?: DeliveryUpsertWithWhereUniqueWithoutProductInput | DeliveryUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: DeliveryCreateManyProductInputEnvelope
    set?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    disconnect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    delete?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    update?: DeliveryUpdateWithWhereUniqueWithoutProductInput | DeliveryUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: DeliveryUpdateManyWithWhereWithoutProductInput | DeliveryUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: DeliveryScalarWhereInput | DeliveryScalarWhereInput[]
  }

  export type SaleUpdateManyWithoutProductNestedInput = {
    create?: XOR<SaleCreateWithoutProductInput, SaleUncheckedCreateWithoutProductInput> | SaleCreateWithoutProductInput[] | SaleUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutProductInput | SaleCreateOrConnectWithoutProductInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutProductInput | SaleUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: SaleCreateManyProductInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutProductInput | SaleUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutProductInput | SaleUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type MetricsUpdateManyWithoutProductNestedInput = {
    create?: XOR<MetricsCreateWithoutProductInput, MetricsUncheckedCreateWithoutProductInput> | MetricsCreateWithoutProductInput[] | MetricsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: MetricsCreateOrConnectWithoutProductInput | MetricsCreateOrConnectWithoutProductInput[]
    upsert?: MetricsUpsertWithWhereUniqueWithoutProductInput | MetricsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: MetricsCreateManyProductInputEnvelope
    set?: MetricsWhereUniqueInput | MetricsWhereUniqueInput[]
    disconnect?: MetricsWhereUniqueInput | MetricsWhereUniqueInput[]
    delete?: MetricsWhereUniqueInput | MetricsWhereUniqueInput[]
    connect?: MetricsWhereUniqueInput | MetricsWhereUniqueInput[]
    update?: MetricsUpdateWithWhereUniqueWithoutProductInput | MetricsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: MetricsUpdateManyWithWhereWithoutProductInput | MetricsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: MetricsScalarWhereInput | MetricsScalarWhereInput[]
  }

  export type RecommendationUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<RecommendationCreateWithoutProductInput, RecommendationUncheckedCreateWithoutProductInput> | RecommendationCreateWithoutProductInput[] | RecommendationUncheckedCreateWithoutProductInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutProductInput | RecommendationCreateOrConnectWithoutProductInput[]
    upsert?: RecommendationUpsertWithWhereUniqueWithoutProductInput | RecommendationUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: RecommendationCreateManyProductInputEnvelope
    set?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    disconnect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    delete?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    update?: RecommendationUpdateWithWhereUniqueWithoutProductInput | RecommendationUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: RecommendationUpdateManyWithWhereWithoutProductInput | RecommendationUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: RecommendationScalarWhereInput | RecommendationScalarWhereInput[]
  }

  export type DeliveryUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<DeliveryCreateWithoutProductInput, DeliveryUncheckedCreateWithoutProductInput> | DeliveryCreateWithoutProductInput[] | DeliveryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutProductInput | DeliveryCreateOrConnectWithoutProductInput[]
    upsert?: DeliveryUpsertWithWhereUniqueWithoutProductInput | DeliveryUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: DeliveryCreateManyProductInputEnvelope
    set?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    disconnect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    delete?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    update?: DeliveryUpdateWithWhereUniqueWithoutProductInput | DeliveryUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: DeliveryUpdateManyWithWhereWithoutProductInput | DeliveryUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: DeliveryScalarWhereInput | DeliveryScalarWhereInput[]
  }

  export type SaleUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<SaleCreateWithoutProductInput, SaleUncheckedCreateWithoutProductInput> | SaleCreateWithoutProductInput[] | SaleUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutProductInput | SaleCreateOrConnectWithoutProductInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutProductInput | SaleUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: SaleCreateManyProductInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutProductInput | SaleUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutProductInput | SaleUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type MetricsUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<MetricsCreateWithoutProductInput, MetricsUncheckedCreateWithoutProductInput> | MetricsCreateWithoutProductInput[] | MetricsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: MetricsCreateOrConnectWithoutProductInput | MetricsCreateOrConnectWithoutProductInput[]
    upsert?: MetricsUpsertWithWhereUniqueWithoutProductInput | MetricsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: MetricsCreateManyProductInputEnvelope
    set?: MetricsWhereUniqueInput | MetricsWhereUniqueInput[]
    disconnect?: MetricsWhereUniqueInput | MetricsWhereUniqueInput[]
    delete?: MetricsWhereUniqueInput | MetricsWhereUniqueInput[]
    connect?: MetricsWhereUniqueInput | MetricsWhereUniqueInput[]
    update?: MetricsUpdateWithWhereUniqueWithoutProductInput | MetricsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: MetricsUpdateManyWithWhereWithoutProductInput | MetricsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: MetricsScalarWhereInput | MetricsScalarWhereInput[]
  }

  export type StoreCreateNestedOneWithoutRecommendationsInput = {
    create?: XOR<StoreCreateWithoutRecommendationsInput, StoreUncheckedCreateWithoutRecommendationsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutRecommendationsInput
    connect?: StoreWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutRecommendationsInput = {
    create?: XOR<ProductCreateWithoutRecommendationsInput, ProductUncheckedCreateWithoutRecommendationsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutRecommendationsInput
    connect?: ProductWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StoreUpdateOneRequiredWithoutRecommendationsNestedInput = {
    create?: XOR<StoreCreateWithoutRecommendationsInput, StoreUncheckedCreateWithoutRecommendationsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutRecommendationsInput
    upsert?: StoreUpsertWithoutRecommendationsInput
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutRecommendationsInput, StoreUpdateWithoutRecommendationsInput>, StoreUncheckedUpdateWithoutRecommendationsInput>
  }

  export type ProductUpdateOneRequiredWithoutRecommendationsNestedInput = {
    create?: XOR<ProductCreateWithoutRecommendationsInput, ProductUncheckedCreateWithoutRecommendationsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutRecommendationsInput
    upsert?: ProductUpsertWithoutRecommendationsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutRecommendationsInput, ProductUpdateWithoutRecommendationsInput>, ProductUncheckedUpdateWithoutRecommendationsInput>
  }

  export type StoreCreateNestedOneWithoutDeliveriesInput = {
    create?: XOR<StoreCreateWithoutDeliveriesInput, StoreUncheckedCreateWithoutDeliveriesInput>
    connectOrCreate?: StoreCreateOrConnectWithoutDeliveriesInput
    connect?: StoreWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutDeliveriesInput = {
    create?: XOR<ProductCreateWithoutDeliveriesInput, ProductUncheckedCreateWithoutDeliveriesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutDeliveriesInput
    connect?: ProductWhereUniqueInput
  }

  export type StoreUpdateOneRequiredWithoutDeliveriesNestedInput = {
    create?: XOR<StoreCreateWithoutDeliveriesInput, StoreUncheckedCreateWithoutDeliveriesInput>
    connectOrCreate?: StoreCreateOrConnectWithoutDeliveriesInput
    upsert?: StoreUpsertWithoutDeliveriesInput
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutDeliveriesInput, StoreUpdateWithoutDeliveriesInput>, StoreUncheckedUpdateWithoutDeliveriesInput>
  }

  export type ProductUpdateOneRequiredWithoutDeliveriesNestedInput = {
    create?: XOR<ProductCreateWithoutDeliveriesInput, ProductUncheckedCreateWithoutDeliveriesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutDeliveriesInput
    upsert?: ProductUpsertWithoutDeliveriesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutDeliveriesInput, ProductUpdateWithoutDeliveriesInput>, ProductUncheckedUpdateWithoutDeliveriesInput>
  }

  export type StoreCreateNestedOneWithoutSaleInput = {
    create?: XOR<StoreCreateWithoutSaleInput, StoreUncheckedCreateWithoutSaleInput>
    connectOrCreate?: StoreCreateOrConnectWithoutSaleInput
    connect?: StoreWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutSaleInput = {
    create?: XOR<ProductCreateWithoutSaleInput, ProductUncheckedCreateWithoutSaleInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSaleInput
    connect?: ProductWhereUniqueInput
  }

  export type StoreUpdateOneRequiredWithoutSaleNestedInput = {
    create?: XOR<StoreCreateWithoutSaleInput, StoreUncheckedCreateWithoutSaleInput>
    connectOrCreate?: StoreCreateOrConnectWithoutSaleInput
    upsert?: StoreUpsertWithoutSaleInput
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutSaleInput, StoreUpdateWithoutSaleInput>, StoreUncheckedUpdateWithoutSaleInput>
  }

  export type ProductUpdateOneRequiredWithoutSaleNestedInput = {
    create?: XOR<ProductCreateWithoutSaleInput, ProductUncheckedCreateWithoutSaleInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSaleInput
    upsert?: ProductUpsertWithoutSaleInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutSaleInput, ProductUpdateWithoutSaleInput>, ProductUncheckedUpdateWithoutSaleInput>
  }

  export type StoreCreateNestedOneWithoutMetricsInput = {
    create?: XOR<StoreCreateWithoutMetricsInput, StoreUncheckedCreateWithoutMetricsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutMetricsInput
    connect?: StoreWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutMetricsInput = {
    create?: XOR<ProductCreateWithoutMetricsInput, ProductUncheckedCreateWithoutMetricsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutMetricsInput
    connect?: ProductWhereUniqueInput
  }

  export type StoreUpdateOneRequiredWithoutMetricsNestedInput = {
    create?: XOR<StoreCreateWithoutMetricsInput, StoreUncheckedCreateWithoutMetricsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutMetricsInput
    upsert?: StoreUpsertWithoutMetricsInput
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutMetricsInput, StoreUpdateWithoutMetricsInput>, StoreUncheckedUpdateWithoutMetricsInput>
  }

  export type ProductUpdateOneRequiredWithoutMetricsNestedInput = {
    create?: XOR<ProductCreateWithoutMetricsInput, ProductUncheckedCreateWithoutMetricsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutMetricsInput
    upsert?: ProductUpsertWithoutMetricsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutMetricsInput, ProductUpdateWithoutMetricsInput>, ProductUncheckedUpdateWithoutMetricsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type RecommendationCreateWithoutStoreInput = {
    targetDate: Date | string
    quantity: number
    value: number
    product: ProductCreateNestedOneWithoutRecommendationsInput
  }

  export type RecommendationUncheckedCreateWithoutStoreInput = {
    targetDate: Date | string
    productId: number
    quantity: number
    value: number
  }

  export type RecommendationCreateOrConnectWithoutStoreInput = {
    where: RecommendationWhereUniqueInput
    create: XOR<RecommendationCreateWithoutStoreInput, RecommendationUncheckedCreateWithoutStoreInput>
  }

  export type RecommendationCreateManyStoreInputEnvelope = {
    data: RecommendationCreateManyStoreInput | RecommendationCreateManyStoreInput[]
  }

  export type DeliveryCreateWithoutStoreInput = {
    targetDate: Date | string
    quantity: number
    value: number
    product: ProductCreateNestedOneWithoutDeliveriesInput
  }

  export type DeliveryUncheckedCreateWithoutStoreInput = {
    targetDate: Date | string
    productId: number
    quantity: number
    value: number
  }

  export type DeliveryCreateOrConnectWithoutStoreInput = {
    where: DeliveryWhereUniqueInput
    create: XOR<DeliveryCreateWithoutStoreInput, DeliveryUncheckedCreateWithoutStoreInput>
  }

  export type DeliveryCreateManyStoreInputEnvelope = {
    data: DeliveryCreateManyStoreInput | DeliveryCreateManyStoreInput[]
  }

  export type SaleCreateWithoutStoreInput = {
    targetDate: Date | string
    salesQuantity: number
    salesValue: number
    demandQuantity: number
    demandValue: number
    product: ProductCreateNestedOneWithoutSaleInput
  }

  export type SaleUncheckedCreateWithoutStoreInput = {
    targetDate: Date | string
    productId: number
    salesQuantity: number
    salesValue: number
    demandQuantity: number
    demandValue: number
  }

  export type SaleCreateOrConnectWithoutStoreInput = {
    where: SaleWhereUniqueInput
    create: XOR<SaleCreateWithoutStoreInput, SaleUncheckedCreateWithoutStoreInput>
  }

  export type SaleCreateManyStoreInputEnvelope = {
    data: SaleCreateManyStoreInput | SaleCreateManyStoreInput[]
  }

  export type MetricsCreateWithoutStoreInput = {
    targetDate: Date | string
    deliveredQuantity: number
    deliveredValue: number
    recommendedQuantity: number
    recommendedValue: number
    salesQuantity: number
    salesValue: number
    demandQuantity: number
    demandValue: number
    product: ProductCreateNestedOneWithoutMetricsInput
  }

  export type MetricsUncheckedCreateWithoutStoreInput = {
    targetDate: Date | string
    productId: number
    deliveredQuantity: number
    deliveredValue: number
    recommendedQuantity: number
    recommendedValue: number
    salesQuantity: number
    salesValue: number
    demandQuantity: number
    demandValue: number
  }

  export type MetricsCreateOrConnectWithoutStoreInput = {
    where: MetricsWhereUniqueInput
    create: XOR<MetricsCreateWithoutStoreInput, MetricsUncheckedCreateWithoutStoreInput>
  }

  export type MetricsCreateManyStoreInputEnvelope = {
    data: MetricsCreateManyStoreInput | MetricsCreateManyStoreInput[]
  }

  export type RecommendationUpsertWithWhereUniqueWithoutStoreInput = {
    where: RecommendationWhereUniqueInput
    update: XOR<RecommendationUpdateWithoutStoreInput, RecommendationUncheckedUpdateWithoutStoreInput>
    create: XOR<RecommendationCreateWithoutStoreInput, RecommendationUncheckedCreateWithoutStoreInput>
  }

  export type RecommendationUpdateWithWhereUniqueWithoutStoreInput = {
    where: RecommendationWhereUniqueInput
    data: XOR<RecommendationUpdateWithoutStoreInput, RecommendationUncheckedUpdateWithoutStoreInput>
  }

  export type RecommendationUpdateManyWithWhereWithoutStoreInput = {
    where: RecommendationScalarWhereInput
    data: XOR<RecommendationUpdateManyMutationInput, RecommendationUncheckedUpdateManyWithoutStoreInput>
  }

  export type RecommendationScalarWhereInput = {
    AND?: RecommendationScalarWhereInput | RecommendationScalarWhereInput[]
    OR?: RecommendationScalarWhereInput[]
    NOT?: RecommendationScalarWhereInput | RecommendationScalarWhereInput[]
    targetDate?: DateTimeFilter<"Recommendation"> | Date | string
    storeId?: IntFilter<"Recommendation"> | number
    productId?: IntFilter<"Recommendation"> | number
    quantity?: IntFilter<"Recommendation"> | number
    value?: FloatFilter<"Recommendation"> | number
  }

  export type DeliveryUpsertWithWhereUniqueWithoutStoreInput = {
    where: DeliveryWhereUniqueInput
    update: XOR<DeliveryUpdateWithoutStoreInput, DeliveryUncheckedUpdateWithoutStoreInput>
    create: XOR<DeliveryCreateWithoutStoreInput, DeliveryUncheckedCreateWithoutStoreInput>
  }

  export type DeliveryUpdateWithWhereUniqueWithoutStoreInput = {
    where: DeliveryWhereUniqueInput
    data: XOR<DeliveryUpdateWithoutStoreInput, DeliveryUncheckedUpdateWithoutStoreInput>
  }

  export type DeliveryUpdateManyWithWhereWithoutStoreInput = {
    where: DeliveryScalarWhereInput
    data: XOR<DeliveryUpdateManyMutationInput, DeliveryUncheckedUpdateManyWithoutStoreInput>
  }

  export type DeliveryScalarWhereInput = {
    AND?: DeliveryScalarWhereInput | DeliveryScalarWhereInput[]
    OR?: DeliveryScalarWhereInput[]
    NOT?: DeliveryScalarWhereInput | DeliveryScalarWhereInput[]
    targetDate?: DateTimeFilter<"Delivery"> | Date | string
    storeId?: IntFilter<"Delivery"> | number
    productId?: IntFilter<"Delivery"> | number
    quantity?: IntFilter<"Delivery"> | number
    value?: FloatFilter<"Delivery"> | number
  }

  export type SaleUpsertWithWhereUniqueWithoutStoreInput = {
    where: SaleWhereUniqueInput
    update: XOR<SaleUpdateWithoutStoreInput, SaleUncheckedUpdateWithoutStoreInput>
    create: XOR<SaleCreateWithoutStoreInput, SaleUncheckedCreateWithoutStoreInput>
  }

  export type SaleUpdateWithWhereUniqueWithoutStoreInput = {
    where: SaleWhereUniqueInput
    data: XOR<SaleUpdateWithoutStoreInput, SaleUncheckedUpdateWithoutStoreInput>
  }

  export type SaleUpdateManyWithWhereWithoutStoreInput = {
    where: SaleScalarWhereInput
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyWithoutStoreInput>
  }

  export type SaleScalarWhereInput = {
    AND?: SaleScalarWhereInput | SaleScalarWhereInput[]
    OR?: SaleScalarWhereInput[]
    NOT?: SaleScalarWhereInput | SaleScalarWhereInput[]
    targetDate?: DateTimeFilter<"Sale"> | Date | string
    storeId?: IntFilter<"Sale"> | number
    productId?: IntFilter<"Sale"> | number
    salesQuantity?: IntFilter<"Sale"> | number
    salesValue?: FloatFilter<"Sale"> | number
    demandQuantity?: IntFilter<"Sale"> | number
    demandValue?: FloatFilter<"Sale"> | number
  }

  export type MetricsUpsertWithWhereUniqueWithoutStoreInput = {
    where: MetricsWhereUniqueInput
    update: XOR<MetricsUpdateWithoutStoreInput, MetricsUncheckedUpdateWithoutStoreInput>
    create: XOR<MetricsCreateWithoutStoreInput, MetricsUncheckedCreateWithoutStoreInput>
  }

  export type MetricsUpdateWithWhereUniqueWithoutStoreInput = {
    where: MetricsWhereUniqueInput
    data: XOR<MetricsUpdateWithoutStoreInput, MetricsUncheckedUpdateWithoutStoreInput>
  }

  export type MetricsUpdateManyWithWhereWithoutStoreInput = {
    where: MetricsScalarWhereInput
    data: XOR<MetricsUpdateManyMutationInput, MetricsUncheckedUpdateManyWithoutStoreInput>
  }

  export type MetricsScalarWhereInput = {
    AND?: MetricsScalarWhereInput | MetricsScalarWhereInput[]
    OR?: MetricsScalarWhereInput[]
    NOT?: MetricsScalarWhereInput | MetricsScalarWhereInput[]
    targetDate?: DateTimeFilter<"Metrics"> | Date | string
    storeId?: IntFilter<"Metrics"> | number
    productId?: IntFilter<"Metrics"> | number
    deliveredQuantity?: IntFilter<"Metrics"> | number
    deliveredValue?: FloatFilter<"Metrics"> | number
    recommendedQuantity?: IntFilter<"Metrics"> | number
    recommendedValue?: FloatFilter<"Metrics"> | number
    salesQuantity?: IntFilter<"Metrics"> | number
    salesValue?: FloatFilter<"Metrics"> | number
    demandQuantity?: IntFilter<"Metrics"> | number
    demandValue?: FloatFilter<"Metrics"> | number
  }

  export type RecommendationCreateWithoutProductInput = {
    targetDate: Date | string
    quantity: number
    value: number
    store: StoreCreateNestedOneWithoutRecommendationsInput
  }

  export type RecommendationUncheckedCreateWithoutProductInput = {
    targetDate: Date | string
    storeId: number
    quantity: number
    value: number
  }

  export type RecommendationCreateOrConnectWithoutProductInput = {
    where: RecommendationWhereUniqueInput
    create: XOR<RecommendationCreateWithoutProductInput, RecommendationUncheckedCreateWithoutProductInput>
  }

  export type RecommendationCreateManyProductInputEnvelope = {
    data: RecommendationCreateManyProductInput | RecommendationCreateManyProductInput[]
  }

  export type DeliveryCreateWithoutProductInput = {
    targetDate: Date | string
    quantity: number
    value: number
    store: StoreCreateNestedOneWithoutDeliveriesInput
  }

  export type DeliveryUncheckedCreateWithoutProductInput = {
    targetDate: Date | string
    storeId: number
    quantity: number
    value: number
  }

  export type DeliveryCreateOrConnectWithoutProductInput = {
    where: DeliveryWhereUniqueInput
    create: XOR<DeliveryCreateWithoutProductInput, DeliveryUncheckedCreateWithoutProductInput>
  }

  export type DeliveryCreateManyProductInputEnvelope = {
    data: DeliveryCreateManyProductInput | DeliveryCreateManyProductInput[]
  }

  export type SaleCreateWithoutProductInput = {
    targetDate: Date | string
    salesQuantity: number
    salesValue: number
    demandQuantity: number
    demandValue: number
    store: StoreCreateNestedOneWithoutSaleInput
  }

  export type SaleUncheckedCreateWithoutProductInput = {
    targetDate: Date | string
    storeId: number
    salesQuantity: number
    salesValue: number
    demandQuantity: number
    demandValue: number
  }

  export type SaleCreateOrConnectWithoutProductInput = {
    where: SaleWhereUniqueInput
    create: XOR<SaleCreateWithoutProductInput, SaleUncheckedCreateWithoutProductInput>
  }

  export type SaleCreateManyProductInputEnvelope = {
    data: SaleCreateManyProductInput | SaleCreateManyProductInput[]
  }

  export type MetricsCreateWithoutProductInput = {
    targetDate: Date | string
    deliveredQuantity: number
    deliveredValue: number
    recommendedQuantity: number
    recommendedValue: number
    salesQuantity: number
    salesValue: number
    demandQuantity: number
    demandValue: number
    store: StoreCreateNestedOneWithoutMetricsInput
  }

  export type MetricsUncheckedCreateWithoutProductInput = {
    targetDate: Date | string
    storeId: number
    deliveredQuantity: number
    deliveredValue: number
    recommendedQuantity: number
    recommendedValue: number
    salesQuantity: number
    salesValue: number
    demandQuantity: number
    demandValue: number
  }

  export type MetricsCreateOrConnectWithoutProductInput = {
    where: MetricsWhereUniqueInput
    create: XOR<MetricsCreateWithoutProductInput, MetricsUncheckedCreateWithoutProductInput>
  }

  export type MetricsCreateManyProductInputEnvelope = {
    data: MetricsCreateManyProductInput | MetricsCreateManyProductInput[]
  }

  export type RecommendationUpsertWithWhereUniqueWithoutProductInput = {
    where: RecommendationWhereUniqueInput
    update: XOR<RecommendationUpdateWithoutProductInput, RecommendationUncheckedUpdateWithoutProductInput>
    create: XOR<RecommendationCreateWithoutProductInput, RecommendationUncheckedCreateWithoutProductInput>
  }

  export type RecommendationUpdateWithWhereUniqueWithoutProductInput = {
    where: RecommendationWhereUniqueInput
    data: XOR<RecommendationUpdateWithoutProductInput, RecommendationUncheckedUpdateWithoutProductInput>
  }

  export type RecommendationUpdateManyWithWhereWithoutProductInput = {
    where: RecommendationScalarWhereInput
    data: XOR<RecommendationUpdateManyMutationInput, RecommendationUncheckedUpdateManyWithoutProductInput>
  }

  export type DeliveryUpsertWithWhereUniqueWithoutProductInput = {
    where: DeliveryWhereUniqueInput
    update: XOR<DeliveryUpdateWithoutProductInput, DeliveryUncheckedUpdateWithoutProductInput>
    create: XOR<DeliveryCreateWithoutProductInput, DeliveryUncheckedCreateWithoutProductInput>
  }

  export type DeliveryUpdateWithWhereUniqueWithoutProductInput = {
    where: DeliveryWhereUniqueInput
    data: XOR<DeliveryUpdateWithoutProductInput, DeliveryUncheckedUpdateWithoutProductInput>
  }

  export type DeliveryUpdateManyWithWhereWithoutProductInput = {
    where: DeliveryScalarWhereInput
    data: XOR<DeliveryUpdateManyMutationInput, DeliveryUncheckedUpdateManyWithoutProductInput>
  }

  export type SaleUpsertWithWhereUniqueWithoutProductInput = {
    where: SaleWhereUniqueInput
    update: XOR<SaleUpdateWithoutProductInput, SaleUncheckedUpdateWithoutProductInput>
    create: XOR<SaleCreateWithoutProductInput, SaleUncheckedCreateWithoutProductInput>
  }

  export type SaleUpdateWithWhereUniqueWithoutProductInput = {
    where: SaleWhereUniqueInput
    data: XOR<SaleUpdateWithoutProductInput, SaleUncheckedUpdateWithoutProductInput>
  }

  export type SaleUpdateManyWithWhereWithoutProductInput = {
    where: SaleScalarWhereInput
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyWithoutProductInput>
  }

  export type MetricsUpsertWithWhereUniqueWithoutProductInput = {
    where: MetricsWhereUniqueInput
    update: XOR<MetricsUpdateWithoutProductInput, MetricsUncheckedUpdateWithoutProductInput>
    create: XOR<MetricsCreateWithoutProductInput, MetricsUncheckedCreateWithoutProductInput>
  }

  export type MetricsUpdateWithWhereUniqueWithoutProductInput = {
    where: MetricsWhereUniqueInput
    data: XOR<MetricsUpdateWithoutProductInput, MetricsUncheckedUpdateWithoutProductInput>
  }

  export type MetricsUpdateManyWithWhereWithoutProductInput = {
    where: MetricsScalarWhereInput
    data: XOR<MetricsUpdateManyMutationInput, MetricsUncheckedUpdateManyWithoutProductInput>
  }

  export type StoreCreateWithoutRecommendationsInput = {
    label: string
    number: number
    deliveries?: DeliveryCreateNestedManyWithoutStoreInput
    Sale?: SaleCreateNestedManyWithoutStoreInput
    Metrics?: MetricsCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutRecommendationsInput = {
    id?: number
    label: string
    number: number
    deliveries?: DeliveryUncheckedCreateNestedManyWithoutStoreInput
    Sale?: SaleUncheckedCreateNestedManyWithoutStoreInput
    Metrics?: MetricsUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutRecommendationsInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutRecommendationsInput, StoreUncheckedCreateWithoutRecommendationsInput>
  }

  export type ProductCreateWithoutRecommendationsInput = {
    name: string
    number: number
    price: number
    deliveries?: DeliveryCreateNestedManyWithoutProductInput
    Sale?: SaleCreateNestedManyWithoutProductInput
    Metrics?: MetricsCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutRecommendationsInput = {
    id?: number
    name: string
    number: number
    price: number
    deliveries?: DeliveryUncheckedCreateNestedManyWithoutProductInput
    Sale?: SaleUncheckedCreateNestedManyWithoutProductInput
    Metrics?: MetricsUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutRecommendationsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutRecommendationsInput, ProductUncheckedCreateWithoutRecommendationsInput>
  }

  export type StoreUpsertWithoutRecommendationsInput = {
    update: XOR<StoreUpdateWithoutRecommendationsInput, StoreUncheckedUpdateWithoutRecommendationsInput>
    create: XOR<StoreCreateWithoutRecommendationsInput, StoreUncheckedCreateWithoutRecommendationsInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutRecommendationsInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutRecommendationsInput, StoreUncheckedUpdateWithoutRecommendationsInput>
  }

  export type StoreUpdateWithoutRecommendationsInput = {
    label?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    deliveries?: DeliveryUpdateManyWithoutStoreNestedInput
    Sale?: SaleUpdateManyWithoutStoreNestedInput
    Metrics?: MetricsUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutRecommendationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    deliveries?: DeliveryUncheckedUpdateManyWithoutStoreNestedInput
    Sale?: SaleUncheckedUpdateManyWithoutStoreNestedInput
    Metrics?: MetricsUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type ProductUpsertWithoutRecommendationsInput = {
    update: XOR<ProductUpdateWithoutRecommendationsInput, ProductUncheckedUpdateWithoutRecommendationsInput>
    create: XOR<ProductCreateWithoutRecommendationsInput, ProductUncheckedCreateWithoutRecommendationsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutRecommendationsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutRecommendationsInput, ProductUncheckedUpdateWithoutRecommendationsInput>
  }

  export type ProductUpdateWithoutRecommendationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    deliveries?: DeliveryUpdateManyWithoutProductNestedInput
    Sale?: SaleUpdateManyWithoutProductNestedInput
    Metrics?: MetricsUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutRecommendationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    deliveries?: DeliveryUncheckedUpdateManyWithoutProductNestedInput
    Sale?: SaleUncheckedUpdateManyWithoutProductNestedInput
    Metrics?: MetricsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type StoreCreateWithoutDeliveriesInput = {
    label: string
    number: number
    recommendations?: RecommendationCreateNestedManyWithoutStoreInput
    Sale?: SaleCreateNestedManyWithoutStoreInput
    Metrics?: MetricsCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutDeliveriesInput = {
    id?: number
    label: string
    number: number
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutStoreInput
    Sale?: SaleUncheckedCreateNestedManyWithoutStoreInput
    Metrics?: MetricsUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutDeliveriesInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutDeliveriesInput, StoreUncheckedCreateWithoutDeliveriesInput>
  }

  export type ProductCreateWithoutDeliveriesInput = {
    name: string
    number: number
    price: number
    recommendations?: RecommendationCreateNestedManyWithoutProductInput
    Sale?: SaleCreateNestedManyWithoutProductInput
    Metrics?: MetricsCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutDeliveriesInput = {
    id?: number
    name: string
    number: number
    price: number
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutProductInput
    Sale?: SaleUncheckedCreateNestedManyWithoutProductInput
    Metrics?: MetricsUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutDeliveriesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutDeliveriesInput, ProductUncheckedCreateWithoutDeliveriesInput>
  }

  export type StoreUpsertWithoutDeliveriesInput = {
    update: XOR<StoreUpdateWithoutDeliveriesInput, StoreUncheckedUpdateWithoutDeliveriesInput>
    create: XOR<StoreCreateWithoutDeliveriesInput, StoreUncheckedCreateWithoutDeliveriesInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutDeliveriesInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutDeliveriesInput, StoreUncheckedUpdateWithoutDeliveriesInput>
  }

  export type StoreUpdateWithoutDeliveriesInput = {
    label?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    recommendations?: RecommendationUpdateManyWithoutStoreNestedInput
    Sale?: SaleUpdateManyWithoutStoreNestedInput
    Metrics?: MetricsUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutDeliveriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    recommendations?: RecommendationUncheckedUpdateManyWithoutStoreNestedInput
    Sale?: SaleUncheckedUpdateManyWithoutStoreNestedInput
    Metrics?: MetricsUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type ProductUpsertWithoutDeliveriesInput = {
    update: XOR<ProductUpdateWithoutDeliveriesInput, ProductUncheckedUpdateWithoutDeliveriesInput>
    create: XOR<ProductCreateWithoutDeliveriesInput, ProductUncheckedCreateWithoutDeliveriesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutDeliveriesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutDeliveriesInput, ProductUncheckedUpdateWithoutDeliveriesInput>
  }

  export type ProductUpdateWithoutDeliveriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    recommendations?: RecommendationUpdateManyWithoutProductNestedInput
    Sale?: SaleUpdateManyWithoutProductNestedInput
    Metrics?: MetricsUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutDeliveriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    recommendations?: RecommendationUncheckedUpdateManyWithoutProductNestedInput
    Sale?: SaleUncheckedUpdateManyWithoutProductNestedInput
    Metrics?: MetricsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type StoreCreateWithoutSaleInput = {
    label: string
    number: number
    recommendations?: RecommendationCreateNestedManyWithoutStoreInput
    deliveries?: DeliveryCreateNestedManyWithoutStoreInput
    Metrics?: MetricsCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutSaleInput = {
    id?: number
    label: string
    number: number
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutStoreInput
    deliveries?: DeliveryUncheckedCreateNestedManyWithoutStoreInput
    Metrics?: MetricsUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutSaleInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutSaleInput, StoreUncheckedCreateWithoutSaleInput>
  }

  export type ProductCreateWithoutSaleInput = {
    name: string
    number: number
    price: number
    recommendations?: RecommendationCreateNestedManyWithoutProductInput
    deliveries?: DeliveryCreateNestedManyWithoutProductInput
    Metrics?: MetricsCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutSaleInput = {
    id?: number
    name: string
    number: number
    price: number
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutProductInput
    deliveries?: DeliveryUncheckedCreateNestedManyWithoutProductInput
    Metrics?: MetricsUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutSaleInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutSaleInput, ProductUncheckedCreateWithoutSaleInput>
  }

  export type StoreUpsertWithoutSaleInput = {
    update: XOR<StoreUpdateWithoutSaleInput, StoreUncheckedUpdateWithoutSaleInput>
    create: XOR<StoreCreateWithoutSaleInput, StoreUncheckedCreateWithoutSaleInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutSaleInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutSaleInput, StoreUncheckedUpdateWithoutSaleInput>
  }

  export type StoreUpdateWithoutSaleInput = {
    label?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    recommendations?: RecommendationUpdateManyWithoutStoreNestedInput
    deliveries?: DeliveryUpdateManyWithoutStoreNestedInput
    Metrics?: MetricsUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutSaleInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    recommendations?: RecommendationUncheckedUpdateManyWithoutStoreNestedInput
    deliveries?: DeliveryUncheckedUpdateManyWithoutStoreNestedInput
    Metrics?: MetricsUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type ProductUpsertWithoutSaleInput = {
    update: XOR<ProductUpdateWithoutSaleInput, ProductUncheckedUpdateWithoutSaleInput>
    create: XOR<ProductCreateWithoutSaleInput, ProductUncheckedCreateWithoutSaleInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutSaleInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutSaleInput, ProductUncheckedUpdateWithoutSaleInput>
  }

  export type ProductUpdateWithoutSaleInput = {
    name?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    recommendations?: RecommendationUpdateManyWithoutProductNestedInput
    deliveries?: DeliveryUpdateManyWithoutProductNestedInput
    Metrics?: MetricsUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutSaleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    recommendations?: RecommendationUncheckedUpdateManyWithoutProductNestedInput
    deliveries?: DeliveryUncheckedUpdateManyWithoutProductNestedInput
    Metrics?: MetricsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type StoreCreateWithoutMetricsInput = {
    label: string
    number: number
    recommendations?: RecommendationCreateNestedManyWithoutStoreInput
    deliveries?: DeliveryCreateNestedManyWithoutStoreInput
    Sale?: SaleCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutMetricsInput = {
    id?: number
    label: string
    number: number
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutStoreInput
    deliveries?: DeliveryUncheckedCreateNestedManyWithoutStoreInput
    Sale?: SaleUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutMetricsInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutMetricsInput, StoreUncheckedCreateWithoutMetricsInput>
  }

  export type ProductCreateWithoutMetricsInput = {
    name: string
    number: number
    price: number
    recommendations?: RecommendationCreateNestedManyWithoutProductInput
    deliveries?: DeliveryCreateNestedManyWithoutProductInput
    Sale?: SaleCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutMetricsInput = {
    id?: number
    name: string
    number: number
    price: number
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutProductInput
    deliveries?: DeliveryUncheckedCreateNestedManyWithoutProductInput
    Sale?: SaleUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutMetricsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutMetricsInput, ProductUncheckedCreateWithoutMetricsInput>
  }

  export type StoreUpsertWithoutMetricsInput = {
    update: XOR<StoreUpdateWithoutMetricsInput, StoreUncheckedUpdateWithoutMetricsInput>
    create: XOR<StoreCreateWithoutMetricsInput, StoreUncheckedCreateWithoutMetricsInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutMetricsInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutMetricsInput, StoreUncheckedUpdateWithoutMetricsInput>
  }

  export type StoreUpdateWithoutMetricsInput = {
    label?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    recommendations?: RecommendationUpdateManyWithoutStoreNestedInput
    deliveries?: DeliveryUpdateManyWithoutStoreNestedInput
    Sale?: SaleUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutMetricsInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    recommendations?: RecommendationUncheckedUpdateManyWithoutStoreNestedInput
    deliveries?: DeliveryUncheckedUpdateManyWithoutStoreNestedInput
    Sale?: SaleUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type ProductUpsertWithoutMetricsInput = {
    update: XOR<ProductUpdateWithoutMetricsInput, ProductUncheckedUpdateWithoutMetricsInput>
    create: XOR<ProductCreateWithoutMetricsInput, ProductUncheckedCreateWithoutMetricsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutMetricsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutMetricsInput, ProductUncheckedUpdateWithoutMetricsInput>
  }

  export type ProductUpdateWithoutMetricsInput = {
    name?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    recommendations?: RecommendationUpdateManyWithoutProductNestedInput
    deliveries?: DeliveryUpdateManyWithoutProductNestedInput
    Sale?: SaleUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutMetricsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    recommendations?: RecommendationUncheckedUpdateManyWithoutProductNestedInput
    deliveries?: DeliveryUncheckedUpdateManyWithoutProductNestedInput
    Sale?: SaleUncheckedUpdateManyWithoutProductNestedInput
  }

  export type RecommendationCreateManyStoreInput = {
    targetDate: Date | string
    productId: number
    quantity: number
    value: number
  }

  export type DeliveryCreateManyStoreInput = {
    targetDate: Date | string
    productId: number
    quantity: number
    value: number
  }

  export type SaleCreateManyStoreInput = {
    targetDate: Date | string
    productId: number
    salesQuantity: number
    salesValue: number
    demandQuantity: number
    demandValue: number
  }

  export type MetricsCreateManyStoreInput = {
    targetDate: Date | string
    productId: number
    deliveredQuantity: number
    deliveredValue: number
    recommendedQuantity: number
    recommendedValue: number
    salesQuantity: number
    salesValue: number
    demandQuantity: number
    demandValue: number
  }

  export type RecommendationUpdateWithoutStoreInput = {
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    value?: FloatFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutRecommendationsNestedInput
  }

  export type RecommendationUncheckedUpdateWithoutStoreInput = {
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type RecommendationUncheckedUpdateManyWithoutStoreInput = {
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type DeliveryUpdateWithoutStoreInput = {
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    value?: FloatFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutDeliveriesNestedInput
  }

  export type DeliveryUncheckedUpdateWithoutStoreInput = {
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type DeliveryUncheckedUpdateManyWithoutStoreInput = {
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type SaleUpdateWithoutStoreInput = {
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    salesQuantity?: IntFieldUpdateOperationsInput | number
    salesValue?: FloatFieldUpdateOperationsInput | number
    demandQuantity?: IntFieldUpdateOperationsInput | number
    demandValue?: FloatFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateWithoutStoreInput = {
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: IntFieldUpdateOperationsInput | number
    salesQuantity?: IntFieldUpdateOperationsInput | number
    salesValue?: FloatFieldUpdateOperationsInput | number
    demandQuantity?: IntFieldUpdateOperationsInput | number
    demandValue?: FloatFieldUpdateOperationsInput | number
  }

  export type SaleUncheckedUpdateManyWithoutStoreInput = {
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: IntFieldUpdateOperationsInput | number
    salesQuantity?: IntFieldUpdateOperationsInput | number
    salesValue?: FloatFieldUpdateOperationsInput | number
    demandQuantity?: IntFieldUpdateOperationsInput | number
    demandValue?: FloatFieldUpdateOperationsInput | number
  }

  export type MetricsUpdateWithoutStoreInput = {
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveredQuantity?: IntFieldUpdateOperationsInput | number
    deliveredValue?: FloatFieldUpdateOperationsInput | number
    recommendedQuantity?: IntFieldUpdateOperationsInput | number
    recommendedValue?: FloatFieldUpdateOperationsInput | number
    salesQuantity?: IntFieldUpdateOperationsInput | number
    salesValue?: FloatFieldUpdateOperationsInput | number
    demandQuantity?: IntFieldUpdateOperationsInput | number
    demandValue?: FloatFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutMetricsNestedInput
  }

  export type MetricsUncheckedUpdateWithoutStoreInput = {
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: IntFieldUpdateOperationsInput | number
    deliveredQuantity?: IntFieldUpdateOperationsInput | number
    deliveredValue?: FloatFieldUpdateOperationsInput | number
    recommendedQuantity?: IntFieldUpdateOperationsInput | number
    recommendedValue?: FloatFieldUpdateOperationsInput | number
    salesQuantity?: IntFieldUpdateOperationsInput | number
    salesValue?: FloatFieldUpdateOperationsInput | number
    demandQuantity?: IntFieldUpdateOperationsInput | number
    demandValue?: FloatFieldUpdateOperationsInput | number
  }

  export type MetricsUncheckedUpdateManyWithoutStoreInput = {
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: IntFieldUpdateOperationsInput | number
    deliveredQuantity?: IntFieldUpdateOperationsInput | number
    deliveredValue?: FloatFieldUpdateOperationsInput | number
    recommendedQuantity?: IntFieldUpdateOperationsInput | number
    recommendedValue?: FloatFieldUpdateOperationsInput | number
    salesQuantity?: IntFieldUpdateOperationsInput | number
    salesValue?: FloatFieldUpdateOperationsInput | number
    demandQuantity?: IntFieldUpdateOperationsInput | number
    demandValue?: FloatFieldUpdateOperationsInput | number
  }

  export type RecommendationCreateManyProductInput = {
    targetDate: Date | string
    storeId: number
    quantity: number
    value: number
  }

  export type DeliveryCreateManyProductInput = {
    targetDate: Date | string
    storeId: number
    quantity: number
    value: number
  }

  export type SaleCreateManyProductInput = {
    targetDate: Date | string
    storeId: number
    salesQuantity: number
    salesValue: number
    demandQuantity: number
    demandValue: number
  }

  export type MetricsCreateManyProductInput = {
    targetDate: Date | string
    storeId: number
    deliveredQuantity: number
    deliveredValue: number
    recommendedQuantity: number
    recommendedValue: number
    salesQuantity: number
    salesValue: number
    demandQuantity: number
    demandValue: number
  }

  export type RecommendationUpdateWithoutProductInput = {
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    value?: FloatFieldUpdateOperationsInput | number
    store?: StoreUpdateOneRequiredWithoutRecommendationsNestedInput
  }

  export type RecommendationUncheckedUpdateWithoutProductInput = {
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    storeId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type RecommendationUncheckedUpdateManyWithoutProductInput = {
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    storeId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type DeliveryUpdateWithoutProductInput = {
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    value?: FloatFieldUpdateOperationsInput | number
    store?: StoreUpdateOneRequiredWithoutDeliveriesNestedInput
  }

  export type DeliveryUncheckedUpdateWithoutProductInput = {
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    storeId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type DeliveryUncheckedUpdateManyWithoutProductInput = {
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    storeId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type SaleUpdateWithoutProductInput = {
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    salesQuantity?: IntFieldUpdateOperationsInput | number
    salesValue?: FloatFieldUpdateOperationsInput | number
    demandQuantity?: IntFieldUpdateOperationsInput | number
    demandValue?: FloatFieldUpdateOperationsInput | number
    store?: StoreUpdateOneRequiredWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateWithoutProductInput = {
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    storeId?: IntFieldUpdateOperationsInput | number
    salesQuantity?: IntFieldUpdateOperationsInput | number
    salesValue?: FloatFieldUpdateOperationsInput | number
    demandQuantity?: IntFieldUpdateOperationsInput | number
    demandValue?: FloatFieldUpdateOperationsInput | number
  }

  export type SaleUncheckedUpdateManyWithoutProductInput = {
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    storeId?: IntFieldUpdateOperationsInput | number
    salesQuantity?: IntFieldUpdateOperationsInput | number
    salesValue?: FloatFieldUpdateOperationsInput | number
    demandQuantity?: IntFieldUpdateOperationsInput | number
    demandValue?: FloatFieldUpdateOperationsInput | number
  }

  export type MetricsUpdateWithoutProductInput = {
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveredQuantity?: IntFieldUpdateOperationsInput | number
    deliveredValue?: FloatFieldUpdateOperationsInput | number
    recommendedQuantity?: IntFieldUpdateOperationsInput | number
    recommendedValue?: FloatFieldUpdateOperationsInput | number
    salesQuantity?: IntFieldUpdateOperationsInput | number
    salesValue?: FloatFieldUpdateOperationsInput | number
    demandQuantity?: IntFieldUpdateOperationsInput | number
    demandValue?: FloatFieldUpdateOperationsInput | number
    store?: StoreUpdateOneRequiredWithoutMetricsNestedInput
  }

  export type MetricsUncheckedUpdateWithoutProductInput = {
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    storeId?: IntFieldUpdateOperationsInput | number
    deliveredQuantity?: IntFieldUpdateOperationsInput | number
    deliveredValue?: FloatFieldUpdateOperationsInput | number
    recommendedQuantity?: IntFieldUpdateOperationsInput | number
    recommendedValue?: FloatFieldUpdateOperationsInput | number
    salesQuantity?: IntFieldUpdateOperationsInput | number
    salesValue?: FloatFieldUpdateOperationsInput | number
    demandQuantity?: IntFieldUpdateOperationsInput | number
    demandValue?: FloatFieldUpdateOperationsInput | number
  }

  export type MetricsUncheckedUpdateManyWithoutProductInput = {
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    storeId?: IntFieldUpdateOperationsInput | number
    deliveredQuantity?: IntFieldUpdateOperationsInput | number
    deliveredValue?: FloatFieldUpdateOperationsInput | number
    recommendedQuantity?: IntFieldUpdateOperationsInput | number
    recommendedValue?: FloatFieldUpdateOperationsInput | number
    salesQuantity?: IntFieldUpdateOperationsInput | number
    salesValue?: FloatFieldUpdateOperationsInput | number
    demandQuantity?: IntFieldUpdateOperationsInput | number
    demandValue?: FloatFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use StoreCountOutputTypeDefaultArgs instead
     */
    export type StoreCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StoreCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductCountOutputTypeDefaultArgs instead
     */
    export type ProductCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StoreDefaultArgs instead
     */
    export type StoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StoreDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductDefaultArgs instead
     */
    export type ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RecommendationDefaultArgs instead
     */
    export type RecommendationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RecommendationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DeliveryDefaultArgs instead
     */
    export type DeliveryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DeliveryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SaleDefaultArgs instead
     */
    export type SaleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SaleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MetricsDefaultArgs instead
     */
    export type MetricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MetricsDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}