// Graphql
import { gql } from '@apollo/client'

export type MobileEnabledArgs = {
    id: string,
}

export type MobileEnabledPayload = {
    response: boolean,
}

export type MobileEnabledResult = {
    mobileEnabled: MobileEnabledPayload,
}

export const MOBILE_ENABLED = gql`
    query MobileEnabled($id: String!) {
        mobileEnabled(id: $id) @rest(
            path: "/api/1/vehicles/{args.id}/mobile_enabled"
            type: "MobileEnabled"
            method: "GET"
        ) {
            response
        }
    }
`
/* SAMPLE RESPONSE
// Lets you know if the Mobile Access setting is enabled in the car.
{
  "result": true
}
*/