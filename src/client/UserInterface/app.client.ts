import Roact, { Children } from "@rbxts/roact";
import { Players } from "@rbxts/services";
import sidebarApp from "./SideBar";

const Player = Players.LocalPlayer;
const PlayerGui = Player.WaitForChild("PlayerGui");

Roact.mount(
	Roact.createElement(
		"ScreenGui",
		{
			IgnoreGuiInset: true,
		},
		{
			sidebar: Roact.createElement(sidebarApp),
		},
	),
	PlayerGui,
);
