import React from 'react';
import { Link } from 'react-router-dom';
import {  MasterDiv, Cond2Div, Section, Button } from './PaymentOptionsElements';

const PaymentOptions = () => {
    return (
        <MasterDiv>
      <Section>
        <Cond2Div>
          {/* <Button><a href='https://paystack.com/pay/tokunbo-abiru'>Pay Online Now</a></Button> */}
          <Button><Link to="/account">Make Direct Transfer</Link></Button>
          <Button>Pay With Cheque</Button>
        </Cond2Div>
      </Section>
    </MasterDiv>
    )
}

export default PaymentOptions;