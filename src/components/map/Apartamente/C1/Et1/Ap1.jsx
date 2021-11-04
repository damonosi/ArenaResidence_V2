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
            onTouchEnd={this.handleTouchStart}
          >
            <animated.Line
              points={[
                1271, 11, 1283, 870, 1054, 870, 1054, 1113, 1267, 1113, 1267,
                1531, 2026, 1528, 2042, 177, 1583, 179, 1581, 54, 1537, 55,
                1539, 10,
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
