import React from "react";
import ReactLoading from "react-loading";
import { Wrapper } from "./styles";

export function Loading() {
  return (
    <Wrapper className="Container">
      <div>
        <ReactLoading type="spin" color="#BBC8D4" height={100} width={100} />
      </div>
    </Wrapper>
  );
}

export default Loading;
