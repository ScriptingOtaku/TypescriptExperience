import Roact, { Component } from "@rbxts/roact";
import { IValuebarData, VALUE_BAR_SIZE_Y } from "../data";

interface State {}

export default class ValueBar extends Component<IValuebarData, State> {
	public static validateProps() {
		return [true] as unknown as LuaTuple<[boolean, string?]>;
	}

	render() {
		return (
			<textlabel
				Size={new UDim2(1, 0, 0, VALUE_BAR_SIZE_Y)}
				LayoutOrder={this.props.index}
				Text={tostring(this.props.updater)}
			></textlabel>
		);
	}
}
