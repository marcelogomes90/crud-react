import styled from "styled-components";

const Input = styled.input`
    margin-bottom: 1rem;
    height: 2.25rem;
    width: auto;
    outline: none;
    border: solid 1px;
    border-radius: 5px;
    padding: 2px 10px;
    font-size: 16px;

    &:focus{
        border: solid 2px #4d3e6b;
    }
`

export default Input;