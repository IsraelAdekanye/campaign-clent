import React, { useState } from 'react';
import { Row, Title, DonationForm, InDiv, InnerDiv, Label, SubmitBtnStyle, Submit } from './DonateElements';
import axios from "axios";
const Donate = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [amount, setAmount] = useState('');
    const [redirectURL, setURL] = useState('');
    const [submitted, setStatus] = useState(false);

    
    const makeDonation = async(e)=> {
        e.preventDefault()

        await axios.post(process.env.REACT_APP_DONATION_URL, 
            {firstName, lastName, email, amount})
          .then(res => {
            if (res.status === 200) {
              window.location.replace(`${res.data}`)
            }
         })
          .catch((error)=> {
            console.log(error);
          });
    }

    const donationForm = () => {
      return(
        <Row>
        
          <Title> Make Donation </Title>

          <DonationForm onSubmit={makeDonation}>

            <InDiv>

              <InnerDiv>
                <Label>Name:  </Label>
                <input type="text" id="name" name="user_name" 
                onChange={e => setFirstName(e.target.value.trim())} value={firstName} required/>
              </InnerDiv>
        
              {/* <InnerDiv>
                <Label>First Name:</Label>
                <input type="text" id="name" name="user_name" 
                onChange={e => setLastName(e.target.value.trim())} value={lastName} required/>
              </InnerDiv> */}

              <InnerDiv>
                <Label>Email:       </Label>
                <input type="email" id="mail" name="user_email" placeholder='example@abc.com'
                onChange={e => setEmail(e.target.value.trim())} value={email} required/>
              </InnerDiv>
          
              <InnerDiv>
                <Label>Amount:</Label>
                <input type="text" id="amount" name="user_email" placeholder='Enter an amount'
                onChange={e => setAmount(e.target.value.trim())} value={amount} required/>
              </InnerDiv>

            </InDiv>
            
            <SubmitBtnStyle>
              <Submit type="submit">Donate</Submit>
            </SubmitBtnStyle>
            

          </DonationForm>
        </Row>
      )
    }

    const successPage = () => {
      return (<form>
      <section>
        {/* <div className="card"> */}
        <div className="cond2Div">
          <i className="checkmark">✓</i>
        </div>
          <h1 className="success">Thank you for your Donation</h1> 
          <br/>
          {/* <p>Thank you <b>{firstName}</b> <br/><br/> Your Reservation Code is <br/><b>{}</b><br/><br/>Your ticket is on its way to your mail!</p> */}
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
