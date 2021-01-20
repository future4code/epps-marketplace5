import styled from 'styled-components';

export const FooterStyled = styled.div`
display: flex;
justify-content: space-around;
background-color: #dc312e;
width: 100vw;
height: 15vh;
`;

export const Contact = styled.div`
display: flex;
align-items: center;
`;

export const ContactIcons = styled.img`
width: 2vw;
padding: 0.8rem;
opacity: 1;

&:hover {
    cursor: pointer;
    transition: 400ms;
    opacity: 0.8;
    width: 2.3vw;
}
`;

export const TextFooter = styled.p`
font-size: 1rem;
font-weight: 700;
opacity: 0.85;

&:hover {
    font-size: 1.02rem;
    transition: 400ms;
    opacity: 1;
}
`;

export const Payment = styled.div`
display: flex;
align-items: center;
`;

export const PaymentIcons = styled.img`
width: 2.5vw;
padding: 0.6rem;
opacity: 1;

&:hover {
    transition: 400ms;
    opacity: 0.8;
    width: 2.8vw;
}
`;