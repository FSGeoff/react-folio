import React from "react";

const Navbar = () => {
	return (
		<div>
			<nav
				className="navbar"
				role="navigation"
				aria-label="main navigation"
			>
				<div className="navbar-brand">
					<a
						role="button"
						className="navbar-burger"
						aria-label="menu"
						aria-expanded="false"
						data-target="navbarBasicExample"
					>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</a>
				</div>

				<div id="navbarBasicExample" className="navbar-menu">
					<div className="navbar-start">
						<a className="navbar-item" href="/">
							Home
						</a>

						<div className="navbar-item has-dropdown is-hoverable">
							<a className="navbar-link" href="/">
								More
							</a>

							<div className="navbar-dropdown">
								<a className="navbar-item" href="/">
									Education
								</a>
								<a className="navbar-item" href="/">
									Bio
								</a>
								<a className="navbar-item" href="/">
									Work History
								</a>

								<a className="navbar-item" href="/">
									Projects
								</a>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
