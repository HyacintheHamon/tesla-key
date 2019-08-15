/* global fetch FormData ENDPOINT */
import axios from 'axios';
import helper from './helper'

// https://tesla-api.timdorr.com/
// https://www.teslaapi.io/


const ENDPOINT = 'https://owner-api.teslamotors.com/api/1/vehicles'

export default class Http {
    static async get(urlpath) {

        const access_token = await helper.getCache("access_token");
        let url = ENDPOINT + urlpath;

        let options={
            method: "GET",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${access_token}`,
            },
        }
    return fetch(url,options).then((res) => res.json())
    }

    static async post(url, body) {

        const access_token = await helper.getCache("access_token");

        let options={
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${access_token}`,
                },
                body: JSON.stringify(body)
            }
        return fetch( ENDPOINT + url, options).then((res) => res.json())
    }

    static async put(url, body) {

        const access_token = await helper.getCache("access_token");

        const response = await fetch(`${ENDPOINT}${url}`, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${access_token}`,
            },
        });
        return response.json();
    }

    static async delete(url, body) {

        const access_token = await helper.getCache("access_token");

        const response = await fetch(`${ENDPOINT}${url}`, {
            method: 'delete',
            body: JSON.stringify(body),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${access_token}`,
            }
        });
        return response.json();
    }
}
