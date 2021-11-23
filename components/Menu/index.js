import React from "react";
import { Nav } from "./styles";
import Link from "next/link";
import Image from "next/image";

export function Menu({ items, profile }) {
	return (
		<Nav>
			{items.map((item) => (
				<li key={item.id}>
					<Link href={item.link}>{item.name}</Link>
				</li>
			))}
			{profile === null ? (
				<li>
					<Link href="/profile">Sign IN</Link>
				</li>
			) : (
				<li>
					<Link href="/profile" passHref>
						<div>
							<Image
								src={profile.user_metadata.avatar_url}
								width={30}
								height={30}
								className={"profile-image"}
								alt="profile photo"
							/>
						</div>
					</Link>
				</li>
			)}
		</Nav>
	);
}
