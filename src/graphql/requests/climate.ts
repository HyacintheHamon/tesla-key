// Graphql
import { gql } from '@apollo/client'


export const CLIMATE_STATE = gql`
    query ClimateState($vehicle: String!) {
        state(vehicle: $vehicle) @rest(
            path: "/vehicle/{args.vehicle}/climate"
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