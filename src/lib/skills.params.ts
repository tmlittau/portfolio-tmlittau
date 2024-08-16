import Assets from './data/assets';
import type { Skill } from './types';

import svelte from './md/svelte.md?raw';
import angular from './md/angular.md?raw';
import clang from './md/c.md?raw';
import cpp from './md/cpp.md?raw';
import golang from './md/golang.md?raw';
import javascript from './md/javascript.md?raw';
import typescript from './md/typescript.md?raw';
import python from './md/python.md?raw';
import julia from './md/julia.md?raw';
import sql from './md/sql.md?raw';
import postgres from './md/postgres.md?raw';
import django from './md/django.md?raw';
import pytorch from './md/pytorch.md?raw';
import tensorflow from './md/tensorflow.md?raw';
import pandas from './md/pandas.md?raw';
import numpy from './md/numpy.md?raw';
import celery from './md/celery.md?raw';
import root from './md/root.md?raw';
import qt from './md/qt.md?raw';
import ros from './md/ros.md?raw';
import opencv from './md/opencv.md?raw';
import electron from './md/electron.md?raw';
import opengl from './md/opengl.md?raw';
import css from './md/css.md?raw';
import html from './md/html.md?raw';
import tailwind from './md/tailwind.md?raw';
import docker from './md/docker.md?raw';
import redis from './md/redis.md?raw';
import unreal from './md/unreal.md?raw';
import blender from './md/blender.md?raw';
import qiskit from './md/qiskit.md?raw';

const s = (skill: Skill) => skill;

export type ArrayElementType<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

const MY_SKILLS = [
	s({
		slug: 'python',
		color: 'yellow',
		description: python,
		logo: Assets.Python,
		name: 'Python'
	}),
	s({
		slug: 'c',
		color: 'blue',
		description: clang,
		logo: Assets.C,
		name: 'C'
	}),
	s({
		slug: 'cpp',
		color: 'blue',
		description: cpp,
		logo: Assets.Cpp,
		name: 'C++'
	}),
	s({
		slug: 'go',
		color: 'blue',
		description: golang,
		logo: Assets.Go,
		name: 'Golang'
	}),
	s({
		slug: 'julia',
		color: 'blue',
		description: julia,
		logo: Assets.Julia,
		name: 'Julia'
	}),
	s({
		slug: 'sql',
		color: 'blue',
		description: sql,
		logo: Assets.SQL,
		name: 'SQL'
	}),
	s({
		slug: 'postgres',
		color: 'blue',
		description: postgres,
		logo: Assets.PostgreSQL,
		name: 'PostgreSQL'
	}),
	s({
		slug: 'django',
		color: 'green',
		description: django,
		logo: Assets.Django,
		name: 'Django'
	}),
	s({
		slug: 'pytorch',
		color: 'red',
		description: pytorch,
		logo: Assets.PyTorch,
		name: 'Pytorch'
	}), 
	s({
		slug: 'tensorflow',
		color: 'orange',
		description: tensorflow,
		logo: Assets.Tensorflow,
		name: 'Tensorflow'
	}),
	s({
		slug: 'pandas',
		color: 'red',
		description: pandas,
		logo: Assets.Pandas,
		name: 'Pandas'
	}),
	s({
		slug: 'numpy',
		color: 'blue',
		description: numpy,
		logo: Assets.Numpy,
		name: 'Numpy'
	}),
	s({
		slug: 'celery',
		color: 'green',
		description: celery,
		logo: Assets.Celery,
		name: 'Celery'
	}),
	s({
		slug: 'root',
		color: 'blue',
		description: root,
		logo: Assets.ROOT,
		name: 'Root'
	}),
	s({
		slug: 'qt',
		color: 'green',
		description: qt,
		logo: Assets.QT,
		name: 'Qt'
	}),
	s({
		slug: 'ros',
		color: 'blue',
		description: ros,
		logo: Assets.ROS,
		name: 'ROS'
	}),
	s({
		slug: 'opencv',
		color: 'blue',
		description: opencv,
		logo: Assets.OpenCV,
		name: 'OpenCV'
	}),
	s({
		slug: 'electron',
		color: 'blue',
		description: electron,
		logo: Assets.Electron,
		name: 'Electron'
	}),
	s({
		slug: 'opengl',
		color: 'blue',
		description: opengl,
		logo: Assets.OpenGL,
		name: 'OpenGL'
	}),
	s({
		slug: 'css',
		color: 'blue',
		description: css,
		logo: Assets.CSS,
		name: 'CSS'
	}),
	s({
		slug: 'html',
		color: 'orange',
		description: html,
		logo: Assets.HTML,
		name: 'HTML'
	}),
	s({
		slug: 'javascript',
		color: 'yellow',
		description: javascript,
		logo: Assets.JavaScript,
		name: 'Javascript'
	}),
	s({
		slug: 'svelte',
		color: 'orange',
		description: svelte,
		logo: Assets.Svelte,
		name: 'Svelte'
	}),
	s({
		slug: 'angular',
		color: 'red',
		description: angular,
		logo: Assets.Angular,
		name: 'Angular'
	}),
	s({
		slug: 'ts',
		color: 'blue',
		description: typescript,
		logo: Assets.TypeScript,
		name: 'Typescript'
	}),
	s({
		slug: 'tailwind',
		color: 'blue',
		description: tailwind,
		logo: Assets.Tailwind,
		name: 'Tailwind'
	}),
	s({
		slug: 'docker',
		color: 'blue',
		description: docker,
		logo: Assets.Docker,
		name: 'Docker'
	}),
	s({
		slug: 'redis',
		color: 'red',
		description: redis,
		logo: Assets.Redis,
		name: 'Redis'
	}),
	s({
		slug: 'unreal',
		color: 'blue',
		description: unreal,
		logo: Assets.UnrealEngine,
		name: 'Unreal Engine'
	}),
	s({
		slug: 'blender',
		color: 'orange',
		description: blender,
		logo: Assets.Blender,
		name: 'Blender'
	}),
	s({
		slug: 'qiskit',
		color: 'blue',
		description: qiskit,
		logo: Assets.Qiskit,
		name: 'Qiskit'
	})
];

export default MY_SKILLS;

export const getSkills = (...slugs: Array<string>): Array<Skill> =>
	MY_SKILLS.filter((it) => slugs.includes(it.slug));
