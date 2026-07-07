import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList } from "recharts";

function StockFinanceChart({year , revenue}) {
    const chartData = [
    {
      year: year.year1,
      revenue: Number(revenue.year1),
    },
    {
      year: year.year2,
      revenue: Number(revenue.year2),
    },
    {
      year: year.year3,
      revenue: Number(revenue.year3),
    },
    {
      year: year.year4,
      revenue: Number(revenue.year4),
    },
  ];

  return (
    <div className="w-full">
      {/* Chart */}
      <div className="w-full h-70">
        <ResponsiveContainer>
          <BarChart data={chartData} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
            <XAxis dataKey="year" tick={{ fontSize: 10 }}/>
             <YAxis width={30} tick={{ fontSize: 10 }}/>
           <Bar dataKey="revenue" fill="#86efac" radius={[6, 6, 0, 0]}>
           <LabelList dataKey="revenue" position="top" />
           </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}

export default StockFinanceChart;