import React from 'react'
import Link from './link'

import logo from '../images/olivares_don_ignacio-logo.svg'
import facebook from '../images/facebook.svg'
import twitter from '../images/twitter.svg'
import instagram from '../images/instagram.svg'

const Header = () => (
	<header className="site-header">
		<div className="inner-header">
			<div className="top-bar">
				<div className="social">
					<Link to="https://facebook.com" title="Facebook" className="social-link">
						<img src={facebook} alt="f" />
					</Link>
					<Link to="https://twitter.com" title="Twitter" className="social-link">
						<img src={twitter} alt="t" />
					</Link>
					<Link to="https://instagram.com" title="Instagram" className="social-link">
						<img src={instagram} alt="ig" />
					</Link>
				</div>
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
