import '../App.css';
import component1Image1 from '../assets/images/component-01/Image-01.jpg';
import component1Image2 from '../assets/images/component-01/Image-02.jpg';
import component1Image3 from '../assets/images/component-01/Image-03.jpg';

const Section1 = () => {
	return (
		<section className="section-1-wrapper">
			<div className="section-item large-image">
				<img className="full-image" src={component1Image1} />
			</div>
			<div
				className="section-item"
				style={{ flexDirection: 'column', justifyContent: 'space-between' }}
			>
				<div className="small-image" style={{ marginBottom: '20px' }}>
					<img className="full-image" src={component1Image2} />
				</div>
				<div className="small-image">
					<img className="full-image" src={component1Image3} />
				</div>
			</div>
			<div
				className="section-item"
				style={{ flexDirection: 'column', justifyContent: 'flex-start' }}
			>
				<div className="title-wrapper" style={{ marginBottom: '10px' }}>
					<span
						style={{
							margin: 0,
							fontSize: '27px',
							fontFamily: 'Open Sans',
							fontWeight: '300',
							textTransform: 'uppercase',
						}}
					>
						answer your body's needs
					</span>
				</div>
				<div style={{ border: '0.5px solid white', marginBottom: '10px' }} />
				<p
					style={{
						fontFamily: 'Open Sans',
						fontWeight: '300',
						fontSize: '18px',
						lineHeight: '30px'
					}}
				>
					The way ingredients are sourced affects the way we nourish our
					bodies. Author Mark Schatzer believes our body naturally develops an
					appetite for the foods and nutrients it needs to be healthy, but that
					artificial flavourings are getting in the way. This can be reversed by
					focusing on high-quality ingredients and being mindful as your
					appetite guides you to consume according to your body's needs.
				</p>
				<span style={{ fontFamily: 'Open Sans', color: 'red', textTransform: 'uppercase', marginTop: '25px', marginBottom: '15px', fontSize: '16px' }}>
					be mindful
				</span>
				<p
					style={{
						fontFamily: 'Open Sans',
						fontWeight: '700',
						fontSize: '18px',
						margin: 0,
						padding: 0,
						lineHeight: '28px'
					}}
				>
					Sourcing local or organic food is a good way to start being more
					mindful about what you're cooking and eating.
				</p>
			</div>
		</section>
	);
};

export default Section1;
