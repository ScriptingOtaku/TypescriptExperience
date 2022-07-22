import Roact, { Component } from "@rbxts/roact";
import { SidebarNamespace } from "../../../Globals";

interface State {}

export default class ValueBar extends Component<SidebarNamespace.IValuebarData, State> {
	public static validateProps() {
		return [true] as unknown as LuaTuple<[boolean, string?]>;
	}

	render() {
		return (
			<textlabel
				Size={new UDim2(1, 0, 0, SidebarNamespace.VALUE_BAR_SIZE_Y)}
				LayoutOrder={this.props.index}
				Text={tostring(this.props.updater)}
			></textlabel>
		);
	}
}
