import { css } from 'lit';
export const writeStyles = css`
.write-form {

}
.form-field {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.form-field-row {
    display: flex;
    justify-content: center;
    align-items: center;
}
.form-field_input {
    width: 70vw;
    max-width: 800px;
    font-size: 1rem;
    padding: 0.4rem;
    margin: 0.5rem;
}
.form-field_textarea {
    width: 30vw;
    height: 60vh;
    margin: 1rem;
    background: aquamarine;
}
`