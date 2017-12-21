/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View,} from 'react-native';
import PlotPointOne from "./src/PlotPointOne";
import PlotPointTwo from "./src/PlotPointTwo";


let radiusArray = [160, 106.66, 53.66];


export default class App extends Component<{}> {

    render() {

        return (
            <View style={styles.container}>
                <PlotPointOne/>
                <PlotPointTwo/>

            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
