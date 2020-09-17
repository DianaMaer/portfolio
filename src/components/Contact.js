import React from 'react';


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
      <h1>CONTACT</h1>
      <div className="component-content component-content-contact"> 
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
            <button className="form-button">Send.</button>
        </div>}
        {status === "ERROR" && <p>Ooops! There was an error. Please try again to fill in our form !</p>}  
        </form>
      </div>
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