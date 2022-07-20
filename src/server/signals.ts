import Signal from "@rbxts/signal";
import { questAction, QuestBase } from "shared/Templates/QuestBase";

export const PlayerQuestAction = new Signal<(player: Player, action: questAction) => void>();
export const PlayerQuestUpdated = new Signal<(player: Player, quests: Map<number, QuestBase>) => void>();
export const AddCurrency = new Signal<(player: Player, currencyType: string, value: number) => void>();
