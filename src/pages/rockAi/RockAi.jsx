import Navbar from "../others/navbar";
import { IoSend } from "react-icons/io5";

function RockAi() {
 
return(<>
<Navbar></Navbar>
<div className="rock-ai h-900 w-full bg-white pt-13 sm:pt-20 dark:bg-black">
  {/* top area */}
  <div className="top-area h-15 w-full flex items-center pl-4 gap-4">
    <div className="index-anlaysis h-10 min-w-25 cursor-pointer hover:shadow-xl transition-shadow  flex justify-center items-center p-2 rounded-2xl dark:text-white shadow-md border border-gray-300 dark:border-none  dark:bg-zinc-800"> Index</div>
    <div className="index-anlaysis h-10 min-w-25 cursor-pointer hover:shadow-xl transition-shadow  flex justify-center items-center p-2 rounded-2xl dark:text-white shadow-md border border-gray-300 dark:border-none  dark:bg-zinc-800"> Stocks</div>
  </div>

  {/* chat boat chat area */}
  <div className="chat-boat min-h-30 ">
    


  </div>
  {/* chatbot message send area */}
  <div className="sendmessage-area gap-3 p-2 flex justify-center items-center h-15 w-full fixed  sm:bottom-5">
   <input type="text" name="" placeholder="Ask your question" id="" className="h-10 w-[90%] bg-gray-100 pl-5 rounded-2xl" />
   <IoSend className="text-2xl text-green-700"></IoSend>
  </div>


</div>
</>)
}

export default RockAi;