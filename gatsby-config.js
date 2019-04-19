const globImporter = require('node-sass-glob-importer')

module.exports = {
	siteMetadata: {
		title: `Olivares de Don Ignacio`,
		description: `Olivares de Don Ignacio es una empresa familiar mendocina, que dedica todo su esfuerzo a la olivicultura y vitivinicultura de Mendoza.`,
		author: `@penholder`
	},
	plugins: [
		{
			resolve: `gatsby-plugin-sass`,
			options: {
				precision: 8,
				importer: globImporter()
			}
		},
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `olivares-don-ignacio`,
				short_name: `don-ignacio`,
				start_url: `/`,
				background_color: `#f0e9d9`,
				theme_color: `#7f8571`,
				display: `standalone`,
				orientation: 'portrait',
				icon: `src/images/olivares-icon.png` // This path is relative to the root of the site.
			}
		}
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
}
