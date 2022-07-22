import Roact, { Children } from "@rbxts/roact";
import { Players } from "@rbxts/services";
import Sidebar from "./apps/Sidebar";
import { IButtonData, IValuebarData, Updaters } from "./Globals";

const Player = Players.LocalPlayer;
const PlayerGui = Player.WaitForChild("PlayerGui");

const ValueBars: Array<IValuebarData> = [
	{
		updater: Updaters.CASH,
		index: 1,
	},
	{
		updater: Updaters.DIAMONDS,
		index: 2,
	},
];
const Buttons: Array<IButtonData> = [
	{
		page: "Quests",
		index: 1,
	},
];

Roact.mount(
	Roact.createElement(
		"ScreenGui",
		{
			IgnoreGuiInset: true,
		},
		{
			Sidebar: Roact.createElement(Sidebar, {
				ValueBars: ValueBars,
				Buttons: Buttons,
			}),
		},
	),
	PlayerGui,
);
