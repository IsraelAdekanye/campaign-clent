import React from 'react';
import { MasterDiv, Success, Cond2Div, CheckMark, Section, Paragraph } from './AccountDetailsElements';
//import '../App.css';

const Account = () => {

  return (
    <MasterDiv>
      <Section>
        <Cond2Div>
          <CheckMark>✓</CheckMark>
        </Cond2Div>
        <Success>Account Details</Success>
        <br/>
        <Paragraph>Acc. Name: Office Of Senator Mukhail Adetokunbo Abiru (Campaign Account)</Paragraph>
      </Section>
    </MasterDiv>
  );
}

export default Account;
