import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../../context/UserProvider";

import Link from "next/link";

import siteData from "../../data/siteconfig.json";

import { HeaderWrapper, LogoWrapper } from "./styles";
import { Menu } from "../Menu";
import { Hamburger } from "../Hamburger";
import { MobileMenu } from "../MobileMenu";

export function Header({ page }) {
	const [profile, setProfile] = useContext(UserContext);
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<HeaderWrapper menuOpen={menuOpen}>
			<div className="Container">
				<Link href="/" id="logo" className={"image-container"} passHref>
					<LogoWrapper src="/logo.png" alt="Logo" />
				</Link>
				<MobileMenu
					menuOpen={menuOpen}
					setMenuOpen={setMenuOpen}
					items={siteData}
					profile={profile}
				/>
				<Menu items={siteData} profile={profile} />
				<Hamburger
					menuOpen={menuOpen}
					setMenuOpen={setMenuOpen}
					id="Hamburger"
				/>
			</div>
		</HeaderWrapper>
	);
}
