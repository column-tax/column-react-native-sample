import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";

export default class ColumnModuleView extends Component {
  onMessageReceiver = (eventDataString) => {
    let eventData = JSON.parse(eventDataString);

    if (eventData.name === "column-on-close") {
      this.props.navigation.goBack();
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
