import React from 'react'

const Cards = () => {
  return (
    <>
     <div className="w-full h-screen bg-zinc-600 px-16 flex items-start justify-between gap-5 py-20 border-t border-zinc-400">
      <div className="w-1/2 bg-[#004D43] h-[65%] rounded-xl flex justify-center items-center cursor-pointer">
    <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" width={200} alt="" />
      </div>
      <div className="w-1/2 h-[65%] flex gap-5">
        <div className="w-1/2 h-full bg-black rounded-xl flex justify-center items-center gap-5 cursor-pointer">
          <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
        </div>
        <div className="w-1/2 h-full bg-zinc-900/90 rounded-xl flex justify-center items-center cursor-pointer">
          <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" width={120} alt="" />
        </div>
      </div>
    </div> 
    </>
  )
}

export default Cards
