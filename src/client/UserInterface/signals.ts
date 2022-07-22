import Signal from "@rbxts/signal";
import { PagesNamespace } from "./Globals";

export const ChangePage = new Signal<(pageName: PagesNamespace.Pages) => void>();
