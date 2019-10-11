import React from 'react'

const SiteFooter = () => {
	return (
		<>
			<section className="contact" id="contacto">
				<h2>Contacto</h2>
				<div className="contact-content">
					<div className="contact-info">
						<p>Lorem Ipsum Dolor 123, Sit Amet.</p>
						<p>
							tel.: <a href="tel:123456789">123 456 789</a>
						</p>
						<p>
							mail: <a href="mailto:info@olivares.com">info@olivares.com</a>
						</p>
					</div>
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
				</div>
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
