import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';

const MY_PROJECTS: Array<Project> = [
	{
		slug: 'character-sheet',
		color: 'green',
		description:
			'Character Sheet developed in Python using Django. The tool is used to manage the accounting of a small business.',
		shortDescription: 'Character Sheet developed in Python using Django.',
		links: [{ to: 'https://github.com/tmlittau/character-sheet', label: 'GitHub' }],
		logo: Assets.DSTL,
		name: 'Character Sheet',
		period: {
			from: new Date(2022, 9, 1),
			to: new Date(2023, 0, 1)
		},
		skills: getSkills('python', 'django', 'sql', 'svelte', 'javascript', 'css', 'html'),
		type: 'Web based Character Sheet for Pen and Paper Games',
		screenshots: [
			{
				label: 'Character Creator when first logging in',
				src: 'img/cs_project/charcreator_demo.jpg'
			},
			{
				label: 'Character Sheet with all the information',
				src: 'img/cs_project/charactersheet_demo.jpg'
			}
		]
	},
	{
		slug: 'accounting-tool',
		color: 'green',
		description:
			'Accounting Tool developed in Python using Django. The tool is used to manage the accounting of a small business.',
		shortDescription: 'Accounting Tool developed in Python using Django.',
		links: [{ to: 'https://github.com/tmlittau/accounting_backend', label: 'GitHub' }, { to: 'https://github.com/tmlittau/accounting_frontend', label: 'GitHub' }],
		logo: Assets.DSTL,
		name: 'Accounting Tool',
		period: {
			from: new Date(2022, 9, 1),
			to: new Date(2023, 0, 1)
		},
		skills: getSkills('python', 'django', 'sql', 'postgres', 'docker', 'redis'),
		type: 'Web based Accounting Tool for a small business',
		screenshots: [
			{
				label: 'Tax Form to calculate yearly taxes',
				src: 'img/at_project/eur_demo.jpg'
			},
			{
				label: 'VAT Declaration Form to calculate quarterly/monthly VAT',
				src: 'img/at_project/ustva_demo.jpg'
			},
			{
				label: 'Support for different Users',
				src: 'img/at_project/user_management.jpg'
			},
			{
				label: 'New Invoice Entry',
				src: 'img/at_project/new_invoice.jpg'
			},
			{
				label: 'New Customer Entry',
				src: 'img/at_project/new_customer_entry.jpg'
			}
		]
	},
	{
		slug: 'game-engine',
		color: 'blue',
		description:
			'Game Engine developed in C++ using OpenGL. The tool is used to create 3D games.',
		shortDescription: 'Game Engine developed in C++ using OpenGL.',
		links: [],
		logo: Assets.Unknown,
		name: 'Game Engine',
		period: {
			from: new Date(2024, 0, 1)
		},
		skills: getSkills('cpp', 'opengl'),
		type: 'Game Engine'
	},
	{
		slug: 'game-jam-2022',
		color: 'green',
		description: 'GameDev.tv GameJam 2022, a game jam with the theme "The End is the Beginning". The game is developed in Unreal Engine using C++.',
		shortDescription: 'GameDev.tv GameJam 2022',
		links: [
			{ to: 'https://physikar.itch.io/flyfe', label: 'itch.io'},
			{ to: 'https://www.youtube.com/watch?v=AKiOL-J0yak', label: 'YouTube'}
		],
		logo: Assets.GameDevTV,
		name: 'GameDev.tv GameJam 2022',
		period: {
			from: new Date(2022, 4, 20),
			to: new Date(2022, 4, 31)
		},
		skills: getSkills('cpp', 'unreal', 'blender'),
	}
	{
		slug: 'image-labelling-tool',
		color: 'blue',
		description:
			'Image Labelling Tool developed in Golang using Electron for the GUI. The tool is used to label images for machine learning purposes.',
		shortDescription: 'Image Labelling Tool developed in Golang using Electron for the GUI.',
		links: [],
		logo: Assets.UKE,
		name: 'Image Labelling Tool',
		period: {
			from: new Date(2021, 9, 1),
			to: new Date(2022, 8, 1)
		},
		skills: getSkills('golang', 'electron', 'typescript', 'css', 'html'),
		type: 'Data Analysis Tool for Labelling Images'
	},
	{
		slug: 'imu-analyzer',
		color: 'blue',
		description:
			'IMU Analyzer developed in Python using PyQT. The tool is used to analyze IMU data.',
		shortDescription: 'IMU Analyzer developed in Python using PyQT.',
		links: [{ to: 'https://github.com/tmlittau/legacy_portfolio', label: 'GitHub' }],
		logo: Assets.DFKI,
		name: 'IMU Analyzer',
		period: {
			from: new Date(2017, 1, 1),
			to: new Date(2017, 4, 1)
		},
		skills: getSkills('python', 'qt', 'ros'),
		type: 'Analysis Tool for IMU Data',
		screenshots: [
			{
				'label': 'Example of the GUI',
				'src': 'https://raw.githubusercontent.com/tmlittau/legacy_portfolio/main/IMU_Analyzer/IMU_Analyzer.png'
			}
		]
	},
	{
		slug: 'model-viewer',
		color: '#ff3e00',
		description:
			'Model Viewer developed in C++ using OpenGL. The tool is used to view 3D models.',
		shortDescription: 'Model Viewer developed in C++ using OpenGL.',
		links: [{ to: 'https://github.com/tmlittau/legacy_portfolio', label: 'GitHub' }],
		logo: Assets.Uppsala,
		name: 'Model Viewer',
		period: {
			from: new Date(2018, 0, 15),
			to: new Date(2018, 5, 1)
		},
		skills: getSkills('cpp', 'opengl'),
		type: 'Computer Graphics Demo Project',
		screenshots: [
			{
				'label': 'Example of the Model Viewer',
				'src': 'https://github.com/tmlittau/legacy_portfolio/raw/main/Model_Viewer/Littau_pres.mov'
			}
		]
	},
	{
		slug: 'bayesian-neural-network',
		color: 'red',
		description:
			'Bayesian Neural Network developed in Python using PyTorch. The tool is used to analyze IMU data.',
		shortDescription: 'Bayesian Neural Network developed in Python using PyTorch.',
		links: [{ to: 'https://github.com/tmlittau/legacy_portfolio', label: 'GitHub' }],
		logo: Assets.Uppsala,
		name: 'Bayesian Neural Network',
		period: {
			from: new Date(2018, 10, 1),
			to: new Date(2019, 0, 5)
		},
		skills: getSkills('python', 'tensorflow', 'root'),
		type: 'Data Analysis Script'
	}
];

export default MY_PROJECTS;
