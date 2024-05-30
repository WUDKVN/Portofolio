import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Layout({ children }) {
  return (
    <div className='h-[100vh] w-[100vw] flex flex-col justify-between items-center'>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
