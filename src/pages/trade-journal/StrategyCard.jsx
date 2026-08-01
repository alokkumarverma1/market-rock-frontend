import { BsGraphUpArrow } from "react-icons/bs";

function StrategyCard() {
  return (
    <>
    <div className="strategy-card border border-green-500 p-3 h-50 transition-shadow duration-100 min-w-65 max-w-80 rounded-2xl shadow-md hover:shadow-xl">
    <h1 className="text-[20px] font-light">BreakDown strategy</h1>
    <p className="text-[13px]">strategy tyep</p>
    <div className="data grid h-20 w-full mt-5 grid-cols-2 gap-1">
        <div className="vlaue rounded-[10px] text-blue-600 bg-blue-100 flex gap-1 justify-center items-center"><p className=" text-[11px]">Trade - </p><h1 className="text-[16px]">300</h1></div>
        <div className="vlaue rounded-[10px] text-green-500 bg-green-100 flex gap-1 justify-center items-center"><p className=" text-[11px]">Win - </p><h1 className="text-[18px]">300</h1></div>
        <div className="vlaue rounded-[10px] text-red-500 bg-red-100 flex gap-1 justify-center items-center"><p className=" text-[11px]">Loss - </p><h1 className="text-[18px]">300</h1></div>
        <div className="vlaue rounded-[10px] bg-green-100 flex gap-1 justify-center items-center"><p className="text-gray-400 text-[11px]">Acuracy - </p><h1 className="text-[18px]">70%</h1></div>  
    </div>


    </div>
    </>
  );
}

export default StrategyCard;