import T1 from "../assets/T1.jpeg"
import T2 from "../assets/T2.jpeg"
import T3 from "../assets/T3.jpg"
import T4 from "../assets/T4.jpg"

export default function testimonial() {
  return (
    <div className="flex bg-blue-800 m-20 ssm:flex-col lg:flex-row">
      <div className="relative rounded-xl overflow auto p-8 hover:animate-pulse">
        <div className="overflow-hidden relative max-w-md mx-auto bg-white shadow-lg ring-l ring-black/5 
        rounded-xl flex items-center gap-6 dark:bg-slate-800 dark:highlight-white/5">
          <img 
          src={T1}
           className="absolute -left-6 w-28 h-28 rounded-full shadow-lg"
           />
          <div className="min-w-0 py-5 pl-28 pr-5">
          <div className="text-slate-900 font-mediumctext -sm sm:text-base
          truncate dark:text-slate-200">
            Name Goes here
          </div>
          <div className="text-slate-500 font -medium text-sm sm:text-base
          leading-tight truncate dark:text-slate-400">
          Assistant Manager
          </div>
          </div>
        </div>

      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
