import axios from 'axios';

// https://tesla-api.timdorr.com/
// https://www.teslaapi.io/

import Http from './http';
import helper from './helper';

export default class API {

    // ===============================================================
    static async getBearerToken(authData) {

        let response = await axios.post('https://owner-api.teslamotors.com/oauth/token', {
            // method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: {
                grant_type: 'password',
                client_id: '81527cff06843c8634fdc09e8ac0abefb46ac849f38fe1e431c2ef2106796384',
                client_secret: 'c7257eb71a564034f9419ee651c7d0e5f7aa6bfbd18bafb5c5c033b093bb2fa3',
                email: authData.email,
                password: authData.password
            }
        })

        // let data = {                
        //     grant_type: 'password',
        //     client_id: '81527cff06843c8634fdc09e8ac0abefb46ac849f38fe1e431c2ef2106796384',
        //     client_secret: 'c7257eb71a564034f9419ee651c7d0e5f7aa6bfbd18bafb5c5c033b093bb2fa3',
        //     email: authData.email,
        //     password: authData.password
        // }
        // let formappend =  new FormData();
        // // formappend.append('security_key',securityKey);
        // for(let formdata in data){
        //   formappend.append(formdata,data[formdata]);
        // }

        // let response = await fetch('https://owner-api.teslamotors.com/oauth/token', {
        //     method: 'POST',
        //     headers: {
        //         Accept: 'application/json',
        //         "Content-Type": "multipart/form-data"
        //         // 'Content-Type': 'application/json',
        //     },
        //     body: formappend
        // })

        const responseJson = await response.json();       
        const result = await helper.setCache("access_token", responseJson.access_token); 
        
        console.log(responseJson);
        return responseJson;
    }
    
    // All of the vehicle data
    static async getVehicleData(vehicleId) {

        const result = await Http.post(`${vehicleId}/vehicle_data`);

        return result;
    }

    // Returns the vehicle's configuration information including model, color, badging and wheels.
    static async getVehicleConfig(vehicleId)  {

        const result = await Http.get(`${vehicleId}/data_request/vehicle_config`);

        return result;
    }

    // All of the vehicle service data
    static async getVehicleServiceData(vehicleId)  {

        const result = await Http.get(`${vehicleId}/service_data`);

        return result;
    }

    // Whether mobile access is enabled.
    static async getMobileEnabled(vehicleId)  {

        const result = await Http.get(`${vehicleId}/mobile_enabled`);

        return result;
    }

    // Charge state information including battery limit, charge miles, charge voltage, charge phases, current, charge management, and battery heater status.
    static async getChargeState(vehicleId)  {

        const result = await Http.get(`${vehicleId}/data_request/charge_state`);

        return result;
    }

    // Climate settings including seats, vents battery, steering wheel, and preconditioning state.
    static async getClimateState(vehicleId)  {

        const result = await Http.get(`${vehicleId}/data_request/climate_state`);

        return result;
    }

    // Drive state including latitude, longitude, and heading of the vehicle.
    static async getDriveState(vehicleId)  {

        const result = await Http.get(`${vehicleId}/data_request/drive_state`);

        return result;
    }

    // Localization settings including distance units, temperature units, charge units, and clock hour style.
    static async getGUISettings(vehicleId)  {

        const result = await Http.get(`${vehicleId}/data_request/gui_settings`);

        return result;
    }

    // Returns a list of nearby Tesla-operated charging stations. (Requires car software version 2018.48 or higher.)
    static async getNearbyChargingSites(vehicleId)  {

        const result = await Http.post(`${vehicleId}/command/nearby_charging_sites`);

        return result;
    }

    /**
     Commands
    **/

    // Wake up the vehicle
    static async wakeUp(vehicleId)  {

        const result = await Http.post(`${vehicleId}/wake_up`);

        return result;
    }

    // Unlock doors of the vehicle
    static async unlockDoors(vehicleId)  {

        const result = await Http.post(`${vehicleId}/command/door_unlock`);

        return result;
    }

    // Lock doors of the vehicle
    static async lockDoors(vehicleId)  {

        const result = await Http.post(`${vehicleId}/command/door_lock`);

        return result;
    }

    // Honks the horn of the vehicle once
    static async honkHorns(vehicleId)  {

        const result = await Http.post(`${vehicleId}/command/honk_horn`);

        return result;
    }

    // Flashes the lights of the vehicle once
    static async flashHeadlights(vehicleId)  {

        const result = await Http.post(`${vehicleId}/command/flash_lights`);

        return result;
    }

    // Start vehicle climate control system. The vehicle will automatically determine whether to heat or cool based on set temperature.
    static async startHVACSystem(vehicleId)  {

        const result = await Http.post(`${vehicleId}/command/auto_conditioning_start`);

        return result;
    }

    // Stop vehicle climate control system
    static async stopHVACSystem(vehicleId)  {

        const result = await Http.post(`${vehicleId}/command/auto_conditioning_stop`);

        return result;
    }

    // Set vehicle HVAC temperature
    // Parameters :
    // driver_temp
    // passenger_temp
    // driver_temp: The desired temperature on the driver's side in celsius.
    // passenger_temp: The desired temperature on the passenger's side in celsius.
    static async setTemperature(vehicleId)  {

        const result = await Http.post(`${vehicleId}/command/set_temps?driver_temp=${this.props.driverTemp}&passenger_temp=:${this.props.passengerTemp}`);

        return result;
    }

    // Sets the specified seat's heater level.
    // Parameters:
    // heater
    // level
    // heater: The desired seat to heat. (0-5)
    //level: The desired level for the heater. (0-3)
    static async setRemoteSeatHeaterRequest(vehicleId)  {

        const result = await Http.post(`${vehicleId}/command/remote_seat_heater_request?heater=${this.props.heater}&level=${this.props.level}`);

        return result;
    }

    // Turn steering wheel heater on or off.
    // Parameter:
    // on (true / false)
    // True to turn on, false to turn off.
    static async setSteeringWheelHeaterRequest(vehicleId)  {

        const result = await Http.post(`${vehicleId}/command/remote_steering_wheel_heater&on=${this.props.steeringWheelHeaterMode}`);

        return result;
    }

    // Set vehicle charge limit
    // Parameter: percent
    // The percentage the battery will charge until. Must be between 0 and 100
    static async setChargeLimit(vehicleId)  {

        const result = await Http.post(`${vehicleId}/command/set_charge_limit?percent=${this.props.limitValue}`);

        return result;
    }

    // Set vehicle to max charge limit
    static async setMaxRangeChargeLimit(vehicleId)  {

        const result = await Http.post(`${vehicleId}/command/charge_max_range`);

        return result;
    }

    // Set vehicle to standard charge limit
    static async setStandardChargeLimit(vehicleId)  {

        const result = await Http.post(`${vehicleId}/command/charge_standard`);

        return result;
    }

    // Controls the panoramic sunroof on the Model S
    // Possible states :
    // open - 100%  
    // closed - 0%  
    // comfort - 80%  
    // vent - 15%  
    // Note: There were state options for open (100%), comfort (~80%), and move (combined with a percent parameter), but they have since been disabled server side. It is unknown if they will return at a later time.
    // static async setSunRoofControl(vehicleId)  {
    //    const result = await Http.post(`${vehicleId}/command/command/sun_roof_control?state=${this.props.sunRoofState}&percent=${this.props.sunRoofPercent}`);
    // }
    //
    // The amount to open the sunroof. 
    // parameter: state (vent / close)
    //Currently this only allows the values vent and close.
    static async setSunRoofControl(vehicleId)  {

        const result = await Http.post(`${vehicleId}/command/command/sun_roof_control?state=${this.props.sunroofState}`);

        return result;
    }

    // Open vehicles trunk or frunk. Call endpoint again to close trunk
    // Parameter: which_trunk (rear / front)
    // Which trunk to open/close. rear and front are the only options.
    static async actuateTrunk(vehicleId)  {

        const result = await Http.post(`${vehicleId}/command/actuate_trunk?which_trunk${this.props.whichTrunk}`);

        return result;
    }

    // Start vehicle key-less driving mode. The vehicle must be placed in drive within 2 minutes of the response.
    // Parameter: password
    // The password for the authenticated tesla.com account.
    static async remoteStartDrive(vehicleId)  {

        const result = await Http.post(`${vehicleId}/command/remote_start_drive?password=${this.props.password}`);

        return result;
    }

    // Opens vehicle charge port. Also unlocks the charge port if it is locked.
    static async openChargePort(vehicleId)  {

        const result = await Http.post(`${vehicleId}/command/charge_port_door_open`);

        return result;
    }

    // Closes vehicle charge port.
    static async closesChargePort(vehicleId)  {

        const result = await Http.post(`${vehicleId}/command/charge_port_door_close`);

        return result;
    }

    // Starts vehicle charging. Vehicle must be plugged in, have power available, and not at charge limit.
    static async startCharging(vehicleId)  {

        const result = await Http.post(`${vehicleId}/command/charge_start`);

        return result;
    }

    // Stop vehicle charging. Vehicle must be charging.
    static async stopCharging(vehicleId)  {

        const result = await Http.post(`${vehicleId}/command/charge_stop`);

        return result;
    }

    // Set upcoming calendar entries
    static async setUpcomingCalendarEntries(vehicleId)  {

        const result = await Http.post(`${vehicleId}/command/upcoming_calendar_entries`);

        return result;
    }

    // Set vehicle valet mode on or off with a PIN to disable it from within the car. Reuses last PIN from previous valet session. 
    // Valet Mode limits the car's top speed to 70MPH and 80kW of acceleration power. 
    // It also disables Homelink, Bluetooth and Wifi settings, and the ability to disable mobile access to the car. 
    //It also hides your favorites, home, and work locations in navigation.
    // Parameters :
    // on (true / false)
    // password
    // on: true to activate, false to deactivate. Must include previous PIN if deactivating.
    // password: A PIN to deactivate Valet Mode. Can be blank if activating with a previous PIN.
    static async setValetMode(vehicleId)  {

        const result = await Http.post(`${vehicleId}/command/set_valet_mode?on=${this.props.valetMode}&password=${this.props.password}`);

        return result;
    }

    // Resets vehicle valet PIN
    static async resetValetPin(vehicleId)  {

        const result = await Http.post(`${vehicleId}/command/reset_valet_pin`);

        return result;
    }

    // Activates Speed Limit Mode at the currently set speed.
    // Parameter: pin
    //The existing PIN, if previously set, or a new 4 digit PIN.
    static async activateSpeedLimit(vehicleId)  {

        const result = await Http.post(`${vehicleId}/command/speed_limit_activate`);

        return result;
    }

    // Deactivates Speed Limit Mode at the currently set speed.
    // Parameter: pin
    //The existing PIN, if previously set, or a new 4 digit PIN.
    static async deactivateSpeedLimit(vehicleId)  {

        const result = await Http.post(`${vehicleId}/command/speed_limit_deactivate`);

        return result;
    }

    // Sets the maximum speed allowed when Speed Limit Mode is active.
    // Parameter: limit_mph
    // The speed limit in MPH. Must be between 50-90.
    static async setLimitSpeedLimit(vehicleId)  {

        const result = await Http.post(`${vehicleId}/command/speed_limit_set_limit`);

        return result;
    }

    // Clears the currently set PIN for Speed Limit Mode
    // Parameter: pin
    //The existing PIN, if previously set, or a new 4 digit PIN.
    static async clearPinSpeedLimit(vehicleId)  {

        const result = await Http.post(`${vehicleId}/command/speed_limit_clear_pin`);

        return result;
    }

    // Turns sentry mode on or off.
    //Parmeter: on (true/false)
    //True to turn on, false to turn off
    static async setSentryMode(vehicleId)  {

        const result = await Http.post(`${vehicleId}/command/set_sentry_mode?on=${this.props.sentryMode}`);

        return result;
    }

    // Toggles the media between playing and paused. For the radio, this mutes or unmutes the audio.
    static async mediaTogglePlayback(vehicleId)  {

        const result = await Http.post(`${vehicleId}/command/media_toggle_playback`);

        return result;
    }

    // Skips to the next track in the current playlist.
    // static async mediaNextTrack(vehicleId)  {

    //     const result = await Http.post(`${vehicleId}/command/media_next_track`);

    //return result;
    // }

    // Skips to the previous track in the current playlist. Does nothing for streaming from Stitcher.
    // static async mediaPrevTrack(vehicleId)  {

    //     const result = await Http.post(`${vehicleId}/command/media_prev_track`);

    //return result;
    // }

    // Skips to the next saved favorite in the media system.
    static async mediaNextTrack(vehicleId)  {

        const result = await Http.post(`${vehicleId}/command/media_next_fav`);

        return result;
    }

    // Skips to the previous saved favorite in the media system.
    static async mediaPrevTrack(vehicleId)  {

        const result = await Http.post(`${vehicleId}/command/media_prev_fav`);

        return result;
    }

    // Turns up the volume of the media system.
    static async setmediaVolumeUp(vehicleId)  {

        const result = await Http.post(`${vehicleId}/command/media_volume_up`);

        return result;
    }

    // Turns down the volume of the media system.
    static async setmediaVolumeDown(vehicleId)  {

        const result = await Http.post(`${vehicleId}/command/media_volume_down`);

        return result;
    }


    // Sends a location for the car to start navigation.
    // These docs take from the Android app, which sends the data in JSON form. However, a urlencoded POST body will work as well. The basic format to a request looks like this:
    //{
    //    "type": "share_ext_content_raw",
    //    "value": {
    //      "android.intent.extra.TEXT": "123 Main St, City, ST 12345\n\nhttps://goo.gl/maps/X"
    //    },
    //    "locale": "en-US",
    //    "timestamp_ms": "1539465730"
    //  }
    //
    // Parameters:
    // type 
    // locale
    // timestamp_ms
    // value[android.intent.extra.TEXT]
    //
    // Examples:
    // share_ext_content_raw (must be share_ext_content_raw)
    // en-US (The locale for the navigation request.)
    // 1539465730 (The current UNIX timestamp.)
    // 123 Main St, City, ST 12345 (The address to set as the navigation destination.)
    static async setNavigationRequest(vehicleId)  {

        const result = await Http.post(`${vehicleId}/command/navigation_request`);

        return result;
    }

    // Schedules a software update to be installed, if one is available.
    static async scheduleSoftwareUpdate(vehicleId)  {

        const result = await Http.post(`${vehicleId}/command/schedule_software_update`);

        return result;
    }

    // Cancels a software update, if one is scheduled and has not yet started.
    static async cancelSoftwareUpdate(vehicleId)  {

        const result = await Http.post(`${vehicleId}/command/cancel_software_update`);

        return result;
    }
}
