import React from "react";

import { Spring, animated } from "@react-spring/konva";
class C1Et4 extends React.Component {
  state = { flag: false };
  handleEnter = () => this.setState((state) => ({ flag: !state.flag }));
  handleLeave = () => this.setState((state) => ({ flag: !state.flag }));
  handleTouchStart = () => this.setState((state) => ({ flag: !state.flag }));
  render() {
    const { flag } = this.state;
    return (
      <Spring
        native
        config={{ duration: 10 }}
        from={{ opacity: 1 }}
        to={{
          opacity: flag ? 1 : 0.1,
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
              points={[776, 571, 776, 513, 117, 516, 117, 571]}
              key={11}
              // bezier={true}
              // tension={0.1}
              lineJoin={"round"}
              fillAfterStrokeEnabled={true}
              closed={true}
              fill={"rgba(253, 180, 0, .7)"}
            />

            <animated.Label id="tooltip" x={1010} y={540}>
              <animated.Tag
                fill={"rgba(253, 180, 0, .7)"}
                stroke={"#333"}
                shadowColor={"black"}
                shadowBlur={10}
                shadowOffsetX={10}
                shadowOffsetY={10}
                shadowOpacity={0.5}
                lineJoin={"round"}
                pointerDirection={"left"}
                pointerWidth={10}
                pointerHeight={10}
                cornerRadius={5}
              />
              <animated.Text
                color="red"
                text="Plan Etaj 4"
                fontSize={44}
                padding={10}
                fill="#e6decb"
              />
            </animated.Label>
          </animated.Group>
        )}
      </Spring>
    );
  }
}

export default C1Et4;
