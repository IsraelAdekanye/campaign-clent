import React from 'react';
import {  MasterDiv, Cond2Div, Section, Button } from './PaymentOptionsElements';

const PaymentOptions = () => {
    return (
        <MasterDiv>
      <Section>
        <Cond2Div>
          <Button><a href=''>Pay Online Now</a></Button>
          <Button>Make Direct Transfer</Button>
          <Button>Pay With Cheque</Button>
        </Cond2Div>
      </Section>
    </MasterDiv>
    )
}

export default PaymentOptions;