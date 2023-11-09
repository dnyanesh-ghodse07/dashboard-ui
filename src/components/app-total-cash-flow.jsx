import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { Box, CardHeader, Divider, Typography } from "@mui/material";
import { MainCard } from "./mainCard";
import { useData } from "../store/dataContext";

export const AppTotalCashFlow = () => {
  const { dataCashFlow: data } = useData();

  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = 500 - margin.left - margin.right;
    const height = 200 - margin.top - margin.bottom;

    const chart = svg
      .append("g")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const x = d3.scaleBand().range([0, width]).padding(0.1);
    const y = d3.scaleLinear().range([height, 0]);

    x.domain(data.map((d) => d?.month));
    y.domain([0, d3.max(data, (d) => Math.max(d.income, d.expense))]);

    chart
      .selectAll(".bar-group")
      .data(data)
      .enter()
      .append("g")
      .attr("class", "bar-group")
      .attr("transform", (d) => `translate(${x(d.month)},0)`)
      .selectAll("rect")
      .data((d) => [d])
      .enter()
      .append("rect")
      .style("border-radius", 5)
      .attr("rx", 5)
      .attr("class", "income-bar")
      .attr("x", x.bandwidth() / 6)
      .attr("width", x.bandwidth() / 3)
      .attr("y", (d) => y(d.income))
      .attr("height", (d) => height - y(d.income))
      .style("fill", "lightgreen");

    chart
      .selectAll(".bar-group")
      .selectAll(".expense-bar")
      .data((d) => [d])
      .enter()
      .append("rect")
      .style("border-radius", 5)
      .attr("rx", 5)
      .attr("class", "expense-bar")
      .attr("x", x.bandwidth() / 6)
      .attr("width", x.bandwidth() / 3)
      .attr("y", (d) => y(d.expense))
      .attr("height", (d) => height - y(d.expense))
      .style("fill", "green");

    chart
      .selectAll(".month-label")
      .data(data)
      .enter()
      .append("text")
      .attr("class", "month-label")
      .attr("x", (d) => x(d.month) + x.bandwidth() / 3)
      .attr("y", height + margin.bottom)
      .style("text-anchor", "middle")
      .text((d) => d.month);
  }, [data]);

  return (
    <MainCard>
      <CardHeader
        subheader={
          <>
            <Typography variant="h6">Total cash flow</Typography>
          </>
        }
      />
      <Divider />
      <Box>
        <svg ref={svgRef} width={500} height={200}></svg>
      </Box>
    </MainCard>
  );
};
