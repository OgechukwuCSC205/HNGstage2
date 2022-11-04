import inforgood from "../../image/I4G.jpg"
import "./footer.css"



const Footer = () => {

    return(
        <>
        <hr />
        <div className="footer-text">
          <p className="zuri-text">Zuri<span className="span-footer">.</span>Internship</p>
          <p className="hng-text">HNG Internship 9 Frontend Task</p>
          <img src={inforgood} alt="share" className="good-img" />
        </div>
        </>
    )
}

export default Footer;