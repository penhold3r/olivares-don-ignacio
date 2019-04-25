import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

import hero from '../images/header.jpg'
import oliveShape from '../images/olive.gif'
import oliveTree from '../images/products_bg.jpg'

import products from '../data/products'

const IndexPage = () => (
	<Layout>
		<section className="hero">
			<img className="hero-img" src={hero} alt="[ olive branch ]" />
			<div className="tagline">
				<h4>Desde 1946</h4>
			</div>
		</section>

		<section className="history-landing">
			<div className="history-intro">
				<h4>Más de 50 años de trayectoria brindando productos de calidad.</h4>
			</div>
			<div className="content" style={{ backgroundImage: `url(${oliveShape})` }}>
				<p>
					Aceite de oliva / Aceitunas / Productos Gourmet en Mendoza Somos una empresa familiar
					mendocina, que dedica todo su esfuerzo a la olivicultura y vitivinicultura de
					Mendoza. Actualmente llevamos adelante la empresa los cinco integrantes de la
					familia: papá, mamá y tres hermanos.
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

		<section className="contact" id="contacto">
			<h2>Contacto</h2>
			<form action="" className="contact-form">
				<div className="form-field">
					<label htmlFor="name">Nombre</label>
					<input type="text" name="name" />
				</div>
				<div className="form-field">
					<label htmlFor="email">Email</label>
					<input type="email" name="email" />
				</div>
				<div className="form-field">
					<label htmlFor="msg">Mensaje</label>
					<textarea name="msg" />
				</div>
				<input className="submit" type="submit" value="Enviar" />
			</form>
		</section>
	</Layout>
)

export default IndexPage
