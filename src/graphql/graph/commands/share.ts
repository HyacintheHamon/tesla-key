// Graphql
import { gql } from '@apollo/client'

export type shareArgs = {
    type: String, // Must be share_ext_content_raw
    locale: String, // The locale for the navigation request. Example: en-US
    timestamp_ms: Number, // The current UNIX timestamp.
    value: String // The address or video URL to set as the navigation destination.
    id: string,
}

/* 
Sends a location for the car to start navigation or play a video in theatre mode.
These docs take from the Android app, which sends the data in JSON form. 
However, a urlencoded POST body will work as well. The basic format to a request looks like this:

{
  "type": "share_ext_content_raw",
  "value": {
    "android.intent.extra.TEXT": "123 Main St, City, ST 12345\n\nhttps://goo.gl/maps/X"
  },
  "locale": "en-US",
  "timestamp_ms": "1539465730"
}
*/

export type sharePayload = {
    reason: string,
    result: boolean,
}

export type shareResult = {
    share: sharePayload,
}

export const SHARE = gql`
    mutation share(
        $input: shareInput!
        $id: String!
    ) {
        share(
            body: $input
            id: $id
        ) @rest(
            path: "/api/1/vehicles/{args.id}/command/share"
            bodyKey: "body"
            method: "POST"
        ) {
            reason
            result
        }
    }
`
/* SAMPLE RESPONSE
// Turns down the volume of the media system.
{
  "reason": "",
  "result": true
}
*/