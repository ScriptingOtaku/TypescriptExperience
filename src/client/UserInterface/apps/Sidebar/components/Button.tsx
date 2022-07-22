import Roact, { Component } from "@rbxts/roact";
import { ChangePage } from "client/UserInterface/signals";
import { SidebarNamespace } from "../../../Globals";

interface State {}

export default class Button extends Component<SidebarNamespace.IButtonData, State> {
	public static validateProps() {
		return [true] as unknown as LuaTuple<[boolean, string?]>;
	}

	render() {
		return <textbutton Event={{ MouseButton1Click: () => ChangePage.Fire(this.props.page) }}></textbutton>;
	}
}
