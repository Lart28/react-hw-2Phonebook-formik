import styled from "@emotion/styled";

export const Button = styled.button`
  display: flex;
  padding: 5px 10px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 6px;
  border: 1px solid red;
  background-color: white;
  color: red;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
    &:hover{
      color: white;
      background-color: red;
      cursor: pointer;
    }
`

export const Text = styled.p`
  font-weight: 400;
  font-size: 25px;
`


export const List = styled.ul`
  max-width: 600px;
  margin: 0 auto;
  list-style: none;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
  & li{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    flex-direction: column;
  }
`