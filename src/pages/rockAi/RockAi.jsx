import Navbar from "../others/navbar";
import { IoSend } from "react-icons/io5";
import { sendMessage } from "../service/rockAiService";
import { useState , useEffect , useRef } from "react";

function RockAi() {

  const [message , setMessage] = useState({role:"" , message:""});
  const [think , setThink] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const chatContainerRef = useRef(null);

  // automatic scroll
 useEffect(() => {
  if (chatContainerRef.current) {
    chatContainerRef.current.scrollTop =
      chatContainerRef.current.scrollHeight;
  }
}, [chatMessages]);
  
  
  // send message
  const send = async()=>{
    setThink(true)
   setChatMessages(pre=> [...pre , {role:"user" , message:message.message}])
   setMessage({message:""});
   const res = await sendMessage(message.message)
   setChatMessages(pre=>[...pre,{role:"ai" , message:res.body}])
  setThink(false)
  }
 
return(<>
<Navbar></Navbar>
<div className="rock-ai h-screen w-full  bg-white pt-11 sm:pt-13 dark:bg-black">
  {/* top area */}
  <div className="top-area h-15 w-full flex items-center pl-4 gap-4">
    <div className="index-anlaysis h-10 min-w-25 cursor-pointer hover:shadow-xl transition-shadow  flex justify-center items-center p-2 rounded-2xl dark:text-white shadow-md border border-gray-300 dark:border-none  dark:bg-zinc-800"> Index</div>
    <div className="index-anlaysis h-10 min-w-25 cursor-pointer hover:shadow-xl transition-shadow  flex justify-center items-center p-2 rounded-2xl dark:text-white shadow-md border border-gray-300 dark:border-none  dark:bg-zinc-800"> Stocks</div>
  </div>

  {/* chat boat chat area */}
  <div ref={chatContainerRef} className="chat-messages overflow-auto h-[70%] p-5 flex flex-col gap-5">
    {
      chatMessages.map((data , key)=>(
       <div key={key} className={`message p-3 rounded-2xl w-fit  ${data.role == "ai" ? "bg-white shadow-md" : "bg-green-100"} shadow`}>{data.message}</div>
      ))
    }
    
  </div>

  {/* chatbot message send area */}
  <div className="sendmessage-area gap-3 p-2 flex justify-center items-center h-15 w-full fixed  sm:bottom-5">
   <input type="text" value={message.message} name="" placeholder="Ask your question" id="" className="h-10 w-[90%] bg-gray-100 pl-5 rounded-2xl" onChange={(e)=> setMessage({message:e.target.value})}/>
  {
  think === false
    ? <IoSend className={`text-2xl text-green-700 ${message.message.trim() === "" ? "hidden" : ""}`} onClick={send} />
    : <div className="w-5 h-5 border-2 border-gray-300 border-t-green-700 rounded-full animate-spin"></div>
  }
 </div>


</div>
</>)
}

export default RockAi;