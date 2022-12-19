import React, { Component } from 'react';
import './QuizList.css';
import {NavLink} from 'react-router-dom';

export default class QuizList extends Component {
  renderQuizes() {
    return[1, 2, 3].map((quiz, index) => {
      return (
        <li
          key={index}
        >
          <NavLink
            to={'/quiz' + quiz}
          >
            Test {quiz}
          </NavLink>
        </li>
      )
    })
  }

  render() {
    return (
      <div className='quizList'>
        <div>
          <h1>List of quizes</h1>
          <ul>
            {this.renderQuizes()}
          </ul>
        </div>
      </div>
    )
  }
};
