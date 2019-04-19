import { Link } from 'gatsby'
import React from 'react'

import logo from '../images/olivares_don_ignacio-logo.svg'

const Header = () => (
	<header className="site-header">
		<div className="inner-header">
			<div className="top-bar">
				<div className="social" />
			</div>
			<h1 className="logo">
				<Link to="/">
					<img src={logo} alt="Olivares de Don Ignacio" />
				</Link>
			</h1>
			<nav className="main-nav">
				<ul className="nav-list">
					<li className="nav-item">
						<Link to="/">Inicio</Link>
					</li>
					<li className="nav-item">
						<Link to="/historia">Historia</Link>
					</li>
					<li className="nav-item">
						<Link to="/olivares">Olivares</Link>
					</li>
					<li className="nav-item">
						<Link to="/#productos">Productos</Link>
					</li>
					<li className="nav-item">
						<Link to="/#contacto">Contacto</Link>
					</li>
				</ul>
			</nav>
		</div>
	</header>
)

export default Header
