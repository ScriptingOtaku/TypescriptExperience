// Editted from seperate project

import { Players } from "@rbxts/services";
import Signal from "@rbxts/signal";
import { PlayerBase } from "shared/Templates/PlayerBase";
import Remotes from "shared/remotes";
import { QuestService } from "./QuestService";
import { AddCurrency, PlayerQuestUpdated } from "server/signals";
import { QuestBase } from "shared/Templates/QuestBase";

const Information = Remotes.Server.GetNamespace("Information");
const GetQuests = Information.Get("GetQuests");
const GetCurrency = Information.Get("GetCurrency");
const GetPlayer_R = Information.Get("GetPlayer");
const PlayerFinishedLoading = Information.Get("PlayerFinishedLoading");
const DataRemotes = Remotes.Server.GetNamespace("Data");
const CurrencyChanged = DataRemotes.Get("CurrencyChanged");

export namespace PlayerService {
	export const PlayerConnected = new Signal<() => void>(); // Gets fired when a player starts to join
	export const PlayerAdded = new Signal<(player: PlayerBase) => void>(); // Gets fired when a player's loading is finished
	export const PlayerRemoved = new Signal<(player: PlayerBase) => void>(); // Gets fired when a player leaves

	export const AddedPlayers: Map<Player, PlayerBase> = new Map();

	export function AddPlayer(player: Player) {
		const promise = new Promise<void>((resolve) => {
			// The player has joined
			PlayerConnected.Fire();
			resolve();
		}).andThen(() => {
			const playerBase: PlayerBase = {
				playerName: player.Name,
				playerId: player.UserId,
				currency: { cash: 0, diamonds: 0 },
				quests: QuestService.AddPlayer(player),
			};
			AddedPlayers.set(player, playerBase);
			PlayerAdded.Fire(playerBase);
			PlayerFinishedLoading.SendToPlayer(player);
		});
	}
	export function RemovePlayer(player: Player): boolean {
		return AddedPlayers.delete(player);
	}
	export function GetPlayer(player: Player) {
		return AddedPlayers.get(player);
	}

	Players.PlayerAdded.Connect((player: Player) => AddPlayer(player));
	Players.PlayerRemoving.Connect((player: Player) => RemovePlayer(player));
	GetCurrency.SetCallback((player: Player) => GetPlayer(player)!.currency);
	PlayerQuestUpdated.Connect((player: Player, quests: Map<number, QuestBase>) => {
		if (GetPlayer(player)!.quests) {
			GetPlayer(player)!.quests = quests;
		}
	});
	AddCurrency.Connect((player: Player, currencyType: string, value: number) => {
		const playerCurrency = GetPlayer(player)!.currency;
		switch (currencyType) {
			case "CASH":
				playerCurrency.cash += value;
				break;
			case "DIAMONDS":
				playerCurrency.diamonds += value;
				break;
		}
		CurrencyChanged.SendToPlayer(player, GetPlayer(player)!.currency);
	});
	GetQuests.SetCallback((player: Player) => GetPlayer(player)!.quests);
	GetPlayer_R.SetCallback((player: Player) => GetPlayer(player)!);
}
