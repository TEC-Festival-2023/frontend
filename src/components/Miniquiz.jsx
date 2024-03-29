import { useState } from "react";
import Cookies from "js-cookie";

const Miniquiz = () => {
  const [questions, setQuestions] = useState([
    {
      question: "Tau ga sih bisnis itu apa?",
      options: [
        "Usaha komersial dalam dunia perdagangan",
        "Usaha",
        "Usaha komersial",
        "Usaha non komersial",
      ],
      answer: "Usaha komersial dalam dunia perdagangan",
      selectedAnswer: null,
      isCorrect: null,
    },
    {
      question: "Kalo inovasi tau ga artinya apa?",
      options: [
        "Peningkatan",
        "Pengenalan hal baru",
        "Pendewasaan",
        "Pengenalan",
      ],
      answer: "Pengenalan hal baru",
      selectedAnswer: null,
      isCorrect: null,
    },
    {
      question: "Perlu ga sih inovasi dalam bisnis?",
      options: ["Perlu", "Perlu banget", "Perlu aja", "Gak perlu"],
      answer: "Perlu banget",
      selectedAnswer: null,
      isCorrect: null,
    },
    {
      question: "Inovasi itu bisa berbentuk apa saja?",
      options: ["Proses", "Layanan", "Produk", "Semua benar"],
      answer: "Semua benar",
      selectedAnswer: null,
      isCorrect: null,
    },
    {
      question:
        "Tau ga brand parfum lokal yang pernah viral karena launching di luar negeri? Kalau tau, coba tebak nama brandnya!",
      options: ["HMNS", "Kahf", "Onix", "Oullu"],
      answer: "HMNS",
      selectedAnswer: null,
      isCorrect: null,
    },
  ]);

  const [code, setCode] = useState(Cookies.get("quizCompleted"));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(code ? true : false);
  const expirationDate = new Date();
  expirationDate.setFullYear(expirationDate.getFullYear() + 1); // Set expiration date to one year from now

  const handleAnswerClick = (answer) => {
    const updatedQuestions = [...questions];
    const currentQuestion = updatedQuestions[currentIndex];

    // Update the selected answer and isCorrect properties of the current question
    currentQuestion.selectedAnswer = answer;

    setQuestions(updatedQuestions);
  };

  const handleNextQuestionClick = (question) => {
    // Check if the selected answer is correct
    const isCorrect = question.answer === question.selectedAnswer;
    // Update the score if the answer is correct
    question.isCorrect = isCorrect;
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentIndex === questions.length - 1) {
      setShowScore(true);
      if (isCorrect) {
        setCode(score + 1 === questions.length ? "UFGSNN" : "GBCKOS");
        Cookies.set(
          "quizCompleted",
          score + 1 === questions.length ? "UFGSNN" : "GBCKOS",
          {
            path: "/",
            expires: expirationDate,
          }
        );
      } else {
        setCode(score === questions.length ? "UFGSNN" : "GBCKOS");
        Cookies.set(
          "quizCompleted",
          score === questions.length ? "UFGSNN" : "GBCKOS",
          {
            path: "/",
            expires: expirationDate,
          }
        );
      }
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div data-aos="zoom-in" className="">
      <div className="text-[#FFE99E] flex justify-center text-3xl md:text-4xl lg:text-7xl font-poppins font-bold mt-4 mb-7 text-shadow-3px">
        Mini Quiz
      </div>
      <div className="flex justify-center">
        <div className="bg-[#E26767] rounded-3xl max-w-[1250px] w-4/5">
          <div className="flex flex-col items-center justify-center font-poppins">
            <img
              src={"/assets/images/Logo.png"}
              className="w-6 h-6 md:w-12 md:h-12 m-3 rounded-full bg-white self-end"
              alt="logo"
            />
            {showScore ? (
              <div className="text-center text-white md:text-xl">
                {currentIndex !== 0 && (
                  <>
                    <div>Your Score:</div>

                    <div className="mb-7 font-bold">
                      {score} out of {questions.length}
                    </div>
                  </>
                )}
                <h1 className="">
                  Screenshot this code and upload it to RSVP form to get your
                  prize!
                </h1>
                <p className="mb-7 font-bold">{code}</p>
              </div>
            ) : (
              <>
                <div className="self-center font-bold text-center text-sm md:text-xl lg:text-2xl items-center px-3 bg-[#FFE99E] rounded-xl w-[80%] h-[100px] md:h-[200px] flex flex-col justify-center">
                  <div>{questions[currentIndex].question}</div>
                </div>
                <div className="flex flex-col text-white font-bold mt-6 w-[80%] text-xs md:text-sm lg:text-base gap-2">
                  {questions[currentIndex].options.map((option, index) => (
                    <>
                      <div
                        key={index}
                        className="text-left flex items-center gap-2"
                      >
                        <input
                          type="radio"
                          value={option}
                          name="gender"
                          checked={
                            questions[currentIndex].selectedAnswer === option
                          }
                          onChange={() => handleAnswerClick(option)}
                        />
                        {option}
                        {/* {questions[currentIndex].selectedAnswer === option && (
                        <span
                          className={
                            questions[currentIndex].isCorrect
                              ? "correct"
                              : "incorrect"
                          }
                        >
                          {questions[currentIndex].isCorrect ? (
                            <img
                              src={"/assets/right-icon.png"}
                              className="w-3 h-3 ml-2 inline"
                            />
                          ) : (
                            <img
                              src={"/assets/wrong-icon.png"}
                              className="w-3 h-3 ml-2 inline"
                            />
                          )}
                        </span>
                      )} */}
                      </div>
                    </>
                  ))}
                </div>

                <br />
                <button
                  onClick={() =>
                    handleNextQuestionClick(questions[currentIndex])
                  }
                  disabled={questions[currentIndex].selectedAnswer === null}
                  className="cursor-pointer self-end mr-5 mb-5 bg-[#FFE99E] rounded-xl hover:bg-[#F8D660] hover:scale-110 font-bold px-3 py-1 text-xs md:text-base lg:text-xl"
                >
                  Next
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Miniquiz;
