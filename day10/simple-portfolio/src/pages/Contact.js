import React from "react";

function Contact() {
  return (
    <section className='contact-container'>
      <h2>Contact</h2>
      <div className='form'>
        <img src='./contact.svg' alt='contact' />
        <form action='#'>
          <div>
            <input type='text' placeholder='Your name' className='input-name input' />
            <input type='email' placeholder='Your email' className='input-email input' />
            <textarea rows='10' cols='500' placeholder='Your message' className='input message input' />
          </div>
          <div className="div-button">

          <button>SEND</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
