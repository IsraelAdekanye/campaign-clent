import React from 'react';
import { MasterDiv, Success, Cond2Div, CheckMark, Section, Paragraph } from './AccountDetailsElements';
//import '../App.css';

const Account = () => {

  return (
    <MasterDiv>
      <Section>
      <Cond2Div>
        </Cond2Div>
        <Success>Account Details</Success>
        <br/>
        <Paragraph><b>Bank Name</b> <br></br>Sterling Bank</Paragraph>
        <br/>
        <Paragraph><b>Account Name</b> <br></br>Office Of Senator Mukhail Adetokunbo Abiru</Paragraph>
        <br/>
        <Paragraph><b>Account Number</b> <br></br>0091532131</Paragraph>
      </Section>
    </MasterDiv>
  );
}

export default Account;
