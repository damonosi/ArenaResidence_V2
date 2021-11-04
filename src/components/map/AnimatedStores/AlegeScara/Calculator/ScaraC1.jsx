import React from "react";

import { Spring, animated } from "@react-spring/konva";

class ScaraC1 extends React.Component {
  handleEnter = () => this.setState((state) => ({ flag: !state.flag }));
  handleLeave = () => this.setState((state) => ({ flag: !state.flag }));
  handleTouchStart = () => this.setState((state) => ({ flag: !state.flag }));
  state = { flag: false };
  render() {
    const { flag } = this.state;
    return (
      <Spring
        config={{ duration: 1 }}
        from={{ opacity: 1 }}
        to={{
          opacity: flag ? 0.9 : 0.5,
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
                773, 813, 129, 816, 131, 763, 115, 757, 119, 335, 90, 335, 90,
                297, 133, 297, 135, 256, 147, 255, 146, 235, 776, 238,
              ]}
              // bezier={true}
              // tension={0.1}
              lineJoin={"round"}
              fillAfterStrokeEnabled={true}
              closed={true}
              stroke={"rgba(255, 186, 0, 1)"}
              fill={"rgba(255, 186, 0, .7)"}
            />

            <animated.Label id="tooltip" x={400} y={120}>
              <animated.Tag
                fill={"rgba(255, 186, 0, .7)"}
                stroke={"rgba(255, 186, 0, 1)"}
                shadowColor={"black"}
                shadowBlur={10}
                shadowOffsetX={10}
                shadowOffsetY={10}
                shadowOpacity={0.5}
                lineJoin={"round"}
                pointerDirection={"bottom"}
                pointerWidth={10}
                pointerHeight={10}
                cornerRadius={5}
              />
              <animated.Text
                color="red"
                text="Scara C1"
                fontSize={48}
                padding={5}
                fill="rgba(230, 222, 203, 1)"
              />
            </animated.Label>
          </animated.Group>
        )}
      </Spring>
    );
  }
}

export default ScaraC1;
