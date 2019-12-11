import React, { useState } from "react";

interface IProps {
  submitAction: Function;
  inputHandler: Function;
  inputValue: string;
}

const SearchBar = (props: IProps) => {
  const [searchStr, setSearchStr] = useState<string>("");

  const { submitAction, inputHandler, inputValue } = props;

  return (
    <form
      onSubmit={(e: React.SyntheticEvent) => {
        e.preventDefault();
        submitAction(searchStr);
      }}
    >
      <input
        type="text"
        value={searchStr}
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          setSearchStr(e.currentTarget.value);
        }}
      />
    </form>
  );
};

export default SearchBar;
