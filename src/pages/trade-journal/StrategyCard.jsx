import {
  BsGraphUpArrow,
  BsBullseye,
  BsCheckCircleFill,
  BsXCircleFill,
} from "react-icons/bs";
import { FaChartLine } from "react-icons/fa";

function StrategyCard() {
  return (
    <div className="bg-white dark:bg-zinc-800 dark:border-none dark:text-white min-w-65 max-w-80  min-h-52 rounded-2xl  p-4 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-center justify-between flex-col">
          <h1 className="text-[18px] font-bold text-gray-800 dark:text-white">BreakDown Strategy</h1>
          <p className="text-[12px] text-gray-500 dark:text-gray-400 mt-0.5">Intraday Strategy</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 grid-rows-2 gap-2 mt-2">
        <div className="rounded-xl border border-blue-100 bg-blue-50 p-2">
          <div className="flex items-center gap-1 text-blue-600 text-[11px] font-medium">
            <FaChartLine size={12} /><span>Trades</span>
          </div>
          <h2 className="text-[18px] font-bold text-gray-800"> 300</h2>
        </div>

        <div className="rounded-xl border border-green-100 bg-green-50 p-2">
          <div className="flex items-center gap-1 text-green-600 text-[11px] font-medium">
            <BsCheckCircleFill size={12} /> <span>Wins</span>
          </div>
          <h2 className="text-[18px] font-bold text-gray-800 mt-1">  170</h2>
        </div>

        <div className="rounded-xl border border-red-100 bg-red-50 p-2">
          <div className="flex items-center gap-1 text-red-600 text-[11px] font-medium">
            <BsXCircleFill size={12} /> <span>Losses</span>
          </div>
          <h2 className="text-[18px] font-bold text-gray-800 mt-1">130</h2>
        </div>

        <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-2">
          <div className="flex items-center gap-1 text-emerald-600 text-[11px] font-medium">
            <BsBullseye size={12} /> <span>Accuracy</span>
          </div>
          <h2 className="text-[18px] font-bold text-gray-800 mt-1"> 70%</h2>
        </div>

      </div>
    </div>
  );
}

export default StrategyCard;