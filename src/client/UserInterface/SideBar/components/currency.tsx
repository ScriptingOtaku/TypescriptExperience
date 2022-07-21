import Roact, { Component } from "@rbxts/roact";
import UIStroke from "client/UserInterface/components/UIStroke";
import theme from "client/UserInterface/theme.json";

interface Props {}

interface State {}

export default class currency extends Component<Props, State> {
	public static validateProps() {
		return [true] as unknown as LuaTuple<[boolean, string?]>;
	}

	render() {
		return (
			<frame AnchorPoint={new Vector2(0, 1)} BackgroundTransparency={1} Size={new UDim2(1, 0, 0.32, 0)}>
				<uiaspectratioconstraint
					AspectRatio={5.55}
					AspectType={Enum.AspectType.FitWithinMaxSize}
					DominantAxis={Enum.DominantAxis.Width}
				/>
				<imagebutton
					Key={"Buy Button"}
					AnchorPoint={new Vector2(1, 0.5)}
					Position={new UDim2(1, -15, 0.5, 0)}
					Size={new UDim2(1, -15, 1, -15)}
					SizeConstraint={Enum.SizeConstraint.RelativeYY}
					Image={"http://www.roblox.com/asset/?id=8287577918"}
					ZIndex={3}
					Event={{ MouseButton1Click: () => print("Buy Button Clicked") }}
					BackgroundTransparency={1}
				/>
				<imagelabel
					Key={"Background"}
					Size={new UDim2(1, 0, 1, 0)}
					Image={"rbxassetid://8309584191"}
					ImageColor3={Color3.fromHex(theme.MainColor)}
					BackgroundTransparency={1}
				/>
				<imagelabel
					Key={"Shading"}
					Size={new UDim2(1, 0, 1, 0)}
					Image={"rbxassetid://8309584191"}
					ZIndex={2}
					BackgroundTransparency={1}
				/>
				<textlabel
					Key={"ButtonText"}
					AnchorPoint={new Vector2(0, 0.5)}
					Position={new UDim2(0.1, 0, 0.5, 0)}
					Size={new UDim2(0.75, 0, 0.8, 0)}
					ZIndex={3}
					BackgroundTransparency={1}
					Font={Enum.Font.SourceSansBold}
					TextScaled={true}
					TextXAlignment={Enum.TextXAlignment.Left}
				>
					<UIStroke />
				</textlabel>
			</frame>
		);
	}
}
