import React from "react";
import { Wrapper } from "./styles";
export function Hero({ text }) {
  if (text === undefined) {
    text = "Hero Text";
  }
  return (
    <Wrapper className="Container">
      <h1>
        <span className="bold">
          Get the MBA college of <br /> your dreams
        </span>
      </h1>
      <h3>We use AI to predict the college you’ll go to..</h3>
    </Wrapper>
  );
}
