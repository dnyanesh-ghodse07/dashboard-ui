import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import {
  //   Card,
  CardHeader,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { MainCard } from "./mainCard";

export const AppAccountCheck = () => {
  const [manage, setManage] = useState("");
  const [month, setMonth] = useState("");

  const handleManageChange = (event) => {
    setManage(event.target.value);
  };

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  const svgRef = useRef(null);

  const generateRandomData = (length) => {
    return Array.from({ length }, () => Math.floor(Math.random() * 10));
  };

  const data = generateRandomData(10);

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    // Clear previous chart
    svg.selectAll("*").remove();

    // Add some padding
    const margin = { top: 20, right: 20, bottom: 40, left: 40 };
    const width = 500 - margin.left - margin.right;
    const height = 200 - margin.top - margin.bottom;

    const chart = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const xScale = d3
      .scaleLinear()
      .domain([0, data.length - 1])
      .range([0, width]);
    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data)])
      .range([height, 0]);

    const line = d3
      .line()
      .x((d, i) => xScale(i))
      .y((d) => yScale(d))
      .curve(d3.curveCardinal.tension(0.1));

    chart
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "lightgreen")
      .attr("stroke-width", 3)
      .attr("d", line);

    chart
      .selectAll(".x-label")
      .data(data)
      .enter()
      .append("text")
      .attr("class", "month-label")
      .attr("x", (d) => xScale(d))
      .attr("y", height + margin.bottom)
      .style("text-anchor", "middle")
      .text((d) => d);
  }, []);

  return (
    <>
      <MainCard>
        <CardHeader
          subheader={
            <>
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="h6">Checking Account</Typography>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="select-label-manage">Manage</InputLabel>
                  <Select
                    labelId="select-label-manage"
                    id="select-manage"
                    value={manage}
                    label="Age"
                    onChange={handleManageChange}
                    size="small"
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="select-label-manage">Month</InputLabel>
                  <Select
                    labelId="select-label-month"
                    id="select-label-month"
                    value={month}
                    label="Age"
                    onChange={handleMonthChange}
                    size="small"
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </>
          }
        />
        <Divider sx={{ borderStyle: "solid" }} />
        <svg ref={svgRef} width={500} height={200}></svg>
      </MainCard>
    </>
  );
};
