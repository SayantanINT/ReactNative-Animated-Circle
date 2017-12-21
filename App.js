/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Animated,
    Easing,
} from 'react-native';


let radiusArray = [160, 106.66, 53.66];
const edgeLength = 20;


export default class App extends Component<{}> {


    state = {
        growAnimation: new Animated.Value(0),
        moveAnimation: new Animated.Value(0),
    };

    componentDidMount() {
        this.spinAndMove(80, 100);
    }

    spin = () => {
        this.state.growAnimation.setValue(0);

        Animated.timing(this.state.growAnimation, {
            toValue: 1,
            duration: 10000,
            easing: Easing.linear,
        }).start((animation) => {
            if (animation.finished) {
                this.spin();
            }
        });
    };

    move = (radius, radius1) => {
        Animated.spring(this.state.moveAnimation, {
            toValue: radius,
        }).start();

        Animated.spring(this.state.moveAnimation, {
            toValue: radius1,
        }).start();

    };

    spinAndMove = (radius, radius1) => {
        this.spin();
        this.move(radius, radius1);
    };

    render() {
        const squareAnimation = {
            height: edgeLength,
            width: edgeLength,
            transform: [
                {
                    rotate: this.state.growAnimation.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0deg', '360deg'],
                    }),
                },
                {
                    translateY: this.state.moveAnimation,
                },
            ],
            borderRadius: 10,
            backgroundColor: 'blue',
        };

        return (
            <View style={styles.container}>
                <View>
                    <Animated.View style={squareAnimation}/>
                </View>
                {/*<TouchableWithoutFeedback onPress={this.spinAndMove}>*/}

                {/*{this.generateViews()}*/}
                {/*</TouchableWithoutFeedback>*/}
            </View>
        );
    }

    generateViews() {

        const squareAnimation = {
            height: edgeLength,
            width: edgeLength,
            transform: [
                {
                    rotate: this.state.growAnimation.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0deg', '360deg'],
                    }),
                },
                {
                    translateY: this.state.moveAnimation,
                },
            ],
            borderRadius: 10,
            backgroundColor: 'blue',
        };


        let planetArray = [];

        for (let i = 0; i < radiusArray.length; i++) {
            this.spinAndMove(radiusArray[i]);
            planetArray.push(
                <Animated.View style={squareAnimation}/>
            )

        }

        return (planetArray)

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
