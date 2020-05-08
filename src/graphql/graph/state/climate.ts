// Graphql
import { gql } from '@apollo/client'

export const CLIMATE_STATE = gql`
    query ClimateState($id: String!) {
        state(id: $id) @rest(
            path: "/api/1/vehicles/{args.id}/climate"
            type: "VehicleClimate"
            method: "GET"
        ) {
            battery_heater
            battery_heater_no_power
            climate_keeper_mode
            driver_temp_setting
            fan_status
            inside_temp
            is_auto_conditioning_on
            is_climate_on
            is_front_defroster_on
            is_preconditioning
            is_rear_defroster_on
            left_temp_direction
            max_avail_temp
            min_avail_temp
            outside_temp
            passenger_temp_setting
            remote_heater_control_enabled
            right_temp_direction
            seat_heater_left
            seat_heater_rear_center
            seat_heater_rear_left
            seat_heater_rear_left_back
            seat_heater_rear_right
            seat_heater_rear_right_back
            seat_heater_right
            side_mirror_heaters
            smart_preconditioning
            steering_wheel_heater
            timestamp
            wiper_blade_heater
        }
    }
`
/* SAMPLE RESPONSE
// Information on the current internal temperature and climate control system.
{
    "response": {
      "battery_heater": false,
      "battery_heater_no_power": false,
      "climate_keeper_mode": "dog",
      "defrost_mode": 0,
      "driver_temp_setting": 21.6,
      "fan_status": 0,
      "inside_temp": null,
      "is_auto_conditioning_on": null,
      "is_climate_on": false,
      "is_front_defroster_on": false,
      "is_preconditioning": false,
      "is_rear_defroster_on": false,
      "left_temp_direction": null,
      "max_avail_temp": 28.0,
      "min_avail_temp": 15.0,
      "outside_temp": null,
      "passenger_temp_setting": 21.6,
      "remote_heater_control_enabled": true,
      "right_temp_direction": null,
      "seat_heater_left": 3,
      "seat_heater_rear_center": 0,
      "seat_heater_rear_left": 1,
      "seat_heater_rear_left_back": 0,
      "seat_heater_rear_right": 1,
      "seat_heater_rear_right_back": 0,
      "seat_heater_right": 2,
      "side_mirror_heaters": false,
      "steering_wheel_heater": false,
      "timestamp": 1543187641727,
      "wiper_blade_heater": false
    }
  }
*/