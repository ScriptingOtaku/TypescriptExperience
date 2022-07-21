import Roact, { Component } from "@rbxts/roact";
import Button from "./components/button";
import Currency from "./components/currency";

export default class sidebarApp extends Component {
	render() {
		return (
			<>
				<Button index={2} icon={"rbxassetid://8368486930"} />
				<Currency />
			</>
		);
	}
}
