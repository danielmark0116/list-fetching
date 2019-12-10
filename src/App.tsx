import React from "react";
import IncomeList from "./features/IncomeList/IncomeList";
import { Container } from "./common/Container/Container.styled";

const App = () => {
  return (
    <Container>
      <IncomeList></IncomeList>
    </Container>
  );
};

export default App;
