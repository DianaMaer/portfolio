import React from 'react';
import Slide from 'react-reveal/Slide';

class Contact extends React.Component {
    constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

    render() {
    const { status } = this.state;
    return(
    <div className="container-contact" id="contact">
      <h2>CONTACT</h2>
      <div className="component-content component-content-contact">
        <h3>Drop me a line, <span className="heading-contact">I would like <br/>to hear from you</span> </h3>
    
      <div className="contact-teaser">
          <div className="form-wrapper">
        <form className="contact-form"  
            onSubmit={this.submitForm}
            action="https://formspree.io/xzbkpjqr"
            method="POST">    
          <div className="form-input-container">
            <input type="text" placeholder="Name*" name="title" className="form-field" required/>
          </div>
          <div className="form-input-container">
              <input type="email" placeholder="Email*" name="email" className="form-field" required/>
         </div>
         <div className="form-input-container">
             <textarea type="text" placeholder="Your message ...*" name="message" className="form-field-text" rowSpan={4} required />
         </div>

        {status === "SUCCESS" ? <p>Thanks! I will reply you soon !</p> : <div className="form-button-container">
            <button className="form-button">Send</button>
        </div>}
        {status === "ERROR" && <p>Ooops! There was an error. Please try again to fill in our form !</p>}  
        </form>
        <img className="send-icon" src="send-icon.svg" alt="send-icon"/>
        </div>
        <div className="contact-icons">
            <img className="envelope" src="envelope.svg" alt="envelope-image"/>
        </div>
        
      </div>
       
      <footer>
          <p>© 2020 — Designed and coded by <span>Diana Maerean</span> using React.</p>
        </footer>
      </div> {/*end component-content-contact */}
    </div> 
    );}

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            form.reset();
            this.setState({ status: "SUCCESS" });
        } else {
            this.setState({ status: "ERROR" });
        }
        };
        xhr.send(data);
    }


}
export default Contact;