// Apollo
import { ApolloClient, ApolloCache, NormalizedCacheObject } from '@apollo/client'


export type InputArgs<Input> = {
    input: Input,
}

export type Context<
    TCacheShape = NormalizedCacheObject
> = {
    client: ApolloClient<TCacheShape>,
    cache: ApolloCache<TCacheShape>,
    getCacheKey: (params: {
        __typename: string,
        id: string,
    }) => string,
}

export type LocalResolver<
    TResult, TRoot, TArgs, TContext = Context, TInfo = any
> = (
    obj: TRoot, args: TArgs, context: TContext, info: TInfo
) => TResult

export type AsyncLocalResolver<
    TResult, TRoot, TArgs, TContext = Context, TInfo = any
> = (
    obj: TRoot, args: TArgs, context: TContext, info: TInfo
) => Promise<TResult>