import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header'
import Footer from './Footer'

import 'sanitize.css'
import '../styles/index.scss'

import favicon from '../images/favicon.ico'

const Layout = ({ title, children }) => (
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
								name: 'description',
								content: site.siteMetadata.description
							},
							{
								name: 'keywords',
								content: 'aceite aceites oliva olivares olivícola mendoza'
							}
						]}
						link={[
							{
								href: favicon,
								rel: 'shortcut icon',
								type: 'image/x-icon'
							}
						]}
					/>
					<Header />
					<main>{children}</main>
					<Footer />
				</>
			)
		}}
	/>
)

export default Layout
