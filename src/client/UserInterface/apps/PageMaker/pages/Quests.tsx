import Roact, { PureComponent } from "@rbxts/roact";

interface Props {}

interface State {}

export default class Quests extends PureComponent<Props, State> {
	public static validateProps() {
		return [true] as unknown as LuaTuple<[boolean, string?]>;
	}

	render() {
		return (
			<imagelabel
				Size={new UDim2(1, 0, 1, 0)}
				Image={"rbxassetid://7462343062"}
				BorderSizePixel={0}
				BackgroundTransparency={1}
			></imagelabel>
		);
	}
}
