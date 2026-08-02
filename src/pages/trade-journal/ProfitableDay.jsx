import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
} from "recharts";

function ProfitableDays() {
  const data = [
    { day: "Mon", trades: 19 },
    { day: "Tue", trades: 16 },
    { day: "Wed", trades: 7 },
    { day: "Thu", trades: 3 },
    { day: "Fri", trades: 10 },
  ];

  return (
    <div className="w-full h-full bg-white rounded-2xl border border-gray-200 shadow-sm p-4">

      {/* Header */}
      <div className="mb-3">
        <p className="text-xs text-gray-500">
          Trades performed on each weekday
        </p>
      </div>

      {/* Chart */}
      <div className="h-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 10,
              left: -40,
              bottom: 20,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#e5e7eb"
            />

            <XAxis
              dataKey="day"
              height={30}
              tick={{ fontSize: 10, fill: "#6b7280" }}
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              tick={{ fontSize: 12, fill: "#6b7280" }}
              tickLine={false}
              axisLine={false}
            />

            <Tooltip
              cursor={{ fill: "#f0fdf4" }}
              contentStyle={{
                borderRadius: "10px",
                border: "1px solid #d1fae5",
                boxShadow: "0 8px 20px rgba(0,0,0,.08)",
              }}
            />

            <Bar
              dataKey="trades"
              fill="#22c55e"
              radius={[8, 8, 0, 0]}
              animationDuration={800}
            >
              <LabelList
                dataKey="trades"
                position="top"
                style={{
                  fill: "#374151",
                  fontSize: 12,
                  fontWeight: 600,
                }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}

export default ProfitableDays;