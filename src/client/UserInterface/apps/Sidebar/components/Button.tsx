import Roact, { Component } from "@rbxts/roact";
import { IButtonData, VALUE_BAR_SIZE_Y } from "../data";

interface State {}

export default class Button extends Component<IButtonData, State> {
	public static validateProps() {
		return [true] as unknown as LuaTuple<[boolean, string?]>;
	}

	render() {
		return <textbutton></textbutton>;
	}
}
