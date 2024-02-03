import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';

import accounting_tool from './md/projects/accounting_tool.md?raw';
import character_sheet from './md/projects/character_sheet.md?raw';
import game_engine from './md/projects/game_engine.md?raw';
import flyfe from './md/projects/flyfe.md?raw';
import image_labelling from './md/projects/image_labelling.md?raw';
import imu_analyzer from './md/projects/imu_analyzer.md?raw';
import model_viewer from './md/projects/model_viewer.md?raw';
import bnn from './md/projects/bnn.md?raw';

const MY_PROJECTS: Array<Project> = [
	{
		slug: 'character-sheet',
		color: 'green',
		description: character_sheet,
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
				src: 'https://github.com/tmlittau/tmlittau-portfolio/blob/master/static/img/cs_project/charcreator_demo.jpg?raw=true'
			},
			{
				label: 'Character Sheet with all the information',
				src: 'https://github.com/tmlittau/tmlittau-portfolio/blob/master/static/img/cs_project/charactersheet_demo.jpg?raw=true'
			}
		]
	},
	{
		slug: 'accounting-tool',
		color: 'green',
		description: accounting_tool,
		shortDescription: 'Accounting Tool developed in Python using Django.',
		links: [{ to: 'https://github.com/tmlittau/accounting_backend', label: 'GitHub Backend' }, { to: 'https://github.com/tmlittau/accounting_frontend', label: 'GitHub Frontend' }],
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
				src: 'https://github.com/tmlittau/tmlittau-portfolio/blob/master/static/img/at_project/eur_demo.jpg?raw=true'
			},
			{
				label: 'VAT Declaration Form to calculate quarterly/monthly VAT',
				src: 'https://github.com/tmlittau/tmlittau-portfolio/blob/master/static/img/at_project/ustva_demo.jpg?raw=true'
			},
			{
				label: 'Support for different Users',
				src: 'https://github.com/tmlittau/tmlittau-portfolio/blob/master/static/img/at_project/user_management.jpg?raw=true'
			},
			{
				label: 'New Invoice Entry',
				src: 'https://github.com/tmlittau/tmlittau-portfolio/blob/master/static/img/at_project/new_invoice.jpg?raw=true'
			},
			{
				label: 'New Customer Entry',
				src: 'https://github.com/tmlittau/tmlittau-portfolio/blob/master/static/img/at_project/new_customer_entry.jpg?raw=true'
			}
		]
	},
	{
		slug: 'game-engine',
		color: 'blue',
		description: game_engine,
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
		description: flyfe,
		shortDescription: 'GameDev.tv GameJam 2022',
		links: [
			{ to: 'https://physikar.itch.io/flyfe', label: 'itch.io'},
			{ to: 'https://www.youtube.com/watch?v=AKiOL-J0yak', label: 'YouTube'}
		],
		logo: Assets.GameDevTV,
		name: 'GameDev.tv Game Jam 2022',
		period: {
			from: new Date(2022, 4, 20),
			to: new Date(2022, 4, 31)
		},
		skills: getSkills('cpp', 'unreal', 'blender'),
		type: 'Game Development',
		screenshots: [
			{
				label: 'Main Menu',
				src: 'https://github.com/tmlittau/tmlittau-portfolio/blob/master/static/img/flyfe_project/0.png?raw=true'
			},
			{
				label: 'Obstacles to limit progression',
				src: 'https://github.com/tmlittau/tmlittau-portfolio/blob/master/static/img/flyfe_project/1.png?raw=true'
			},
			{
				label: 'Player Base with "nesting grounds"',
				src: 'https://github.com/tmlittau/tmlittau-portfolio/blob/master/static/img/flyfe_project/2.png?raw=true'
			},
			{
				label: 'Ore to collect and build with',
				src: 'https://github.com/tmlittau/tmlittau-portfolio/blob/master/static/img/flyfe_project/3.png?raw=true'
			},
			{
				label: 'Fiber plants to collect and build with',
				src: 'https://github.com/tmlittau/tmlittau-portfolio/blob/master/static/img/flyfe_project/4.png?raw=true'
			}
		]
	},
	{
		slug: 'image-labelling-tool',
		color: 'blue',
		description: image_labelling,
		shortDescription: 'Image Labelling Tool developed in Golang using Electron for the GUI.',
		links: [],
		logo: Assets.UKE,
		name: 'Image Labelling Tool',
		period: {
			from: new Date(2021, 9, 1),
			to: new Date(2022, 8, 1)
		},
		skills: getSkills('golang', 'electron', 'typescript', 'css', 'html'),
		type: 'Data Analysis Tool for Labelling Images',
		screenshots: [
			{
				label: 'Example of the GUI',
				src: 'https://github.com/tmlittau/tmlittau-portfolio/blob/master/static/img/lt_project/roi_labelling.jpg?raw=true'
			}
		]
	},
	{
		slug: 'imu-analyzer',
		color: 'blue',
		description: imu_analyzer,
		shortDescription: 'IMU Analyzer developed in Python using PyQT.',
		links: [{ to: 'https://github.com/tmlittau/legacy_portfolio', label: 'GitHub' }],
		logo: Assets.DFKI,
		name: 'IMU Analyzer',
		period: {
			from: new Date(2019, 1, 1),
			to: new Date(2019, 4, 1)
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
		slug: 'bayesian-neural-network',
		color: 'red',
		description: bnn,
		shortDescription: 'Bayesian Neural Network developed in Python using PyTorch.',
		links: [{ to: 'https://github.com/tmlittau/legacy_portfolio', label: 'GitHub' }],
		logo: Assets.Uppsala,
		name: 'Bayesian Neural Network',
		period: {
			from: new Date(2018, 10, 1),
			to: new Date(2019, 0, 5)
		},
		skills: getSkills('python', 'tensorflow', 'root'),
		type: 'Data Analysis Script',
		screenshots: [
			{
				'label': 'Project Poster',
				'src': 'https://github.com/tmlittau/tmlittau-portfolio/blob/master/static/img/bnn_project/Project09_poster.pdf?raw=true'
			}
		]
	},
	{
		slug: 'model-viewer',
		color: '#ff3e00',
		description: model_viewer,
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
				'src': 'https://github.com/tmlittau/tmlittau-portfolio/blob/master/static/img/mv_project/model_viewer_demo.jpg?raw=true'
			}
		]
	}
];

export default MY_PROJECTS;
