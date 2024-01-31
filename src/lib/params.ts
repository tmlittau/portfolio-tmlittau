import { MY_EDUCATIONS } from './educations.params';
import MY_EXPERIENCES from './experiences.params';
import MY_PROJECTS from './projects.params';
import MY_SKILLS from './skills.params';
import {
	Platform,
	type HomePageParams,
	type ProjectPageParams,
	type ExperiencePageParams,
	type SkillsPageParams,
	type ResumePageParams,
	type SearchPageParams,
	type EducationPageParams
} from './types';
import { Icons } from './utils';

export const TITLE_SUFFIX = 'Slick template with Svelte';

export const NavBar = {
	home: 'Home',
	personal: 'Projects',
	career: 'Experiences',
	resume: 'Resume',
	skills: 'Skills',
	Education: 'Education'
};

export const getPlatfromIcon = (platform: Platform): Icons => {
	switch (platform) {
		case Platform.GitHub:
			return Icons.GitHub;
		case Platform.Linkedin:
			return Icons.LinkedIn;
		case Platform.Email:
			return Icons.Email;
	}
};

export const HOME: HomePageParams = {
	title: 'Home',
	name: 'Tim',
	lastName: 'LITTAU',
	description:
		'Due to my education in Science and the Projects I worked on, I have seen a vast variety of data. \n To deal with this data I am able to apply a collection of statistical methods and algorithms I studied throughout my career. \n This also provided me with the skill to design algorithms myself, in case of specific applications that need necessary adjustments. \n In the spare time I have I am constantly challenging myself to try new technologies to improve and expand my Software Development skills. \n These technologies often helped me in my work as a Data Scientist. \n One example is the development of a Web Application to visualize and communicate the data in an interactive and dynamic way.',
	links: [
		{ platform: Platform.GitHub, link: 'https://github.com/tmlittau' },
		{
			platform: Platform.Linkedin,
			link: 'https://www.linkedin.com/in/tim-littau-a63510251/'
		},
		{
			platform: Platform.Email,
			link: 'projects@tmlittau.com'
		}
	]
};

export const PROJECTS: ProjectPageParams = {
	title: 'Projects',
	items: MY_PROJECTS
};

export const EXPERIENCES: ExperiencePageParams = {
	title: 'Experiences',
	items: MY_EXPERIENCES
};

export const SKILLS: SkillsPageParams = {
	title: 'Skills',
	items: MY_SKILLS
};

export const RESUME: ResumePageParams = {
	title: 'Resumé',
	item: ''
};

export const SEARCH: SearchPageParams = {
	title: 'Search'
};

export const EDUCATION: EducationPageParams = {
	items: MY_EDUCATIONS,
	title: 'Education'
};
