import axios from 'axios';

// https://tesla-api.timdorr.com/
// https://www.teslaapi.io/

/**
   State And Settings
**/

// All of the vehicle data
export function getVehicleData()  {
    return axios.get(`https://owner-api.teslamotors.com/api/1/vehicles/${this.props.vehicleId}/vehicle_data`, { headers: { Authorization: `Bearer ${this.props.bearerToken}`} });
}

// Returns the vehicle's configuration information including model, color, badging and wheels.
export function getVehicleConfig()  {
    return axios.get(`https://owner-api.teslamotors.com/api/1/vehicles/${this.props.vehicleId}/data_request/vehicle_config`, { headers: { Authorization: `Bearer ${this.props.bearerToken}`} });
}

// All of the vehicle service data
export function getVehicleServiceData()  {
    return axios.get(`https://owner-api.teslamotors.com/api/1/vehicles/${this.props.vehicleId}/service_data`, { headers: { Authorization: `Bearer ${this.props.bearerToken}`} });
}

// Whether mobile access is enabled.
export function getMobileEnabled()  {
    return axios.get(`https://owner-api.teslamotors.com/api/1/vehicles/${this.props.vehicleId}/mobile_enabled`, { headers: { Authorization: `Bearer ${this.props.bearerToken}`} });
}

// Charge state information including battery limit, charge miles, charge voltage, charge phases, current, charge management, and battery heater status.
export function getChargeState()  {
    return axios.get(`https://owner-api.teslamotors.com/api/1/vehicles/${this.props.vehicleId}/data_request/charge_state`, { headers: { Authorization: `Bearer ${this.props.bearerToken}`} });
}

// Climate settings including seats, vents battery, steering wheel, and preconditioning state.
export function getClimateState()  {
    return axios.get(`https://owner-api.teslamotors.com/api/1/vehicles/${this.props.vehicleId}/data_request/climate_state`, { headers: { Authorization: `Bearer ${this.props.bearerToken}`} });
}

// Drive state including latitude, longitude, and heading of the vehicle.
export function getDriveState()  {
    return axios.get(`https://owner-api.teslamotors.com/api/1/vehicles/${this.props.vehicleId}/data_request/drive_state`, { headers: { Authorization: `Bearer ${this.props.bearerToken}`} });
}

// Localization settings including distance units, temperature units, charge units, and clock hour style.
export function getGUISettings()  {
    return axios.get(`https://owner-api.teslamotors.com/api/1/vehicles/${this.props.vehicleId}/data_request/gui_settings`, { headers: { Authorization: `Bearer ${this.props.bearerToken}`} });
}

// Returns a list of nearby Tesla-operated charging stations. (Requires car software version 2018.48 or higher.)
export function getNearbyChargingSites()  {
    return axios.post(`https://owner-api.teslamotors.com/api/1/vehicles/${this.props.vehicleId}/command/nearby_charging_sites`, { headers: { Authorization: `Bearer ${this.props.bearerToken}`} });
}

/**
   Commands
**/

// Wake up the vehicle
export function wakeUp()  {
    return axios.post(`https://owner-api.teslamotors.com/api/1/vehicles/${this.props.vehicleId}/wake_up`, { headers: { Authorization: `Bearer ${this.props.bearerToken}`} });
}

// Unlock doors of the vehicle
export function unlockDoors()  {
    return axios.post(`https://owner-api.teslamotors.com/api/1/vehicles/${this.props.vehicleId}/command/door_unlock`, { headers: { Authorization: `Bearer ${this.props.bearerToken}`} });
}

// Lock doors of the vehicle
export function lockDoors()  {
    return axios.post(`https://owner-api.teslamotors.com/api/1/vehicles/${this.props.vehicleId}/command/door_lock`, { headers: { Authorization: `Bearer ${this.props.bearerToken}`} });
}

// Honks the horn of the vehicle once
export function honkHorns()  {
    return axios.post(`https://owner-api.teslamotors.com/api/1/vehicles/${this.props.vehicleId}/command/honk_horn`, { headers: { Authorization: `Bearer ${this.props.bearerToken}`} });
}

// Flashes the lights of the vehicle once
export function flashHeadlights()  {
    return axios.post(`https://owner-api.teslamotors.com/api/1/vehicles/${this.props.vehicleId}/command/flash_lights`, { headers: { Authorization: `Bearer ${this.props.bearerToken}`} });
}

// Start vehicle climate control system. The vehicle will automatically determine whether to heat or cool based on set temperature.
export function startHVACSystem()  {
    return axios.post(`https://owner-api.teslamotors.com/api/1/vehicles/${this.props.vehicleId}/command/auto_conditioning_start`, { headers: { Authorization: `Bearer ${this.props.bearerToken}`} });
}

// Stop vehicle climate control system
export function stopHVACSystem()  {
    return axios.post(`https://owner-api.teslamotors.com/api/1/vehicles/${this.props.vehicleId}/command/auto_conditioning_stop`, { headers: { Authorization: `Bearer ${this.props.bearerToken}`} });
}

// Set vehicle HVAC temperature
// Parameters :
// driver_temp
// passenger_temp
// driver_temp: The desired temperature on the driver's side in celsius.
// passenger_temp: The desired temperature on the passenger's side in celsius.
export function setTemperature()  {
    return axios.post(`https://owner-api.teslamotors.com/api/1/vehicles/${this.props.vehicleId}/command/set_temps?driver_temp=${this.props.driverTemp}&passenger_temp=:${this.props.passengerTemp}`, { headers: { Authorization: `Bearer ${this.props.bearerToken}`} });
}

// Sets the specified seat's heater level.
// Parameters:
// heater
// level
// heater: The desired seat to heat. (0-5)
//level: The desired level for the heater. (0-3)
export function setRemoteSeatHeaterRequest()  {
    return axios.post(`https://owner-api.teslamotors.com/api/1/vehicles/${this.props.vehicleId}/command/remote_seat_heater_request?heater=${this.props.heater}&level=${this.props.level}`, { headers: { Authorization: `Bearer ${this.props.bearerToken}`} });
}

// Turn steering wheel heater on or off.
// Parameter:
// on (true / false)
// True to turn on, false to turn off.
export function setSteeringWheelHeaterRequest()  {
    return axios.post(`https://owner-api.teslamotors.com/api/1/vehicles/${this.props.vehicleId}/command/remote_steering_wheel_heater&on=${this.props.steeringWheelHeaterMode}`, { headers: { Authorization: `Bearer ${this.props.bearerToken}`} });
}

// Set vehicle charge limit
// Parameter: percent
// The percentage the battery will charge until. Must be between 0 and 100
export function setChargeLimit()  {
    return axios.post(`https://owner-api.teslamotors.com/api/1/vehicles/${this.props.vehicleId}/command/set_charge_limit?percent=${this.props.limitValue}`, { headers: { Authorization: `Bearer ${this.props.bearerToken}`} });
}

// Set vehicle to max charge limit
export function setMaxRangeChargeLimit()  {
    return axios.post(`https://owner-api.teslamotors.com/api/1/vehicles/${this.props.vehicleId}/command/charge_max_range`, { headers: { Authorization: `Bearer ${this.props.bearerToken}`} });
}

// Set vehicle to standard charge limit
export function setStandardChargeLimit()  {
    return axios.post(`https://owner-api.teslamotors.com/api/1/vehicles/${this.props.vehicleId}/command/charge_standard`, { headers: { Authorization: `Bearer ${this.props.bearerToken}`} });
}

// Controls the panoramic sunroof on the Model S
// Possible states :
// open - 100%  
// closed - 0%  
// comfort - 80%  
// vent - 15%  
// Note: There were state options for open (100%), comfort (~80%), and move (combined with a percent parameter), but they have since been disabled server side. It is unknown if they will return at a later time.
// export function setSunRoofControl()  {
//    return axios.post(`https://owner-api.teslamotors.com/api/1/vehicles/${this.props.vehicleId}/command/command/sun_roof_control?state=${this.props.sunRoofState}&percent=${this.props.sunRoofPercent}`, { headers: { Authorization: `Bearer ${this.props.bearerToken}`} });
// }
//
// The amount to open the sunroof. 
// parameter: state (vent / close)
//Currently this only allows the values vent and close.
export function setSunRoofControl()  {
    return axios.post(`https://owner-api.teslamotors.com/api/1/vehicles/${this.props.vehicleId}/command/command/sun_roof_control?state=${this.props.sunroofState}`, { headers: { Authorization: `Bearer ${this.props.bearerToken}`} });
}

// Open vehicles trunk or frunk. Call endpoint again to close trunk
// Parameter: which_trunk (rear / front)
// Which trunk to open/close. rear and front are the only options.
export function actuateTrunk()  {
    return axios.post(`https://owner-api.teslamotors.com/api/1/vehicles/${this.props.vehicleId}/command/actuate_trunk?which_trunk${this.props.whichTrunk}`, { headers: { Authorization: `Bearer ${this.props.bearerToken}`} });
}

// Start vehicle key-less driving mode. The vehicle must be placed in drive within 2 minutes of the response.
// Parameter: password
// The password for the authenticated tesla.com account.
export function remoteStartDrive()  {
    return axios.post(`https://owner-api.teslamotors.com/api/1/vehicles/${this.props.vehicleId}/command/remote_start_drive?password=${this.props.password}`, { headers: { Authorization: `Bearer ${this.props.bearerToken}`} });
}

// Opens vehicle charge port. Also unlocks the charge port if it is locked.
export function openChargePort()  {
    return axios.post(`https://owner-api.teslamotors.com/api/1/vehicles/${this.props.vehicleId}/command/charge_port_door_open`, { headers: { Authorization: `Bearer ${this.props.bearerToken}`} });
}

// Closes vehicle charge port.
export function closesChargePort()  {
    return axios.post(`https://owner-api.teslamotors.com/api/1/vehicles/${this.props.vehicleId}/command/charge_port_door_close`, { headers: { Authorization: `Bearer ${this.props.bearerToken}`} });
}

// Starts vehicle charging. Vehicle must be plugged in, have power available, and not at charge limit.
export function startCharging()  {
    return axios.post(`https://owner-api.teslamotors.com/api/1/vehicles/${this.props.vehicleId}/command/charge_start`, { headers: { Authorization: `Bearer ${this.props.bearerToken}`} });
}

// Stop vehicle charging. Vehicle must be charging.
export function stopCharging()  {
    return axios.post(`https://owner-api.teslamotors.com/api/1/vehicles/${this.props.vehicleId}/command/charge_stop`, { headers: { Authorization: `Bearer ${this.props.bearerToken}`} });
}

// Set upcoming calendar entries
export function setUpcomingCalendarEntries()  {
    return axios.post(`https://owner-api.teslamotors.com/api/1/vehicles/${this.props.vehicleId}/command/upcoming_calendar_entries`, { headers: { Authorization: `Bearer ${this.props.bearerToken}`} });
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
export function setValetMode()  {
    return axios.post(`https://owner-api.teslamotors.com/api/1/vehicles/${this.props.vehicleId}/command/set_valet_mode?on=${this.props.valetMode}&password=${this.props.password}`, { headers: { Authorization: `Bearer ${this.props.bearerToken}`} });
}

// Resets vehicle valet PIN
export function resetValetPin()  {
    return axios.post(`https://owner-api.teslamotors.com/api/1/vehicles/${this.props.vehicleId}/command/reset_valet_pin`, { headers: { Authorization: `Bearer ${this.props.bearerToken}`} });
}

// Activates Speed Limit Mode at the currently set speed.
// Parameter: pin
//The existing PIN, if previously set, or a new 4 digit PIN.
export function activateSpeedLimit()  {
    return axios.post(`https://owner-api.teslamotors.com/api/1/vehicles/${this.props.vehicleId}/command/speed_limit_activate`, { headers: { Authorization: `Bearer ${this.props.bearerToken}`} });
}

// Deactivates Speed Limit Mode at the currently set speed.
// Parameter: pin
//The existing PIN, if previously set, or a new 4 digit PIN.
export function deactivateSpeedLimit()  {
    return axios.post(`https://owner-api.teslamotors.com/api/1/vehicles/${this.props.vehicleId}/command/speed_limit_deactivate`, { headers: { Authorization: `Bearer ${this.props.bearerToken}`} });
}

// Sets the maximum speed allowed when Speed Limit Mode is active.
// Parameter: limit_mph
// The speed limit in MPH. Must be between 50-90.
export function setLimitSpeedLimit()  {
    return axios.post(`https://owner-api.teslamotors.com/api/1/vehicles/${this.props.vehicleId}/command/speed_limit_set_limit`, { headers: { Authorization: `Bearer ${this.props.bearerToken}`} });
}

// Clears the currently set PIN for Speed Limit Mode
// Parameter: pin
//The existing PIN, if previously set, or a new 4 digit PIN.
export function clearPinSpeedLimit()  {
    return axios.post(`https://owner-api.teslamotors.com/api/1/vehicles/${this.props.vehicleId}/command/speed_limit_clear_pin`, { headers: { Authorization: `Bearer ${this.props.bearerToken}`} });
}

// Turns sentry mode on or off.
//Parmeter: on (true/false)
//True to turn on, false to turn off
export function setSentryMode()  {
    return axios.post(`https://owner-api.teslamotors.com/api/1/vehicles/${this.props.vehicleId}/command/set_sentry_mode?on=${this.props.sentryMode}`, { headers: { Authorization: `Bearer ${this.props.bearerToken}`} });
}

// Toggles the media between playing and paused. For the radio, this mutes or unmutes the audio.
export function mediaTogglePlayback()  {
    return axios.post(`https://owner-api.teslamotors.com/api/1/vehicles/${this.props.vehicleId}/command/media_toggle_playback`, { headers: { Authorization: `Bearer ${this.props.bearerToken}`} });
}

// Skips to the next track in the current playlist.
// export function mediaNextTrack()  {
//     return axios.post(`https://owner-api.teslamotors.com/api/1/vehicles/${this.props.vehicleId}/command/media_next_track`, { headers: { Authorization: `Bearer ${this.props.bearerToken}`} });
// }

// Skips to the previous track in the current playlist. Does nothing for streaming from Stitcher.
// export function mediaPrevTrack()  {
//     return axios.post(`https://owner-api.teslamotors.com/api/1/vehicles/${this.props.vehicleId}/command/media_prev_track`, { headers: { Authorization: `Bearer ${this.props.bearerToken}`} });
// }

// Skips to the next saved favorite in the media system.
export function mediaNextTrack()  {
    return axios.post(`https://owner-api.teslamotors.com/api/1/vehicles/${this.props.vehicleId}/command/media_next_fav`, { headers: { Authorization: `Bearer ${this.props.bearerToken}`} });
}

// Skips to the previous saved favorite in the media system.
export function mediaPrevTrack()  {
    return axios.post(`https://owner-api.teslamotors.com/api/1/vehicles/${this.props.vehicleId}/command/media_prev_fav`, { headers: { Authorization: `Bearer ${this.props.bearerToken}`} });
}

// Turns up the volume of the media system.
export function setmediaVolumeUp()  {
    return axios.post(`https://owner-api.teslamotors.com/api/1/vehicles/${this.props.vehicleId}/command/media_volume_up`, { headers: { Authorization: `Bearer ${this.props.bearerToken}`} });
}

// Turns down the volume of the media system.
export function setmediaVolumeDown()  {
    return axios.post(`https://owner-api.teslamotors.com/api/1/vehicles/${this.props.vehicleId}/command/media_volume_down`, { headers: { Authorization: `Bearer ${this.props.bearerToken}`} });
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
export function setNavigationRequest(vehicleId)  {
    return axios.post(`https://owner-api.teslamotors.com/api/1/vehicles/${vehicleId}/command/navigation_request`, { headers: { Authorization: `Bearer ${this.props.bearerToken}`} });
}

// Schedules a software update to be installed, if one is available.
export function scheduleSoftwareUpdate()  {
    return axios.post(`https://owner-api.teslamotors.com/api/1/vehicles/${this.props.vehicleId}/command/schedule_software_update`, { headers: { Authorization: `Bearer ${this.props.bearerToken}`} });
}

// Cancels a software update, if one is scheduled and has not yet started.
export function cancelSoftwareUpdate()  {
    return axios.post(`https://owner-api.teslamotors.com/api/1/vehicles/${this.props.vehicleId}/command/cancel_software_update`, { headers: { Authorization: `Bearer ${this.props.bearerToken}`} });
}