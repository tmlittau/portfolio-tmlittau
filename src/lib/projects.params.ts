import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';

const MY_PROJECTS: Array<Project> = [
	// add projects
	/*
	Image Labelling Tool (UKE)
	Accounting Tool (Private)
	Character Sheet (Private)
	IMU Analyzer (DFKI)
	Model Viewer (Uppsala University)
	Bayesian Neural Network (Uppsala University)
	Game Engine project (Private) WIP
	*/ 
	{
		slug: 'image-labelling-tool',
		color: '#ff3e00',
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
		slug: 'accounting-tool',
		color: '#ff3e00',
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
		type: 'Web based Accounting Tool for a small business'
	},
	{
		slug: 'character-sheet',
		color: '#ff3e00',
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
		type: 'Web based Character Sheet for Pen and Paper Games'
	},
	{
		slug: 'imu-analyzer',
		color: '#ff3e00',
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
		type: 'Analysis Tool for IMU Data'
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
		type: 'Computer Graphics Demo Project'
	},
	{
		slug: 'bayesian-neural-network',
		color: '#ff3e00',
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
	},
	{
		slug: 'slick-portfolio-svelte',
		color: '#ff3e00',
		description:
			'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
		shortDescription:
			'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
		links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
		logo: Assets.Svelte,
		name: 'Slick Portfolio',
		period: {
			from: new Date()
		},
		skills: getSkills('svelte', 'ts', 'tailwind', 'sass'),
		type: 'Website Template',
		screenshots: [
			{
				label: 'screen 1',
				src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '2',
				src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '3',
				src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '4',
				src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '5',
				src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '6',
				src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			}
		]
	}
];

export default MY_PROJECTS;
