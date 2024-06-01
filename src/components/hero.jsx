import React from 'react';
import { BsFacebook, BsGithub, BsInstagram, BsWhatsapp } from 'react-icons/bs'; // Social media icons
import HeroPic from '../assets/kev.jpg'; // Image import

const Hero = () => {
  return (
    <section className='flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white'>
      <div className='lg:w-1/3 ssm:w-fit'>
        <p className='text-4xl mb-5 text-slate-300'>I'm</p>
        <h1 className='text-6xl'>Kevine AWUDI</h1>
        <hr />
        <p className='mt -10 text-xl text-slate-300 font-sans'>
          Yo comment tu vas je m'appelle Kevine, je suis togolais. shvafsga fyugatryguag
          hdsvahv jdfjvdasvhsdvf hfasvgh fvas dghv gafyakufukyw kgfygau wkraurbkyarkkarg
          agjwvv vvvvvvvvvv vvvvvv vvvvvvv vvvvvvvvvfjfgy aegjfjegf gwfa.
        </p>
      </div>
      <div className='flex justify-center items-center lg:w-1/3 ssm:w-fit'>
        <img src={HeroPic} alt="Hero" className='rounded-full border-8 border-white ' style={{ width: '315px', height: '315px' }} />
      </div>
      <div className='w-1/3 ssm:'>
        <p className='text-4xl mb -4'>About Me</p>
        <p className='text-slate-300'>
          Bah, je suis un nouveau dans le domaine de programmage mais on y tient;
           je peneses que par la grace de Dieu ca ira.
        </p>
        <button className='bg-white text-blue-800 px-10 py-2 my-3 rounded-full
        hover:bg-blue-900 hover:text-white'>
          Show More...
        </button>

        <div className='flex mt-5 space-x-4 cursor-pointer'>
           <BsFacebook size={40} className='border-4 hover:border-blue-900 rounded-full'/>
           <BsGithub size={40} className='border-4 hover:border-blue-900 rounded-full'/>
           <BsInstagram size={40} className='border-4 hover:border-blue-900 rounded-full'/>
           <BsWhatsapp size={40} className='border-4 hover:border-blue-900 rounded-full'/>
        </div>
      </div>

    </section>
  );
}

export default Hero;
