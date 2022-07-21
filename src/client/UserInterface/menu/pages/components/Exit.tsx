import Roact from "@rbxts/roact";
import { ChangePage } from "client/UserInterface/signals";
import theme from "client/UserInterface/theme.json";

export default function Exit() {
	return (
		<textbutton
			AnchorPoint={new Vector2(1, 0)}
			Position={new UDim2(0.986, 0, 0.013, 0)}
			Size={new UDim2(0.072, 0, 0.2, 0)}
			ZIndex={4}
			Text={""}
			BackgroundColor3={new Color3(1, 1, 1)}
			Event={{ MouseButton1Click: () => ChangePage.Fire("random thing so it exits") }}
		>
			<uiaspectratioconstraint
				AspectRatio={1}
				AspectType={Enum.AspectType.FitWithinMaxSize}
				DominantAxis={Enum.DominantAxis.Width}
			/>
			<uicorner CornerRadius={new UDim(0.2, 0)} />
			<uigradient
				Rotation={90}
				Color={new ColorSequence(Color3.fromHex(theme.exitColor1), Color3.fromHex(theme.exitColor2))}
			/>
			<textlabel
				AnchorPoint={new Vector2(0.5, 0.5)}
				Position={new UDim2(0.5, 0, 0.5, 0)}
				Size={new UDim2(0.8, 0, 0.8, 0)}
				ZIndex={4}
				BackgroundTransparency={1}
				Text={"X"}
				TextColor3={new Color3(1, 1, 1)}
				TextScaled={true}
			/>
		</textbutton>
	);
}
