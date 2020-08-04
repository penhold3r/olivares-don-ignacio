import React from 'react'
import { Parallax } from 'react-parallax'

import oliveHero from '../images/don_ignacio-olivares.jpg'
import branchesBg from '../images/olive-branches-bg.jpg'

import Wrapper from '../components/Wrapper'

const OlivesPage = () => (
	<Wrapper title='Olivares'>
		<section className='page olive'>
			<header className='olive__header page-header'>
				<Parallax
					className='page-hero'
					bgImage={oliveHero}
					bgImageStyle={{
						fitPosition: 'center 70%',
						height: '150%',
						objectFit: 'cover',
						top: 0,
						width: '100%',
					}}
					strength={400}
					style={{ height: '100%', width: '100%' }}>
					<h2 className='olive-title page-title'>Olivares</h2>
				</Parallax>
			</header>
			<div className='olive__content' style={{ backgroundImage: `url(${branchesBg})` }}>
				<div className='olive-block'>
					<h3 className='olive-block__title'>Terroir</h3>
					<p>
						<em>
							Olivares de Don Ignacio cuenta con 56 has, con las condiciones ideales para el
							cultivo de olivos en el departamento de Rivadavia, al este de la provincia de
							Mendoza, su suelo arenoso, regado con agua de máxima pureza resultado del
							deshielo de las altas cumbres de la cordillera de Los Andes, el agua es capaz
							de recorrer perfectamente la tierra, con bajas concentraciones de material
							orgánico, lo cual produce un estrés muy favorable en cada uno de nuestros
							olivos.
						</em>
					</p>
				</div>
				<div className='olive-block'>
					<h3 className='olive-block__title'>Clima</h3>
					<p>
						<em>
							Las fincas ubicadas al pie de la cordillera de Los Andes, irrigadas con agua de
							deshielo, con un clima arido de planicie y sierras, temperaturas media anual de
							15° C y escasas lluvias y una atmosfera de gran luminosidad, una altura de 659
							m.s.n.m. y gracias a su ubicación, gozan de un clima ideal y amplitud térmica,
							permitiendo el excelente desarrollo de la actividad olivícola.
						</em>
					</p>
				</div>
				<div className='olive-block'>
					<h3 className='olive-block__title'>Olivares</h3>
					<p>
						<em>
							Nuestros olivares están formados por arboles de un solo tronco, en su mayoría
							plantados en el sistema tradicional y con mas de 70 años de vida, las nuevas
							plantaciones se implantaron bajo sistemas modernos de cultivo, las variedades
							de aceitunas cultivadas son: Arauco, Farga, arbequina, manzanilla y frantollo.
						</em>
					</p>
				</div>
			</div>
		</section>
	</Wrapper>
)

export default OlivesPage
