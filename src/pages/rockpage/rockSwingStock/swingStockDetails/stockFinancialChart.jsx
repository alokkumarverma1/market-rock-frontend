import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList } from "recharts";

function StockFinanceChart({year , revenue , profitType}) {

   const chartData = [
  {
    year: year.year1,
    revenue: parseFloat(revenue.year1),
  },
  {
    year: year.year2,
    revenue: parseFloat(revenue.year2),
  },
  {
    year: year.year3,
    revenue: parseFloat(revenue.year3),
  },
  {
    year: year.year4,
    revenue: parseFloat(revenue.year4),
  },
];

  return (
    <div className="w-full">
      {/* Chart */}
      <div className="w-full h-50">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
           <XAxis dataKey="year" tick={{ fontSize: 10 }}/>
           <Bar dataKey="revenue" fill="#86efac" radius={[6, 6, 0, 0]}>
           <LabelList dataKey="revenue" style={{ fontSize: "13px" }}  position="top" formatter={(value) => `${value} ${profitType.type}`}/>
          </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default StockFinanceChart;