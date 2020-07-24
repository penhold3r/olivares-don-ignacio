import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SiteFooter = () => {
	return (
		<>
			<section className='contact' id='contacto'>
				<h2>Contacto</h2>
				<div className='contact-content'>
					<div className='contact-info'>
						<div className='contact-block'>
							<FontAwesomeIcon className='fa' icon={['fas', 'home']} />
							<p>Ruta 62 S/N, Rivadavia, Mendoza, Argentina</p>
						</div>
						<div className='contact-block'>
							<FontAwesomeIcon className='fa' icon={['fas', 'phone-alt']} />
							<p>
								tel.: <a href='tel:123456789'>123 456 789</a>
							</p>
						</div>
						<div className='contact-block'>
							<FontAwesomeIcon className='fa' icon={['fas', 'envelope']} />
							<p>
								mail: <a href='mailto:info@olivares.com'>ventas@olivaresdedonignacio.com</a>
							</p>
						</div>
					</div>
					<form action='' className='contact-form'>
						<div className='form-field'>
							<label htmlFor='name'>Nombre</label>
							<input type='text' name='name' />
						</div>
						<div className='form-field'>
							<label htmlFor='email'>Email</label>
							<input type='email' name='email' />
						</div>
						<div className='form-field'>
							<label htmlFor='msg'>Mensaje</label>
							<textarea name='msg' />
						</div>
						<input className='submit' type='submit' value='Enviar' />
					</form>
				</div>
			</section>

			<footer className='site-footer'>
				<div className='copy'>
					<small>© {new Date().getFullYear()}, Olivares de Don Ignacio</small>
				</div>
			</footer>
		</>
	)
}

export default SiteFooter
