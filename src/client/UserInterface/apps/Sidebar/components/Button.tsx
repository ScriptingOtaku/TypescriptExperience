import Roact, { Component } from "@rbxts/roact";
import { ChangePage } from "client/UserInterface/signals";
import Outline from "client/UserInterface/components/Outline";
import { SidebarNamespace } from "../../../Globals";
import Roundy from "client/UserInterface/components/Roundy";
import theme from "../../../theme.json";

interface State {}

export default class Button extends Component<SidebarNamespace.IButtonData, State> {
	public static validateProps() {
		return [true] as unknown as LuaTuple<[boolean, string?]>;
	}

	render() {
		return (
			<textbutton
				Text={tostring(this.props.page)}
				Event={{
					MouseButton1Click: () => ChangePage.Fire(this.props.page),
				}}
				BackgroundColor3={Color3.fromHex(theme.MainColor)}
			>
				<Outline />
				<Roundy />
			</textbutton>
		);
	}
}
