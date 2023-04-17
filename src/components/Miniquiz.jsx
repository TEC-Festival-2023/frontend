import { useState } from "react";

const Miniquiz = () => {
  const [questions, setQuestions] = useState([
    {
      question: "Tau ga brand parfum lokal yang pernah viral karena launching di luar negeri? Kalo tau coba tebak nama brandnya !",
      options: ["A. lorem ipsum1", "B. lorem ipsum2", "C. lorem ipsum3", "D. lorem ipsum4"],
      answer: "A. lorem ipsum1",
      selectedAnswer: null,
      isCorrect: null,
    },
    {
      question: "Tau ga brand parfum lokal yang pernah viral karena launching di luar negeri? Kalo tau coba tebak nama brandnya !",
      options: ["A. lorem ipsum1", "B. lorem ipsum2", "C. lorem ipsum3", "D. lorem ipsum4"],
      answer: "B. lorem ipsum2",
      selectedAnswer: null,
      isCorrect: null,
    },
    {
      question: "Tau ga brand parfum lokal yang pernah viral karena launching di luar negeri? Kalo tau coba tebak nama brandnya !",
      options: ["A. lorem ipsum1", "B. lorem ipsum2", "C. lorem ipsum3", "D. lorem ipsum4"],
      answer: "C. lorem ipsum3",
      selectedAnswer: null,
      isCorrect: null,
    },
    {
      question: "Tau ga brand parfum lokal yang pernah viral karena launching di luar negeri? Kalo tau coba tebak nama brandnya !",
      options: ["A. lorem ipsum1", "B. lorem ipsum2", "C. lorem ipsum3", "D. lorem ipsum4"],
      answer: "D. lorem ipsum4",
      selectedAnswer: null,
      isCorrect: null,
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (answer) => {
    const updatedQuestions = [...questions];
    const currentQuestion = updatedQuestions[currentIndex];

    // Check if the selected answer is correct
    const isCorrect = answer === currentQuestion.answer;

    // Update the selected answer and isCorrect properties of the current question
    currentQuestion.selectedAnswer = answer;
    currentQuestion.isCorrect = isCorrect;

    // Update the score if the answer is correct
    if (isCorrect) {
      setScore(score + 1);
    }

    setQuestions(updatedQuestions);
  };

  const handleNextQuestionClick = () => {
    if (currentIndex === questions.length - 1) {
      setShowScore(true);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="quiz-container">
      <div className="text-[#FFE99E] flex justify-center text-md min-[100px]:text-2xl min-[200px]:text-[15vw] min-[300px]:text-[10vw] min-[600px]:text-[7vw] font-poppins font-bold mt-4 mb-7 min-[500px]:mt-10 min-[500px]:mb-16 min-[1000px]:mt-16  min-[1000px]:mb-20 text-shadow-3px min-[500px]:text-shadow-5px min-[1000px]:text-shadow-7px ">MINI QUIZ</div>
      <div className="flex justify-center">
        <div className="bg-[#E26767] rounded-[3rem] w-[80%] sm:w-[40%]">
          {showScore ? (
            <div className="flex flex-col items-center justify-center font-poppins font-bold">
              <img src={'/assets/images/Logo.png'} className="w-12 h-12 rounded-full bg-white self-end mr-4 my-4" />
              <div>Your Score:</div>
              <div className="mb-7">{score} out of {questions.length}</div>
            </div>
          ) : (
            <div>
              <div className="flex flex-col justify-center font-poppins">
                <img src={'/assets/images/Logo.png'} className="w-7 h-7 min-[100px]:w-12 min-[100px]:h-12 sm:w-14 sm:h-14 mr-4  my-3 rounded-full bg-white self-end" />
                <div className="self-center font-bold text-center text-[0.4rem] min-[100px]:text-[0.5rem] min-[150px]:text-[0.7rem] min-[300px]:text-sm sm:text-[1rem] items-center px-3 bg-[#FFE99E] rounded-[1rem] w-[80%] h-[200px] flex flex-col justify-center"><div>{questions[currentIndex].question}</div></div>
                <div className="grid grid-cols-2 gap-3 mx-2 text-[0.3rem] min-[100px]:text-[0.5rem] min-[150px]:text-[0.7rem] min-[300px]:text-sm sm:text-[1rem] text-white font-bold mt-2">
                  {questions[currentIndex].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerClick(option)}
                      disabled={questions[currentIndex].selectedAnswer !== null}
                      className="items-start"
                    >
                      {option}
                      {questions[currentIndex].selectedAnswer === option && (
                        <span className={questions[currentIndex].isCorrect ? 'correct' : 'incorrect'}>
                          {questions[currentIndex].isCorrect ? <img src={'/assets/right-icon.png'} className="w-3 h-3 ml-2 inline" /> : <img src={'/assets/wrong-icon.png'} className="w-3 h-3 ml-2 inline" />}
                        </span>
                      )}
                    </button>
                  ))}
                </div>

                <br />
                <button onClick={handleNextQuestionClick} disabled={questions[currentIndex].selectedAnswer === null}
                  className="self-end mr-5 mb-5 bg-[#FFE99E] px-2 rounded-xl hover:bg-[#F8D660] hover:scale-110 font-bold text-[0.4rem] min-[100px]:text-[0.5rem] min-[150px]:text-[0.7rem] min-[300px]:text-sm sm:text-[1rem]">
                  Next
                </button>
              </div>

            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Miniquiz;

