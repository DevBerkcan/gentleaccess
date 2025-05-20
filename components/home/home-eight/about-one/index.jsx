import Icon1 from "@/public/images/v7/icon5v6.png";
import Icon2 from "@/public/images/v7/icon5v6.png";
import Thumb from "@/public/images/v8/image2v8.png";
import Image from "next/image";

function AboutOne() {
	return (
		<div className="aboutversoin8 sofax-section-padding2 bg-light">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="sofax-about-thumbv8 wow fadeInLeft">
							<Image src={Thumb} alt="thumb" />
						</div>
					</div>
					<div className="col-lg-6">
						<div className="sofax-default-content about-vr8 tac">
							<div className="tg-heading-subheading animation-style3">
								<h2>Digitale Inklusion für alle Nutzer</h2>
							</div>
							<p>
								Wir setzen uns für eine digitale Welt ohne Barrieren ein. Unsere Lösungen ermöglichen 
								Menschen mit Behinderungen den uneingeschränkten Zugang zu Online-Inhalten.
							</p>
						</div>
						<div className="sofax-about-content-wrap">
							<div className="sofax-iconbox-wrap2">
								<div className="sofax-iconbox-icon2">
									<Image src={Icon1} alt="icon" />
								</div>
								<div className="sofax-iconbox-data2 aboutv8">
									<h4>Individuelle Lösungen</h4>
									<p>Jede Webseite ist einzigartig – wir passen unsere Lösungen an Ihre Bedürfnisse an.</p>
								</div>
							</div>
							<div className="sofax-iconbox-wrap2">
								<div className="sofax-iconbox-icon2">
									<Image src={Icon2} alt="icon" />
								</div>
								<div className="sofax-iconbox-data2 aboutv8">
									<h4>Individuelle Beratung</h4>
									<p>Maßgeschneiderte Lösungen für Ihre spezifischen Anforderungen.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutOne;