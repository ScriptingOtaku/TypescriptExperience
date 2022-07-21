import Roact, { AnyComponent, Element } from "@rbxts/roact";
import Quests from "./Quests";

export const pages = new Map<string, Element>();
pages.set("Quests", Roact.createElement(Quests));
