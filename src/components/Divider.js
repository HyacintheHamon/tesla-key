import React, { Component } from "react";
import { StyleSheet } from "react-native";
import Block from "./Block";

export default class Divider extends Component {
  render() {
    const { color, style, ...props } = this.props;
    const dividerStyles = [styles.divider, style];

    return (
      <Block
        color={color || "#C5CCD6"}
        style={dividerStyles}
        {...props}
      />
    );
  }
}

export const styles = StyleSheet.create({
  divider: {
    height: 0,
    margin: 16 * 2,
    borderBottomColor: "#C5CCD6",
    borderBottomWidth: StyleSheet.hairlineWidth
  }
});
