import React from "react";

import { Spring, animated } from "@react-spring/konva";
class C1Ap5 extends React.Component {
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
              points={[848, 1203, 40, 1210, 38, 2696, 848, 2697]}
              // bezier={true}
              // tension={0.1}
              lineJoin={"round"}
              fillAfterStrokeEnabled={true}
              closed={true}
              stroke={"rgba(240, 182, 170, 1)"}
              fill={"rgba(240, 182, 170, .7)"}
            />
          </animated.Group>
        )}
      </Spring>
    );
  }
}

export default C1Ap5;
