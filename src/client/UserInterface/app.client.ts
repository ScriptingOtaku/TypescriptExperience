import Roact, { Children } from "@rbxts/roact";
import { Players } from "@rbxts/services";
import PageMaker from "./apps/PageMaker";
import Sidebar from "./apps/Sidebar";
import { PagesNamespace, SidebarNamespace, Updaters } from "./Globals";

const Player = Players.LocalPlayer;
const PlayerGui = Player.WaitForChild("PlayerGui");

const ValueBars: Array<SidebarNamespace.IValuebarData> = [
	{
		updater: Updaters.CASH,
		index: 1,
	},
	{
		updater: Updaters.DIAMONDS,
		index: 2,
	},
];
const Buttons: Array<SidebarNamespace.IButtonData> = [
	{
		page: PagesNamespace.Pages.QUESTS,
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
			Pages: Roact.createElement(PageMaker),
		},
	),
	PlayerGui,
);
