export enum rewardType {
	NONE,
	DIAMONDS,
	CASH,
}
export enum questAction {
	CLICK_BRICK,
}

export interface QuestBase {
	questId: number;
	questString: string;
	RewardType: rewardType;
	RewardContent: number; // Should be changed to a better solution ¯\_(ツ)_/¯
	QuestAction: questAction;
	QuestCount: number;
	QuestFinish: number;
}
