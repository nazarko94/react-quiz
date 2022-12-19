import React, {Component} from 'react';
import { Routes, Route } from "react-router-dom";
import Layout from './hoc/Layout/Layout';
import Quiz from './containers/Quiz/Quiz';
import QuizCreator from './containers/QuizCreator/QuizCreator';
import QuizList from './containers/QuizList/QuizList';
import Auth from './containers/Auth/Auth';

class App extends Component {
  render() {
    return (
      <Layout>
        <Routes>
          <Route path='/quiz:id' element={<Quiz/>}/>
          <Route path='/quiz' element={<Auth/>}/>
          <Route path='/quiz-creator' element={<QuizCreator/>}/>
          <Route path='/' element={<QuizList/>}/>
        </Routes>
      </Layout>
    )
  }
}

export default App;