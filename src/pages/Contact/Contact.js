import React, { useEffect } from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';
import { BsArrow90DegRight } from 'react-icons/bs';

import './Contact.css';
import { Link } from 'react-router-dom';

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const handleClick = () => {
		window.open(
			'mailto:abhishekvastan96@gmail.com?subject=Subject&body=Body%20goes%20here'
		);
	};
	return (
		<div className='contact-container'>
			<div className='contact-title'>
				<span>A</span>
				<span>B</span>
				<span>H</span>
				<span>I</span>
				<span>S</span>
				<span>H</span>
				<span>E</span>
				<span>K</span>
				<span>K</span>
				<span>U</span>
				<span>M</span>
				<span>A</span>
				<span>R</span>
			</div>
			<div className='contact-form-container'>
				<div className='contact-form'>
					<h2 className='contact-form-title'>WANT TO CONNECT WITH ME?</h2>
					<CustomButton
						name='send me an e-mail'
						ClassName='contact-button'
						onClick={handleClick}
					/>
				</div>
				<Link to='/' className='contact-arrow'>
					<BsArrow90DegRight />
				</Link>
			</div>
			<div className='contact-footer-container'>
				<div className='contact-thanks'>
					<h3>Thanks for your visit!</h3>
					<p>You can check out my networks to follow my new adventures!</p>
				</div>
			</div>
		</div>
	);
};

export default Contact;
