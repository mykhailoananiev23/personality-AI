// Conclusion.tsx
import React, { useState, useEffect } from 'react';
import './css/thinking.css';
import './css/conclusion.css';
import TænkePreben from "../components/TænkePreben.tsx";
const ThinkingMan = require("../assets/TænkePreben1.png");
// import RegistrationForm from './register';




const PrebenConclusions = {
  "PytPreben": {
    text: "Baseret på dine svar ser det ud til, at du har en Pyt-Preben personlighedstype. Du håndterer livets udfordringer med ro og positivitet. Din tilgang er afslappet, og du fokuserer på det positive i selv stressede situationer. Kreativitet og spontanitet er vigtige værdier for dig, og du ser fejl som en naturlig del af livet, der kan løses med en positiv indstilling.",
     img: "assets/images/PrebenTrophe0.svg"
  },
  "PerfektionistPreben": {
    text: "Efter at have analyseret dine svar, ser det ud til, at du har en Perfektionist-Preben personlighedstype. Du stræber efter perfektion og har en grundig tilgang til dine opgaver. Fejl og mangler irriterer dig, og du arbejder hårdt for at opnå høje standarder. Dine præstationsmål er vigtige, og du er ikke bange for at tage ansvar for dine handlinger.",
    img: "assets/images/PrebenTrophe1.svg"
  },
  "PræstationsPreben": {
    text: "Dine svar antyder, at din personlighedstype er Præstations-Preben. Du er ambitiøs, fokuseret og sætter høje standarder for dig selv. Du ser udfordringer som muligheder for at vise dine evner og præstere på et højt niveau. At opnå succes er vigtigt for dig, og du arbejder hårdt for at nå dine mål.",
    img: "assets/images/PrebenTrophe2.svg"
  },
  "PligtPreben": {
    text: "Ifølge dine svar er din personlighedstype Pligt-Preben. Du er pålidelig, ansvarlig og prioriterer dine forpligtelser. At opfylde dine pligter og gøre det rigtige er vigtige værdier for dig. Du kan være tilbageholdende med konfrontation, men du tager ansvar for dine handlinger og søger løsninger, der opfylder dine forpligtelser.",
    img: "assets/images/PrebenTrophe3.svg"
  }
};


interface ConclusionProps {
  userAnswers: string[];
  questionId: string;
  onStartAgain: () => void;
}

interface Data {
  id: string;
  answer: string[];
}

const ThinkingAnimation: React.FC = () => {
  return (
    <div className="thinking-animation">
      <div className="spinner"></div>
      <div className="thinking">
            {/* <TænkePreben/>
             */}
          <img src={ThinkingMan} alt="pic3" className="imageThinking" />
            </div>
      <p className="thinking-text">YES! - så fik du svaret på dem alle. Nu sætter jeg dem sammen og tænker lidt over det. Vi nærmer os snart en konklusion...</p>
    </div>
  );
};

let imgapath = {
  "PytPreben": "1",
  "PerfektionistPreben": "2",
  "PræstationsPreben": "3",
  "PligtPreben": "4"
}

const Conclusion: React.FC<ConclusionProps> = ({ userAnswers,questionId,onStartAgain }) => {
  const [showThinkingAnimation, setShowThinkingAnimation] = useState<boolean>(true);
  const [showForm, setShowForm] = useState(false);
  const [effecCnt, setEffectCnt] = useState(0);

  const handleClick = () => {
    setShowForm(true);
  };

  const [prebenAmounts, setPrebenAmounts] = useState<{
    PytPreben: number;
    PræstationsPreben: number;
    PerfektionistPreben: number;
    PligtPreben: number;
  }>({
    PytPreben: 0,
    PræstationsPreben: 0,
    PerfektionistPreben: 0,
    PligtPreben: 0,
  });

  let sortedKeys = Object.keys(prebenAmounts).sort((a, b) => prebenAmounts[b] - prebenAmounts[a]);

  // Map the sorted keys to their corresponding values in imgapath and join them with '-'
  let imagePath = sortedKeys.map(key => imgapath[key]).join('-');

  // console.log(imagePath);
  // console.log("this is the image path: ");
  let path ="assets/images/PodiumSVG/" + imagePath + '.svg';

  // console.log(path);
  // console.log("this is the path: ");


  // Find the key with the highest value
  let maxKey = Object.keys(prebenAmounts).reduce((a, b) => prebenAmounts[a] > prebenAmounts[b] ? a : b);

  let finalResultTitle = maxKey;
  // Fetch the corresponding image and text
  // console.log(maxKey);
  // console.log("this is the maximum value for the key: ");
  
  finalResultTitle = finalResultTitle.split('Preben').join('-Preben');
  // console.log("Preben result: "+ finalResultTitle);

  let conclusion = PrebenConclusions[maxKey];
  

  useEffect(() => {
    // Mimic the population of userAnswers by other functions
    setTimeout(() => {
      // userAnswers = ["PerfektionistPreben", "PræstationsPreben", "PytPreben", "PligtPreben","PytPreben"];
      userAnswers.forEach(answer => {
        // Remove the hyphen from the answer
        const key = answer.replace('-', '');

        setPrebenAmounts(prevState => ({
          ...prevState,
          [key]: prevState[key] + 1
        }));
      });
    }, 2000); // Delay of 2 seconds

    const timer = setTimeout(() => {
      //setShowThinkingAnimation(false);
    }, 0);

    return () => clearTimeout(timer);
  }, []);



const [conclusionTxt, setResult] = useState<string | null>(null);
const [winnerTxt, setWinner] = useState<string | null>(null);

useEffect(() => {
  const data = {
    id: questionId,
    answer: userAnswers
  };

  callExternalAPI(data)
    .then(response => {
      window.scrollTo(0, 0);
      setShowThinkingAnimation(false);
      setResult(response.answer);
      setWinner(response.winner);
      if (response.winner == 'Perfektionist-Preben') { 
        document.getElementById('winnerTxtId').style.color = "#5590C1";
     }else if(response.winner == 'Præstations-Preben'){
      document.getElementById('winnerTxtId').style.color = "#C16961";
     }else if(response.winner == 'Pyt-Preben'){
      document.getElementById('winnerTxtId').style.color = "#F0B2B5";
     }else if(response.winner == 'Pligt-Preben'){
      document.getElementById('winnerTxtId').style.color = "#7DBF92";
     }else {
      document.getElementById('winnerTxtId').style.color = "#5590C1";
    }
    })
    .catch(error => {
      window.scrollTo(0, 0);
      setShowThinkingAnimation(false);
//      setResult("Der var problemer med at få resultatet. Tryk her for at prøve igen")
      // console.error('An error occurred:', error);
    });
}, [userAnswers, questionId]); // Empty dependency array// Empty dependency array
 // Empty dependency array

// callExternalAPI(data);


  
  return (

    <div className="conclusion-container">
      {showThinkingAnimation ? (
        <ThinkingAnimation />
      ) : (
        <div className="conclusion-content">
          
          <div>
            <img className='conclusion-img' src={"../assets/images/PodiumSVG/" + imagePath + '.svg'} alt={maxKey} />
          </div>
          <h2 className="conclusion-title">Du er primært</h2>
          <h2 id="winnerTxtId" className="conclusion-key">{winnerTxt}</h2>
          <p className="conclusion-text">{conclusionTxt}</p>

          {/* <br />
            Pyt-Preben({prebenAmounts.PytPreben})
            <br />
            Præstations-Preben({prebenAmounts.PræstationsPreben})
            <br />
            Perfektionist-Preben({prebenAmounts.PerfektionistPreben})
            <br />
            Pligt-Preben({prebenAmounts.PligtPreben})
            <div>
              <button className='regster-button' onClick={handleClick}>Receive Certificate on your email</button>
                  {showForm && <RegistrationForm />}
        
          </div>
          */}
            <div>
            <button className= 'start-again-button'onClick={onStartAgain}>Tag en ny test</button>
            </div>
        </div>
        
      )}
    </div>
  );
  
};

export default Conclusion;
async function callExternalAPI(data : Data): Promise<any> {
  const url = "http://127.0.0.1:3001/conclusion";

  return fetch(url, {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    return data;
  })
  .catch((error) => {
    console.error('Error:', error);
    throw error;
  });
}

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(`Form submitted: Name: ${name}, Email: ${email}`);
    setSubmitted(true);
  };

  if (submitted) {
    return <p>Registration successful!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="registration-form">
      <label>
        Name:
        <input type="text" value={name} onChange={e => setName(e.target.value)} required />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
      </label>
      <input className='register'type="submit" value="Register" />
    </form>
  );
};





