import React from "react";

import { Spring, animated } from "@react-spring/konva";
class C1Ap6 extends React.Component {
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
                1281, 3728, 1276, 2892, 1046, 2880, 1040, 2349, 849, 2351, 849,
                2546, 31, 2537, 47, 3571, 503, 3566, 498, 3731,
              ]}
              // bezier={true}
              // tension={0.1}
              lineJoin={"round"}
              fillAfterStrokeEnabled={true}
              closed={true}
              stroke={"rgba(255, 186, 0, .9)"}
              fill={"rgba(255, 186, 0, .7)"}
            />
          </animated.Group>
        )}
      </Spring>
    );
  }
}

export default C1Ap6;
