import { styled } from "@mui/material/styles";
import { InputBase } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.default,
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
  width: "100%",
  maxWidth: "400px",
  display: "flex",
  alignItems: "center",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.text.secondary,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.text.primary,
  flex: 1,
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 2),
    width: "100%",
  },
}));

const SearchComponent = () => {
  return (
    <Search>
      <StyledInputBase
        placeholder="Search Products…"
        inputProps={{ "aria-label": "search" }}
      />
      <SearchIconWrapper>
        <ArrowDropDownIcon />
      </SearchIconWrapper>
    </Search>
  );
};

export default SearchComponent;
