import "./contact.css";

const Contact = () => {
  return (
    <div className="">
      <form className="">
        <div className="contact-page">
          <div>
            <h2>Contact Me</h2>
            <p className="hi-text">
              Hi there, contact me to ask me about anything you have in mind.
            </p>
          </div>
          <div className="name-box">
            <div>
              <label htmlFor="text" className="label">
                First Name
              </label>
              <input
                id="first_name"
                type="text"
                placeholder="  Enter your first name"
                required
                maxLength={20}
                className="input-name"
              />
            </div>

            <div className="lastname-box">
              <label htmlFor="text" className="label">
                Last Name
              </label>
              <input
                id="last_name"
                type="text"
                placeholder="  Enter your last name"
                required
                maxLength={20}
                className="input-name"
              />
            </div>
          </div>

          <div className="email-box">
            <label htmlFor="officeDays" className="label">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="  yourname@email.com"
              required
              className="input-email"
            />

            <label htmlFor="officeDays" className="label">
              Message
            </label>
            <textarea
              id="message"
              type="text"
              placeholder=" Send your message, I'll try to respond..."
              className="input-message"
            />
          </div>

          <div className="agree-box">
            <input
              type="checkbox"
              className="agree-checkbox"
              id="checkbox"
              name="agreement"
              value="agreement"
            />
            <label for="" className="agree-text">
              You agree to providing your data to Ogechukwu Ata, who may contact you.
            </label>
          </div>
          <button id="btn__submit" className="button-class">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
