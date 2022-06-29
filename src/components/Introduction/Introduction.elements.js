import styled from 'styled-components';

// sub text
export const SubText = styled.p`
    margin-bottom: 24px;
    font-size: 20px;
`;

// sub section
export const SubSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    text-align: left;
    margin-bottom: 24px;
    color: #fff;
`;

// sub text
export const FooterSubText = styled.p`
    margin-bottom: 24px;
    font-size: 20px;
`;

// form
export const Form = styled.form`
    display: flex;
    justify-content: left;
    align-items: left;

    @media screen and (max-width: 1400px) {
        flex-direction: column;
        width: 100%;
    }
`;

// for input
export const FormInput = styled.input`
    padding: 10px 80px;
    border-radius: 4px;
    margin-right: 10px;
    outline: none;
    border: none;
    font-size: 16px;
    border: 1px solid #fff;

    &::placeholder {
        color: #242424;
    }

    @media screen and (max-width: 820px) {
        width: 100%;
        margin: 0 0 16px 0;
    }
`;