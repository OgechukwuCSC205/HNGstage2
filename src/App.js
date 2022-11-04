import "./App.css";
import profile from "./image/paint.jpg";
import share from "./image/shareicon2.jpg";
import slack from "./image/slack.jpg";
import github from "./image/github.jpg";
import inforgood from "./image/I4G.jpg"

function App() {
  return (
    <div className="App">
      
      <img src={share} alt="share" className="share-icon" />
      
      <div className="profile">
        <img id="profile__img" src={profile} alt="Yoma Ata" width="100px" height="auto" />
      </div>
      <p id="twitter" className="profile-name">Yoma</p>
      <p id="slack" style={{display: "none"}}>yomata</p>
      <a href="https://twitter.com/Yoma_lynata" id="" className="button-link">
        Twitter Link
        <p className="sell-text">Check out Yoma's Twitter Page</p>
      </a>
      <a href="https://training.zuri.team/" id="btn__zuri" className="button-link">
        Zuri Team
      </a>
      <a href="http://books.zuri.team" id="books" className="button-link">
        Zuri Books
        <p className="sell-text">Want to learn more on design and code? Check out <span>Zuri Books</span></p>
      </a>
      <a href="https://books.zuri.team/python-for-beginners?ref_id=yomata" id="book__python" className="button-link">
        Python Books
        <p className="sell-text">Ever wanted to learn Python? Check out <span>Zuri Python Books</span></p>
      </a>
      <a href="https://background.zuri.team" id="pitch" className="button-link">
        Background checks for Coders
        <p className="sell-text">Wondering if Mark's a good and trustworthy programmer? Check out our website for doing background checks on coders</p>
      </a>
      <a href="https://books.zuri.team/design-rules" id="book__design" className="button-link">
        Design Books
      </a>

     
      <img src={slack} alt="share" className="footer-icon" />
      <img src={github} alt="share" className="footer-icon git-icon" />
      

      <footer>
        <hr />
        <div className="footer-text">
          <p className="zuri-text">Zuri<span>.</span>Internship</p>
          <p className="hng-text">HNG Internship 9 Frontend Task</p>
          <img src={inforgood} alt="share" className="good-img" />
        </div>
      </footer>
    </div>
  );
}

export default App;
