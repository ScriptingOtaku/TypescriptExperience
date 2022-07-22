import Roact, { Component, Element } from "@rbxts/roact";
import Button from "./components/Button";
import ValueBar from "./components/ValueBar";
import { IButtonData, IValuebarData, VALUE_BAR_SIZE_Y } from "./data";

interface Props {
	ValueBars: Array<IValuebarData>;
	Buttons: Array<IButtonData>;
}

export default class Sidebar extends Component<Props> {
	public static validateProps() {
		return [true] as unknown as LuaTuple<[boolean, string?]>;
	}

	render() {
		return (
			<frame
				Position={new UDim2(0, 0, 0.5, 0)}
				AnchorPoint={new Vector2(0, 0.5)}
				Size={
					new UDim2(
						0.1,
						0,
						0,
						this.props.ValueBars.size() * VALUE_BAR_SIZE_Y + this.props.Buttons.size() * VALUE_BAR_SIZE_Y,
					)
				}
			>
				<uilistlayout
					Padding={new UDim(0, 0)}
					FillDirection={"Vertical"}
					HorizontalAlignment={"Center"}
					SortOrder={"LayoutOrder"}
					VerticalAlignment={"Center"}
				/>
				<frame
					Key={"Value Bar Container"}
					Size={new UDim2(1, 0, 0, this.props.ValueBars.size() * VALUE_BAR_SIZE_Y)}
					LayoutOrder={1}
				>
					<uilistlayout
						Padding={new UDim(0, 0)}
						FillDirection={"Vertical"}
						HorizontalAlignment={"Center"}
						SortOrder={"LayoutOrder"}
						VerticalAlignment={"Center"}
					/>
					{this.generateValueBars()}
				</frame>
				<frame Size={new UDim2(1, 0, 0, this.props.Buttons.size() * VALUE_BAR_SIZE_Y)} LayoutOrder={2}>
					<uigridlayout
						CellPadding={new UDim2(0, 5, 0, 5)}
						CellSize={new UDim2(0, VALUE_BAR_SIZE_Y, 0, VALUE_BAR_SIZE_Y)}
						FillDirection={"Horizontal"}
						HorizontalAlignment={"Left"}
						SortOrder={"LayoutOrder"}
						StartCorner={"TopLeft"}
						VerticalAlignment={"Top"}
					/>
					{this.generateButtons()}
				</frame>
			</frame>
		);
	}

	private generateValueBars(): Array<Element> {
		const Elements: Array<Element> = [];
		this.props.ValueBars.forEach((data: IValuebarData, index: number) => {
			Elements.push(Roact.createElement(ValueBar, data));
		});
		return Elements;
	}
	private generateButtons(): Array<Element> {
		const Elements: Array<Element> = [];
		this.props.Buttons.forEach((data: IButtonData, index: number) => {
			Elements.push(Roact.createElement(Button, data));
		});
		return Elements;
	}
}