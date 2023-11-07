import { Box, Toolbar, CssBaseline, Grid, Container } from "@mui/material";
// import { AppAccountCheck } from "../sections/dashboard/app-account-check";
import { AppAccountCheck } from "../components/app-account-check";
import { AppInvoiceOwed } from "../components/app-invoice-owed";
import { AppTotalCashFlow } from "../components/app-total-cash-flow";
import { AppAccountWatchList } from "../components/app-account-watchlist";

const drawerWidth = 200;
const Dashboard = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          margin: "10px 0",
          marginLeft: `${drawerWidth}px`,
        }}
      >
        <Toolbar />
        <Container maxWidth="xl" sx={{ background: "#FAFAFA" }}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={6}>
              <AppAccountCheck />
            </Grid>
            <Grid item xs={12} lg={6}>
              <AppInvoiceOwed />
            </Grid>
            <Grid item xs={12} lg={6}>
              <AppTotalCashFlow />
            </Grid>
            <Grid item xs={12} lg={6}>
              <AppAccountWatchList />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard;
