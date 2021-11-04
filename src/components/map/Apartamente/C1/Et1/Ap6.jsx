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
                1026, 1386, 1034, 848, 1267, 856, 1269, 7, 575, 5, 576, 54, 527,
                52, 525, 160, 301, 168, 299, 258, 156, 259, 147, 601, 150, 825,
                40, 825, 42, 891, 11, 895, 7, 1135, 84, 1132, 84, 1187, 848,
                1192, 854, 1387,
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
