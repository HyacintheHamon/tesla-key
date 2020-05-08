// Graphql
import { gql } from '@apollo/client'

export type ScheduleSoftwareUpdateArgs = {
    offset_sec: Number, // How many seconds in the future to schedule the update. Set to 0 for immediate install.
    id: string,
}

export type ScheduleSoftwareUpdatePayload = {
    reason: string,
    result: boolean,
}

export type ScheduleSoftwareUpdateResult = {
    scheduleSoftwareUpdate: ScheduleSoftwareUpdatePayload,
}

export const SCHEDULE_SOFTWARE_UPDATE = gql`
    mutation ScheduleSoftwareUpdate(
        $input: ScheduleSoftwareUpdateInput!
        $id: String!
    ) {
        scheduleSoftwareUpdate(
            body: $input
            id: $id
        ) @rest(
            path: "/api/1/vehicles/{args.id}/command/schedule_software_update"
            bodyKey: "body"
            method: "POST"
        ) {
            reason
            result
        }
    }
`
/* SAMPLE RESPONSE
// Schedules a software update to be installed, if one is available.
{
  "reason": "",
  "result": true
}
*/