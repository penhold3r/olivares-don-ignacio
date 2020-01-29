import React, { useState, useEffect } from 'react'
import { navigate } from 'gatsby'
import SmartLink from './SmartLink'
import { Link as scroller } from 'react-scroll'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logo from '../images/olivares_don_ignacio-logo.svg'

/*
<ScrollLink to="productos" duration={500} smooth={true}>
				Productos
			</ScrollLink>
*/

const SiteHeader = () => {
	const [pathname, setPathname] = useState('')
	const [menuOpen, setMenuOpen] = useState(false)

	const prodLink =
		pathname === '/' ? (
			<a href="#productos" onClick={e => handleClick(e, 'productos')}>
				Productos
			</a>
		) : (
			<SmartLink to="/" state={{ toScroll: 'productos' }}>
				Productos
			</SmartLink>
		)

	const toggleMenu = () => {
		setMenuOpen(!menuOpen)
	}

	const handleClick = (e, tgt) => {
		e.preventDefault()

		toggleMenu()
		tgt === 'productos' || tgt === 'contacto'
			? scroller.scrollTo(tgt, {
					duration: 500,
					smooth: true,
					offset: -100
			  })
			: navigate(tgt, {
					toScroll: tgt
			  })
	}

	useEffect(() => {
		setPathname(window.location.pathname)
	}, [])

	return (
		<header className="site-header">
			<div className="top-bar">
				<div className="top-bar__inner">
					<div className="social">
						<SmartLink to="https://facebook.com" title="Facebook" className="social-link">
							<FontAwesomeIcon className="fa" icon={['fab', 'facebook-f']} />
						</SmartLink>
						<SmartLink to="https://twitter.com" title="Twitter" className="social-link">
							<FontAwesomeIcon className="fa" icon={['fab', 'twitter']} />
						</SmartLink>
						<SmartLink to="https://instagram.com" title="Instagram" className="social-link">
							<FontAwesomeIcon className="fa" icon={['fab', 'instagram']} />
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
						<li className="nav-item">
							<a href="/" onClick={e => handleClick(e, '/')}>
								Inicio
							</a>
						</li>
						<li className="nav-item">
							<a href="/historia" onClick={e => handleClick(e, 'historia')}>
								Historia
							</a>
						</li>
						<li className="nav-item">
							<a href="/olivares" onClick={e => handleClick(e, 'olivares')}>
								Olivares
							</a>
						</li>
						<li className="nav-item">
							<a href="/organicos" onClick={e => handleClick(e, 'organicos')}>
								Orgánicos
							</a>
						</li>
						<li className="nav-item">{prodLink}</li>
						<li className="nav-item">
							<a href="/contacto" onClick={e => handleClick(e, 'contacto')}>
								Contacto
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default SiteHeader
