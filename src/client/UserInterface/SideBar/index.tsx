import Roact, { Component } from "@rbxts/roact";
import ButtonBind from "./components/ButtonBind";
import CurrencyBind from "./components/CurrencyBind";
export default class sidebarApp extends Component {
	render() {
		return (
			<>
				<CurrencyBind />
				<ButtonBind />
			</>
		);
	}
}
