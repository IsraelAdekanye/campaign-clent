import React from 'react';
import { MasterDv, Success, Cond2Div, CheckMark, Section, Paragraph } from './SuccessElements';
const Success = () => {

  return (
    <MasterDv>
      <Section>
        <Cond2Div>
          <CheckMark>✓</CheckMark>
        </Cond2Div>
        <Success>Donation Successful</Success>
        <br/>
        <Paragraph>Thank You!</Paragraph>
      </Section>
    </MasterDv>
  );
}

export default Success;
