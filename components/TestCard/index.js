import React from "react";
import { Card } from "./styles";
import Image from "next/image";
import Link from "next/link";
export function TestCard({ test }) {
  return (
    <Link href={`/tests/${test.slug}`} passHref>
      <Card>
        <Image
          src={test.coverImage.url}
          layout="responsive"
          width={300}
          height={180}
          className={"card-image"}
          alt={test.coverImage.fileName}
        />
        <div>
          <h4>{test.title}</h4>
          <p>{test.description}</p>
        </div>
      </Card>
    </Link>
  );
}
