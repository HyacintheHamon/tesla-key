// Graphql
import { gql } from '@apollo/client'

export type ChargeStandardArgs = {
    id: string,
}

export type ChargeStandardPayload = {
    reason: string,
    result: boolean,
}

export type ChargeStandardResult = {
    chargeStandard: ChargeStandardPayload,
}

export const CHARGE_STANDARD = gql`
    mutation ChargeStandard(
        $input: ChargeStandardInput!
        $id: String!
    ) {
        chargeStandard(
            body: $input
            id: $id
        ) @rest(
            path: "/api/1/vehicles/{args.id}/command/charge_standard"
            bodyKey: "body"
            method: "POST"
        ) {
            reason
            result
        }
    }
`
/* SAMPLE RESPONSE
// Sets the charge limit to "standard" or ~90%.
{
  "reason": "",
  "result": true
}
*/