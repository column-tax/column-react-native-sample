import React, {Component} from "react";
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {encode as btoa} from 'base-64';

const token = "<token>"

// Sandbox URL: "https://app-sandbox.columnapi.com/sdk"
// Production URL: "https://app.columnapi.com/sdk"
const build_url = (token, base_url = "https://app-sandbox.columnapi.com/sdk") => {
    let param_string = JSON.stringify({token: token});
    let params = btoa(param_string);
    return `${base_url}?params=${params}`;
}

export default class Main extends Component {
    openColumnModule = () => {
        this.props.navigation.navigate("ColumnModuleView", {
            url: build_url(token)
        });
    };

    render() {
        return (
            <View style={styles.view}>
                <Text>Click below to open the Column Module:</Text>
                <StatusBar style="auto"/>
                <TouchableOpacity onPress={this.openColumnModule} style={styles.touchable}>
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
        color: "#fff", }
});
