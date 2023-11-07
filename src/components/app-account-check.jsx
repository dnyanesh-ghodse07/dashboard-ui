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
const data = [
  { x: 0, y: 1 },
  { x: 3, y: 2 },
  { x: 1, y: 3 },
  { x: 3, y: 4 },
  { x: 5, y: 5 },
];

const width = 500;
const height = 200;
export const AppAccountCheck = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(chartRef.current);
    const margin = { top: 20, right: 40, bottom: 30, left: 40 };

    // svg.selectAll("*").remove();

    const x = d3
      .scaleRadial()
      .domain([0, d3.max(data, (d) => d.x)])
      .range([margin.left, width - margin.right]);

    const y = d3
      .scaleRadial()
      .domain([0, d3.max(data, (d) => d.y)])
      .nice()
      .range([height - margin.bottom, margin.top]);

    const line = d3
      .line()
      .curve(d3.curveBundle.beta(0.5))
      .x((d) => x(d.x))
      .y((d) => y(d.y));

    svg
      .append("g")
      .attr("transform", `translate(0, ${height - margin.bottom})`)
      .call(d3.axisBottom(x))
      .style("font-size", "14px")
      .call((g) => g.select(".domain").remove())
      .call((g) => g.selectAll("line").remove());

    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "lightgreen")
      .attr("stroke-width", 4)
      .attr("d", line);
  }, []);

  const [manage, setManage] = useState("");
  const [month, setMonth] = useState("");

  const handleManageChange = (event) => {
    setManage(event.target.value);
  };

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

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
        <svg ref={chartRef} width={500} height={200}></svg>
      </MainCard>
    </>
  );
};
