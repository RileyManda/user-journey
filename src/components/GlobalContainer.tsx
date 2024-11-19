
/**
 * GlobalContainer component that wraps its children with a Box component from MUI.
 * 
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} props.children - The child components to be wrapped.
 * 
 * @returns {JSX.Element} The rendered Box component containing the children.
 */
import React from "react";
import { Box } from "@mui/material";

const GlobalContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        marginTop: 15,
              padding: "0 16px",
        height: "100%",
      }}
    >
      {children}
    </Box>
  );
};

export default GlobalContainer;
