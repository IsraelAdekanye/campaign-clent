import React, { useState } from 'react';
import axios from "axios";
const Donate = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [amount, setAmount] = useState('');
    const [data, setData] = useState([]);
    const [submitted, setStatus] = useState(false);

    
    const makeDonation = async(e)=> {
        e.preventDefault()

        await axios.post(process.env.REACT_APP_DONATION_URL, 
            {firstName, lastName, email, phoneNumber, amount})
          .then(res => {
            if (res.status === 200) {
              console.log(res.data);
            }
         })
          .catch((error)=> {
            console.log(error);
          });
    }

    const donationForm = () => {
      return(
        
        <div className='row'>
        <div className="col-md-12">
        <form onSubmit={makeDonation}>
        <h1 className='registerH1'> Make Donation</h1>
        <fieldset>
    
        <label>First Name:</label>
        <input type="text" id="name" name="user_name" 
        onChange={e => setFirstName(e.target.value.trim())} value={firstName} required/>
    
        <label>Surname:</label>
        <input type="text" id="name" name="user_name" 
        onChange={e => setLastName(e.target.value.trim())} value={lastName} required/>
      
        <label>Email:</label>
        <input type="email" id="mail" name="user_email" placeholder='example@abc.com'
        onChange={e => setEmail(e.target.value.trim())} value={email} required/>
    
        <label>Phone Number:</label>
        <input type="tel" id="phone" name="phone" placeholder='08023456789' pattern="[0]{1}[0-9]{10}"
        onChange={e => setPhoneNumber(e.target.value.trim())} value={phoneNumber} required/>

        <label>Amount:</label>
        <input type="text" id="amount" name="user_email" placeholder='Enter an amount'
        onChange={e => setAmount(e.target.value.trim())} value={amount} required/>
    
        </fieldset>
    
        <button type="submit">Donate</button>
        </form>
        </div>
      </div>
      )
    }

    const successPage = () => {
      return (<form>
      <section>
        {/* <div className="card"> */}
        <div className="cond2Div">
          <i className="checkmark">✓</i>
        </div>
          <h1 className="success">Registration Successful</h1> 
          <br/>
          <p>Thank you <b>{firstName}</b> <br/><br/> Your Reservation Code is <br/><b>{}</b><br/><br/>Your ticket is on its way to your mail!</p>
        {/* </div> */}
      </section>
      </form>)
    }

  return (
    <div>
      {submitted? 
      successPage()
       :
       donationForm()
       }
    </div>
  );
}

export default Donate;
