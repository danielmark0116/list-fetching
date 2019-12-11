import React from "react";
import { Center } from "../Center/Center.styled";
import { Spinner } from "./Spinner.styled";

const Loader = () => {
  return (
    <Center>
      <Spinner>
        <i className="fas fa-spinner"></i>
      </Spinner>
    </Center>
  );
};

export default Loader;
