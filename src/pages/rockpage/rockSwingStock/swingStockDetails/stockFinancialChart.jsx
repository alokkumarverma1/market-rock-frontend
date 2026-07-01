import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList } from "recharts";

function StockFinanceChart() {
  const data = [
    { year: "2020", revenue: 500 },
    { year: "2021", revenue: 650 },
    { year: "2022", revenue: 800 },
    { year: "2023", revenue: 950 },
    { year: "2024", revenue: 1200 },
  ];

  return (
    <div className="w-full">
      {/* Chart */}
      <div className="w-full h-70">
        <ResponsiveContainer>
          <BarChart data={data} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
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