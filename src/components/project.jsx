
export default function Project() {
  return (
   <>
     <div className='bg-black m-20 max-w-full'>
         <div className='grid justify-items-center n-10'>
            <h1 className='text-4xl text-white nt-10'>PROJECTS</h1>
         </div>

         <div>
            <div className='grid grid-cols-2 gap-4 p-5'>
                 <div className='max-w-md mx-auto bg-white rounded-xl
                 shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse'>

                  <div className='md:flex'>
                     <div className='p-8'>
                        <div className='uppercase tracking-wide text-sm to-blue-500
                        font-bold'>
                          TABLE SHOW
                        </div>
                        <a href='http://studentweb.cencol.ca/kawudi/table/assignment1.html' target="_blank" rel="noopener noreferrer" 
                        style={{ color: 'blue', textDecoration:'underline' }}>View Project...</a>
                         <p className='mt-2 text-slate-500'>
                         I created a project that dynamically generates a table based on the number of columns entered by the user.
                        </p>
                     </div>
                     <div className='md:shrink-0 p-5'>
                         <img src='../assets/project1.png' alt="Project1" width={250} height={200} />
                     </div>
                  </div>

                 </div>
              
                 <div className='max-w-md mx-auto bg-white rounded-xl
                 shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse'>

                  <div className='md:flex'>
                  <div className='md:shrink-0 p-5'>
                         <img src='../assets/project2.jpeg' alt="Project2" width={250} height={200} />
                     </div>
                     <div className='p-8'>
                        <div className='uppercase tracking-wide text-sm to-blue-500
                        font-bold'>
                          Real Estate website
                        </div>
                        <a href='http://studentweb.cencol.ca/kawudi/estate/home.html' style={{ color: 'blue', textDecoration:'underline' }} 
                        target="_blank" rel="noopener noreferrer">View Project...</a>
                        <p className='mt-2 text-slate-500'>
                        I created a Real Estate project that allows users to book appointments online.
                        </p>
                     </div>
                    
                  </div>

                 </div>

            
            </div>
            <hr/>
            <div className='grid grid-cols-2 gap-4 p-5'>
                 <div className='max-w-md mx-auto bg-white rounded-xl
                 shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse'>

                  <div className='md:flex'>
                     <div className='p-8'>
                        <div className='uppercase tracking-wide text-sm to-blue-500
                        font-bold'>
                          Movie Home Page
                        </div>
                        <a href='http://studentweb.cencol.ca/kawudi/bug/index.html' style={{ color: 'blue', textDecoration:'underline' }} 
                        target="_blank" rel="noopener noreferrer">View Project...</a>
                        <p className='mt-2 text-slate-500'>
                        I created a movie website homepage that features the latest releases, trailers, and movie details.
                        </p>
                     </div>
                     <div className='md:shrink-0 p-5'>
                         <img src='../assets/project3.png' alt="Project3" width={250} height={200} />
                     </div>
                  </div>

                 </div>
              
                 <div className='max-w-md mx-auto bg-white rounded-xl
                 shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse'>

                  <div className='md:flex'>
                  <div className='md:shrink-0 p-5'>
                         <img src='../assets/project4.png' alt="Project4" width={250} height={200} />
                     </div>
                     <div className='p-8'>
                        <div className='uppercase tracking-wide text-sm to-blue-500
                        font-bold'>
                          Bug Smasher Game 
                        </div>
                        <a href='http://studentweb.cencol.ca/kawudi/bug/index.html' style={{ color: 'blue', textDecoration:'underline' }} 
                        target="_blank" rel="noopener noreferrer">View Project...</a>
                        <p className='mt-2 text-slate-500'>
                        I created a Bug Smasher Game where players score points by clicking on moving bugs to squash them.
                        </p>
                     </div>
                    
                  </div>

                 </div>

            
            </div>
         </div>
     </div>
   </>
  )
}
