import React from 'react'
import './ActiveQuiz.css';
import classNames from 'classnames';
import AnswersList from './AnswersList/AnswersList'

const ActiveQuiz = props => {
  return (
    <div className={classNames('activeQuiz')}>
      <p className={classNames('question')}>
      <span>
        <strong>{props.answerNumber}.</strong>&nbsp;
        {props.question}
      </span>

        <small>{props.answerNumber} of { props.quizLength }</small>
      </p>

      <AnswersList
        state={props.state}
        answers={props.answers}
        onAnswerClick={props.onAnswerClick}
      />
    </div>
  )
}

export default ActiveQuiz