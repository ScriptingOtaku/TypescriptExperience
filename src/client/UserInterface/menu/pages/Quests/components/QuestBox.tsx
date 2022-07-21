import Roact, { PureComponent } from "@rbxts/roact";
import theme from "client/UserInterface/theme.json";
import { rewardType } from "shared/Templates/QuestBase";

interface Props {
	TextString: string;
	Completed: number;
	FinalCount: number;
	rewardType: rewardType;
	rewardConent: number;
}

export default class QuestBox extends PureComponent<Props> {
	public static validateProps() {
		return [true] as unknown as LuaTuple<[boolean, string?]>;
	}

	private icon(icon: rewardType) {
		switch (icon) {
			case 0:
				return "rbxassetid://8318604681";
			case 1:
				return "rbxassetid://8318604854";
			default:
				return "rbxassetid://8318604681";
		}
	}

	render() {
		return (
			<frame Size={new UDim2(0.85, 0, 0, 50)} BackgroundColor3={new Color3(1, 1, 1)}>
				<uicorner CornerRadius={new UDim(0.1, 0)} />
				<uistroke Color={Color3.fromHex(theme.darkThingColor)} />
				<textlabel
					Key={"Quest Info"}
					BackgroundTransparency={1}
					Position={new UDim2(0.021, 0, 0, 0)}
					Size={new UDim2(0.8, 0, 0.35, 0)}
					ZIndex={3}
					TextColor3={Color3.fromHex(theme.darkThingColor)}
					TextScaled={true}
					Font={"SourceSansBold"}
					TextXAlignment={"Left"}
					Text={this.props.TextString}
				/>
				<frame
					Key={"Progress Bar Back"}
					BackgroundColor3={Color3.fromHex(theme.darkThingColor)}
					Position={new UDim2(0.022, 0, 0.392, 0)}
					ZIndex={2}
					Size={new UDim2(0.954, 0, 0.204, 0)}
				>
					<uicorner CornerRadius={new UDim(0.5, 0)} />
					<uigradient
						Rotation={90}
						Color={new ColorSequence(new Color3(1, 1, 1), Color3.fromHex(theme.gray))}
					/>
					<frame
						Key={"Bar"}
						BackgroundColor3={Color3.fromHex(theme.progress)}
						Size={new UDim2(this.props.Completed / this.props.FinalCount, 0, 1, 0)}
						ZIndex={3}
					>
						<uicorner CornerRadius={new UDim(0.5, 0)} />
						<uigradient
							Rotation={90}
							Color={new ColorSequence(new Color3(1, 1, 1), Color3.fromHex(theme.gray))}
						/>
					</frame>
				</frame>
				<textlabel
					Key={"Progress Text"}
					BackgroundTransparency={1}
					Position={new UDim2(0.021, 0, 0.65, 0)}
					Size={new UDim2(0.132, 0, 0.27, 0)}
					ZIndex={3}
					TextColor3={Color3.fromHex(theme.darkThingColor)}
					TextScaled={true}
					Font={"SourceSansBold"}
					TextXAlignment={"Left"}
					Text={this.props.Completed + "/" + this.props.FinalCount}
				/>
				<textbutton Key={"Claim Button"} Visible={false}></textbutton>
				<textbutton
					Key={"Skip Button"}
					BackgroundColor3={Color3.fromHex(theme.darkThingColor)}
					TextColor3={new Color3(1, 1, 1)}
					Position={new UDim2(0.849, 0, 0.06, 0)}
					Size={new UDim2(0.132, 0, 0.296, 0)}
					ZIndex={2}
					Text={"Skip"}
					TextScaled={true}
					Font={"SourceSansBold"}
					Event={{ MouseButton1Click: () => print("Skip Button Clicked") }}
				>
					<uicorner CornerRadius={new UDim(0.4, 0)} />
				</textbutton>
				<imagelabel
					Key={"Reward Icon"}
					BackgroundTransparency={1}
					Image={this.icon(this.props.rewardType)}
					Position={new UDim2(0.921, 0, 0.5, 0)}
					Size={new UDim2(0.061, 0, 0.354, 0)}
					ZIndex={2}
				/>
				<textlabel
					Key={"Reward Text"}
					BackgroundTransparency={1}
					Position={new UDim2(0.789, 0, 0.6, 0)}
					Size={new UDim2(0.132, 0, 0.354, 0)}
					ZIndex={3}
					Text={tostring(this.props.rewardConent)}
					TextScaled={true}
					Font={"SourceSansBold"}
					TextColor3={Color3.fromHex(theme.progress)}
				/>
			</frame>
		);
	}
}
//new UDim2(0, 0, 0, 0)
