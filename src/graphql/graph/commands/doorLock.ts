// Graphql
import { gql } from '@apollo/client'

export type DoorLockArgs = {
    id: string,
}

export type DoorLockPayload = {
    reason: string,
    result: boolean,
}

export type DoorLockResult = {
    doorLock: DoorLockPayload,
}

export const DOOR_LOCK = gql`
    mutation DoorLock(
        $input: DoorLockInput!
        $id: String!
    ) {
        doorLock(
            body: $input
            id: $id
        ) @rest(
            path: "/api/1/vehicles/{args.id}/command/door_lock"
            bodyKey: "body"
            method: "POST"
        ) {
            reason
            result
        }
    }
`
/* SAMPLE RESPONSE
// Locks the doors to the car. Retracts the handles on the S and X, if they are extended.
{
  "reason": "",
  "result": true
}
*/