import Assets from './data/assets';
import type { Education } from './types';

export const MY_EDUCATIONS: Array<Education> = [
	{
		degree: 'Master of Science in Computational Science',
		description: 'Master in Computational Science with a focus on Data Science and Machine Learning.',
		location: 'Sweden',
		logo: Assets.Uppsala,
		name: '',
		organization: 'Uppsala University',
		period: { from: new Date(2017, 8, 1), to: new Date(2019, 5, 1) },
		shortDescription: '',
		slug: 'master-computational-science',
		subjects: ['Python', 'C++', 'Algorithms and Data structures', 'Machine Learning', 'Data Science', 'Statistics', 'Mathematics', 'Project Management', 'OpenGL', 'Computer Graphics', 'Numerical Methods', 'Optimization']
	},
	{
		degree: 'Bachelor of Science in Physics',
		description: 'Bachelor in Physics with a focus on theoretical physics and thesis in theoretical neurophysics.',
		location: 'Germany',
		logo: Assets.Bremen,
		name: '',
		organization: 'University of Bremen',
		period: { from: new Date(2020, 0, 1), to: new Date(2022, 5, 1) },
		shortDescription: '',
		slug: 'bachelor-physics',
		subjects: ['Physics', 'Algorithm', 'Algebra', 'Python', 'C', 'English', 'Theoretical Computer Science']
	}
];
