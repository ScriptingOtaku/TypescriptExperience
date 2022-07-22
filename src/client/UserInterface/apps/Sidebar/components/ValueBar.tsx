import Roact, { Component } from "@rbxts/roact";
import Outline from "client/UserInterface/components/Outline";
import Roundy from "client/UserInterface/components/Roundy";
import { SidebarNamespace } from "../../../Globals";
import theme from "../../../theme.json";

interface State {}

export default class ValueBar extends Component<SidebarNamespace.IValuebarData, State> {
	public static validateProps() {
		return [true] as unknown as LuaTuple<[boolean, string?]>;
	}

	render() {
		return (
			<frame
				Size={new UDim2(1, 0, 0, SidebarNamespace.VALUE_BAR_SIZE_Y)}
				LayoutOrder={this.props.index}
				BackgroundColor3={Color3.fromHex(theme.MainColor)}
			>
				<Outline />
				<Roundy />
			</frame>
		);
	}
}
