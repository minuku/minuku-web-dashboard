
import React from "react";
import { DropTarget } from 'react-dnd';
import * as Questions from './Questions'
import Body from './Body'
import List from './List'

class Questionnaire  extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      questions: []
    }
    this.buildQuestionnaire = this.buildQuestionnaire.bind(this)
  }
  createQuestion(type){
    const newQuestion = { type, props: {} }
    this.setState(prev => ({
      questions: [ ...prev.questions, newQuestion ],
      ...prev.questions
     }))
  }
  updateQuestion(order){
    const { questions } = this.state
    const updatedQuestions = [ ...questions ]
    return props => {
      updatedQuestions[order].props = { ...updatedQuestions[order].props, ...props }
      this.setState({ questions: updatedQuestions })
    }
  }
  buildQuestionnaire(){
    const { questions } = this.state
    const questionsComponents = questions.map((question, order) => {
      if(question.new){
        return null
      }
      else {
        switch(question.type){
          case 'SHORT_TEXT':
            return <Questions.ShortText
                { ...question.props }
                key={order}
                order={order}
                onChange={this.updateQuestion(order)}
              />
          case 'LONG_TEXT':
            return <Questions.LongText
                { ...question.props }
                key={order}
                order={order}
                onChange={this.updateQuestion(order)}
              />
          case 'MULTIPLE_CHOICE':
            return <Questions.MultipleChoice
                { ...question.props }
                key={order}
                order={order}
                onChange={this.updateQuestion(order)}
              />
          case 'MATRIX_QUESTIONS':
            return <Questions.MatrixQuestions
                { ...question.props }
                key={order}
                order={order}
                onChange={this.updateQuestion(order)}
              />
          case 'STATEMENT':
            return <Questions.Statement
                { ...question.props }
                key={order}
                order={order}
                onChange={this.updateQuestion(order)}
              />
          default:
            return null
        }
      }
    })
    return questionsComponents
  }
  render(){
    const { connectDropTarget } = this.props
    console.log(this.state.questions)
    return connectDropTarget(
      <div className="d-flex justify-content-center">
        <div className="px-4">
          <Body>
            {
              this.buildQuestionnaire()
            }
          </Body>
        </div>
        <div className="pt-4">
          <List/>
        </div>
      </div>
    )
  }
}

const type = 'QUESTION'
const spec = {
  drop(props, monitor, component){
    const item = monitor.getItem();
    component.createQuestion(item.type)
  }
}

function collect(connect, monitor){
  return {
    isOver: monitor.isOver(),
    connectDropTarget: connect.dropTarget(),
  }
}

export default DropTarget(type, spec, collect)(Questionnaire);
