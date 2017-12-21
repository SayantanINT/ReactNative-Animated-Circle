import React, {Component} from 'react';
import {Animated, Easing, View,} from 'react-native';

const edgeLength = 20
export default class PlotPointTwo extends Component<{}> {

    state = {
        growAnimation: new Animated.Value(0),
        moveAnimation: new Animated.Value(0),
    };


    componentDidMount() {
        this.spinAndMove();
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

    move = () => {
        Animated.spring(this.state.moveAnimation, {
            toValue: 100,
        }).start();


    };

    spinAndMove = () => {
        this.spin();
        this.move();
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
            <View>
                <Animated.View style={squareAnimation}/>
            </View>
        );
    }

}