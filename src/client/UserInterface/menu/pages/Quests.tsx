import Roact, { Component } from "@rbxts/roact";

interface Props {}

interface State {}

export default class Quests extends Component<Props, State> {
	public static validateProps() {
		return [true] as unknown as LuaTuple<[boolean, string?]>;
	}

	render() {
		return (
			<imagelabel
				Size={new UDim2(0, 500, 0, 500)}
				Position={new UDim2(0.5, 0, 0.5, 0)}
				AnchorPoint={new Vector2(0.5, 0.5)}
				Image={"rbxassetid://7462343062"}
			></imagelabel>
		);
	}
}
