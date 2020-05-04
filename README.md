# Tesla Redesign

```
git clone
yarn install or npm install

react-native run-ios
or on android:
react-native run-android
```

## Design inspiration

[Matthew James Farmer](https://www.mattjfarmer.com/)

[Full case study](https://uxdesign.cc/redesigning-the-mobile-app-that-tesla-deserves-d89b2c9ef9a0)

## API

We followed the documentation from these 2 links:

[Teslaapi.io](https://www.teslaapi.io/)

[tesla-api.timdorrcom](https://tesla-api.timdorr.com/)

These are unofficial documentation of the Tesla JSON API used by their iOS and Android apps. 

They feature functionalities to monitor and control their vehicle (Model S, Model X, and Model 3) and power (Powerwall) products. 

The base URI for all requests is https://owner-api.teslamotors.com/ (except for the Streaming and Autopark APIs)

## Notes

Viro React emulator issue:
We use [ViroReact](https://viromedia.com/viroreact) for the Augmented Reality part of the app. 

ViroReact does not support the emulator on Android; the app will crash on startup. Some logic has been written to avoid that.

## Screenshots

![alt text](https://miro.medium.com/max/2000/1*4enzyt9gJvGdIUumty63aw.png "Screenshots")

## Contributors


![alt text](https://contributors-img.web.app/image?repo=HyacintheHamon/tesla "Contributors")

Hyacinthe Hamon - Creator of the project and Developer

Pauline Midon   - Designer

Raphael Hadjaj  - Developer 

Quynh NH - Developer

Osama Khan - Developer

## Security

Security: Login credentials are never stored in plain text and are encrypted using AES 128, CBC, and PKCS5 padding. 
This app only communicates with Tesla's official servers over HTTPS.

## Disclaimer

THIS SOFTWARE IS PROVIDED "AS IS". This app is not officially affiliated or endorsed by Tesla Motors Inc. We will always try our best, but we cannot guarantee proper functionality at all times. Use of this app is at the user's own risk. The creators are not responsible for any damages or repercussions incurred upon the user's car, the user, or any other objects through the use of this app. By downloading this app, you accept these terms.

Tesla, the Tesla logo are trademarks or registered trademarks of Tesla Motors, Inc. in the United States of America and elsewhere. Other brands or product names are the trademarks of their respective owners.

