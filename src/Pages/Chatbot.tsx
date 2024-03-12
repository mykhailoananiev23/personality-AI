// Chatbot.tsx
import React, { useState, useEffect } from "react";
import Question from "../components/Question.tsx";
import Conclusion from "../components/Conclusion.tsx";

interface QuestionData {
  question: string;
  options: { answer: string; type: string }[];
}

const Chatbot: React.FC = () => {
  const [questions, setQuestions] = useState<QuestionData[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [questionId, setQuestionId] = useState<string>("");
  const [answeredQuestions, setAnsweredQuestions] = useState<
    { question: string; responses: string[] }[]
  >([]);
  const [showConclusion, setShowConclusion] = useState<boolean>(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("http://127.0.0.1:3001/get_question",{
          method: 'GET',
         headers:{
        'Content-Type': 'application/json'}});
        const data = await response.json();
        setQuestions(data.questions);
        setQuestionId(data.uuid);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, []);

  const handleAnswerSelect = (prebenType: string) => {
    const answeredQuestion = questions[currentQuestionIndex]?.question || "";
    const answeredResponse = prebenType;

    if (userAnswers.length === 4) {
      setUserAnswers((prevAnswers) => [...prevAnswers, prebenType]);
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);

      setAnsweredQuestions((prevQuestions) => [
        ...prevQuestions,
        { question: answeredQuestion, responses: [answeredResponse] },
      ]);
      handleTestCompletion();
    } else {
      setUserAnswers((prevAnswers) => [...prevAnswers, prebenType]);
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);

      setAnsweredQuestions((prevQuestions) => [
        ...prevQuestions,
        { question: answeredQuestion, responses: [answeredResponse] },
      ]);
    }
  };

  const handleTestCompletion = () => {
    setShowConclusion(true);
  };

  const resetTest = () => {
    // console.log("Resetting test.........................");
    // window.location.reload();
    // setQuestions([]);
    setUserAnswers([]);
    setAnsweredQuestions([]);
    setCurrentQuestionIndex(0);
    setShowConclusion(false);

    // Reset other states if necessary
  };

  return (
    <div>
      {!showConclusion ? (
        <Question
          questions={questions}
          question={questions[currentQuestionIndex]?.question}
          options={questions[currentQuestionIndex]?.options || []}
          onAnswerSelect={handleAnswerSelect}
          answeredQuestions={answeredQuestions}
        />
      ) : (
        <Conclusion userAnswers={userAnswers} questionId = {questionId} onStartAgain={resetTest} />
      )}
    </div>
  );
};

export default Chatbot;
