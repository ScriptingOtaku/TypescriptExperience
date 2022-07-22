import Roact, { PropsWithChildren } from "@rbxts/roact";
import TextOutline from "client/UserInterface/components/TextOutline";
import { PagesNamespace } from "client/UserInterface/Globals";
import theme from "../../../theme.json";
import Exit from "./Exit";

interface Props {
	page: PagesNamespace.Pages;
}

export default function Topbar(props: PropsWithChildren<Props>) {
	return (
		<frame
			Size={new UDim2(1, 0, 0, PagesNamespace.TOPBAR_SIZE_Y)}
			BackgroundColor3={Color3.fromHex(theme.MainColor)}
		>
			<uicorner CornerRadius={PagesNamespace.CORNER_RADIUS} />
			<frame
				Size={new UDim2(1, 0, 0.5, 0)}
				AnchorPoint={new Vector2(0, 1)}
				Position={new UDim2(0, 0, 1, 0)}
				BackgroundColor3={Color3.fromHex(theme.MainColor)}
				BorderSizePixel={0}
			/>
			<Exit />
			<textlabel
				Key={"Title"}
				BackgroundTransparency={1}
				AnchorPoint={new Vector2(0.5, 0)}
				Position={new UDim2(0.5, 0, 0, 0)}
				Size={new UDim2(0.9, 0, 1, 0)}
				ZIndex={4}
				Text={parsePages(props.page)}
				Font={"SourceSansBold"}
				TextScaled={true}
				TextColor3={Color3.fromHex(theme.Background)}
				TextXAlignment={"Left"}
			>
				<TextOutline />
			</textlabel>
		</frame>
	);
}

function parsePages(page: PagesNamespace.Pages) {
	switch (page) {
		case PagesNamespace.Pages.QUESTS:
			return "QUESTS";
	}
}
