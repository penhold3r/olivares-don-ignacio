import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import { Parallax } from 'react-parallax'

import hero from '../images/header.jpg'
import oliveShape from '../images/olive.gif'
import oliveTree from '../images/products_bg.jpg'

import Foo from '../components/Foo'
import Wrapper from '../components/Wrapper'

import products from '../data/products'

const IndexPage = ({ location }) => {
	useEffect(() => {
		const { state } = location

		console.log(document.querySelector('#productos').offsetTop)

		state &&
			state.toScroll &&
			state.toScroll === 'productos' &&
			window.scrollTo({
				behavior: 'smooth',
				top: document.querySelector('#productos').offsetTop - 100
			})
	}, [location])

	return (
		<Wrapper>
			<div className="page">
				<section className="hero">
					<Parallax bgImage={hero} strength={400} style={{ height: '100%' }}>
						<div className="tagline">
							<h4>Desde 1946</h4>
						</div>
					</Parallax>
				</section>

				<section className="history-landing">
					<div className="history-intro">
						<h4 className="t">
							Más de 50 años de trayectoria brindando productos de calidad.
						</h4>
					</div>
					<div className="content" style={{ backgroundImage: `url(${oliveShape})` }}>
						<p>
							Aceite de oliva / Aceitunas / Productos Gourmet en Mendoza Somos una empresa
							familiar mendocina, que dedica todo su esfuerzo a la olivicultura y
							vitivinicultura de Mendoza. Actualmente llevamos adelante la empresa los cinco
							integrantes de la familia: papá, mamá y tres hermanos.
						</p>
						<Link className="history-link" to="/historia">
							Descubra nuestra historia
						</Link>
					</div>
				</section>

				<section className="products" id="productos">
					<h2 className="prods-title">Nuestros Productos</h2>
					<div className="prods-list" style={{ backgroundImage: `url(${oliveTree})` }}>
						<div className="prods-grid">
							{products &&
								products.map((prod, key) => (
									<div key={key} className="prod-card">
										<img src={prod.image} alt={`bottle of ${prod.name}`} />
										<h4 className="prod-name">{prod.name}</h4>
										<div className="prod-details">
											<p className="prod-desc">{prod.desc}</p>
											<p className="pack">{prod.qty}</p>
										</div>
									</div>
								))}
						</div>
					</div>
				</section>
				<Foo></Foo>
			</div>
		</Wrapper>
	)
}

export default IndexPage
