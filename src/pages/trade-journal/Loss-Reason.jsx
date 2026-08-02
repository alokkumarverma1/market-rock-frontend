import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  LabelList,
  Cell,
} from "recharts";

function LossReason() {
  const reason = [
    { reason: "Over", value: 19 },
    { reason: "NoSetup", value: 16 },
    { reason: "FOMO", value: 7 },
    { reason: "Tips", value: 3 },
    { reason: "Other", value: 10 },
  ];

  const colors = [
    "#ef4444",
    "#f87171",
    "#fb7185",
    "#fca5a5",
    "#fecaca",
  ];

  return (
    <div className="w-full h-full bg-white p-4 rounded-2xl shadow-md border border-gray-100">

      {/* Header */}
      <div className="mb-4">
        <p className="text-sm text-gray-500">
          Top reasons behind losing trades
        </p>
      </div>

      <ResponsiveContainer  width="100%" height="100%" >
        <BarChart data={reason} margin={{ top: 20, right: 10, left: -40, bottom: 20 }}>
          <CartesianGrid
            strokeDasharray="4 4"
            vertical={false}
            stroke="#f1f5f9"
          />

          <XAxis
            dataKey="reason"
            tick={{ fontSize:10 }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12 , }}
          />

          <Tooltip
            cursor={{ fill: "#f8fafc" }}
            contentStyle={{
              borderRadius: "12px",
              border: "1px solid #e5e7eb",
              boxShadow: "0 6px 18px rgba(0,0,0,.08)",
            }}
          />

          <Bar
            dataKey="value"
            radius={[10, 10, 0, 0]}
            animationDuration={900}
          >
            {reason.map((_, index) => (
              <Cell key={index} fill={colors[index]} />
            ))}

            <LabelList
              dataKey="value"
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
  );
}

export default LossReason;