import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import SmartLink from './SmartLink'

const SiteFooter = () => {
	const {
		site: { siteMetadata },
	} = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
					}
				}
			}
		`
	)
	return (
		<footer className='site-footer'>
			<div className='copy'>
				<small>
					<span>
						{siteMetadata.title} &copy; {new Date().getFullYear()}
					</span>
					<span>&emsp;|&emsp;</span>
					<span>
						Desarrollado por{' '}
						<SmartLink to='https://github.com/penhold3r' className='ph'>
							penHolder Designerd
						</SmartLink>
					</span>
					<span>&emsp;|&emsp;</span>
					<span>Diseñado por BeWine Agency</span>
				</small>
			</div>
		</footer>
	)
}

export default SiteFooter
