import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// Either a Sandbox or Production SDK URL
const sdkUrl = "<url>";

export default class Main extends Component {
  openColumnModule = () => {
    this.props.navigation.navigate("ColumnModuleView", {
      url: sdkUrl,
    });
  };

  render() {
    return (
      <View style={styles.view}>
        <Text>Click below to open the Column Module:</Text>
        <StatusBar style="auto" />
        <TouchableOpacity
          onPress={this.openColumnModule}
          style={styles.touchable}
        >
          <Text style={styles.text}>Open Column</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  touchable: {
    alignItems: "center",
    backgroundColor: "#0070ff",
    display: "flex",
    height: 50,
    width: 150,
    marginTop: 10,
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
});
