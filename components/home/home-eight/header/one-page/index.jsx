import MobileNavbar from "@/components/common/navigation/mobile-nav/MobileNavbar";
import HeaderButton from "../HeaderButton";
import HeaderLogo from "../HeaderLogo";
const menuItemsData = [
	{
		title: "Home",
		url: "#hero",
	},
	{
		title: "Fact",
		url: "#fact",
	},
	{
		title: "Service",
		url: "#service",
	},

	{
		title: "Pricing",
		url: "#pricing",
	},
	{
		title: "Project",
		url: "#project",
	},
	{
		title: "Testimonial",
		url: "#testimonial",
	},
];
function Header() {
	return (
		<header className="site-header sofax-header-section site-header--menu-center bg-white" id="sticky-menu">
			<div className="container">
				<nav className="navbar site-navbar">
					<HeaderLogo />
					<div className="menu-block-wrapper">
						<nav className="menu-block" id="append-menu-header">
							<ul className="site-menu-main">
								<li className="nav-item">
									<a href="#hero" className="nav-link-item">
										Home
									</a>
								</li>
								<li className="nav-item">
									<a href="#fact" className="nav-link-item">
										Fakten
									</a>
								</li>
									<li className="nav-item">
									<a href="#service" className="nav-link-item">
										Leistungen
									</a>
								</li>
								<li className="nav-item">
									<a href="#about" className="nav-link-item">
										Über uns
									</a>
								</li>
							</ul>
						</nav>
					</div>
					<HeaderButton />
					<MobileNavbar menuItemsData={menuItemsData} title="Sofax" onePage={true} />
				</nav>
			</div>
		</header>
	);
}

export default Header;
