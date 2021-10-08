import React, {useEffect, useState} from "react";
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {encode as btoa} from 'base-64';
import axios from "axios";

const serverUrl = 'http://localhost:3003/token'


// Sandbox URL: "https://app-sandbox.columnapi.com/sdk"
// Production URL: "https://app.columnapi.com/sdk"
const build_url = (token, base_url = "http://localhost:3001/sdk") => {
    let param_string = JSON.stringify({token: token});
    let params = btoa(param_string);
    return `${base_url}?params=${params}`;
}

const Main = (props) => {
    const [token, setokenToken] = useState('')

    const fetchToken = () => {
        axios.get(serverUrl)
            .then((body) => {
                setokenToken(body.data)
            })
    };

    useEffect(() => {
        fetchToken();
    }, []);

    const openColumnModule = () => {
        props.navigation.navigate("ColumnModuleView", {
            url: build_url(token)
        });
    };

    return (
        <View style={styles.view}>
            <Text>Click below to open the Column Module:</Text>
            <StatusBar style="auto"/>
            <TouchableOpacity onPress={openColumnModule} style={styles.touchable}>
                <Text style={styles.text}>Open Column</Text>
            </TouchableOpacity>
        </View>
    );
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
    }
});

export default Main;