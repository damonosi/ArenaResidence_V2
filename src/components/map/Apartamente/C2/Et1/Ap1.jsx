import React from "react";

import { Spring, animated } from "@react-spring/konva";
class C1Ap1 extends React.Component {
  state = { flag: false };
  handleEnter = () => this.setState((state) => ({ flag: !state.flag }));
  handleLeave = () => this.setState((state) => ({ flag: !state.flag }));
  handleTouchStart = () => this.setState((state) => ({ flag: !state.flag }));

  render() {
    const { flag } = this.state;

    return (
      <Spring
        config={{ duration: 1 }}
        from={{ opacity: 1 }}
        to={{
          opacity: flag ? 1 : 0.7,
        }}
      >
        {(props) => (
          <animated.Group
            {...props}
            onMouseLeave={this.handleLeave}
            onMouseEnter={this.handleEnter}
            onTouchStart={this.handleTouchStart}
          >
            <animated.Line
              points={[
                1270, 2200, 2046, 2200, 2050, 3577, 1606, 3572, 1606, 3710,
                1296, 3710, 1276, 2890, 1046, 2881, 1044, 2348, 1274, 2348,
              ]}
              // bezier={true}
              // tension={0.1}
              lineJoin={"round"}
              fillAfterStrokeEnabled={true}
              closed={true}
              stroke={"rgba(179, 186, 212, 1)"}
              fill={"rgba(179, 186, 212, 0.7)"}
            />
          </animated.Group>
        )}
      </Spring>
    );
  }
}

export default C1Ap1;
