import React, { useState } from 'react';
import { Row, Title, DonationForm, InDiv, InnerDiv, Label, SubmitBtnStyle, Submit } from './DonateElements';
import axios from "axios";
const Donate = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [amount, setAmount] = useState('');

    
    const makeDonation = async(e)=> {
        e.preventDefault()
        
        const postParams = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: 
              {firstName, email, amount
          }
      }
      await fetch(process.env.REACT_APP_DONATION_URL, postParams)
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
                <input type="text" id="amount" name="amount" placeholder='Enter an amount'
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

  return (
   donationForm()
  );
}

export default Donate;
