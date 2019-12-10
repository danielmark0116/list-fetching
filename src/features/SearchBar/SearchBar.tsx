import React from "react";

interface IProps {
  submitAction: Function;
  inputHandler: Function;
  inputValue: string;
}

const SearchBar = (props: IProps) => {
  const { submitAction, inputHandler, inputValue } = props;

  return (
    <form
      onSubmit={(e: React.SyntheticEvent) => {
        e.preventDefault();
        submitAction();
      }}
    >
      <input
        type="text"
        value={inputValue}
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          inputHandler(e.currentTarget.value);
        }}
      />
    </form>
  );
};

export default SearchBar;
