export type PageInfo = {
    hasPreviousPage: boolean,
    hasNextPage: boolean,
    startCursor: string,
    endCursor: string,
}

export type Connection<TNode> = {
    edges: {
        cursor: string,
        node: TNode,
    }[],
    pageInfo: PageInfo,
}