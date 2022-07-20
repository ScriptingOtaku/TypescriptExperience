// Editted from seperate project

import { QuestBase } from "./QuestBase";

export interface Currencies {
	cash: number;
	diamonds: number;
}

export interface PlayerBase {
	readonly playerName: string;
	readonly playerId: number;
	currency: Currencies;
	quests: Map<number, QuestBase> | undefined;
}
