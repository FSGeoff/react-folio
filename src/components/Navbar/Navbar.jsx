import React from "react";
import { Link } from "react-router-dom";

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
						href="/"
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
						<Link to="/" className="navbar-item" href="/">
							Home
						</Link>

						<div className="navbar-item has-dropdown is-hoverable">
							<a className="navbar-link" href="/">
								More
							</a>

							<div className="navbar-dropdown">
								<Link
									to="/education"
									className="navbar-item"
									href="/education"
								>
									Education
								</Link>
								<Link
									to="/bio"
									className="navbar-item"
									href="/"
								>
									Bio
								</Link>
								<Link to="/workhistory" className="navbar-item" href="/">
									Work History
								</Link>

								<Link to="/projects" className="navbar-item" href="/">
									Projects
								</Link>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
