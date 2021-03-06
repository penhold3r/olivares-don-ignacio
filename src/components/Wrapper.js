import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHome, faEnvelope, faPhoneAlt, faIndustry } from '@fortawesome/free-solid-svg-icons'

import SiteHeader from './SiteHeader'
import Contact from '../components/Contact'
import SiteFooter from './SiteFooter'

import 'sanitize.css'
import '../styles/index.scss'

import opengraph from '../images/olivares-og.png'
import faviconICO from '../images/favicon.ico'
import faviconPNG from '../images/favicon.png'

library.add(fab, faHome, faIndustry, faEnvelope, faPhoneAlt)

const Wrapper = ({ title, children }) => (
	<StaticQuery
		query={graphql`
			query SiteTitleQuery {
				site {
					siteMetadata {
						title
						description
					}
				}
			}
		`}
		render={({ site }) => {
			const pageTitle = title ? `${title} - ${site.siteMetadata.title}` : site.siteMetadata.title
			return (
				<>
					<Helmet
						htmlAttributes={{ lang: 'es' }}
						title={pageTitle}
						meta={[
							{
								property: 'og:image',
								content: opengraph,
							},
							{
								name: 'twitter:image',
								content: opengraph,
							},
							{
								name: 'description',
								content: site.siteMetadata.description,
							},
							{
								property: 'og:description',
								content: site.siteMetadata.description,
							},
							{
								name: 'twitter:description',
								content: site.siteMetadata.description,
							},
							{
								property: 'og:title',
								content: pageTitle,
							},
							{
								name: 'twitter:title',
								content: pageTitle,
							},
							{
								property: 'og:url',
								content: 'http://olivaresdonignacio.com/',
							},
							{
								name: 'twitter:site',
								content: 'http://olivaresdonignacio.com/',
							},
							{
								property: 'og:type',
								content: 'Website',
							},
							{
								name: 'twitter:card',
								content: 'summary_large_image',
							},
							{
								name: 'keywords',
								content: 'oliva, olivares, aceite de oliva, gourmet, mendoza',
							},
						]}
						link={[
							{
								href: faviconICO,
								rel: 'shortcut icon',
								type: 'image/x-icon',
							},
							{
								href: faviconPNG,
								rel: 'shortcut icon',
								type: 'image/png',
								sizes: '32x32 192x192',
							},
						]}
					/>
					<SiteHeader />
					<main>
						{children}
						<Contact />
					</main>
					<SiteFooter />
				</>
			)
		}}
	/>
)

export default Wrapper
