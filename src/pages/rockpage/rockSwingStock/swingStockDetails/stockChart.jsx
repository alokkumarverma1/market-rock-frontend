import React, { useEffect, useRef } from "react";
import { createChart, CandlestickSeries } from "lightweight-charts";

function StockChart({ name }) {
  const chartRef = useRef();

  useEffect(() => {
    const chart = createChart(chartRef.current, {
      width: chartRef.current.clientWidth,
      height: 400,
      layout: {
        background: { color: "#ffffff" },
        textColor: "#000",
      },
    });

    const candleSeries = chart.addSeries(CandlestickSeries) 

    candleSeries.setData([
      { time: "2024-01-01", open: 100, high: 110, low: 95, close: 105 },
      { time: "2024-01-02", open: 105, high: 120, low: 102, close: 115 },
      { time: "2024-01-03", open: 115, high: 118, low: 108, close: 110 },
    ]);
    return () => chart.remove();
  }, []);

  return (
    <div className="w-full bg-white rounded-xl shadow-md p-4">
      
      {/* Stock Name */}
      <h2 className="text-xl font-semibold mb-3 text-gray-800">
        📊 {name}
      </h2>

      {/* Chart */}
      <div ref={chartRef} className="w-full h-[400px]" />
    </div>
  );
}

export default StockChart;