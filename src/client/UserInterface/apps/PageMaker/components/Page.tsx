import Roact, { Element, PropsWithChildren } from "@rbxts/roact";
import { PagesNamespace } from "client/UserInterface/Globals";
import Quests from "../pages/Quests";
import theme from "../../../theme.json";
import TextOutline from "client/UserInterface/components/Outline";
import Topbar from "./Topbar";

interface Props {
	page: PagesNamespace.Pages;
}

export default function page(props: PropsWithChildren<Props>) {
	return (
		<frame
			AnchorPoint={new Vector2(0.5, 0.5)}
			Position={new UDim2(0.5, 0, 0.48, 0)}
			Size={new UDim2(0.3, 0, 0.6, 0)}
			BackgroundColor3={new Color3(1, 1, 1)}
		>
			<uilistlayout FillDirection={"Vertical"} SortOrder={"LayoutOrder"} VerticalAlignment={"Top"} />
			<uicorner CornerRadius={PagesNamespace.CORNER_RADIUS} />
			<Topbar page={props.page} />
			<frame
				Size={new UDim2(1, 0, 1, -1.5 * PagesNamespace.TOPBAR_SIZE_Y)}
				LayoutOrder={5}
				BackgroundTransparency={1}
			>
				{parsePages(props.page)}
			</frame>
		</frame>
	);
}

function parsePages(page: PagesNamespace.Pages): Element {
	switch (page) {
		case PagesNamespace.Pages.NONE:
			return <></>;
		case PagesNamespace.Pages.QUESTS:
			return <Quests />;
	}
}
