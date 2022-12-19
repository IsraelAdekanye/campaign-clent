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
        <Success>Thank you for your donation!</Success>
        <br/>
        <Paragraph></Paragraph>
      </Section>
    </MasterDiv>
  );
}

export default SuccessPage;
