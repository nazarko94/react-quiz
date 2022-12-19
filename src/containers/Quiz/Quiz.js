import React, {Component} from 'react'
import classNames from 'classnames';
import './Quiz.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';

class Quiz extends Component {
  state = {
    results: {},
    isFinished: false,
    activeQuestion: 0,
    answerState: null, // { [id]: 'success' 'error' }
    quiz: [
      {
        question: 'What is React ?',
        rightAnswerId: 3,
        id: 1,
        answers: [
          {text: 'program language', id: 1},
          {text: 'javascript framework', id: 2},
          {text: 'javascript library', id: 3},
          {text: 'browser extentsion', id: 4}
        ]
      },
      {
        question: 'When did come out ES6 ?',
        rightAnswerId: 2,
        id: 2,
        answers: [
          {text: '2012', id: 1},
          {text: '2015', id: 2},
          {text: '2019', id: 3},
          {text: '2022', id: 4}
        ]
      }
    ]
  }

  onAnswerClickHandler = answerId => {
    if(this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0];
      if (this.state.answerState[key] === 'success') {
        return;
      }
    }
    const question = this.state.quiz[this.state.activeQuestion];
    const results = this.state.results;

    if (question.rightAnswerId === answerId) {
      if (!results[question.id]) {
        results[question.id] = 'success';
      }
      this.setState({
        answerState: {[answerId]: 'success'}
      })

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({
            isFinished: true,
          })
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          })
        }

        window.clearTimeout(timeout)
      }, 1000)


    } else {
      results[question.id] = 'error';
      this.setState({
        answerState: {[answerId]: 'error'},
        results: results
      })
    }
  }

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }

  onRetryHandler = () => {
    this.setState({
      results: {},
      isFinished: false,
      activeQuestion: 0,
      answerState: null,
    })
  }

  render() {
    return (
      <div className={classNames('quiz')}>
        <div className={classNames('quizWrapper')}>
          <h1>Answer the questions</h1>

          {
            this.state.isFinished
            ? <FinishedQuiz
              results={this.state.results}
              quiz={this.state.quiz}
              onRetry={this.onRetryHandler}
            />
            : <ActiveQuiz
            answers={this.state.quiz[this.state.activeQuestion].answers}
            question={this.state.quiz[this.state.activeQuestion].question}
            onAnswerClick={this.onAnswerClickHandler}
            quizLength={this.state.quiz.length}
            answerNumber={this.state.activeQuestion + 1}
            state={this.state.answerState}
          />
          }
        </div>
      </div>
    )
  }
}


export default Quiz