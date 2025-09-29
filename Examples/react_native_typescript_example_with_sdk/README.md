# Column Module Sample React Native Typescript app -- with SDK

This is a sample application built using React Native in Typescript and Expo, which uses our React Native SDK.

See the full documentation here: https://docs.columntax.com/

For documentation on our Mobile SDKs, visit https://docs.columntax.com/reference/mobile-sdk-guide

## First-time set up

1. Install the expo cli: https://docs.expo.dev/get-started/installation/
1. Install dependencies: run `yarn install`

## Run the app

The Column Tax module is opened via WebView in the SDK.

Generate a Column Tax URL created through the [API](https://docs.columntax.com/reference/express-initialize-tax-filing), and then paste it in the dialog box

```
npx expo start
```

## Update App URL

In `index.tsx`, update this line: `const sdkUrl = '';` to input a real user URL to test with. 