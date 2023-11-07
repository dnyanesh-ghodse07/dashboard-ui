/* eslint-disable react/prop-types */
import { Card } from "@mui/material";

export const MainCard = ({ children }) => {
  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        borderRadius: "10px",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
      }}
    >
      <div style={{ height: "300px", width: "500px" }}>{children}</div>
    </Card>
  );
};
