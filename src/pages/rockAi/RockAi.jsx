import Navbar from "../others/navbar";
import { IoSend } from "react-icons/io5";
import { FiMic } from "react-icons/fi";
import { sendMessage } from "../service/rockAiService";
import { Link } from "react-router-dom";
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
   speak(res.body)
   setChatMessages(pre=>[...pre,{role:"ai" , message:res.body}])
  setThink(false)
  }

  const speak = (text) => {
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "en-IN";
  speech.rate = 1;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
};
 
return(<>
<Navbar></Navbar>
<div className="rock-ai h-screen w-full  bg-white pt-11 sm:pt-13 dark:bg-black">
  {/* top area */}
  <div className="top-area h-15 w-full flex items-center pl-4 gap-4">
    <Link to={"/AiIndex"}> <div className="index-anlaysis h-10 min-w-25 cursor-pointer hover:shadow-xl transition-shadow  flex justify-center items-center p-2 rounded-2xl dark:text-white shadow-md border border-gray-300 dark:border-none  dark:bg-zinc-800"> Index</div></Link>
    <Link to={"/rockAi/Stocks"}><div className="index-anlaysis h-10 min-w-25 cursor-pointer hover:shadow-xl transition-shadow  flex justify-center items-center p-2 rounded-2xl dark:text-white shadow-md border border-gray-300 dark:border-none  dark:bg-zinc-800"> Stocks</div></Link>
  </div>

  {/* chat boat chat area */}
  <div ref={chatContainerRef} className="chat-messages overflow-auto h-[70%] p-5 flex flex-col gap-5">
    {
     chatMessages.length == 0 ?
      <div className="flex min-h-[250px] items-center justify-center">
                            <div className="max-w-md text-center">
                                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-zinc-200 bg-white text-3xl text-emerald-500 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-xl">◇</div>
                                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Clear your doubts</h2>
                                <p className="mt-3 text-sm leading-6 text-zinc-500">Search any your question and improve your knowledge</p>
                            </div>
      </div>
       :
      chatMessages.map((data , key)=>(
       <div key={key} className={`message p-3 rounded-2xl w-fit  ${data.role == "ai" ? "bg-white shadow-md" : "bg-green-100"} shadow`}>{data.message}</div>
      ))
    }
    
  </div>

  {/* chatbot message send area */}
  <div className="fixed bottom-5 left-0 z-50 flex h-[46px] w-full items-center justify-center gap-3 px-4">
    <div className="flex h-[46px] w-full max-w-3xl items-center rounded-xl border border-zinc-200 bg-white px-4 shadow-sm transition focus-within:border-emerald-500/60 dark:border-zinc-800 dark:bg-zinc-900/80 dark:shadow-2xl dark:shadow-black/20">
        <span className="mr-3 text-lg text-zinc-400 dark:text-zinc-500">✦</span>

        <input type="text" value={message.message} placeholder="Ask your question..." className="w-full bg-transparent text-sm text-zinc-900 outline-none placeholder:text-zinc-400 dark:text-white dark:placeholder:text-zinc-600" onChange={e => setMessage({ message: e.target.value })} />

        {think === false ? (
            <IoSend className={`cursor-pointer text-xl text-emerald-600 transition hover:text-emerald-500 dark:text-emerald-400 ${message.message.trim() === "" ? "hidden" : ""}`} onClick={send} />
        ) : (
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-zinc-300 border-t-emerald-500 dark:border-zinc-700 dark:border-t-emerald-400" />
        )}
    </div>
  
   <div className="h-12 w-12 border border-green-500 bg-white rounded-full flex items-center justify-center shadow-lg  cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-200"> <FiMic className="text-emerald-500 text-xl" /> </div>

</div>

</div>
</>)
}

export default RockAi;