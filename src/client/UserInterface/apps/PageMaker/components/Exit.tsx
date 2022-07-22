import Roact from "@rbxts/roact";
import { ChangePage } from "client/UserInterface/signals";
import theme from "client/UserInterface/theme.json";

export default function Exit() {
	return (
		<textbutton
			AnchorPoint={new Vector2(1, 0.5)}
			Position={new UDim2(1, -15, 0.5, 0)}
			Size={new UDim2(0.8, 0, 0.8, 0)}
			SizeConstraint={"RelativeYY"}
			ZIndex={4}
			Text={""}
			BackgroundColor3={Color3.fromHex(theme.Exit)}
			Event={{ MouseButton1Click: () => ChangePage.Fire(0) }}
		>
			<uicorner CornerRadius={new UDim(1, 0)} />
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
