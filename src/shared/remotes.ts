import Net, { Definitions } from "@rbxts/net";
import { Currencies, PlayerBase } from "./Templates/PlayerBase";
import { QuestBase } from "./Templates/QuestBase";

const Remotes = Net.CreateDefinitions({
	Information: Definitions.Namespace({
		GetQuests: Definitions.ServerAsyncFunction<() => Map<number, QuestBase> | undefined>(),
		GetCurrency: Definitions.ServerAsyncFunction<() => Currencies>(),
		GetPlayer: Definitions.ServerAsyncFunction<() => PlayerBase>(),
		PlayerFinishedLoading: Definitions.ServerToClientEvent(),
	}),
	Data: Definitions.Namespace({
		CurrencyChanged: Definitions.ServerToClientEvent<[Currencies]>(),
		QuestsChanged: Definitions.ServerToClientEvent<[Map<number, QuestBase>]>(),
	}),
});

export default Remotes;
