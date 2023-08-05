import Question from './Question'
import { questions } from './assets/constant'

import '../public/style.css'

const App = () => {
  return (
    <>
      <h1>Frequently Asked Questions</h1>
      <div className="container">
        <div className="questions">
          {questions.map((question) => (
            <Question key={question.id} question={question} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App