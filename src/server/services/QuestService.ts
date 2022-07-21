// This needs promises, but I'm tired and I don't really care at the moment. It's not going to slow anything down with 2 quests anyway.

import { AddCurrency, PlayerQuestAction, PlayerQuestUpdated } from "server/signals";
import { getQuest } from "shared/Content/QuestIndex";
import Remotes from "shared/remotes";
import { QuestBase, questAction, rewardType } from "shared/Templates/QuestBase";

const DataRemotes = Remotes.Server.GetNamespace("Data");
const QuestsChanged = DataRemotes.Get("QuestsChanged");

export namespace QuestService {
	const PlayerQuests: Map<Player, QuestHandler> = new Map();

	export function AddPlayer(player: Player) {
		PlayerQuests.set(player, new QuestHandler(player));
		return undefined;
	}
	export function AddQuest(player: Player, questId: number) {
		const quest = getQuest(questId);
		if (quest !== undefined) PlayerQuests.get(player)!.AddQuest(quest[0]);
	}
	export function RemoveQuest(player: Player, questId: number) {
		PlayerQuests.get(player)?.RemoveQuest(questId);
	}
	export function ParseRewards(player: Player, typeReward: rewardType, reward: number) {
		switch (typeReward) {
			case rewardType.CASH:
				AddCurrency.Fire(player, "CASH", reward);
				break;
			case rewardType.DIAMONDS:
				AddCurrency.Fire(player, "DIAMONDS", reward);
				break;
			default:
				break;
		}
	}

	PlayerQuestAction.Connect((player: Player, action: questAction) => PlayerQuests.get(player)?.UpdateQuests(action));
	DataRemotes.OnEvent("CompleteQuest", (player: Player, id: number) => PlayerQuests.get(player)?.CompleteQuest(id));
}

class QuestHandler {
	player: Player;
	public quests: Map<number, QuestBase> = new Map();
	constructor(player: Player) {
		this.player = player;
	}
	public UpdateQuests(action: questAction) {
		this.quests.forEach((value: QuestBase, key: number) => {
			if (value.QuestAction === action && value.QuestCount < value.QuestFinish) value.QuestCount++;
		});
		PlayerQuestUpdated.Fire(this.player, this.quests);
		QuestsChanged.SendToPlayer(this.player, this.quests);
	}
	public AddQuest(quest: QuestBase) {
		const n = table.clone(quest);
		this.quests.set(quest.questId, n);
		PlayerQuestUpdated.Fire(this.player, this.quests);
		QuestsChanged.SendToPlayer(this.player, this.quests);
	}
	public RemoveQuest(quest: number) {
		this.quests.delete(quest);
		PlayerQuestUpdated.Fire(this.player, this.quests);
		QuestsChanged.SendToPlayer(this.player, this.quests);
	}
	public CompleteQuest(quest: number) {
		const q = this.quests.get(quest);
		if (q) {
			if (q.QuestCount === q.QuestFinish) {
				QuestService.ParseRewards(this.player, q.RewardType, q.RewardContent);
				this.RemoveQuest(quest);
			}
		}
	}
}
