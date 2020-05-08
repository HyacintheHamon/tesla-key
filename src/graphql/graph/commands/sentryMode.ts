// Graphql
import { gql } from '@apollo/client'

export type SentryModeArgs = {
    on: Boolean, // Value: true or false. true to activate, false to deactivate.
    id: string,
}

export type SentryModePayload = {
    reason: string,
    result: boolean,
}

export type SentryModeResult = {
    sentryMode: SentryModePayload,
}

export const SENTRY_MODE = gql`
    mutation SentryMode(
        $input: SentryModeInput!
        $id: String!
    ) {
        sentryMode(
            body: $input
            id: $id
        ) @rest(
            path: "/api/1/vehicles/{args.id}/command/set_sentry_mode"
            bodyKey: "body"
            method: "POST"
        ) {
            reason
            result
        }
    }
`
/* SAMPLE RESPONSE
// Turns sentry mode on or off.
{
  "reason": "",
  "result": true
}
*/