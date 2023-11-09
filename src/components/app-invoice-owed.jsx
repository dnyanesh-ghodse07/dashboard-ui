import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { Button, CardHeader, Divider, Grid, Typography } from "@mui/material";
import { MainCard } from "./mainCard";
import { UploadModal } from "./uploadModal";
import { useData } from "../store/dataContext";

// const data = [
//   { value: 10 },
//   { value: 20 },
//   { value: 15 },
//   { value: 25 },
//   { value: 30 },
// ];

export const AppInvoiceOwed = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const chartRef = useRef(null);

  const { accountCheckData: data } = useData();

  useEffect(() => {
    const margin = { top: 20, right: 20, bottom: 40, left: 40 };
    const width = 500 - margin.left - margin.right;
    const height = 200 - margin.top - margin.bottom;
    const barWidth = 15;

    const svg = d3.select(chartRef.current);
    svg.selectAll("*").remove();

    const chart = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const xScale = d3
      .scaleBand()
      .domain(data.map((_, i) => i))
      .range([margin.left, width - margin.right])
      .padding(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data)])
      .range([height, 0]);

    //bars
    chart
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .style("border-radius", 5)
      .attr("rx", 5)
      .attr("x", (_, i) => xScale(i))
      .attr("y", (d) => yScale(d))
      .attr("width", barWidth)
      .attr("height", (d) => height - yScale(d))
      .style("fill", "lightgreen");

    chart
      .selectAll(".y-label")
      .data(data)
      .enter()
      .append("text")
      .attr("x", (_, i) => xScale(i) + barWidth / 2)
      .attr("y", height + margin.bottom)
      .style("text-anchor", "middle")
      .text((d) => d);
  }, [data]);

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
        <svg ref={chartRef} width={500} height={200}></svg>
      </MainCard>
    </>
  );
};
