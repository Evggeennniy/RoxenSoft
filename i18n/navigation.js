

import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

export const locales = ['en', 'ru', "ua"];


export const localeNames = {
	en: 'EN',
	ru: 'RU',
	ua: "UA"
};
// Lightweight wrappers around Next.js' navigation
// APIs that consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
	createNavigation(routing);