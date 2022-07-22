import Roact, { Element, PropsWithChildren } from "@rbxts/roact";
import { PagesNamespace } from "client/UserInterface/Globals";
import Quests from "../pages/Quests";

interface Props {
	page: PagesNamespace.Pages;
}

export default function page(props: PropsWithChildren<Props>) {
	return (
		<imagelabel
			Size={new UDim2(0, 100, 0, 100)}
			Position={new UDim2(0.5, 0, 0.5, 0)}
			AnchorPoint={new Vector2(0.5, 0.5)}
			Image={"rbxassetid://7462343062"}
		>
			{parsePages(props.page)}
		</imagelabel>
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
