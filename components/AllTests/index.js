import React from "react";
import { Wrapper } from "./styles";
import Link from "next/link";

import { TestCard } from "../TestCard";

export function AllTests({ hide, tests, title, buttonShow }) {
  return (
    <Wrapper className="Container" id="tests">
      {hide === false && <h3>New tests are added every week 👇🏼</h3>}
      {title && <h3>{title}</h3>}
      <div>
        {tests.map((test) => (
          <TestCard key={test.id} test={test} />
        ))}
      </div>
      {buttonShow === true && 
        <Link href="/explore-more">
          
          <button>Explore More</button>
        </Link>
      }
    </Wrapper>
  );
}
