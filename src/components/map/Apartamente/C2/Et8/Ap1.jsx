import React from "react";

import { Spring, animated } from "@react-spring/konva";
class C2Ap1 extends React.Component {
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
                2569, 1387, 2583, 617, 687, 603, 691, 1374, 1326, 1374, 1321,
                1606, 2026, 1624, 2031, 1387,
              ]}
              // bezier={true}
              // tension={0.1}
              lineJoin={"round"}
              fillAfterStrokeEnabled={true}
              closed={true}
              stroke={"rgba(255, 186, 0, .9)"}
              fill={"rgba(255, 186, 0, .7)"}
            />

            <animated.Line
              points={[1374, 3196, 1378, 2863, 656, 2863, 669, 3201]}
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

export default C2Ap1;
