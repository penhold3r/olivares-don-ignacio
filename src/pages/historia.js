import React from 'react'
import { Parallax } from 'react-parallax'

import historyHero from '../images/don_ignacio-historia.jpg'
import olive from '../images/olive.svg'

import Wrapper from '../components/Wrapper'

import branchesBg from '../images/olive-branches-bg.svg'

const HistoryPage = () => {
	return (
		<Wrapper title="Historia">
			<section className="page history">
				<header className="history__header page-header">
					<Parallax
						className="page-hero"
						bgImage={historyHero}
						strength={400}
						style={{ height: '100%', width: '100%' }}
					>
						<h2 className="history-title page-title">Historia</h2>
					</Parallax>
				</header>
				<div className="history__content" style={{ backgroundImage: `url(${branchesBg})` }}>
					<div className="content-block">
						<p>
							Olivares de Don Ignacio, fundada en 1946, en el departamento Rivadavia en la
							Provincia de Mendoza. A partir de ese momento su pasión es la producción de
							aceite de oliva de calidad superior, la familia y su equipo han trabajado
							incansablemente para construir un establecimiento de última generación que
							actualmente es sinónimo de calidad. Su principal objetivo fue combinar las
							técnicas de elaboración de aceite de oliva, con el clima y terroir
							excepcionales de la región. Olivares de Don Ignacio orientó su producción a los
							mercados internacionales, experimentando un gran crecimiento, con presencia en
							todo el mundo, se ha constituido en líder de exportación del segmento de
							Aceites de Oliva, Extra Virgen, Kosher y Orgánicos Premium, cosechando
							numerosos reconocimientos y excelentes puntuaciones por parte de los más
							prestigiosos organismos y medios internacionales.
						</p>
						<img className="olive-icon" src={olive} alt="" />
					</div>
				</div>
			</section>
		</Wrapper>
	)
}

export default HistoryPage
