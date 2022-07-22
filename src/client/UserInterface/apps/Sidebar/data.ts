export const VALUE_BAR_SIZE_Y = 25;

export enum Updaters {
	CASH,
	DIAMONDS,
	QUESTS,
}

export interface IValuebarData {
	updater: Updaters;
	index: number;
	icon?: string;
}

export interface IButtonData {
	page: string;
	index: number;
}
