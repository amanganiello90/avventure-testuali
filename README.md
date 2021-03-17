# Avventure testuali

This is a POC (Proof Of Concept) app to use ionic angular 5.5.2 e capacitor 2.4.7.

## Custom steps done

- Added android with `ionic capacitor add android`
- Added configuration for splashScreen in capacitor.config.json
- Added Android splashScreen with `cordova-res android --skip-config --copy` from resources png files
- Added Android icon with `capacitor-resources -p android -I`
- Removed double splash screen in `android/app/src/main/res/values/styles.xml` commenting AppTheme.NoActionBarLaunch l'android:background with `@drawable/splash`
- Removed permissions not required (geolocation, audio and so on) in `android/app/src/main/androidManifest.xml`
- Change minSdk and target for android in `android/variables.gradle`
- In `android/app/build.gradle` changed `versionName and versionCode`
- Added `@capacitor-community/electron` with scripts
- Added `"types": []` in electron/tsconfig.json for jasmine types error
- Added `@capacitor-community/barcode-scanner` 
