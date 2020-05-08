// Graphql
import { gql } from '@apollo/client'

export type SetChargeLimitArgs = {
    percent: Number, // The percentage the battery will charge until. Must be between 0 - 100.
    id: string,
}

export type SetChargeLimitPayload = {
    reason: string,
    result: boolean,
}

export type SetChargeLimitResult = {
    SetChargeLimit: SetChargeLimitPayload,
}

export const SET_CHARGE_LIMIT = gql`
    mutation SetChargeLimit(
        $input: SetChargeLimitInput!
        $id: String!
    ) {
        setChargeLimit(
            body: $input
            id: $id
        ) @rest(
            path: "/api/1/vehicles/{args.id}/command/set_charge_limit"
            bodyKey: "body"
            method: "POST"
        ) {
            reason
            result
        }
    }
`
/* SAMPLE RESPONSE
// Sets the charge limit to a custom value.
{
  "reason": "",
  "result": true
}
*/