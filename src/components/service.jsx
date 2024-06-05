export default function Service() {
  return (
    <div className="bg-black m-10">
      <div className="text-center mt-10 mb-6">
        <h1 className='text-4xl text-white'>SERVICES</h1>
      </div>
      <div className="flex flex-wrap justify-center items-start gap-4">
        <div className="relative rounded-xl overflow-auto p-6 hover:animate-pulse">
          <div className="overflow-hidden relative max-w-xs bg-white shadow-lg ring-1 ring-black/5 
          rounded-xl flex items-center gap-6 white dark:highlight-white/5">
            <img 
              src='../assets/T1.png'
              className="absolute -left-6 w-24 h-24 rounded-full shadow-lg"
            />
             <div className="min-w-0 py-5 pl-28 pr-5">
            <div className="text-slate-900 font-bold text-sm sm:text-base truncate black">
               Programming
              </div>
              <div className="text-black font-bold text-sm sm:text-base leading-tight truncate black">
              Application Design
              </div>
            </div>
          </div>
        </div>
        <div className="relative rounded-xl overflow-auto p-6 hover:animate-pulse">
          <div className="overflow-hidden relative max-w-xs bg-white shadow-lg ring-1 ring-black/5 
          rounded-xl flex items-center gap-6 white dark:highlight-black/5">
            <img 
              src='../assets/T2.jpg'
              className="absolute -left-6 w-24 h-24 rounded-full shadow-lg"
            />
            <div className="min-w-0 py-5 pl-28 pr-5">
            <div className="text-slate-900 font-bold text-sm sm:text-base truncate black">
               Web
              </div>
              <div className="text-black font-bold text-sm sm:text-base leading-tight truncate black">
              Developpement
              </div>
            </div>
          </div>
        </div>
        <div className="relative rounded-xl overflow-auto p-6 hover:animate-pulse">
          <div className="overflow-hidden relative max-w-xs bg-white shadow-lg ring-1 ring-black/5 
          rounded-xl flex items-center gap-6 white dark:highlight-black/5">
            <img 
              src='../assets/T3.jpg'
              className="absolute -left-6 w-24 h-24 rounded-full shadow-lg"
            />
            <div className="min-w-0 py-5 pl-28 pr-5">
            <div className="text-slate-900 font-bold text-sm sm:text-base truncate black">
               Web
              </div>
              <div className="text-black font-bold text-sm sm:text-base leading-tight truncate black">
              Application
              </div>
            </div>
          </div>
        </div>
        <div className="relative rounded-xl overflow-auto p-6 hover:animate-pulse">
          <div className="overflow-hidden relative max-w-xs bg-white shadow-lg ring-1 ring-black/5 
          rounded-xl flex items-center gap-6 white dark:highlight-white/5">
            <img 
              src='../assets/T4.jpg'
              className="absolute -left-6 w-24 h-24 rounded-full shadow-lg"
            />
            <div className="min-w-0 py-5 pl-28 pr-5">
              <div className="text-slate-900 font-bold text-sm sm:text-base truncate black">
               Game
              </div>
              <div className="text-black font-bold text-sm sm:text-base leading-tight truncate black">
              Application
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

