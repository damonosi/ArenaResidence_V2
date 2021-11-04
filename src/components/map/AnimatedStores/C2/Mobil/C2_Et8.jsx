import React from "react";

import { Spring, animated } from "@react-spring/konva";

class C2Et8 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { flag: true };
    this.makeTimer();
  }
  makeTimer() {
    setInterval(() => {
      this.setState({ flag: false });
    }, 2900);
  }
  state = { flag: true };
  handleEnter = () => this.setState((state) => ({ flag: !state.flag }));
  handleLeave = () => this.setState((state) => ({ flag: !state.flag }));
  handleTouchStart = () => this.setState((state) => ({ flag: !state.flag }));

  render() {
    const { flag } = this.state;
    return (
      <Spring
        native
        from={{ opacity: 1 }}
        config={{ duration: 10 }}
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
              points={[
                774, 337, 775, 246, 1387, 249, 1386, 268, 1400, 268, 1401, 305,
                1447, 307, 1447, 342,
              ]}
              key={11}
              // bezier={true}
              // tension={0.1}
              lineJoin={"round"}
              fillAfterStrokeEnabled={true}
              closed={true}
              fill={"rgba(253, 180, 0, .7)"}
            />

            <animated.Label id="tooltip" x={540} y={280}>
              <animated.Tag
                fill={"rgba(253, 180, 0, .7)"}
                stroke={"#333"}
                shadowColor={"black"}
                shadowBlur={10}
                shadowOffsetX={10}
                shadowOffsetY={10}
                shadowOpacity={0.5}
                lineJoin={"round"}
                pointerDirection={"right"}
                pointerWidth={10}
                pointerHeight={10}
                cornerRadius={5}
              />
              <animated.Text
                color="red"
                text="Plan Etaj 8"
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

export default C2Et8;
