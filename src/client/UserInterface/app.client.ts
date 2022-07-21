import Roact, { Children } from "@rbxts/roact";
import { Players } from "@rbxts/services";
import menuApp from "./menu";
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
			menu: Roact.createElement(menuApp),
		},
	),
	PlayerGui,
);
