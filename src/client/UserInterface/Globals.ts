export enum Updaters {
	CASH,
	DIAMONDS,
	QUESTS,
}
export namespace SidebarNamespace {
	export interface IValuebarData {
		updater: Updaters;
		index: number;
		icon?: string;
	}

	export interface IButtonData {
		page: PagesNamespace.Pages;
		index: number;
	}
	export const VALUE_BAR_SIZE_Y = 25;
	export const PADDING = 10;
}

export namespace PagesNamespace {
	export const CORNER_RADIUS = new UDim(0, 15);
	export const TOPBAR_SIZE_Y = 50;
	export enum Pages {
		NONE,
		QUESTS,
	}
}
