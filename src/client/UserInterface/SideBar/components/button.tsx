import Roact, { Component } from "@rbxts/roact";

interface Props {}

interface State {}

export default class button extends Component<Props, State> {
	public static validateProps() {
		return [true] as unknown as LuaTuple<[boolean, string?]>;
	}

	render() {
		return <></>;
	}
}
