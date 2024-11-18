// components/GlobalContainer.tsx
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