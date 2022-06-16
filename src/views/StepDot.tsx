import React from "react";
import { View } from "react-native";
import { DOT_ACTIVE_COLOR, DOT_INACTIVE_COLOR } from "../constants";
import { stepDotsStyles } from "../styles";
import { StepDotsProps, StepDotsState } from "../types";

class StepDot extends React.PureComponent<StepDotsProps, StepDotsState> {

    private countArr: Array<number>;

    constructor(props: StepDotsProps) {
        super(props);
        this.state = { currentIndex: 0 };
        // create an array of size count
        // so that we can create dot elements using Array's map function.
        this.countArr = new Array<number>(props.count);
        for (let i = 0; i < props.count; i++)
            this.countArr[i] = i;
    }

    private getBgColor = (dotIndex: number) => {
        return (dotIndex === this.state.currentIndex)
            ? this.props.activeDotColor ?? DOT_ACTIVE_COLOR
            : this.props.inActiveDotColor ?? DOT_INACTIVE_COLOR;
    }

    public setCurrentIndex = (currentIndex: number) => {
        if (currentIndex !== this.state.currentIndex)
            this.setState({ currentIndex });
    }

    render() {
        return (
            <View style={[stepDotsStyles.main, this.props.style]}>
                {this.countArr.map(c => (
                    <View key={`id-${c}`} style={[
                        stepDotsStyles.dot, { backgroundColor: this.getBgColor(c) }
                    ]} />
                ))}
            </View>
        );
    }
}

export default StepDot;