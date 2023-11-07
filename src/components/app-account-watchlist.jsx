import {
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  // Paper,
  Divider,
  Typography,
} from "@mui/material";
import { MainCard } from "./mainCard";
function createData(name, calories, fat) {
  return { name, calories, fat };
}

const rows = [
  createData("Sales", 159, 6.0, 24, 4.0),
  createData("Advertising", 237, 9.0, 37, 4.3),
  createData("Inventory", 262, 16.0, 24, 6.0),
  createData("Entertainment", 262, 16.0, 24, 6.0),
  createData("Product", 262, 16.0, 24, 6.0),
];

export const AppAccountWatchList = () => {
  return (
    <MainCard>
      <CardHeader
        subheader={
          <>
            <Typography sx={{ padding: "0" }} variant="h6">
              Account Watchlist
            </Typography>
          </>
        }
      />
      <Divider />
      <TableContainer sx={{ border: "none", maxHeight: 250, minWidth: 300 }}>
        <Table
          stickyHeader
          sx={{
            minWidth: 300,
            border: "none",
            boxShadow: "none",
          }}
          aria-label="simple table"
        >
          <TableHead sx={{ border: "none" }}>
            <TableRow>
              <TableCell sx={{ border: "none" }}>
                <Typography sx={{ color: "#999" }} variant="subtitle2">
                  Account
                </Typography>
              </TableCell>
              <TableCell sx={{ border: "none" }} align="right">
                <Typography sx={{ color: "#999" }} variant="subtitle2">
                  This Month
                </Typography>
              </TableCell>
              <TableCell sx={{ border: "none" }} align="right">
                <Typography sx={{ color: "#999" }} variant="subtitle2">
                  YTD
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  margin: "0",
                }}
              >
                <TableCell sx={{ border: "none" }} component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell sx={{ border: "none" }} align="right">
                  {row.calories}
                </TableCell>
                <TableCell sx={{ border: "none" }} align="right">
                  {row.fat}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </MainCard>
  );
};
