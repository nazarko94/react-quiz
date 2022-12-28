import axios from "axios";

export default axios.create({
  baseURL: 'https://react-quiz-mypractice-default-rtdb.europe-west1.firebasedatabase.app/'
})