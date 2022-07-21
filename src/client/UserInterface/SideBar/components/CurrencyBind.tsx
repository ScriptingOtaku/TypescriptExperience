import Roact, { Component } from "@rbxts/roact";
import Currency from "./Currency";

interface Props {}

interface State {}

export default class CurrencyBind extends Component<Props, State> {
	public static validateProps() {
		return [true] as unknown as LuaTuple<[boolean, string?]>;
	}

	render() {
		return (
			<frame
				Size={new UDim2(0.16, 0, 0.2, 0)}
				Position={new UDim2(0.01, 0, 0.565, 0)}
				AnchorPoint={new Vector2(0, 1)}
				BackgroundTransparency={1}
			>
				<uilistlayout
					Padding={new UDim(0.05, 0)}
					FillDirection={"Vertical"}
					HorizontalAlignment={"Center"}
					SortOrder={"LayoutOrder"}
					VerticalAlignment={"Bottom"}
				/>
				<Currency index={1} icon={0} />
				<Currency index={2} icon={1} />
			</frame>
		);
	}
}
