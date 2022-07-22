import Roact from "@rbxts/roact";
import theme from "../theme.json";

export default function TextOutline() {
	return (
		<uistroke
			ApplyStrokeMode={Enum.ApplyStrokeMode.Border}
			Color={Color3.fromHex(theme.White)}
			LineJoinMode={Enum.LineJoinMode.Round}
			Thickness={2.5}
		/>
	);
}
