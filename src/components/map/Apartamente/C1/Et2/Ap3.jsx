import React from "react";

import { Spring, animated } from "@react-spring/konva";
class C1Ap3 extends React.Component {
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
                1061, 3731, 1915, 3722, 1915, 3341, 2066, 3347, 2060, 2686,
                1272, 2694, 1272, 2539, 1067, 2538,
              ]}
              // bezier={true}
              // tension={0.1}
              lineJoin={"round"}
              fillAfterStrokeEnabled={true}
              closed={true}
              stroke={"rgba(222, 189, 206, 1)"}
              fill={"rgba(222, 189, 206, .7)"}
            />
          </animated.Group>
        )}
      </Spring>
    );
  }
}

export default C1Ap3;
