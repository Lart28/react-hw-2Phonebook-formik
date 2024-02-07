import styled from "@emotion/styled";
import { Form } from "formik";

export const Forma = styled(Form)`
  display: flex;
  padding: 10px 20px;
  flex-direction: column;
  align-items: stretch;
  border: 2px solid green;
  border-radius: 6px;
  max-width: 250px;
  justify-content: center;
  margin: 0 auto;
`
export const Button = styled.button`
  display: flex;
  padding: 10px 20px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 6px;
  border: 1px solid green;
  background-color: white;
  color: green;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
    &:hover{
      color: white;
      background-color: green;
      cursor: pointer;
    }
`

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