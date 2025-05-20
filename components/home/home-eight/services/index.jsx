import icon5 from "@/public/images/v8/icon10v8.png";
import icon6 from "@/public/images/v8/icon11v8.png";
import icon1 from "@/public/images/v8/icon6v8.png";
import icon2 from "@/public/images/v8/icon7v8.png";
import icon3 from "@/public/images/v8/icon8v8.png";
import icon4 from "@/public/images/v8/icon9v8.png";
import FadeInStagger from "../../../animation/FadeInStagger";
import ServiceCard from "./ServiceCard";

const servicesData = [
	{
		id: 1,
		icon: icon1,
		title: "Barrierefreie Webentwicklung",
		description:
			"Wir erstellen Webseiten, die für alle zugänglich sind – inklusive Menschen mit Behinderungen.",
	},
	{
		id: 2,
		icon: icon2,
		title: "Barrierefreiheit prüfen",
		description: "Audit und Analyse Ihrer Webseite auf Barrierefreiheit gemäß WCAG & BITV.",
	},
	{
		id: 3,
		icon: icon3,
		title: "Digitale Inklusion",
		description:
			"Wir fördern digitale Teilhabe für alle – durch zugängliche Gestaltung und nutzerfreundliche Interfaces.",
	},
	{
		id: 4,
		icon: icon4,
		title: "Strategische Beratung",
		description:
			"Beratung zur digitalen Barrierefreiheit und rechtlichen Anforderungen (z. B. EU-Richtlinien, BITV).",
	},
	{
		id: 5,
		icon: icon5,
		title: "SEO & Performance",
		description:
			"Barrierefreiheit steigert nicht nur Zugänglichkeit, sondern auch SEO-Rankings und Ladezeiten.",
	},
	{
		id: 6,
		icon: icon6,
		title: "Technischer Support",
		description: "Wir begleiten Sie langfristig mit Support und Weiterentwicklungen für Ihre barrierefreie Lösung.",
	},
];

function Services() {
	return (
		<section className="sofax-section-padding2 bg-light" id="service">
			<div className="container">
				<div className="sofax-section-title center">
					<div className="tg-heading-subheading animation-style3">
						<h2>Unsere Leistungen für barrierefreie Webseiten</h2>
					</div>
				</div>

				<div className="sofax-features-wrapv8">
					{servicesData.map((service, index) => (
						<FadeInStagger key={service.id} index={index} className="sofax-features-boxv8">
							<ServiceCard service={service} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</section>
	);
}

export default Services;
