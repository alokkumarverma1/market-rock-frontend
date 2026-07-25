import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  LabelList,
} from "recharts";

function StockHoldings({ holding }) {
  const data = [
    { type: "Promoter", revenue: Number(holding?.promoter || 0) },
    { type: "FII", revenue: Number(holding?.fii || 0) },
    { type: "Retail", revenue: Number(holding?.dii || 0) },
    { type: "Other", revenue: Number(holding?.public || 0) },
  ];

  return (
    <div className="stockHoldings w-full h-[200px] ">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 20, left: 0, bottom:0}}>
          <XAxis dataKey="type" tick={{ fontSize: 12 }} />
          <Bar dataKey="revenue" fill="#86efac" radius={[6, 6, 0, 0]}>
            <LabelList dataKey="revenue" position="top" formatter={(value) => `${value}%`}/>
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default StockHoldings;