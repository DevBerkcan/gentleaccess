import Link from "next/link";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../../../animation/FadeInStaggerTwo";

function HeroContent() {
	return (
		<div className="sofax-hero-content hero-v8">
			<h1 className="slider-custom-anim-left" data-ani="slider-custom-anim-left" data-ani-delay="0.3s">
				Digitale Barrierefreiheit für alle
			</h1>
			<p>
				Wir machen Ihre Webseite zugänglich für Menschen mit Behinderungen und schaffen ein inklusives Online-Erlebnis 
				gemäß WCAG-Richtlinien und BITV.
			</p>
			<FadeInStaggerTwo className="sofax-hero-btn-wrap sofax-hero5-btn extra-mt">
				<FadeInStaggerTwoChildren>
					<Link className="sofax-default-btn pill" data-text="Mehr erfahren" href="/contact-us">
						<span className="button-wraper">Mehr erfahren</span>
					</Link>
				</FadeInStaggerTwoChildren>
				<FadeInStaggerTwoChildren>
					<Link className="sofax-default-btn pill dark-btn" data-text="Kontakt" href="/service">
						<span className="button-wraper">Kontakt</span>
					</Link>
				</FadeInStaggerTwoChildren>
			</FadeInStaggerTwo>
		</div>
	);
}

export default HeroContent;