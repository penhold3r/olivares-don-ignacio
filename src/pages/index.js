import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import { Parallax } from 'react-parallax'

import hero from '../images/header.jpg'
import oliveShape from '../images/olive.gif'
import oliveTree from '../images/products_bg.jpg'
import prodsHeader from '../images/olivares_don_ignacio-productos.png'

import Wrapper from '../components/Wrapper'

import products from '../data/products'

const IndexPage = ({ location }) => {
	useEffect(() => {
		const { state } = location

		state &&
			state.toScroll &&
			state.toScroll === 'productos' &&
			window.scrollTo({
				behavior: 'smooth',
				top: document.querySelector('#productos').offsetTop - 100,
			})
	}, [location])

	return (
		<Wrapper>
			<div className='page'>
				<section className='hero'>
					<Parallax bgImage={hero} strength={400} style={{ height: '100%' }}>
						<div className='tagline'>
							<p className='text'>
								Más de 50 años de trayectoria brindando productos de calidad.
							</p>
						</div>
					</Parallax>
				</section>

				<section className='history-landing'>
					<div className='history-intro'>
						<h4 className='t'>
							Más de 50 años de trayectoria brindando productos de calidad.
						</h4>
					</div>
					<div className='content' style={{ backgroundImage: `url(${oliveShape})` }}>
						<p className='prods'>
							Aceite de oliva &#8226; Aceitunas &#8226; Productos Gourmet
						</p>
						<p>
							Somos una empresa familiar mendocina, que dedica todo su esfuerzo a la
							olivicultura y vitivinicultura de Mendoza. Actualmente llevamos adelante la
							empresa los cinco integrantes de la familia: papá, mamá y tres hermanos.
						</p>
						<Link className='history-link' to='/historia'>
							Descubra nuestra historia
						</Link>
					</div>
				</section>

				<section className='products' id='productos'>
					<div className='prods-header'>
						<img src={prodsHeader} alt='' />
					</div>
					<h2 className='prods-title'>Nuestros Productos</h2>
					<div className='prods-list' style={{ backgroundImage: `url(${oliveTree})` }}>
						{products &&
							products.map((prod, key) => (
								<div className='prods-grid' key={key}>
									{prod.bottles.map((bottle, key) => (
										<div key={key} className='prod-card'>
											<img src={bottle.image} alt={`bottle of ${prod.brand}`} />
											<div className='prod-details'>
												{/* <p className='prod-desc'>{prod.desc}</p> */}
												<p className='pack'>{bottle.cont}</p>
											</div>
										</div>
									))}
									<div className='prod-text'>
										<h4 className='prod-name'>{prod.brand}</h4>
										<p className='prod-variety'>{prod.variety}</p>
									</div>
								</div>
							))}
					</div>
				</section>
			</div>
		</Wrapper>
	)
}

export default IndexPage
