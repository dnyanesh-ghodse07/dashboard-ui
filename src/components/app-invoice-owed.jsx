import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { Button, CardHeader, Divider, Grid, Typography } from "@mui/material";
import { MainCard } from "./mainCard";
import { UploadModal } from "./uploadModal";

// const data = [
//   { value: 10 },
//   { value: 20 },
//   { value: 15 },
//   { value: 25 },
//   { value: 30 },
// ];

const width = 500;
const height = 200;
export const AppInvoiceOwed = () => {
  // const chartRef = useRef(null);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const chartRef = useRef(null);

  useEffect(() => {
    const data = [10, 20, 30, 40, 50];
    const margin = { top: 20, right: 20, bottom: 40, left: 40 };
    const barWidth = 15;

    const svg = d3
      .select(chartRef.current)
      .append("svg")
      .attr("class", "bar-chart-svg")
      .attr("preserveAspectRatio", "xMinYMin meet")
      .attr("viewBox", `0 0 ${chartRef.current.clientWidth} 250`);

    const xScale = d3
      .scaleBand()
      .domain(data.map((_, i) => i))
      .range([margin.left, chartRef.current.clientWidth - margin.right])
      .padding(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data)])
      .range([200, margin.top]);

    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .style("border-radius", 5)
      .attr("rx", 5)
      .attr("x", (_, i) => xScale(i))
      .attr("y", (d) => yScale(d))
      .attr("width", barWidth)
      .attr("height", (d) => 200 - yScale(d))
      .style("fill", "lightgreen");

    svg
      .selectAll("text.y-axis-label")
      .data(data)
      .enter()
      .append("text")
      .text((d) => d)
      .attr("x", (_, i) => xScale(i) + barWidth / 2)
      .attr("y", 220)
      .style("text-anchor", "middle")
      .style("fill", "black")
      .attr("class", "y-axis-label");
  }, []);

  return (
    <>
      <UploadModal open={open} handleClose={handleClose} />
      <MainCard>
        <CardHeader
          subheader={
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6">Invoices owed to you</Typography>
              <Button size="small" variant="outlined" onClick={handleOpen}>
                New sales invoice
              </Button>
            </Grid>
          }
        />
        <Divider sx={{ borderStyle: "solid" }} />
        <svg ref={chartRef} width={width} height={height}></svg>
      </MainCard>
    </>
  );
};
