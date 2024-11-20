/**
 * `SearchComponent` is a functional React component that renders a styled search input field
 * with a dropdown icon. It uses Material-UI's `styled` utility to create custom styled components.
 *
 * The main container `Search` is styled to have a relative position, border radius, background color,
 * and hover effect. It also has a maximum width of 400px and centers its content vertically.
 *
 * The `SearchIconWrapper` is a styled div that contains the dropdown icon. It is styled to have padding,
 * full height, and centered content both vertically and horizontally. The icon color is set to the secondary
 * text color from the theme.
 *
 * The `StyledInputBase` is a styled version of Material-UI's `InputBase` component. It is styled to have
 * primary text color and flexible width. The input field inside it has padding and takes the full width of the container.
 *
 * @returns {JSX.Element} The rendered search component.
 */
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
