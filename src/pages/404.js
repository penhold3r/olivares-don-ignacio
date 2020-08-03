import React from 'react'

import Wrapper from '../components/Wrapper'
import SmartLink from '../components/SmartLink'

const NotFoundPage = () => (
	<Wrapper title='Página no encontrada'>
		<section className='page404'>
			<h2>404</h2>
			<p>La página que busca no existe o no esta disponible.</p>
			<SmartLink to='/' className='not-found-link'>
				Volver al inicio
			</SmartLink>
		</section>
	</Wrapper>
)

export default NotFoundPage
