# Column Module Sample React Native app -- Without SDK

> [!WARNING]
> We recommend you use the React Native SDK if possible


This is a sample application built using React Native and Expo, which does not use our React Native SDK

See the full documentation here: https://docs.columntax.com/

## First-time set up

1. Install the expo cli: https://docs.expo.dev/get-started/installation/
1. Install dependencies: run `yarn`

## Run the app

The Column Tax module is opened via WebView in the SDK.

In this sample, replace the placeholder `"<url>"` in [Main.js](https://github.com/column-tax/column-react-native-sample/blob/main/Main.js#L8) with a Column Tax URL
created through the [API](https://docs.columntax.com/reference/express-initialize-tax-filing).

```
npx expo start
```
