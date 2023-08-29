import { useState } from 'react';
import '../App.css';
import image1 from '../assets/images/component-02/Image-01.jpg';
import image2 from '../assets/images/component-02/Image-02.jpg';
import image3 from '../assets/images/component-02/Image-03.jpg';
import { Modal } from 'antd';

interface Data {
	image: string;
	title: string;
	description: string;
}

const Section2 = () => {
	const [selectedImage, setSelectedImage] = useState('');

	const data: Data[] = [
		{
			image: image1,
			title: 'summer lunch menu by mark best',
			description: `AEG ambassador Mark Best's summer eats are guaranteed to help you make the most of the warmer weather and entertaining at home.`,
		},
		{
			image: image2,
			title: 'a traditional christmas eve, mark best style',
			description: `One of Australia's best chefs and AEG ambassador, Mark Best, shares hi favourite Christmas Eve menu which is sure to impress your guests.`,
		},
		{
			image: image3,
			title: 'taking taste further',
			description: `This exclusive cookbook gives you all the know-how you need. We've designed it to make sure you get the most out of our products - and the best out of your food.`,
		},
	];

	const onSelectImage = (image: string) => {
		setSelectedImage(image);
	};

	return (
		<section className="section-2-wrapper">
			<div className="title-wrapper" style={{ marginBottom: '35px', justifyContent: 'center'  }}>
				<span
					style={{
						fontFamily: 'Open Sans',
						fontWeight: '300',
						textTransform: 'uppercase',
						fontSize: '43px',
						textAlign: 'center',
					}}
				>
					all the latest from AEG
				</span>
			</div>
			<div className="section-2-content">
				{data.map((item, index) => (
					<div
						key={index}
						className="section-item"
						style={{ flexDirection: 'column' }}
					>
						<div
							style={{ marginTop: '20px', width: '100%' }}
							onClick={() => onSelectImage(item.image)}
						>
							<img className="small-image full-image" src={item.image} />
							<div style={{ border: '2px solid red', marginTop: '-6px' }} />
						</div>
						<p
							style={{
								fontFamily: 'Open Sans',
								fontWeight: 'bold',
								fontSize: '17px',
								textTransform: 'capitalize',
								margin: '27px 0px 10px',
							}}
						>
							{item.title}
						</p>
						<p
							style={{
								fontFamily: 'Open Sans',
								fontWeight: '300',
								fontSize: '15px',
								margin: '0px',
								lineHeight: '30px'
							}}
						>
							{item.description}
						</p>
						<div style={{ marginTop: '20px', maxWidth: '95px' }}>
							<a
								style={{
									fontFamily: 'Open Sans',
									fontWeight: '700',
									fontSize: '16px',
									color: 'white',
									textTransform: 'uppercase',
								}}
								onClick={() => console.log(`clicked: ${item.title}`)}
							>
								read More
							</a>
							<div style={{ border: '1px solid red', width: '100%' }} />
						</div>
					</div>
				))}
			</div>
			{/* used UI framework for simplicity */}
			<Modal
				open={selectedImage !== '' ? true : false}
				onCancel={() => setSelectedImage('')}
				footer={null}
			>
				<img
					className="small-image full-image"
					src={selectedImage}
					style={{ marginTop: '25px' }}
				/>
			</Modal>
		</section>
	);
};

export default Section2;
