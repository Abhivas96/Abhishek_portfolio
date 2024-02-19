import { FiZap } from 'react-icons/fi';
import { PiDevicesBold } from 'react-icons/pi';
import { GrStatusGood } from 'react-icons/gr';
import { HiOutlineRocketLaunch } from 'react-icons/hi2';
import project1 from '../../assests/project1.png';
import project3 from '../../assests/project3.png';
import project4 from '../../assests/project4.png';

export const aboutInfoA = [
	{
		name: 'BirthDate:',
		value: '12.10.2001',
	},
	{
		name: 'Age:',
		value: '22',
	},
	{
		name: 'Address:',
		value: 'CB - 6, Naraina Village, South West Delhi, New Delhi, India',
	},
	{
		name: 'Email:',
		value: 'abhishekvastan96@gmail.com',
	},
];
export const aboutInfoB = [
	{
		name: 'Nationality:',
		value: 'Indian',
	},
	{
		name: 'Study:',
		value: 'GGSIPU, New Delhi',
	},
	{
		name: 'Interest:',
		value: 'Playing/Watching Cricket',
	},
	{
		name: 'Mobile:',
		value: '+91 9667246256',
	},
];

export const featuresArray = [
	{
		icon: <FiZap />,
		title: 'Fast',
		description:
			'Fast load times and lag free interaction, my highest priority.I give importance to the impact of design and develop accordingly.',
	},
	{
		icon: <PiDevicesBold />,
		title: 'Responsive',
		description:
			'Resposive web designes which will work smoothly on every screen be it small, medium or large.',
	},
	{
		icon: <GrStatusGood />,
		title: 'Easy',
		description:
			'Developed designs and UI is very easy to understand and you can navigate through all the features easily without any issue.',
	},
	{
		icon: <HiOutlineRocketLaunch />,
		title: 'Optimized',
		description:
			'optimized for different devices, browsers, data speed, search  engines, and users.',
	},
];

export const skillArrayA = [
	{
		label: 'Spring',
		percentage: '90%',
	},
	{
		label: 'Hibernate',
		percentage: '85%',
	},
	{
		label: 'Java',
		percentage: '85%',
	},
	{
		label: 'React',
		percentage: '80%',
	},
	{
		label: 'JavaScript',
		percentage: '80%',
	},
];
export const skillArrayB = [
	{
		label: 'HTML',
		percentage: '90%',
	},
	{
		label: 'CSS',
		percentage: '90%',
	},
	{
		label: 'Bootstrap',
		percentage: '80%',
	},
	{
		label: 'Responive Web Design',
		percentage: '90%',
	},
];

export const educationArray = [
	{
		period: '2019-2023',
		instituteName: 'GGSIPU, New Delhi',
		education: 'Bachelor Degree',
	},
	{
		period: '2018-2019',
		instituteName: 'Raj Public Inter College, UP',
		education: 'Intermediate',
	},
	{
		period: '2016-2017',
		instituteName: 'New Children High School, UP',
		education: 'HighSchool',
	},
];

export const experienceArray = [
	{
		period: '07/2023-Present',
		company: 'Freelancing',
		designation: 'Software Engineer',
	},
	{
		period: '04/2023-06/2023',
		company: 'Samsung Electronics Pvt. Ltd.',
		designation: 'Software Engineer Intern',
	},
];

export const projectsArray = [
	{
		id: '01',
		name: 'Library Management Applicatio',
		description:
			'Developed a micro-services based application using Java at the backend and React.js at the frontend. The application allows users to search for books, read description and reviews of the books, checkout books and give a review on a book.',
		link: 'https://github.com/Abhivas96/library_app',
		image: project1,
	},
	{
		id: '02',
		name: 'Employee Management Application',
		description:
			'Developed an Employee Management web application in Java using Spring Boot and Hibernate. This application allows the manager to add or delete an employee, get the list of all employees working or a specific employees in the organization.',
		link: 'https://github.com/Abhivas96/crud_app.github.io',
		image: project3,
	},
	{
		id: '03',
		name: "YouTube Clone Web App",
		description:
			'Developed a YouTube clone web application using free APIs to mimic core functionalities of the original platform. Implemented features included searching for videos, watching the videos, liking and many more. Utilized RapidAPI to retrieve and display video content dynamically. Employed HTML, CSS, JavaScript, React.js for frontend development.',
		link: 'https://youtube-by-abhishek-kumar.netlify.app',
		image: project4,
	},
];
