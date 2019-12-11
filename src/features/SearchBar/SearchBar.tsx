import React, { useState } from "react";
import { Form } from "../../common/Form/Form.styled";
import {
  InputGroup,
  Input,
  InputButton
} from "../../common/Form/InputGroup.styled";

interface IProps {
  submitAction: Function;

  inputValue: string;
}

const SearchBar = (props: IProps) => {
  const [searchStr, setSearchStr] = useState<string>("");

  const { submitAction } = props;

  return (
    <Form
      onSubmit={(e: React.SyntheticEvent) => {
        e.preventDefault();
        submitAction(searchStr);
      }}
    >
      <InputGroup>
        <i className="fas fa-search"></i>
        <Input
          placeholder="Search by all fields"
          type="text"
          value={searchStr}
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            setSearchStr(e.currentTarget.value);
          }}
        />
        <InputButton type="submit">Search</InputButton>
      </InputGroup>
    </Form>
  );
};

export default SearchBar;
