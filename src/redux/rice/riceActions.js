import { BUY_RICE, EAT_RICE } from 'redux/rice/riceTypes';

export const buyRice = () => {
    return {
        type: BUY_RICE
    };
};

export const eatRice = () => {
    return {
        type: EAT_RICE
    };
};  