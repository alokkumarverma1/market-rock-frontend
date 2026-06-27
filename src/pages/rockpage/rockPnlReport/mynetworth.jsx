import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Jan", profit: 12 },
  { month: "Mar", profit: 18 },
  { month: "Apr", profit: 10 },
  { month: "May", profit: 25 },
  { month: "Jun", profit: 20 },
];

function MonthlyProfitChart() {
  return (
    <div className="w-full h-[280px] sm:h-80 bg-white rounded-3xl p-1 sm:p-4 shadow overflow-hidden">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          tabIndex={-1}
          margin={{
            top: 10,
            right: 10,
            left:0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient
              id="greenGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="0%"
                stopColor="#22c55e"
                stopOpacity={0.45}
              />
              <stop
                offset="100%"
                stopColor="#22c55e"
                stopOpacity={0.05}
              />
            </linearGradient>
          </defs>

          <CartesianGrid
            vertical={false}
            strokeDasharray="3 3"
            opacity={0.2}
          />

          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12 }}
          />

          <YAxis
            width={30}
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12 }}
          />

          <Tooltip
            formatter={(value) => `${value}%`}
            cursor={false}
          />

          <Area
            type="monotone"
            dataKey="profit"
            stroke="#22c55e"
            strokeWidth={3}
            fill="url(#greenGradient)"
            baseValue="dataMin"
            activeDot={{
              r: 5,
              fill: "#22c55e",
              stroke: "#ffffff",
              strokeWidth: 2,
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default MonthlyProfitChart;