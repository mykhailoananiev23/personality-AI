// Question.tsx
import React, { useState, useEffect, useRef } from "react";
import "./Question.css";
import { FaArrowDown } from "react-icons/fa";
const Picture1 = require("../assets/Picture1.png");
interface QuestionData {
  [x: string]: any;
  question: string;
  options: { answer: string; type: string }[];
}
interface QuestionProps {
  questions: QuestionData[],
  question: string;
  options: { answer: string; type: string }[];
  onAnswerSelect: (prebenType: string) => void;
  answeredQuestions: { question: string; responses: string[] }[];
}

const Question: React.FC<QuestionProps> = ({
  questions,
  question,
  options,
  onAnswerSelect,
  answeredQuestions,
}) => {


  // const [prevQuestions, setPreQuestions] = useState<QuestionData[]>([]);
  // useEffect(() => {
  //   const fetchQuestions = async () => {
  //     try {
  //       const response = await fetch(
  //         "http://mkaiinnomind.pythonanywhere.com/get_question"
  //       );
  //       const data = await response.json();
  //       setPreQuestions(data.questions);
  //     } catch (error) {
  //       console.error("Error fetching questions:", error);
  //     }
  //   };

  //   fetchQuestions();
  // }, [question]);
  const [typedText, setTypedText] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isQuestionTyped, setIsQuestionTyped] = useState(false);
   const [showNewMessage, setShowNewMessage] = useState(false);
     const [showTypingIndicator, setShowTypingIndicator] = useState(true);
       const optionsRef = useRef<HTMLDivElement>(null);
       const optionsRef1 = useRef<HTMLDivElement>(null);
       
  // const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    let isMounted = true;
    const pic1Element = document.querySelector(".pic1");
    if (pic1Element) {
      pic1Element.classList.add("fade-in-pic1");
    }
    const optionsObserver1 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && isMounted) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );
    if (optionsRef1.current) {
      optionsObserver1.observe(optionsRef1.current);
    }
    // Intersection Observer to detect when the options come into view
    const optionsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && isMounted) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    
    

    const typeText = async () => {
      const latestElement = document.getElementById("latestElementId");
      if (latestElement) {
        latestElement.scrollIntoView({ behavior: "smooth" });
        setShowNewMessage(false);
      }
      setShowTypingIndicator(true);
      await new Promise((resolve) => setTimeout(resolve, 3000));
      if (question?.length>0 && isMounted) {
        setShowTypingIndicator(false);
      }
      for (let i = 0; i < question?.length; i++) {
        if (!isMounted) return; // Prevent state update if unmounted
        setTypedText((prevText) => prevText + question[i]);
        await new Promise((resolve) => setTimeout(resolve, 30));
      }
      if (isMounted) {
        setIsQuestionTyped(true);
        setShowNewMessage(true);
        const latestElement = document.getElementById("latestElementId");
        if (latestElement) {
          latestElement.scrollIntoView({ behavior: "smooth" });
          setShowNewMessage(false);
          
        }
      }
    };
    typeText();
    // console.log("prevqq : "+ prevQuestions.toString());
    return () => {
      isMounted = false;
      setTypedText("");
      setIsQuestionTyped(false);
      setShowNewMessage(false);
      if (optionsRef.current) {
        optionsObserver.unobserve(optionsRef.current);
      }
      if (optionsRef1.current) {
        optionsObserver1.unobserve(optionsRef1.current);
      }
    };
  }, [question]);

  const handleAnswerClick = (answer: string, type: string) => {
    setSelectedAnswer(answer);
    onAnswerSelect(type);
      setTypedText("");
    setIsQuestionTyped(false);
    // setShowNewMessage(true);
  };
  const handleScrollToLatest = () => {
    // Scroll to the latest message or question
    // You can use a reference or an ID to identify the latest element and scroll to it
    const latestElement = document.getElementById("latestElementId");
    if (latestElement) {
      latestElement.scrollIntoView({ behavior: "smooth" });
      setShowNewMessage(false);
    }
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column" }}
      className="allofscreen"
    >
      <div
        style={{
          display: "block",
          marginBottom: "50px",
          // marginLeft: "50px",
          // marginRight: "50px",
          marginTop: "10px",
        }}
      >
        {answeredQuestions?.length > 0 && (
          <div style={{ marginTop: "5px" }}>
            {/* <p>
            <strong>Previous Questions:</strong>
          </p> */}
            {answeredQuestions.map((q, qIndex) => (
              <div key={qIndex}>
                <div className="beforeul">
                  <div className="pic">
                    <img src={Picture1} alt="pic1" className="image" />
                    <p
                      className="triangle-isosceles"
                    >
                      {q.question}
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    marginTop: "-200px",
                  }}
                  className="ulanswer"
                >
                  {questions
                    .filter((p: any) => {
                      // console.log("Filtered question:", p.question);
                      // console.log("Current question:", q.question);
                      return p.question === q.question;
                    })
                    .map((p: any, pindex: any) =>
                      p.options.map((choice: any, index: any) => {
                        // console.log("Choice.answer:", choice.answer);
                        // console.log("q.responses:", q.responses);
                        return (
                          <button
                            key={index}
                            className={
                              q.responses.some(
                                (choice2) => choice2 === choice.type
                              )
                                ? "selected"
                                : "answered-button"
                            }
                          >
                            <span className="character">
                              {String.fromCharCode(65 + index)}
                            </span>
                            <span className="answer-text">{choice.answer}</span>
                          </button>
                        );
                      })
                    )}

                  {/* {q.responses.map((choice, index) => (
                  <li
                    key={index}
                    className={
                      q.responses[q.responses.length - 1] === choice
                        ? "selected"
                        : "answered-button"
                    }
                  >
                    {choice}
                  </li>
                ))} */}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div
        // ref={optionsRef1}
        id="latestElementId"
        style={{
          display: "block",
          marginBottom: "50px",
          // marginLeft: "50px",
          // marginRight: "50px",
          // marginTop: "-100px",
        }}
      >
        <div className="pic1" ref={optionsRef1}>
          <img src={Picture1} alt="pic1" className="image1" />
          <div
            // id="latestElementId"
            className="triangle-isosceles"
          >
            {showTypingIndicator && (
              <div className="typingIndicatorContainer">
                <div className="typingIndicatorBubble">
                  <div className="typingIndicatorBubbleDot"></div>
                  <div className="typingIndicatorBubbleDot"></div>
                  <div className="typingIndicatorBubbleDot"></div>
                </div>
              </div>
            )}
            {typedText}
          </div>
        </div>
        <div
          ref={optionsRef}
          style={{ marginTop: "-100px" }}
          className="choice"
        >
          {isQuestionTyped &&
            options.map((option, index) => (
              <button
                // ref={optionsRef}
                key={index}
                className={`answer-button ${
                  selectedAnswer === option.answer ? "selected" : ""
                } fade-in`}
                onClick={() => handleAnswerClick(option.answer, option.type)}
              >
                <span className="character">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="answer-text">
                {option.answer}
                </span>
              </button>
            ))}
        </div>
      </div>
      {/* {showNewMessage && (
        <button className="floating-button" onClick={handleScrollToLatest}>
          <FaArrowDown />
          <span role="img" aria-label="down arrow"></span> Show New Message
        </button>
      )} */}
    </div>
  );
};

export default Question;
