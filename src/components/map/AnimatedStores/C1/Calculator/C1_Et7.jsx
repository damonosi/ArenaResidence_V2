import React from "react";

import { Spring, animated } from "@react-spring/konva";

class C1Et7 extends React.Component {
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
              points={[779, 396, 778, 335, 121, 334, 118, 396]}
              key={11}
              // bezier={true}
              // tension={0.1}
              lineJoin={"round"}
              fillAfterStrokeEnabled={true}
              closed={true}
              fill={"rgba(253, 180, 0, .7)"}
            />
            <animated.Label id="tooltip" x={780} y={360}>
              <animated.Tag
                fill={"rgba(255, 186, 0, .7)"}
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
                text="Plan Etaj 7"
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

export default C1Et7;
