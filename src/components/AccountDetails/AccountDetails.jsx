import React from 'react';
import { MasterDiv, Success, Cond2Div, CheckMark, Section, Paragraph } from './SuccessElements';
//import '../App.css';

const SuccessPage = () => {

  return (
    <MasterDiv>
      <Section>
        <Cond2Div>
          <CheckMark>✓</CheckMark>
        </Cond2Div>
        <Success>Donation Successful</Success>
        <br/>
        <Paragraph>Thank You!</Paragraph>
      </Section>
    </MasterDiv>
  );
}

export default SuccessPage;
