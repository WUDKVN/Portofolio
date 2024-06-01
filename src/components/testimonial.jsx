import T1 from "../assets/T1.jpeg"
import T2 from "../assets/T2.jpg"
import T3 from "../assets/T3.jpeg"
import T4 from "../assets/T4.jpg"

export default function Testimonial() {
  return (
    <div className="bg-black m-10">
      <div className="text-center mt-10 mb-6">
        <h1 className='text-4xl text-white'>TESTIMONIALS</h1>
      </div>
      <div className="flex flex-wrap justify-center items-start gap-4">
        <div className="relative rounded-xl overflow-auto p-6 hover:animate-pulse">
          <div className="overflow-hidden relative max-w-xs bg-white shadow-lg ring-1 ring-black/5 
          rounded-xl flex items-center gap-6 white dark:highlight-white/5">
            <img 
              src={T1}
              className="absolute -left-6 w-24 h-24 rounded-full shadow-lg"
            />
            <div className="min-w-0 py-5 pl-28 pr-5">
              <div className="text-slate-900 font-medium text-sm sm:text-base truncate black">
                Van BALI
              </div>
              <div className="text-black font-medium text-sm sm:text-base leading-tight truncate black">
                Director of TD
              </div>
            </div>
          </div>
        </div>
        <div className="relative rounded-xl overflow-auto p-6 hover:animate-pulse">
          <div className="overflow-hidden relative max-w-xs bg-white shadow-lg ring-1 ring-black/5 
          rounded-xl flex items-center gap-6 white dark:highlight-black/5">
            <img 
              src={T2}
              className="absolute -left-6 w-24 h-24 rounded-full shadow-lg"
            />
            <div className="min-w-0 py-5 pl-28 pr-5">
              <div className="text-slate-900 font-medium text-sm sm:text-base truncate black">
                Anita FALZ
              </div>
              <div className="text-black font-medium text-sm sm:text-base leading-tight truncate black">
                Manager
              </div>
            </div>
          </div>
        </div>
        <div className="relative rounded-xl overflow-auto p-6 hover:animate-pulse">
          <div className="overflow-hidden relative max-w-xs bg-white shadow-lg ring-1 ring-black/5 
          rounded-xl flex items-center gap-6 white dark:highlight-white/5">
            <img 
              src={T3}
              className="absolute -left-6 w-24 h-24 rounded-full shadow-lg"
            />
            <div className="min-w-0 py-5 pl-28 pr-5">
              <div className="text-slate-900 font-medium text-sm sm:text-base truncate black">
                Charly DAVIER
              </div>
              <div className="text-black font-medium text-sm sm:text-base leading-tight truncate black">
                Assistance Manager
              </div>
            </div>
          </div>
        </div>
        <div className="relative rounded-xl overflow-auto p-6 hover:animate-pulse">
          <div className="overflow-hidden relative max-w-xs bg-white shadow-lg ring-1 ring-black/5 
          rounded-xl flex items-center gap-6 white dark:highlight-white/5">
            <img 
              src={T4}
              className="absolute -left-6 w-24 h-24 rounded-full shadow-lg"
            />
            <div className="min-w-0 py-5 pl-28 pr-5">
              <div className="text-slate-900 font-medium text-sm sm:text-base truncate black">
                Harly COOPER
              </div>
              <div className="text-black font-medium text-sm sm:text-base leading-tight truncate black">
                 DEKS CEO 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
