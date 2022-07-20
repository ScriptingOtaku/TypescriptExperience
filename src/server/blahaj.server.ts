// Here to test Quest Code.
// On baseplate clicked quest gets updated.

import { Workspace } from "@rbxts/services";
import { QuestService } from "./services/QuestService";
import { PlayerQuestAction } from "./signals";
const baseplate = Workspace.WaitForChild("Baseplate");
const spawn = Workspace.WaitForChild("SpawnLocation");

const questUpdate = new Instance("ClickDetector", spawn);
questUpdate.MouseClick.Connect((player: Player) => PlayerQuestAction.Fire(player, 0));

const questAdd = new Instance("ClickDetector", baseplate);
questAdd.MouseClick.Connect((player: Player) => QuestService.AddQuest(player, math.random(1, 2)));
