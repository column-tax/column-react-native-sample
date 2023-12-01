# Column Module Sample React Native app

See the full documentation here: https://docs.columntax.com/

## First-time set up

1. Install the expo cli: https://docs.expo.dev/get-started/installation/
1. Install dependencies: run `yarn`

## Run the app

The Column Tax module is opened via WebView in [ColumnModuleView.js](https://github.com/column-tax/column-react-native-sample/blob/main/ColumnModuleView.js).

In this sample, replace the placeholder `"<url>"` in [Main.js](https://github.com/column-tax/column-react-native-sample/blob/main/Main.js#L8) with a Column Tax URL
created through the [API](https://docs.columntax.com/reference/express-initialize-tax-filing).

```
expo start
```

## Building the app

1. Follow the instructions to [install Expo's EAS](https://docs.expo.dev/eas-update/getting-started/)
1. You may need to [create an EAS account](https://expo.dev/signup)
1. Login with `eas login`
1. Run `eas build -p android --profile preview`
