import Roact, { Component, createRef, Ref } from "@rbxts/roact";
import { rewardType } from "shared/Templates/QuestBase";
import QuestBox from "./QuestBox";

interface Props {}

interface State {
	absoluteContentSize: Vector2;
}

export default class QuestBind extends Component<Props, State> {
	uilistref: Ref<UIListLayout>;

	public static validateProps() {
		return [true] as unknown as LuaTuple<[boolean, string?]>;
	}

	constructor(props: Props) {
		super(props);
		this.uilistref = createRef();
		this.setState({ absoluteContentSize: Vector2.zero });
	}

	render() {
		return (
			<scrollingframe
				BackgroundTransparency={1}
				Position={new UDim2(0.01, 0, 0.075, 0)}
				Size={new UDim2(0.98, 0, 0.92, 0)}
				ScrollBarThickness={12}
				ScrollBarImageColor3={new Color3(0, 0, 0)}
				CanvasSize={new UDim2(0, 0, 0, this.state.absoluteContentSize.Y)}
			>
				<frame BackgroundTransparency={1} Position={new UDim2(0, 0, 0.005, 0)} Size={new UDim2(1, 0, 0.995, 0)}>
					<uilistlayout
						Padding={new UDim(0, 5)}
						FillDirection={"Vertical"}
						HorizontalAlignment={"Center"}
						SortOrder={"LayoutOrder"}
						VerticalAlignment={"Top"}
						Ref={this.uilistref}
					/>
					<QuestBox
						TextString={"test quest"}
						Completed={10}
						FinalCount={100}
						rewardType={rewardType.CASH}
						rewardConent={100}
					/>
				</frame>
			</scrollingframe>
		);
	}
	protected didMount(): void {
		this.uilistref
			.getValue()
			?.GetPropertyChangedSignal("AbsoluteContentSize")
			.Connect(() => this.setState({ absoluteContentSize: this.uilistref.getValue()!.AbsoluteContentSize }));
	}
}
