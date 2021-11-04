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
                1268, 1188, 1057, 1192, 1060, 13, 1884, 16, 1888, 404, 2057,
                413, 2048, 1036, 1270, 1036,
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

export default C1Ap3;
