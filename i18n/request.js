import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';

import en from '../messages/en.json';
import ru from '../messages/ru.json';
import ua from '../messages/ua.json';

const allMessages = { en, ru, ua };

export default getRequestConfig(async ({ requestLocale }) => {
	const requested = await requestLocale;
	const locale = hasLocale(routing.locales, requested)
		? requested
		: routing.defaultLocale;

	return {
		locale,
		messages: allMessages[locale],
	};
});