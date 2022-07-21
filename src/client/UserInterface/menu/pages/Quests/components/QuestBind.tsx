import Roact, { Component, createRef, Element, Ref } from "@rbxts/roact";
import { QuestBase, rewardType } from "shared/Templates/QuestBase";
import QuestBox from "./QuestBox";
import Remotes from "shared/remotes";

const DataRemotes = Remotes.Client.GetNamespace("Data");
const InformationRemotes = Remotes.Client.GetNamespace("Information");

interface Props {}

interface State {
	absoluteContentSize: Vector2;
	quests: Map<number, QuestBase>;
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

	private renderAllQuests(quests: Map<number, QuestBase>): Array<Element> {
		if (!quests) return [];
		const Array: Array<Element> = [];
		quests.forEach((value: QuestBase, key: number) => {
			Array.push(
				Roact.createElement(QuestBox, {
					TextString: value.questString,
					Completed: value.QuestCount,
					FinalCount: value.QuestFinish,
					rewardType: value.RewardType,
					rewardConent: value.RewardContent,
					questId: value.questId,
				}),
			);
		});
		return Array;
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
					{this.renderAllQuests(this.state.quests)}
				</frame>
			</scrollingframe>
		);
	}
	protected didMount(): void {
		this.uilistref
			.getValue()
			?.GetPropertyChangedSignal("AbsoluteContentSize")
			.Connect(() => this.setState({ absoluteContentSize: this.uilistref.getValue()!.AbsoluteContentSize }));
		InformationRemotes.Get("GetQuests")
			.CallServerAsync()
			.then((quests: Map<number, QuestBase> | undefined) => {
				if (quests !== undefined) {
					this.setState({ quests: quests });
				}
			})
			.catch();
		DataRemotes.OnEvent("QuestsChanged", (quests: Map<number, QuestBase>) =>
			this.setState({ quests: quests }),
		).catch();
	}
}
