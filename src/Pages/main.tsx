import React, { useState } from "react";
import Chatbot from "./Chatbot.tsx";
import PrebenTrophe3 from "../components/PrebenTrophe3.tsx";
import "./main.css"
import PrebenStart from "../components/PrebenStart.tsx";

const Main: React.FC = () => {
  const [showChatbot, setShowChatbot] = useState<boolean>(false);

  const handleStartTest = () => {
    setShowChatbot(true);
  };

  return (
    <div>
      {showChatbot ? (
        <Chatbot />
      ) : (
        <div style={{ color: "white" }} className="container">
          <h1 className="h1 home">Er du klar?</h1>
          <h3 className="h3">Find din indre Preben type</h3>
          <button
            onClick={handleStartTest}
            className="btn1"
            style={{
              backgroundColor: "#4caf50",
              width: "140px",
              color: "#fff",
              marginTop: "50px",
              padding: "12px",
              borderRadius: "10px",
              fontSize: "32px",
              border: "1px solid #4caf50",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#45a049")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#4caf50")
            }
          >
            Start
          </button>
          <div className="pic home">
            <PrebenStart
              className="image4"
            />
            {/* <img src="assets/images/PrebenStart.svg" width={600} height={400} style={{marginTop:"9rem", display:"block", marginLeft:"30%"}} alt="Description of the image"/> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
