import React, { Component } from "react";
import { Linking, StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";
import "react-native-url-polyfill/auto";

export default class ColumnModuleView extends Component {
  onMessageReceiver = (eventDataString) => {
    let eventData = JSON.parse(eventDataString);

    if (eventData.name === "column-on-close") {
      this.props.navigation.goBack();
    } else if (eventData.name == "column-on-user-event") {
      // Insert your analytics/event recording here
      console.log(eventData.userEvent);
    } else {
      console.log("eventData", eventData);
    }
  };

  render() {
    return (
      <View style={styles.view}>
        <WebView
          onMessage={(event) => this.onMessageReceiver(event.nativeEvent.data)}
          source={{
            uri: this.props.route.params.url,
          }}
          setSupportMultipleWindows={false}
          onShouldStartLoadWithRequest={(request) => {
            const allowedDomains = [
              "localhost",
              "columnapi.com",
              "env.bz"
            ];
            const hostname = new URL(request.url).hostname;

            if (allowedDomains.find((d) => hostname === d || hostname.endsWith(`.${d}`))) {
              return true;
            } else {
              Linking.openURL(request.url).catch(() => null);
              return false;
            }
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});
