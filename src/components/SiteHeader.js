import React, { useState, useEffect } from 'react'
import SmartLink from './SmartLink'
import { Link as ScrollLink } from 'react-scroll'

import logo from '../images/olivares_don_ignacio-logo.svg'
import facebook from '../images/facebook.svg'
import twitter from '../images/twitter.svg'
import instagram from '../images/instagram.svg'

const SiteHeader = () => {
	const [pathname, setPathname] = useState('')
	const [menuOpen, setMenuOpen] = useState(false)

	const prodLink =
		pathname === '/' ? (
			<ScrollLink to="productos" duration={500} smooth={true}>
				Productos
			</ScrollLink>
		) : (
			<SmartLink to="/" state={{ toScroll: 'productos' }}>
				Productos
			</SmartLink>
		)

	const toggleMenu = () => {
		setMenuOpen(!menuOpen)
		console.log('huhihu')
	}

	useEffect(() => {
		console.log(window.location.pathname)
		setPathname(window.location.pathname)
	}, [])

	return (
		<header className="site-header">
			<div className="top-bar">
				<div className="top-bar__inner">
					<div className="social">
						<SmartLink to="https://facebook.com" title="Facebook" className="social-link">
							<img src={facebook} alt="f" />
						</SmartLink>
						<SmartLink to="https://twitter.com" title="Twitter" className="social-link">
							<img src={twitter} alt="t" />
						</SmartLink>
						<SmartLink to="https://instagram.com" title="Instagram" className="social-link">
							<img src={instagram} alt="ig" />
						</SmartLink>
					</div>
				</div>
			</div>
			<div className="inner-header">
				<h1 className="logo">
					<SmartLink to="/">
						<img src={logo} alt="Olivares de Don Ignacio" />
					</SmartLink>
				</h1>

				<div
					className={menuOpen ? 'hamb-menu crossed' : 'hamb-menu'}
					onClick={() => toggleMenu()}
				>
					<div className="menu-bar"></div>
					<div className="menu-bar"></div>
					<div className="menu-bar"></div>
				</div>

				<nav className={menuOpen ? 'main-nav open' : 'main-nav'}>
					<ul className="nav-list">
						<li className="nav-item" onClick={() => toggleMenu()}>
							<SmartLink to="/">Inicio</SmartLink>
						</li>
						<li className="nav-item" onClick={() => toggleMenu()}>
							<SmartLink to="/historia">Historia</SmartLink>
						</li>
						<li className="nav-item" onClick={() => toggleMenu()}>
							<SmartLink to="/olivares">Olivares</SmartLink>
						</li>
						<li className="nav-item" onClick={() => toggleMenu()}>
							<SmartLink to="/organicos">Orgánicos</SmartLink>
						</li>
						<li className="nav-item" onClick={() => toggleMenu()}>
							{prodLink}
						</li>
						<li className="nav-item" onClick={() => console.log('ctct')}>
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

export default SiteHeader
