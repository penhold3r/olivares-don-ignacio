import React from 'react'

const SiteFooter = () => {
	return (
		<>
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

			<footer className="site-footer">
				<div className="copy">
					<small>© {new Date().getFullYear()}, Olivares de Don Ignacio</small>
				</div>
			</footer>
		</>
	)
}

export default SiteFooter
