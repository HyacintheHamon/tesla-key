// Graphql
import { gql } from '@apollo/client'


export type HonkHornArgs = {
    input: {
        foo: string,
        bar: number,
    },
    id: string,
}

export type HonkHornPayload = {
    reason: string,
    result: boolean,
}

export type HonkHornResult = {
    honkHorn: HonkHornPayload,
}

export const HONK_HORN = gql`
    mutation HonkHorn(
        $input: HonkHornInput!
        $id: String!
    ) {
        honkHorn(
            body: $input
            id: $id
        ) @rest(
            path: "/api/1/vehicles/{args.id}/command/honk_horn"
            type: "DriverState"
            bodyKey: "body"
            method: "POST"
        ) {
            reason
            result
        }
    }
`