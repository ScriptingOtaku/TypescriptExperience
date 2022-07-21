import Roact, { Component } from "@rbxts/roact";
import { ChangePage } from "../signals";
import { pages } from "./pages";

interface Props {}

interface State {
	currentPage: string;
}

export default class index extends Component<Props, State> {
	public static validateProps() {
		return [true] as unknown as LuaTuple<[boolean, string?]>;
	}

	render() {
		const page = pages.get(this.state.currentPage);
		if (page !== undefined) return page;
	}

	protected didMount(): void {
		ChangePage.Connect((page: string) =>
			this.state.currentPage !== page
				? this.setState({ currentPage: page })
				: this.setState({ currentPage: "NONE" }),
		);
	}
}
