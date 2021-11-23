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
          <span className="bold">Take your first test</span>
        </h1>
        <h3>
          We’ve prepared a short quiz to test if you have the necessary
          qualities to become a product manager
        </h3>
        <Link href="/first-test" passHref>
          <button>Take the test</button>
        </Link>
      </div>
    </Wrapper>
  );
}
