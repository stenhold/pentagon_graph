"use client";
import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

export default function PentagonChart({ data }) {
  const ref = useRef();

  useEffect(() => {
    const svg = d3.select(ref.current);
    const width = 300;
    const height = 300;
    svg.attr('width', width).attr('height', height);

    // Calculate vertex coordinates
    const angle = Math.PI * 2 / 5;
    const radius = 100;
    const center = { x: width / 2, y: height / 2 };
    const vertices = data.map((d, i) => ({
      x: center.x + radius * Math.cos(angle * i - Math.PI / 2),
      y: center.y + radius * Math.sin(angle * i - Math.PI / 2),
      value: d.value
    }));

    // Create paths
    const path = d3.line()
      .x(d => d.x)
      .y(d => d.y);

    svg.selectAll('path')
      .data([vertices])
      .join('path')
      .attr('d', path)
      .attr('fill', 'none')
      .attr('stroke', 'black');

    // Color based on average value
    const averageValue = d3.mean(vertices, v => v.value);
    svg.style('background-color', d3.interpolateCool(averageValue));

  }, [data]);

  return <svg ref={ref}></svg>;
}
