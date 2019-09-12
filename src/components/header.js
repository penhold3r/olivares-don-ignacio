import React, { useState, useEffect } from 'react'
import Link from './Link'
import { Link as ScrollLink } from 'react-scroll'

import logo from '../images/olivares_don_ignacio-logo.svg'
import facebook from '../images/facebook.svg'
import twitter from '../images/twitter.svg'
import instagram from '../images/instagram.svg'

const Header = () => {
	const [pathname, setPathname] = useState('')

	const prodLink =
		pathname === '/' ? (
			<ScrollLink to="productos" duration={500} smooth={true}>
				Productos
			</ScrollLink>
		) : (
			<Link to="/" state={{ toScroll: 'productos' }}>
				Productos
			</Link>
		)

	useEffect(() => {
		console.log(window.location.pathname)
		setPathname(window.location.pathname)
	}, [])

	return (
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
							<Link to="/organicos">Orgánicos</Link>
						</li>
						<li className="nav-item">{prodLink}</li>
						<li className="nav-item">
							<ScrollLink to="contacto" duration={500} smooth={true}>
								Contacto
							</ScrollLink>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header
