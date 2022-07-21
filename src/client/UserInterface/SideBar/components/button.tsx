import Roact, { Component } from "@rbxts/roact";
import theme from "client/UserInterface/theme.json";

interface Props {
	index: number;
	icon: string;
}

interface State {
	hovering: boolean;
}

export default class Button extends Component<Props, State> {
	public static validateProps() {
		return [true] as unknown as LuaTuple<[boolean, string?]>;
	}

	render() {
		return (
			<textbutton
				Position={new UDim2(0, 13.37, 0, 395.5)}
				LayoutOrder={this.props.index}
				Size={new UDim2(0.25, 0, 1, 0)}
				BackgroundTransparency={1}
				Text={""}
				Event={{
					MouseButton1Click: () => print("Quest Button Clicked"),
					MouseEnter: () => this.setState({ hovering: true }),
					MouseLeave: () => this.setState({ hovering: false }),
				}}
			>
				<uiaspectratioconstraint
					AspectRatio={1}
					AspectType={Enum.AspectType.FitWithinMaxSize}
					DominantAxis={Enum.DominantAxis.Width}
				/>
				<imagelabel
					Key={"Background"}
					Size={new UDim2(1, 0, 1, 0)}
					Image={"rbxassetid://8309584354"}
					ImageColor3={Color3.fromHex(theme.MainColor)}
					BackgroundTransparency={1}
				/>
				<imagelabel
					Key={"Hover"}
					Size={new UDim2(1, 0, 1, 0)}
					Image={"rbxassetid://8309584354"}
					ImageColor3={new Color3(0, 0, 0)}
					ImageTransparency={theme.hoverTransparency}
					BackgroundTransparency={1}
					Visible={this.state.hovering}
					ZIndex={3}
				/>
				<imagelabel
					Key={"Icon"}
					Size={new UDim2(1, 0, 1, 0)}
					Image={this.props.icon}
					BackgroundTransparency={1}
					ZIndex={4}
				/>
				<imagelabel
					Key={"Shading"}
					Size={new UDim2(1, 0, 1, 0)}
					Image={"rbxassetid://8287578429"}
					BackgroundTransparency={1}
					ZIndex={2}
				/>
			</textbutton>
		);
	}
	protected didMount(): void {
		this.setState({ hovering: false });
	}
}
