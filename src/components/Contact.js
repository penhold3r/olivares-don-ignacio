import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import submitFormData from '../utils/submit-form'

import oliveShape from '../images/olive.gif'
import SmartLink from './SmartLink'

const Contact = () => {
	const [formData, setData] = useState({ name: '', email: '', message: '' })
	const [response, setResponse] = useState(false)
	const [showClose, setShowClose] = useState(false)
	const [outPut, setOutPut] = useState('')

	const handleChange = e => {
		const { name, value } = e.target

		setData({ ...formData, [name]: value })

		value !== '' && e.target.parentNode.classList.remove('invalid')
	}

	const handleSubmit = e => {
		e.preventDefault()

		const settings = {
			dest:
				'https://cors-anywhere.herokuapp.com/http://olivaresdonignacio.com/contact-form/index.php',
			fields: '.form-input',
			reciever: 'ventas@olivaresdonignacio.com,penhold3r@gmail.com',
			urlencoded: true,
		}

		setResponse(true)
		setOutPut(`Enviando...`)

		console.log(e.target.human, e.target.human.value)

		e.target.human.value === '' &&
			submitFormData(e.target, settings)
				.then(({ data: { success, data } }) => {
					console.log(success, data)
					const msg = success
						? `${data.name}, gracias por comunicarte con nosotros, te responderemos a la brevedad.`
						: `${data.name}, Algo parece haber salido mal, intenta luego más tarde.`

					setResponse(true)
					setOutPut(msg)
					setData({ name: '', email: '', message: '' })
					setShowClose(true)
				})
				.catch(({ ok, data, valid }) => {
					console.warn({ 'not ok': { ok, valid, data } })
					if (!valid) {
						setResponse(false)
						data.field.parentNode.classList.add('invalid')
					} else {
						setResponse(true)
						setOutPut(
							`${formData.name}, Algo parece haber salido mal, intenta luego más tarde.`
						)
						setData({ name: '', email: '', message: '' })
						setShowClose(true)
					}
				})
	}

	return (
		<section className='contact' id='contacto'>
			<h2>Contacto</h2>
			<div className='contact-content'>
				<div className='contact-info'>
					<div className='contact-block'>
						<FontAwesomeIcon className='fa' icon={['fas', 'industry']} />
						<p>
							<em>
								Dirección:{' '}
								<SmartLink to='https://goo.gl/maps/tFFRNXeEdhH1fZgt7'>
									Ruta 62 S/N, Rivadavia, Mendoza, Argentina
								</SmartLink>
							</em>
						</p>
					</div>
					<div className='contact-block'>
						<FontAwesomeIcon className='fa' icon={['fas', 'phone-alt']} />
						<p>
							<em>
								Tel.:{' '}
								<a href='tel:+5492616089384'>
									<strong>261 608 9384</strong>
								</a>
							</em>
						</p>
					</div>
					<div className='contact-block'>
						<FontAwesomeIcon className='fa' icon={['fas', 'envelope']} />
						<p>
							<em>
								Mail:{' '}
								<a href='mailto:ventas@olivaresdonignacio.com'>
									<strong>ventas@olivaresdonignacio.com</strong>
								</a>
							</em>
						</p>
					</div>
					<img src={oliveShape} alt='Olive' className='olive' />
				</div>
				<form action='' className='contact-form' onSubmit={handleSubmit} noValidate>
					<div className='form-field' data-invalid='Por favor completa tu nombre'>
						<label htmlFor='name'>Nombre</label>
						<input
							className='form-input'
							type='text'
							name='name'
							onChange={handleChange}
							value={formData.name}
							required
						/>
					</div>
					<div className='form-field' data-invalid='Por favor completa tu email correctamente'>
						<label htmlFor='email'>Email</label>
						<input
							className='form-input'
							type='email'
							name='email'
							onChange={handleChange}
							value={formData.email}
							required
						/>
					</div>
					<div className='form-field' data-invalid='Por favor completa el mensaje'>
						<label htmlFor='message'>Mensaje</label>
						<textarea
							className='form-input'
							name='message'
							onChange={handleChange}
							value={formData.message}
							required
						/>
					</div>
					<input type='text' name='human' className='human' hidden />

					<input className='submit' type='submit' value='Enviar' />

					<div className={response ? 'output visible' : 'output'}>
						<p>{outPut}</p>
						{showClose && (
							<button className='close' onClick={() => setResponse(false)}>
								Enviar otro mensaje
							</button>
						)}
					</div>
				</form>
			</div>
		</section>
	)
}

export default Contact
