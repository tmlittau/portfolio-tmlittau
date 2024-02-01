import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'freelance software-developer',
		company: 'Self-employed',
		description: 'Data Science and Web development for customers.',
		contract: ContractType.SelfEmployed,
		type: 'Software Development',
		location: 'Hamburg, Germany / Bremen, Germany',
		period: { from: new Date(2022, 9, 1) },
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
		description: 'Creating awesome tools for developers.',
		contract: ContractType.SelfEmployed,
		type: 'Data Science',
		location: 'Hamburg, Germany',
		period: { from: new Date(2021, 0, 10), to: new Date(2022, 8, 1)},
		skills: getSkills('python', 'sql', 'postgres', 'docker', 'redis', 'celery', 'pandas', 'pytorch', 'numpy', 'golang'),
		name: 'Data Scientist',
		color: 'blue',
		links: [],
		logo: Assets.UKE,
		shortDescription: 'Data Analytics and Machine Learning Services for customers.'
	},
	{
		slug: 'co-founder',
		company: 'trilitec GmbH',
		description: 'Leading the Data Science and Software Development department at trilitec Startup. Combning millimeter wave radar and machine learning to create a new generation of sensors.',
		contract: ContractType.FullTime,
		type: 'Data Science',
		location: 'Osterholz-Scharmbeck, Germany',
		period: { from: new Date(2020, 2, 10), to: new Date(2021, 8, 1) },
		skills: getSkills('python', 'sql', 'postgres', 'docker', 'pandas', 'pytorch', 'numpy', 'clang', 'cpp'),
		name: 'Co-Founder',
		color: 'blue',
		links: [],
		logo: Assets.trilitec,
		shortDescription: 'Leading the Data Science and Software Development department at trilitec Startup.'
	},
	{
		slug: 'technology-consultant',
		company: 'Lufthansa Industry Solutions GmbH',
		description: 'Consulting customers in the field of software development and data science.',
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
		description: 'Developing a new generation of autonomous driving software.',
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
		description: 'Development and implementation of a Bayesian Neural Network for the analysis of nuclear physics data.',
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
