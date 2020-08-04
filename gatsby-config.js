const globImporter = require('node-sass-glob-importer')

module.exports = {
	siteMetadata: {
		title: `Olivares de Don Ignacio`,
		description: `Olivares de Don Ignacio es una empresa familiar mendocina, que dedica todo su esfuerzo a la olivicultura y vitivinicultura de Mendoza.`,
	},
	plugins: [
		{
			resolve: `gatsby-plugin-sass`,
			options: {
				precision: 8,
				importer: globImporter(),
			},
		},
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Olivares Don Ignacio`,
				short_name: `Don Ignacio`,
				start_url: `/`,
				background_color: `#f0e9d9`,
				theme_color: `#7f8571`,
				display: `standalone`,
				orientation: 'portrait',
				icon: `src/images/olivares-icon.png`, // This path is relative to the root of the site.
				purpose: 'maskable any',
			},
		},
		`gatsby-plugin-offline`,
	],
}
