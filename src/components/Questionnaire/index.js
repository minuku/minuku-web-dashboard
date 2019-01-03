import React from "react";
import { DropTarget } from "react-dnd";

import * as Questions from "./Questions";
import Body from "./Body";
import List from "./List";

class Questionnaire extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      questions: []
    };
    this.buildQuestionnaire = this.buildQuestionnaire.bind(this);
    this.submit = this.submit.bind(this);
    this.body = React.createRef();
  }
  componentDidUpdate(prevProps) {
    const { data } = this.props;
    if (prevProps.data !== data && data) {
      this.setState({
        title: data.questionnaireName,
        questions: data.questionnaireContent
      });
    }
  }
  submit() {
    const { submit } = this.props;
    const { title, questions } = this.state;
    submit({
      questionnaireName: title,
      questionnaireType: "questionnaire",
      questionnaireContent: questions
    });
  }
  createQuestion(type) {
    const newQuestion = { type, props: {} };
    this.setState(prev => ({
      questions: [...prev.questions, newQuestion],
      ...prev.questions
    }));
  }
  updateQuestion(order) {
    const { questions } = this.state;
    const updatedQuestions = [...questions];
    return props => {
      if (props !== null) {
        updatedQuestions[order].props = {
          ...updatedQuestions[order].props,
          ...props
        };
      } else {
        updatedQuestions.splice(order, 1);
      }
      this.setState({ questions: updatedQuestions });
    };
  }
  buildQuestionnaire() {
    const { questions } = this.state;
    const questionsComponents = questions.map((question, order) => {
      if (question.new) {
        return null;
      } else {
        switch (question.type) {
          case "SHORT_TEXT":
            return (
              <Questions.ShortText
                {...question.props}
                key={order}
                order={order}
                onChange={this.updateQuestion(order)}
              />
            );
          case "LONG_TEXT":
            return (
              <Questions.LongText
                {...question.props}
                key={order}
                order={order}
                onChange={this.updateQuestion(order)}
              />
            );
          case "MULTIPLE_CHOICE":
            return (
              <Questions.MultipleChoice
                {...question.props}
                key={order}
                order={order}
                onChange={this.updateQuestion(order)}
              />
            );
          case "MATRIX_QUESTIONS":
            return (
              <Questions.MatrixQuestions
                {...question.props}
                key={order}
                order={order}
                onChange={this.updateQuestion(order)}
              />
            );
          case "STATEMENT":
            return (
              <Questions.Statement
                {...question.props}
                key={order}
                order={order}
                onChange={this.updateQuestion(order)}
              />
            );
          default:
            return null;
        }
      }
    });
    return questionsComponents;
  }
  render() {
    const { connectDropTarget, isNew } = this.props;
    const { title, questions } = this.state;
    return connectDropTarget(
      <div className="d-flex justify-content-center">
        <div className="px-4">
          <Body
            ref={this.body}
            title={title}
            setName={e => this.setState({ title: e.target.value })}
            submit={this.submit}
            isNew={isNew}
          >
            {questions && questions.length ? (
              this.buildQuestionnaire()
            ) : (
              <div className="mt-3">
                Drag & Drop questions from questions-list to here.
              </div>
            )}
          </Body>
        </div>
        <div className="pt-3">
          <List />
        </div>
      </div>
    );
  }
}

const type = "QUESTION";
const spec = {
  drop(props, monitor, component) {
    const item = monitor.getItem();
    component.createQuestion(item.type);
  }
};

function collect(connect, monitor) {
  return {
    isOver: monitor.isOver(),
    connectDropTarget: connect.dropTarget()
  };
}

export default DropTarget(type, spec, collect)(Questionnaire);
