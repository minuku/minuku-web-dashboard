
import React from "react";

import * as Questions from './Questions'
import Body from './Body'
import List from './List'

const Questionnaire = () => (
  <div className="d-flex justify-content-center">
    <div className="px-4">
      <Body>
        <Questions.ShortText />
        <Questions.LongText />
        <Questions.MultipleChoice />
        <Questions.MatrixQuestions />
        <Questions.Statement />
      </Body>
    </div>
    <div className="pt-4">
      <List/>
    </div>
  </div>
)

export default Questionnaire