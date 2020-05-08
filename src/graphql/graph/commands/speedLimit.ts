// Graphql
import { gql } from '@apollo/client'

export type SpeedLimitArgs = {
    limit_mph: Number // The speed limit in MPH. Must be between 50-90.
    id: string,
}

export type SpeedLimitPayload = {
    reason: string,
    result: boolean,
}

export type SpeedLimitResult = {
    speedLimit: SpeedLimitPayload,
}

export const SPEED_LIMIT = gql`
    mutation SpeedLimit(
        $input: SpeedLimitInput!
        $id: String!
    ) {
        speedLimit(
            body: $input
            id: $id
        ) @rest(
            path: "/api/1/vehicles/{args.id}/command/speed_limit_set_limit"
            bodyKey: "body"
            method: "POST"
        ) {
            reason
            result
        }
    }
`
/* SAMPLE RESPONSE
// Sets the maximum speed allowed when Speed Limit Mode is active.
{
  "reason": "",
  "result": true
}
*/