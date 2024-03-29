import React, { Component } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as Clipboard from 'expo-clipboard';
import * as SplashScreen from 'expo-splash-screen';

// Either a Local, Sandbox or Production SDK URL
const sdkUrl = "<url>";

const primaryColor = "#0070ff";
const primaryColorLight = "#2090ff";
const primaryColorSuperlight = "#e0e0ff";
const lightGrey = "#f0f0f0";

SplashScreen.preventAutoHideAsync();
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { url: "", copiedText: "", inputValue: null, error: null };
  }

  openColumnModule = () => {
    this.props.navigation.navigate("ColumnModuleView", {
      url: sdkUrl,
    });
  };

  fetchCopiedText = async () => {
    const text = await Clipboard.getStringAsync();
    this.setState({ copiedText: text, url: text });
  };

  componentDidMount() {
    this.fetchCopiedText();
    SplashScreen.hideAsync();
  };

  openCustom = () => {
    if (this.state.url === "") {
      this.setState({ error: "No url provided"});
      return;
    }
    this.props.navigation.navigate("ColumnModuleView", {
      url: this.state.url,
    });
  };

  render() {
    return (
      <View style={styles.view}>
        <Text style={{ marginBottom: 16, color: primaryColor }}>Use the input below for custom column url</Text>
        <TextInput
          value={this.state.inputValue && this.state.inputValue.length < 1 ? this.state : null}
          onChangeText={(inputText) => this.setState({ inputValue: inputText, url: inputText, error: null })}
          placeholder={`Copied text: ${this.state.copiedText}`}
          style={styles.input}
          multiline={true}
        />
        <TouchableOpacity
          onPress={this.openCustom}
          style={{ marginTop: 16, ...styles.touchable}}
        >
          <Text style={styles.text}>Open Column url</Text>
        </TouchableOpacity>
        <Text style={{ marginTop: 8, marginBottom: 8, color: "#aa0000", lineHeight: 16 }}>&nbsp;{this.state.error}</Text>
        <Text style={{ marginTop: 32, marginBottom: 64, color: primaryColor }}>or</Text>
        <StatusBar style="auto" />
        <TouchableOpacity
          onPress={this.openColumnModule}
          style={styles.touchable}
        >
          <Text style={styles.text}>Open preset Column url</Text>
        </TouchableOpacity>
        <Text style={styles.presetUrlBox}>{sdkUrl}</Text>
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
  input: {
    width: 320,
    height: 100,
    fontSize: 16,
    borderColor: primaryColorSuperlight,
    borderStyle: "solid",
    borderRadius: 3,
    borderWidth: 1,
    textAlignVertical: "top",
    padding: 8,
    backgroundColor: lightGrey,
  },
  touchable: {
    alignItems: "center",
    backgroundColor: primaryColor,
    display: "flex",
    height: 50,
    width: 300,
    justifyContent: "center",
    borderRadius: 25,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  presetUrlBox: {
    borderStyle: "solid",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: primaryColorSuperlight,
    width: 320,
    marginTop: 16,
    fontSize: 9,
    color: primaryColor,
    padding: 6,
  }
});
