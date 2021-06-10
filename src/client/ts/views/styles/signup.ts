import { css } from 'lit';
export const signupStyles = css`
.signup {
    font-family: 'Montserrat', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 430px;
    height: 420px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    border-radius: 5px;
    position: absolute;
    top: 100px;
    left: 40%;
}
.signup_title {
    margin-bottom: 45px;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1em;
    text-transform: uppercase;
    color: #e8716d;
    letter-spacing: .1rem;
}
.signup-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
}
.signup-form-field {
    margin: 20px 10px;
}
.signup-form-field__input {
    width: 200px;
    border: 0;
    border-bottom: 1px solid gray;
}
.signup-form-field__input:focus {
    outline: none;
    border-bottom: 1px solid #e8716d;;
}
.signup-form-field__button {
    justify-content: flex-end;
    background: #e8716d;
    width: 100px;
    height: 30px;
    border-radius: 5px;
    color: white;
    text-align: center;
    padding-top:10px
}
`