// Graphql
import { gql } from '@apollo/client'

export type setPreconditioningMaxArgs = {
    id: string,
}

export type setPreconditioningMaxPayload = {
    reason: string,
    result: boolean,
}

export type setPreconditioningMaxResult = {
    setPreconditioningMax: setPreconditioningMaxPayload,
}

export const SET_PRECONDITIONING_MAX = gql`
    mutation setPreconditioningMax(
        $input: setPreconditioningMaxInput!
        $id: String!
    ) {
        setPreconditioningMax(
            body: $input
            id: $id
        ) @rest(
            path: "/api/1/vehicles/{args.id}/command/set_preconditioning_max"
            bodyKey: "body"
            method: "POST"
        ) {
            reason
            result
        }
    }
`
/* SAMPLE RESPONSE
// Toggles the climate controls between Max Defrost and the previous setting.
{
  "reason": "",
  "result": true
}
*/