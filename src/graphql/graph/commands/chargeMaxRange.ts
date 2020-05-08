// Graphql
import { gql } from '@apollo/client'

export type ChargeMaxRangeArgs = {
    id: string,
}

export type ChargeMaxRangePayload = {
    reason: string,
    result: boolean,
}

export type ChargeMaxRangeResult = {
    chargeMaxRange: ChargeMaxRangePayload,
}

export const CHARGE_MAX_RANGE = gql`
    mutation ChargeMaxRange(
        $input: ChargeMaxRangeInput!
        $id: String!
    ) {
        chargeMaxRange(
            body: $input
            id: $id
        ) @rest(
            path: "/api/1/vehicles/{args.id}/command/charge_max_range"
            bodyKey: "body"
            method: "POST"
        ) {
            reason
            result
        }
    }
`
/* SAMPLE RESPONSE
// Sets the charge limit to "max range" or 100%.
{
  "reason": "",
  "result": true
}
*/