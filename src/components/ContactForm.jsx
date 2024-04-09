import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import Result from '../components/Result';
import HomePagdData_ from '../data/HomePagdData.json';

export default function ContactForm({ Text_Value }) {


  const {

    result

  } = HomePagdData_;

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    val1111: '',    val2222: '',    val3333: '',    val4444: '',   val5555: '',   val6666: '',    val7777: '',    val8888: ''
  });


  ////////////////
  const [val1111, set1111] = useState('');
  const [val2222, set2222] = useState('');
  const [val3333, set3333] = useState('');
  const [val4444, set4444] = useState('');
  const [val5555, set5555] = useState('');
  const [val6666, set6666] = useState('');
  const [val7777, set7777] = useState('');
  const [val8888, set8888] = useState('');
  const[allValue, setallValue]=useState();

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [flag, setFlag] = useState(false);
  const sendEmail = (e) => {
    setFlag(true);
    e.preventDefault();
    const formDataToSend = {
      val1111, val2222,  val3333,  val4444,  val6666,  val5555, val7777,  val8888 };
      
      console.log(formDataToSend)

      setallValue(formDataToSend);



    
  };




  return (
    <>
      <form  onSubmit={sendEmail} dir="rtl">

        <div className="row gx-3 gy-4">

          {/* ////////////1////////////// */}

          <div className="col-md-12">
            <div className="form-group">
              <label className="form-label">הפרסונה שלכם &#40; יחיד &#41; :</label>
              <input dir="rtl"
                name="name1111"
                placeholder=""
                className="form-control"
                type="text"
                value={val1111}
                onChange={(e) => set1111(e.target.value)}
                required
              />
              <span style={{ color: 'white' }}>"קהל היעד שלי הוא ____."</span><br></br>
                          <label className="label">&#40;לדוגמא: משקיע מתחיל, חייל משוחרר, גבר שמן, גבר צעיר וחסן ביטחון &#41;</label>


            </div>
          </div>
          {/* ////////////2///////////// */}
          <div className="col-md-12">
            <div className="form-group" >
              <label className="form-label">נושא מילת המפתח העיקרי מספר 1 שלך:</label>
              <input dir="rtl"
                name="name2222"
                placeholder=""
                className="form-control"
                type="text"
                value={val2222}
                onChange={(e) => set2222(e.target.value)}
                required
              />
              <span style={{ color: 'white' }}>"הנושא העיקרי שלי הוא ____."</span><br></br>
                          <label className="label">&#40;לדוגמא: השקעות במניות, הקמת עסק ראשון, ירידה במשקל, שיווק ברשתות החברתיות.&#41;</label>
            </div>
          </div>

          {/* /////////////3///////////// */}
          <div className="col-md-12">
            <div className="form-group">
              <label className="form-label">נושא מילת המפתח העיקרי מספר 2 שלך:</label>
              <input dir="rtl"
                name="name3333"
                placeholder=""
                className="form-control"
                type="text"
                value={val3333}
                onChange={(e) => set3333(e.target.value)}
                required
              />
              <span style={{ color: 'white' }}>"הנושא העיקרי השני שלי הוא ____."</span><br></br>
                          <label className="label">&#40;דוגמא: בחירת מניות מנצחות, פתיחת עסק ראשון, חיטוב ועיצוב הגוף, יצירת תוכן ברשתות.&#41;</label>
            </div>
          </div>
          {/* /////////////4///////////// */}
          <div className="col-md-12">
            <div className="form-group">
              <label className="form-label">  מהי התוצאה הגדולה מספר 1 שהם רוצים?    &#40; צריך להתחיל בפועל שמתחיל באות ל'    &#41; </label>
              <input dir="rtl"
                name="name4444"
                placeholder=""
                className="form-control"
                type="text"
                value={val4444}
                onChange={(e) => set4444(e.target.value)}
                required
              />
              <span style={{ color: 'white' }}>"מהי התוצאה הגדולה מספר 1 שהם רוצים?" &#40;VERB &#41;</span><br></br>
                          <label className="label">&#40; להרוויח כסף ממסחר במניות, לפתוח עסק ולעשות הרבה כסף, להיראות חטובים ושריריים, להיות יותר פרודוקטיבים...  &#41;</label>
            </div>
          </div>
          {/* /////////////5///////////// */}
        <div className="col-md-12">
            <div className="form-group">
                          <label className="form-label">&#40; צריך להתחיל בפועל שמתחיל באות ל' &#41;מהי התוצאה הגדולה מספר 2 שהם רוצים? </label>
              <input dir="rtl"
                name="name5555"
                placeholder=""
                className="form-control"
                type="text"
                value={val5555}
                onChange={(e) => set5555(e.target.value)}
                required
              />
              <span style={{ color: 'white' }}>&#40; פועל &#41;"הקהל שלי באמת רוצה _____." </span><br></br>
                          <label className="label">&#40;לדוגמא: להרוויח תשואה דו ספרתית על ההשקעות שלך בשוק ההון, להקים עסק ולצת לחופש כלכלי בגיל צעיר, להרוויח כסף באופן פסיבי ממסחר בשוק ההון, להפוך עוקבים ללקוחות משלמים...&#41;</label>
            </div>
          </div> 
          {/* /////////////6///////////// */}
          <div id="build_btn" className="col-md-12">
            <div className="form-group">
                          <label className="form-label">מהו הכאב שהם רוצים להימנע ממנו:</label>
              <input dir="rtl"
                name="name6666"
                placeholder=""
                className="form-control"
                type="text"
                value={val6666}
                onChange={(e) => set6666(e.target.value)}
                required
              />
                          <span style={{ color: 'white' }}>    &#40; צריך להתחיל בפועל שמתחיל באות ל'&#41; הקהל שלי רוצה להשיג את המטרה בלי"______" </span><br></br>
                          <label className="label">&#40;לדוגמא: להפסיד כסף על מניות, לקחת הלוואות וסיכונים מיותרים, להיצמד לתפריט נוקשה ולעשות ספורט, להיות משועבד ליצירת תוכן ולעשות הכל לבד....&#41;</label>
            </div>
          </div>

          {/* /////////////7///////////// */}
          <div className="col-md-12">
            <div className="form-group">
                          <label className="form-label"> מהו הדבר שהם חושבים שעוצר אותם מלהשיג את המטרה שלהם?  </label>
              <input dir="rtl"
                name="name7777"
                placeholder=""
                className="form-control"
                type="text"
                value={val7777}
                onChange={(e) => set7777(e.target.value)}
                required
              />
              <span style={{ color: 'white' }}> משלים את ההצהרה "גם אם ______"</span><br></br>
                          <label className="label">&#40; לדוגמא:
                              מעולם לא השקעת במניות לפני כן, אתה חושב שעסק זה דבר מסוכן ומסובך, אין לך משמעת עצמית להתמיד לאורך זמן, אין לך ניסיון שיווקי ברשתות...  &#41;</label>
            </div>
          </div>
          { /* /////////////8///////////// */}
          <div className="col-md-12">
            <div className="form-group">
              <label className="form-label">באיזה מסגרת זמן תוכל לספק תוצאות?: </label>
              <input dir="rtl"
                name="name8888"
                placeholder=""
                className="form-control"
                type="text"
                value={val8888}
                onChange={(e) => set8888(e.target.value)}
                required
              />
              <span style={{ color: 'white' }}> "תראה תוצאות ב_____."</span><br></br>
              <label className="label">&#40; לדוגמה: 30 ימים; 15 דקות או פחות; שבוע אחד; וכו ' &#41;</label>
            </div>
          </div>



          {/* <div className="col-md-12">
          <div className="form-group">
            <label className="form-label">Your Email</label>
            <input dir="rtl"
              name="emailEmai"
              placeholder=""
              className="form-control"
              type="email"
              value={evalEmai}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div> */}

          {/* <div className="col-md-12">
          <div className="form-group">
            <label className="form-label">Your message</label>
            <textarea
              name=Mess"message"
              placeholder="Your message *"
              rows={4}
              className="form-control"
              value={mesvalMess}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
        </div> */}
          <div className="col-md-12">
            <div className="send">
              <button className={`px-btn w-100 ${loading ? 'disabled' : ''}`} type="submit"  >
                {loading ? 'בהפקה...' : 'ליצר'}
              </button>
            </div>
          </div>
        </div>
      </form>
      {
        flag?console.log(allValue):null
      }
      {
        flag ? 
          <Result data={result}  SetallValue={allValue} /> : null
     }
    </>
  );
}
