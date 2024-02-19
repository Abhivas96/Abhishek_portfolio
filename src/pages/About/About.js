import React, { useEffect } from 'react';
import MyImage from '../../assests/me-2.jpg';
import Resume from '../../assests/resume.pdf';
import VerticalSeprator from '../../components/Seprator//VerticalSeprator';
import HorizontalSeprator from '../../components/Seprator//HorizontalSeprator';
import AboutInfo from '../../components/AboutInfo/AboutInfo';
import Features from '../../components/Features/Features';
import EducationAndExperience from '../../components/EducationAndExperience/EducationAndExperience';
import Skills from '../../components/Skills/Skills';
import SocialLinks from '../../components/SocialLinks/SocialLinks';
import CustomButton from '../../components/CustomButton/CustomButton';
import Heading from '../../components/Heading/Heading';
import './About.css';

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const handleDownload = () => {
		const link = document.createElement('a');
		link.download = 'RishabhTanwar_Resume';

		link.href = Resume;

		link.click();
	};

	return (
		<div className='about-container'>
			<div className='about-landing'>
				<VerticalSeprator />
				<div className='about-details'>
					<div className='about-social'>
						<SocialLinks />
					</div>
					<div className='about-intro'>
						<h1>
							<span>Hey!</span> I am Abhishek,
						</h1>
						<h1>
							A twenty two years <span>old</span>
						</h1>
						<h1>full-stack developer.Currently</h1>
						<h1>
							based <span>in</span>
							<span className='intro-place'> Delhi, India.</span>
						</h1>
					</div>
					<img src={MyImage} alt='myself' />
				</div>
			</div>
			<HorizontalSeprator />
			<div className='about-me'>
				<Heading name='About me' ClassName='about-me-heading' />
				<p>
					Hello! I'm Abhishek Kumar, a passionate full stack web developer with around one year of hands-on experience in Java Spring Boot and Hibernate.
					From database design to front-end development, I'm proficient in every aspect of full stack web development, adept at bridging the gap between server-side logic and client-side functionality.
					I have a solid understanding of building robust, scalable web applications using Spring Boot, leveraging its powerful features for rapid development.
					I'm well-versed in front-end technologies like JavaScript and React, capable of creating dynamic and interactive user interfaces to enhance the overall user experience.
				</p>
			</div>
			<AboutInfo />
			<div className='download-button'>
				<CustomButton name='download CV' onClick={handleDownload} />
			</div>
			<Features />
			<EducationAndExperience />
			<Skills />
		</div>
	);
};

export default About;
