import Roact, { Component } from "@rbxts/roact";
import Button from "./Button";

interface Props {}

interface State {}

export default class ButtonBind extends Component<Props, State> {
	public static validateProps() {
		return [true] as unknown as LuaTuple<[boolean, string?]>;
	}

	render() {
		return (
			<frame Size={new UDim2(0.16, 0, 0.2, 0)} Position={new UDim2(0.01, 0, 0.575, 0)} BackgroundTransparency={1}>
				<uilistlayout
					Key={"Row Aligner"}
					Padding={new UDim(0.03, 0)}
					FillDirection={"Vertical"}
					HorizontalAlignment={"Center"}
					SortOrder={"LayoutOrder"}
					VerticalAlignment={"Top"}
				/>
				<frame Key={"Row1"} Size={new UDim2(1, 0, 0.3, 0)} LayoutOrder={1} BackgroundTransparency={1}>
					<uilistlayout
						Key={"Button Aligner"}
						Padding={new UDim(0.03, 0)}
						FillDirection={"Horizontal"}
						HorizontalAlignment={"Left"}
						SortOrder={"LayoutOrder"}
						VerticalAlignment={"Top"}
					/>
					<Button index={1} icon={"rbxassetid://8368486930"} />
				</frame>
			</frame>
		);
	}
}
