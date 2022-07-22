import Roact, { None, PureComponent } from "@rbxts/roact";
import { PagesNamespace } from "client/UserInterface/Globals";
import { ChangePage } from "client/UserInterface/signals";
import Page from "./components/Page";

interface Props {}

interface State {
	page: PagesNamespace.Pages;
}

export default class PageMaker extends PureComponent<Props, State> {
	constructor(props: Props) {
		super(props);
		this.setState({ page: PagesNamespace.Pages.NONE });
	}

	render() {
		if (this.state.page !== PagesNamespace.Pages.NONE) return <Page page={this.state.page} />;
	}

	protected didMount(): void {
		ChangePage.Connect((newPage: PagesNamespace.Pages) =>
			this.state.page !== newPage
				? this.setState({ page: newPage })
				: this.setState({ page: PagesNamespace.Pages.NONE }),
		);
	}
}
