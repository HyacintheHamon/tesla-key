// Graphql
import { gql } from '@apollo/client'

export type DoorUnlockArgs = {
    id: string,
}

export type DoorUnlockPayload = {
    reason: string,
    result: boolean,
}

export type DoorUnlockResult = {
    doorUnlock: DoorUnlockPayload,
}

export const DOOR_UNLOCK = gql`
    mutation DoorUnlock(
        $input: DoorUnlockInput!
        $id: String!
    ) {
        doorUnlock(
            body: $input
            id: $id
        ) @rest(
            path: "/api/1/vehicles/{args.id}/command/door_unlock"
            bodyKey: "body"
            method: "POST"
        ) {
            reason
            result
        }
    }
`
/* SAMPLE RESPONSE
// Unlocks the doors to the car. Extends the handles on the S and X.
{
  "reason": "",
  "result": true
}
*/