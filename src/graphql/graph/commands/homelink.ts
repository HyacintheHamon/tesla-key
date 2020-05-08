// Graphql
import { gql } from '@apollo/client'


export type HomeLinkArgs = {
    lat: Number, // Current lattitude. Example: 36.98765432109876
    lon: Number, // Current longitude. Example: 77.12345678901234
    id: string,
}

export type HomeLinkPayload = {
    reason: string,
    result: boolean,
}

export type HomeLinkResult = {
    homeLink: HomeLinkPayload,
}

export const HOMELINK = gql`
    mutation HomeLink(
        $input: HomeLinkInput!
        $id: String!
    ) {
        homeLink(
            body: $input
            id: $id
        ) @rest(
            path: "/api/1/vehicles/{args.id}/command/trigger_homeLink"
            bodyKey: "body"
            method: "POST"
        ) {
            reason
            result
        }
    }
`
/* SAMPLE RESPONSE
// Opens or closes the primary Homelink device. The provided location must be in proximity of stored location of the Homelink device.
{
  "reason": "",
  "result": true
}
*/