import castelmonte500 from '../images/products/castelmonte_500.png'
import castelmonte250 from '../images/products/castelmonte_250.png'
import giglio500 from '../images/products/giglio_500.png'
import giglio250 from '../images/products/giglio_250.png'
import oroliva500 from '../images/products/oroliva_500.png'
import oroliva1000 from '../images/products/oroliva_1000.png'
import oroliva5000 from '../images/products/oroliva_5000.png'
import oroliva3000 from '../images/products/oroliva_3000.png'

export default [
	{
		brand: 'Castelmonte',
		variety: 'Virgen Extra',
		bottles: [
			{
				image: castelmonte250,
				cont: '250ml',
			},
			{
				image: castelmonte500,
				cont: '500ml',
			},
		],
	},
	{
		brand: 'Giglio',
		variety: 'Extra Virgen Organico',
		bottles: [
			{
				image: giglio250,
				cont: '250ml',
			},
			{
				image: giglio500,
				cont: '500ml',
			},
		],
	},
	{
		brand: 'Oroliva',
		variety: 'Virgen Extra',
		bottles: [
			{
				image: oroliva500,
				cont: '500ml',
			},
			{
				image: oroliva1000,
				cont: '1000ml',
			},
			{
				image: oroliva3000,
				cont: '3000ml',
			},
			{
				image: oroliva5000,
				cont: '5000ml',
			},
		],
	},
]
