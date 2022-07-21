import Roact, { Component } from "@rbxts/roact";
import UIStroke from "client/UserInterface/components/UIStroke";
import theme from "client/UserInterface/theme.json";
import Exit from "../components/Exit";
import QuestBind from "./components/QuestBind";

interface Props {}

interface State {}

export default class Quests extends Component<Props, State> {
	public static validateProps() {
		return [true] as unknown as LuaTuple<[boolean, string?]>;
	}

	render() {
		return (
			<frame
				AnchorPoint={new Vector2(0.5, 0.5)}
				Position={new UDim2(0.5, 0, 0.48, 0)}
				Size={new UDim2(0.313, 0, 0.695, 0)}
				BackgroundColor3={new Color3(1, 1, 1)}
			>
				<uiaspectratioconstraint
					AspectRatio={0.8}
					AspectType={Enum.AspectType.FitWithinMaxSize}
					DominantAxis={Enum.DominantAxis.Width}
				/>
				<uicorner CornerRadius={new UDim(0.03, 0)} />
				<frame
					Key={"Topbar"}
					AnchorPoint={new Vector2(0.5, 0)}
					Position={new UDim2(0.5, 0, 0.005, 0)}
					Size={new UDim2(0.99, 0, 0.072, 0)}
					ZIndex={2}
					BackgroundColor3={Color3.fromHex(theme.MainColor)}
					BorderSizePixel={0}
				>
					<uicorner CornerRadius={new UDim(0.25, 0)} />
					<frame
						Key={"Occlusion"}
						BackgroundColor3={Color3.fromHex(theme.MainColor)}
						Position={new UDim2(0, 0, 0.5, 0)}
						Size={new UDim2(1, 0, 0.5, 0)}
						ZIndex={2}
						BorderSizePixel={0}
					>
						<uigradient
							Rotation={90}
							Color={new ColorSequence(new Color3(1, 1, 1), Color3.fromHex(theme.MainColor))}
						/>
					</frame>
				</frame>
				<QuestBind />
				<Exit />
				<textlabel
					Key={"Title"}
					BackgroundTransparency={1}
					Position={new UDim2(0.03, 0, 0.011, 0)}
					Size={new UDim2(0.9, 0, 0.057, 0)}
					ZIndex={4}
					Text={"Quests"}
					Font={"SourceSansBold"}
					TextScaled={true}
					TextColor3={new Color3(1, 1, 1)}
					TextXAlignment={"Left"}
				>
					<UIStroke />
				</textlabel>
			</frame>
		);
	}
}
