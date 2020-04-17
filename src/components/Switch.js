import React from "react";
import { Switch, Platform } from "react-native";

const GRAY_COLOR = "rgba(168, 182, 200, 0.30)";

export default class SwitchInput extends React.PureComponent {
  render() {
    const { value, ...props } = this.props;
    let thumbColor = null;

    if (Platform.OS === "android") {
      thumbColor = GRAY_COLOR;
      if (props.value) thumbColor = "#3498DB";
    }

    return (
      <Switch
        thumbColor={thumbColor}
        ios_backgroundColor={GRAY_COLOR}
        trackColor={{
          // false: GRAY_COLOR,
          true: "#3498DB"
        }}
        value={value}
        {...props}
      />
    );
  }
}
