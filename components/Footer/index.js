import React from "react";
import { SubscribeForm } from "../SubscribeForm";
import { FooterWrapper, LogoWrapper } from "./styles";
import Link from "next/link";

export function Footer() {
	return (
		<FooterWrapper id="Footer">
			<div className="Container">
				<div>
					<LogoWrapper src="/logo.png" alt="Logo" />
					<p>Use our AI to predict the MBA College of your dreams</p>
				</div>
			</div>
		</FooterWrapper>
	);
}
