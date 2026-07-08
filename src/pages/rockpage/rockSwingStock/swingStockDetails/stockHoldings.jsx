import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList } from "recharts";


function StockHoldings({holding}){

     const data = [
    { type: "Promoter",revenue: holding.promoter },
    {type: "Fii", revenue: holding.fii },
    { type: "retail", revenue: holding.dii },
    { type: "other", revenue: holding.public },
  ];


    return(<>
    <div className="stockHoldings w-full h-50]">
     <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} layout="vertical" margin={{ top: 10, right: 20, left:0, bottom: 10 }}>
        <YAxis dataKey={"type"} type="category" tick={{ fontSize: 10 }}/>
        <XAxis type="number" hide width={40} tick={{ fontSize: 10 }}/>
          <Bar dataKey="revenue" fill="#86efac" radius={[0, 6, 6, 0]}>
            <LabelList dataKey="revenue" position="right"  formatter={(value) => `${value} %`}/>
          </Bar>
      </BarChart>

     </ResponsiveContainer>


    </div>
    </>)
}

export default StockHoldings;