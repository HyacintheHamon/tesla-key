// Graphql
import { gql } from '@apollo/client'


export type DriverStateArgs = {
    id: string,
}

export type DriverStatePayload = {
    nativeLocationSupported: number,
    nativeLongitude: number,
    nativeLatitude: number,
    shiftState: unknown,
    nativeType: string,
    timestamp: number,
    longitude: number,
    latitude: number,
    heading: number,
    gpsAsOf: number,
    speed: number,
    power: number,
}

export type DriverStateResult = {
    driverState: DriverStatePayload,
}

export const DRIVER_STATE = gql`
    query DriverState($id: String!) {
        driverState(id: $id) @rest(
            path: "/api/1/vehicles/{args.id}/data_request/drive_state"
            type: "DriverState"
            method: "GET"
        ) {
            nativeLocationSupported: native_location_supported
            nativeLongitude: native_longitude
            nativeLatitude: native_latitude
            nativeType: native_type
            shiftState: shift_state
            gpsAsOf: gps_as_of
            timestamp
            longitude
            latitude
            heading
            speed
            power
        }
    }
`
/* SAMPLE RESPONSE
// Returns the driving and position state of the vehicle.
{
  "response": {
    "gps_as_of": 1543187664,
    "heading": 8,
    "latitude": 33.111111,
    "longitude": -88.111111,
    "native_latitude": 33.111111,
    "native_location_supported": 1,
    "native_longitude": -88.111111,
    "native_type": "wgs",
    "power": 0,
    "shift_state": null,
    "speed": null,
    "timestamp": 1543187666472
  }
}
*/