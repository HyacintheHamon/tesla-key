// Graphql
import { gql } from '@apollo/client'

export type ActuateTrunkArgs = {
    which_trunk: String, // Which trunk to open/close. values: "rear" and "front" are the only options.
    id: string,
}

export type ActuateTrunkPayload = {
    reason: string,
    result: boolean,
}

export type ActuateTrunkResult = {
    actuateTrunk: ActuateTrunkPayload,
}

export const ACTUATE_TRUNK = gql`
    mutation ActuateTrunk(
        $input: ActuateTrunkInput!
        $id: String!
    ) {
        actuateTrunk(
            body: $input
            id: $id
        ) @rest(
            path: "/api/1/vehicles/{args.id}/command/actuate_trunk"
            bodyKey: "body"
            method: "POST"
        ) {
            reason
            result
        }
    }
`
/* SAMPLE RESPONSE
// Opens either the front or rear trunk. On the Model S and X, it will also close the rear trunk.
{
  "reason": "",
  "result": true
}
*/