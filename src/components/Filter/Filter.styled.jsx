import styled from "@emotion/styled";

export const Label = styled.label`
  display: flex;
  padding: 10px 20px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: white;
  color: black;
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  & input{
    display: block;
    border: 1px solid green;
    border-radius: 6px;
    min-width: 150px;
    height: 25px;
  }
`