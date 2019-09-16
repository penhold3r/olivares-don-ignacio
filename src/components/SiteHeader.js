import React, { useState, useEffect } from 'react'
import SmartLink from './SmartLink'
import { Link as ScrollLink } from 'react-scroll'

import logo from '../images/olivares_don_ignacio-logo.svg'
import facebook from '../images/facebook.svg'
import twitter from '../images/twitter.svg'
import instagram from '../images/instagram.svg'

const SiteHeader = () => {
	const [pathname, setPathname] = useState('')

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

	useEffect(() => {
		console.log(window.location.pathname)
		setPathname(window.location.pathname)
	}, [])

	return (
		<header className="site-header">
			<div className="inner-header">
				<div className="top-bar">
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
				<h1 className="logo">
					<SmartLink to="/">
						<img src={logo} alt="Olivares de Don Ignacio" />
					</SmartLink>
				</h1>
				<nav className="main-nav">
					<ul className="nav-list">
						<li className="nav-item">
							<SmartLink to="/">Inicio</SmartLink>
						</li>
						<li className="nav-item">
							<SmartLink to="/historia">Historia</SmartLink>
						</li>
						<li className="nav-item">
							<SmartLink to="/olivares">Olivares</SmartLink>
						</li>
						<li className="nav-item">
							<SmartLink to="/organicos">Orgánicos</SmartLink>
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

export default SiteHeader
