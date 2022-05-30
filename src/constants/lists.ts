const MOON_RABBIT_LIST = 'https://raw.githubusercontent.com/MoonRabbitAZ/swap-client/main/src/constants/tokenlist.json';

// lower index == higher priority for token import
export const DEFAULT_LIST_OF_LISTS: string[] = [MOON_RABBIT_LIST];

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = [MOON_RABBIT_LIST];
