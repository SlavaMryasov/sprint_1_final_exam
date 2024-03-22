import React, { ChangeEvent, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "./components/Button";
import styled from "styled-components";

function App() {
  const [state, setState] = useState(0);
  const [maxCount, setMax] = useState(0);
  let minCount = 0;

  const setMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setMax(Number(e.currentTarget.value))
  }

  const inc = () => {
    let newNum = state + 1;
    setState(newNum);
  };

  const reset = () => {
    setState(0);
  };
  


  return (
    <StyledApp color="lightgrey">
      <StyledContainer>
        введите максимальное число счетчика
        <input type="text" value={maxCount} onChange={setMaxHandler}/>
        <h1>{state}</h1>
        <ContainerForButton>
          <Button name="inc" callBack={inc} disabled={state === maxCount}/>
          <Button
            name="reset"
            callBack={reset}
            disabled={state === minCount}
          />
        </ContainerForButton>
      </StyledContainer>
    </StyledApp>
  );
}

export default App;

type StyledAppPropsType = {
  color: string;
};

const StyledApp = styled.div<StyledAppPropsType>`
  background-color: ${(props) => props.color};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledContainer = styled.div`
  border: 4px solid blue;
  width: 300px;
  height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  /* background-color: transparent; */
`;

const ContainerForButton = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 260px;
  height: 80px;
  border: 4px solid blue;
  border-radius: 10px;
`;
//setmaxandler инпут в отдельную компоненту