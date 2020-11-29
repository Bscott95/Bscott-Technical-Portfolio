import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './StyleSheets/Contact.css'
// import './Contact.css'


export default function Contact() {
  return (
    <div>
      <main className="mainSection">
        <section className="content">
            {/* <!-- title section --> */}
            <div className="content-title">
                <h2>Contact</h2>
            </div>
            <hr/>
            {/* <!-- main content --> */}
            <section className="content-subsection">
              <form>
                <div className="form-group">
                  <label for="exampleFormControlInput1">Name</label>
                  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Name"/>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                
                <div className="form-group">
                  <label for="exampleFormControlTextarea1">Message</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button type="submit" className="btn btn-primary mb-2">Submit</button>
              </form>
            </section>
        </section>
      </main> 
    </div>
  );
}
