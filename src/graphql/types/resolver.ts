// Apollo
import { NormalizedCacheObject } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { ApolloCache } from 'apollo-cache'


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