import { questAction, QuestBase, rewardType } from "shared/Templates/QuestBase";

export const Quests: Array<QuestBase> = [
	{
		questId: 1,
		questString: "Cash Quest",
		RewardType: rewardType.CASH,
		RewardContent: 5,
		QuestAction: questAction.CLICK_BRICK,
		QuestCount: 0, // Should always be 0 rn.
		QuestFinish: 5,
	},
	{
		questId: 2,
		questString: "Diamond Quest",
		RewardType: rewardType.DIAMONDS,
		RewardContent: 1,
		QuestAction: questAction.CLICK_BRICK,
		QuestCount: 0, // Should always be 0 rn.
		QuestFinish: 10,
	},
];

export function getQuest(questId: number): [QuestBase, number] | undefined {
	let left = 0;
	let right: number = Quests.size() - 1;

	while (left <= right) {
		const mid: number = math.floor((left + right) / 2);

		if (Quests[mid].questId === questId) return [Quests[mid], mid];
		if (questId < Quests[mid].questId) right = mid - 1;
		else left = mid + 1;
	}

	return undefined;
}
