import React from 'react'
import { Parallax } from 'react-parallax'

import Wrapper from '../components/Wrapper'

import organicHero from '../images/don_ignacio-organico.jpg'

import organicoArgentina from '../images/organico-argentina.svg'
import USDAOrganic from '../images/USDA-organic.svg'
import uKosher from '../images/u-kosher.svg'
import tacc from '../images/t.a.c.c.svg'

import branchesBg from '../images/olive-branches-bg.svg'

const OrganicPage = () => {
	return (
		<Wrapper title="Prácticas Orgánicas">
			<section className="page organic">
				<header className="organic__header page-header">
					<Parallax
						className="page-hero"
						bgImage={organicHero}
						strength={400}
						style={{ height: '100%', width: '100%' }}
					>
						<h2 className="organic-title page-title">Prácticas Orgánicas</h2>
					</Parallax>
				</header>
				<div className="organic__content" style={{ backgroundImage: `url(${branchesBg})` }}>
					<ul className="practices">
						<li className="practices__block">
							<p>No se utilizan productos de síntesis química.</p>
						</li>
						<li className="practices__block">
							<p>Cuidado del recurso hídrico.</p>
						</li>
						<li className="practices__block">
							<p>Cosecha A mano.</p>
						</li>
						<li className="practices__block">
							<p>Procesadas en frio dentro de las 24 hs.</p>
						</li>
					</ul>
					<div className="certifications">
						<img
							src={organicoArgentina}
							alt="Organico Argentina"
							className="certifications__logo"
						/>
						<img src={USDAOrganic} alt="USDA Organic" className="certifications__logo" />
						<img src={uKosher} alt="U Kosher" className="certifications__logo" />
						<img src={tacc} alt="T.A.C.C." className="certifications__logo" />
					</div>
					<div className="description">
						<h3 className="description__title">Productos Orgánicos</h3>
						<p>
							Olivares de Don Ignacio elabora aceites orgánicos premium, se elaboran con
							aceitunas proveniente de olivares propios utilizando prácticas orgánicas y
							procesadas en frio dentro de las 24 hs, de su cosecha, sin la necesidad de
							utilizar pesticidas o ningún otro producto sintético. Las aceitunas se cosechan
							en su punto justo, con una excelente maduración y calidad, su recolección
							durante la cosecha, se realiza a mano y se inicia en el mes de Abril y culmina
							en Julio.
						</p>
					</div>
				</div>
			</section>
		</Wrapper>
	)
}

export default OrganicPage
