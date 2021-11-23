import React, { useState } from "react";
import { Wrapper } from "./styles";
import Link from "next/link";

export function FirstTestCard({ setSelectedRole, setSelectedAnswer }) {
  const [active, setActive] = useState(false);
  const handleAnswerOptionClick = (answer) => {
    setActive(answer);
    setSelectedRole(answer);
    setSelectedAnswer(null);
  };
  return (
    <Wrapper className="Container">
      <div>
        <h1>
          <span className="bold">Ready for predictions?</span>
        </h1>
        <h3>Have you appeared or planning to appear for CAT?</h3>
        <Link href="/first-test" passHref>
          <button>Next</button>
        </Link>
      </div>
    </Wrapper>
  );
}
