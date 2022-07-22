import Roact, { Component } from "@rbxts/roact";
import Outline from "client/UserInterface/components/Outline";
import { SidebarNamespace } from "../../../Globals";

interface State {}

export default class ValueBar extends Component<SidebarNamespace.IValuebarData, State> {
	public static validateProps() {
		return [true] as unknown as LuaTuple<[boolean, string?]>;
	}

	render() {
		return (
			<frame Size={new UDim2(1, 0, 0, SidebarNamespace.VALUE_BAR_SIZE_Y)} LayoutOrder={this.props.index}>
				<Outline />
			</frame>
		);
	}
}
