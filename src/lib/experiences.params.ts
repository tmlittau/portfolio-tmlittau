import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

import freelance from './md/experience/freelance.md?raw';
import uke from './md/experience/uke.md?raw';
import trilitec from './md/experience/trilitec.md?raw';
import lhind from './md/experience/lhind.md?raw';
import dfki from './md/experience/dfki.md?raw';
import jacek from './md/experience/jacek.md?raw';
import phd from './md/experience/phd.md?raw';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'phd',
		company: 'TU Delft',
		description: phd,
		contract: ContractType.FullTime,
		type: 'Doctoral Research',
		location: 'Delft, Netherlands',
		period: { from: new Date(2024, 7, 15) },
		skills: getSkills('python', 'sql', 'postgres', 'qiskit'),
		name: 'PhD candidate',
		color: 'blue',
		links: [],
		logo: Assets.Delft,
		shortDescription: 'Doctoral Research in Quantum Data Management and classical simulation of quantum systems'
	},
	{
		slug: 'freelance software-developer',
		company: 'Self-employed',
		description: freelance,
		contract: ContractType.SelfEmployed,
		type: 'Software Development',
		location: 'Hamburg, Germany / Bremen, Germany',
		period: { from: new Date(2022, 9, 1), to: new Date(2024, 3, 31) },
		skills: getSkills('angular', 'ts', 'python', 'css', 'html', 'js', 'django', 'sql', 'postgres', 'docker', 'redis', 'celery'),
		name: 'Freelance Data Scientist / Software Developer',
		color: 'green',
		links: [],
		logo: Assets.DSTL,
		shortDescription: 'Data Science and Web development for customers.'
	},
	{
		slug: 'data-scientist',
		company: 'Self-employed',
		description: uke,
		contract: ContractType.SelfEmployed,
		type: 'Data Science',
		location: 'Hamburg, Germany',
		period: { from: new Date(2021, 0, 10), to: new Date(2022, 8, 1)},
		skills: getSkills('python', 'sql', 'postgres', 'docker', 'redis', 'celery', 'pandas', 'pytorch', 'numpy', 'golang', 'opencv'),
		name: 'Data Scientist',
		color: 'blue',
		links: [],
		logo: Assets.UKE,
		shortDescription: 'Data Analytics and Machine Learning Services for customers.'
	},
	{
		slug: 'co-founder',
		company: 'trilitec GmbH',
		description: trilitec,
		contract: ContractType.FullTime,
		type: 'Data Science',
		location: 'Osterholz-Scharmbeck, Germany',
		period: { from: new Date(2020, 2, 10), to: new Date(2021, 8, 1) },
		skills: getSkills('python', 'sql', 'postgres', 'docker', 'pandas', 'pytorch', 'numpy', 'clang', 'cpp', 'opencv'),
		name: 'Co-Founder',
		color: 'blue',
		links: [],
		logo: Assets.trilitec,
		shortDescription: 'Leading the Data Science and Software Development department at trilitec Startup.'
	},
	{
		slug: 'technology-consultant',
		company: 'Lufthansa Industry Solutions GmbH',
		description: lhind,
		contract: ContractType.FullTime,
		type: 'Data Science',
		location: 'Hamburg, Germany',
		period: { from: new Date(2019, 8, 10), to: new Date(2020, 2, 1) },
		skills: getSkills('python', 'sql', 'postgres', 'docker', 'pandas', 'pytorch', 'numpy', 'javascript', 'css', 'html'),
		name: 'Technology Consultant',
		color: 'blue',
		links: [],
		logo: Assets.LHIND,
		shortDescription: 'Consulting customers in the field of software development and data science.'
	},
	{
		slug: 'intern',
		company: 'DFKI GmbH',
		description: dfki,
		contract: ContractType.Internship,
		type: 'Research Internship',
		location: 'Bremen, Germany',
		period: { from: new Date(2019, 1, 10), to: new Date(2019, 6, 1) },
		skills: getSkills('python', 'tensorflow', 'qt', 'ros', 'cpp', 'clang'),
		name: 'Intern',
		color: 'blue',
		links: [],
		logo: Assets.DFKI,
		shortDescription: 'Developing a new generation of autonomous driving software.'
	},
	{
		slug: 'student-researcher',
		company: 'Institute for nuclear physics at Uppsala University',
		description: jacek,
		contract: ContractType.StudentJob,
		type: 'Research Internship',
		location: 'Uppsala, Sweden',
		period: { from: new Date(2018, 10, 1), to: new Date(2019, 0, 1) },
		skills: getSkills('python', 'tensorflow', 'root'),
		name: 'Student Researcher',
		color: 'red',
		links: [],
		logo: Assets.Uppsala,
		shortDescription: 'Development and implementation of a Bayesian Neural Network for the analysis of nuclear physics data.'
	}
];

export default MY_EXPERIENCES;
