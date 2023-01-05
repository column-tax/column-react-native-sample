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
          javaScriptCanOpenWindowsAutomatically={true}
          onMessage={(event) => this.onMessageReceiver(event.nativeEvent.data)}
          source={{
            uri: this.props.route.params.url,
          }}
          setSupportMultipleWindows={false}
          onShouldStartLoadWithRequest={(request) => {
            // Always open iframes within the Webview
            // Otherwise, the iframe may open
            // within the external browser.
            if (request.isTopFrame === false) return true;

            // Only allow certain domains to take over the webview
            // This allows us to open certain links externally, like
            // the IRS website.
            const allowedDomains = [
              "localhost",
              "columnapi.com",
              "env.bz"
            ];
            const url = new URL(request.url);

            // Mechanism to open some links on our domain externally
            const isExternalLink = url.searchParams.get("columntax-external-link") === "true";
            const hostname = url.hostname;

            if (allowedDomains.find((d) => hostname === d || hostname.endsWith(`.${d}`)) && !isExternalLink) {
              return true;
            } else {
              Linking.openURL(request.url).catch(() => null);

              // Prevent the external link from opening within the webview
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
