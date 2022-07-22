import Roact, { Component, Element } from "@rbxts/roact";
import Button from "./components/Button";
import ValueBar from "./components/ValueBar";
import { SidebarNamespace } from "../../Globals";

interface Props {
	ValueBars: Array<SidebarNamespace.IValuebarData>;
	Buttons: Array<SidebarNamespace.IButtonData>;
}

export default class Sidebar extends Component<Props> {
	public static validateProps() {
		return [true] as unknown as LuaTuple<[boolean, string?]>;
	}

	render() {
		return (
			<frame
				BackgroundTransparency={1}
				Position={new UDim2(0.01, 0, 0.5, 0)}
				AnchorPoint={new Vector2(0, 0.5)}
				Size={
					new UDim2(
						0.1,
						0,
						0,
						this.props.ValueBars.size() * SidebarNamespace.VALUE_BAR_SIZE_Y +
							this.props.Buttons.size() * SidebarNamespace.VALUE_BAR_SIZE_Y +
							SidebarNamespace.PADDING,
					)
				}
			>
				<uilistlayout
					Padding={new UDim(0, SidebarNamespace.PADDING)}
					FillDirection={"Vertical"}
					HorizontalAlignment={"Center"}
					SortOrder={"LayoutOrder"}
					VerticalAlignment={"Center"}
				/>
				<frame
					Key={"Value Bar Container"}
					BackgroundTransparency={1}
					Size={new UDim2(1, 0, 0, this.props.ValueBars.size() * SidebarNamespace.VALUE_BAR_SIZE_Y)}
					LayoutOrder={1}
				>
					<uilistlayout
						Padding={new UDim(0, SidebarNamespace.PADDING)}
						FillDirection={"Vertical"}
						HorizontalAlignment={"Center"}
						SortOrder={"LayoutOrder"}
						VerticalAlignment={"Center"}
					/>
					{this.generateValueBars()}
				</frame>
				<frame
					Key={"Button Container"}
					BackgroundTransparency={1}
					Size={new UDim2(1, 0, 0, this.props.Buttons.size() * SidebarNamespace.VALUE_BAR_SIZE_Y)}
					LayoutOrder={2}
				>
					<uigridlayout
						CellPadding={new UDim2(0, 5, 0, 5)}
						CellSize={new UDim2(0, SidebarNamespace.VALUE_BAR_SIZE_Y, 0, SidebarNamespace.VALUE_BAR_SIZE_Y)}
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
		this.props.ValueBars.forEach((data: SidebarNamespace.IValuebarData, index: number) => {
			Elements.push(Roact.createElement(ValueBar, data));
		});
		return Elements;
	}
	private generateButtons(): Array<Element> {
		const Elements: Array<Element> = [];
		this.props.Buttons.forEach((data: SidebarNamespace.IButtonData, index: number) => {
			Elements.push(Roact.createElement(Button, data));
		});
		return Elements;
	}
}
