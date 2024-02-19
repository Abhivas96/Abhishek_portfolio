import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import Resume from '../../assests/resume.pdf';
import { TypeAnimation } from 'react-type-animation';
import './Landing.css';

const Landing = () => {
	const handleDownload = () => {
		const link = document.createElement('a');
		link.download = 'Abhishek_Kumar_Resume';

		link.href = Resume;

		link.click();
	};

	return (
		<div className='landing'>
			<div className='landing-image'></div>
			<div className='landing-content'>
				<h3>
					<span className='landing-name'>ABHISHEK KUMAR</span>
				</h3>
				<div className='landing-work'>
					<TypeAnimation
						sequence={[
							'Full Stack Developer',
							1000,
							'Software Engineer',
							1000,
							'Spring | Hibernate | Java | React | JavaScript',
							1000,
						]}
						speed={20}
						style={{ fontSize: '5rem' }}
						repeat={Infinity}
					/>
				</div>
				<span className='landing-text'>
					Creative and Dynamic Full Stack Developer based in Delhi and enthusiastic to learn new
					technologies and face new challenges.
				</span>
				<CustomButton name='Download CV' onClick={handleDownload} />
			</div>
		</div>
	);
};

export default Landing;
