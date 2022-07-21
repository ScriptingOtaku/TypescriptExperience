import Roact, { Component } from "@rbxts/roact";
import UIStroke from "client/UserInterface/components/UIStroke";
import theme from "client/UserInterface/theme.json";
import Remotes from "shared/remotes";
import { Currencies } from "shared/Templates/PlayerBase";

const DataRemotes = Remotes.Client.GetNamespace("Data");

enum icons {
	cash,
	diamond,
}
interface Props {
	index: number;
	icon: icons;
}

interface State {
	value: number;
}

export default class Currency extends Component<Props, State> {
	public static validateProps() {
		return [true] as unknown as LuaTuple<[boolean, string?]>;
	}

	constructor(props: Props) {
		super(props);
		this.setState({ value: 0 });
	}

	render() {
		const parseIcon = function (icon: icons): string {
			switch (icon) {
				case 0:
					return "rbxassetid://8287578901";
				case 1:
					return "rbxassetid://8287577758";
				default:
					return "rbxassetid://8287578901";
			}
		};
		const iconId = parseIcon(this.props.icon);

		return (
			<frame
				AnchorPoint={new Vector2(0, 1)}
				BackgroundTransparency={1}
				Position={new UDim2(0.01, 0, 0.495, 0)}
				Size={new UDim2(1, 0, 0.32, 0)}
				LayoutOrder={this.props.index}
			>
				<uiaspectratioconstraint
					AspectRatio={5.55}
					AspectType={Enum.AspectType.FitWithinMaxSize}
					DominantAxis={Enum.DominantAxis.Width}
				/>
				<imagebutton
					Key={"Buy Button"}
					AnchorPoint={new Vector2(1, 0.5)}
					Position={new UDim2(0.972, 0, 0.5, 0)}
					Size={new UDim2(0.2, 0, 0.75, 0)}
					Image={"http://www.roblox.com/asset/?id=8287577918"}
					ZIndex={3}
					Event={{ MouseButton1Click: () => print("Buy Button Clicked") }}
					BackgroundTransparency={1}
				>
					<uiaspectratioconstraint
						AspectRatio={1}
						AspectType={Enum.AspectType.FitWithinMaxSize}
						DominantAxis={Enum.DominantAxis.Width}
					/>
				</imagebutton>
				<imagelabel
					Key={"Background"}
					Size={new UDim2(1, 0, 1, 0)}
					Image={"rbxassetid://8309584191"}
					ImageColor3={Color3.fromHex(theme.MainColor)}
					BackgroundTransparency={1}
				/>
				<imagelabel
					Key={"Shading"}
					Size={new UDim2(1, 0, 1, 0)}
					Image={iconId}
					ZIndex={2}
					BackgroundTransparency={1}
				/>
				<textlabel
					Key={"ButtonText"}
					AnchorPoint={new Vector2(0, 0.5)}
					Position={new UDim2(0.1, 0, 0.5, 0)}
					Size={new UDim2(0.75, 0, 0.8, 0)}
					ZIndex={3}
					BackgroundTransparency={1}
					Font={Enum.Font.SourceSansBold}
					TextScaled={true}
					Text={tostring(this.state.value)}
					TextXAlignment={Enum.TextXAlignment.Left}
					TextColor3={new Color3(1, 1, 1)}
				>
					<UIStroke />
				</textlabel>
			</frame>
		);
	}

	protected didMount(): void {
		DataRemotes.OnEvent("CurrencyChanged", (currency: Currencies) =>
			this.setState({ value: this.props.icon === 0 ? currency.cash : currency.diamonds }),
		).catch((err: unknown) => print(tostring(err)));
	}
}
