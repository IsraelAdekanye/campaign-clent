import React from 'react';
//import { MasterDiv, InDiv, Button } from './PaymentOptionsElements';
import { MasterDiv, Success, Cond2Div, CheckMark, Section, Paragraph } from './SuccessElements';

const PaymentOptions = () => {
    return (
        <MasterDiv>
            <InDiv>
                <Button>
                    Pay Online Now
                </Button>
                <Button>
                    Make Direct Transfer
                </Button>
                <Button>
                    Pay With Cheque
                </Button>
            </InDiv>
        </MasterDiv>
    )
}

export default PaymentOptions;