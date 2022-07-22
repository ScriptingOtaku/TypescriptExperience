import Roact, { PureComponent } from "@rbxts/roact";

interface Props {}

interface State {}

export default class Quests extends PureComponent<Props, State> {
	public static validateProps() {
		return [true] as unknown as LuaTuple<[boolean, string?]>;
	}

	render() {
		return (
			<frame
				BackgroundColor3={new Color3(1, 0, 0)}
				BackgroundTransparency={0.5}
				Size={new UDim2(1, 0, 1, 0)}
			></frame>
		);
	}
}
