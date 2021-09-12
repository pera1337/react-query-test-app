import { InputAdornment, TextField, TextFieldProps } from "@material-ui/core";
import { Search } from "@material-ui/icons";

interface componentProps {
  onEnterPressed?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
  onSearchIconClicked?: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void;
}

type SearchInputProps = componentProps & TextFieldProps;

const SearchInput: React.FC<SearchInputProps> = (props) => {
  const keyPressHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      props.onEnterPressed?.(event);
    } else {
      props.onKeyDown?.(event);
    }
  };
  return (
    <TextField
      InputProps={{
        endAdornment: (
          <InputAdornment onClick={props.onSearchIconClicked} position="end">
            <Search style={{ cursor: "pointer" }} />
          </InputAdornment>
        ),
      }}
      onKeyDown={keyPressHandler}
      {...props}
    />
  );
};

export default SearchInput;
