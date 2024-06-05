import React, { useState } from 'react';
import { BsGithub, BsInstagram, BsWhatsapp } from 'react-icons/bs'; // Social media icons
import HeroPic from '../assets/kev.jpg'; // Image import
import { FaSnapchat } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import ReadMore from './ReadMore';

const Hero = () => {

  const introText = "Junior software engineer from Togo (West Africa)." +
    "With a passion for innovation and creating new things, I am constantly" +
    "exploring ways to bring fresh ideas to life through technology." +
    "My portfolio showcases some of the projects I've worked on, " +
    "reflecting my dedication to learning and growing in the tech field." +
    "Through these projects, I aim to demonstrate my skills, creativity, and" +
    "commitment to excellence. I hope you enjoy exploring my work as much" +
    "as I enjoyed creating it!"

  const aboutText = "Born in Lomé, Togo, I originally aspired to attend pilot school," +
    "but life redirected my path to engineering." +
    "I have a deep passion for travel and have already explored more than five countries." +
    "I am a God - fearing and honest individual who finds joy in cooking, fashion, and listening to gospel music." +
    "Fitness is important to me, and I enjoy spending time at the gym.I am committed to continually" +
    "improving my mental, spiritual, and physical well - being. For more details or to connect with me," +
    "please find my social media accounts and contact information listed below." +
    "Thank you!"
  return (
    <section className='flex justify-around items-start p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white'>
      <div className='lg:w-1/3 ssm:w-fit'>
        <p className='text-6xl mb-4 text-slate-300 font-bold' style={{ color: 'black' }}>I'm</p>
        <h1 className='text-6xl font-bold' style={{ color: 'black' }}>Kevine AWUDI</h1>
        <hr />
        <div className='text-slate-300' style={{ color: 'black' }}>
    
          <ReadMore text={introText} />
        </div>

      </div>
      <div className='flex justify-center items-center lg:w-1/3 ssm:w-fit'>
        <div>
          <img src={HeroPic} alt="Hero" className='rounded-full border-8 border-black' style={{ width: '400px', height: '400px', color: 'black' }} />


          <div className='flex mt-6 space-x-10 cursor-pointer'>
            <a href="mailto:wudkevin@icloud.com" target="_blank" rel="noopener noreferrer">
              <IoMdMail size={50} className='border-4 hover:border-black rounded-full' style={{ color: 'black' }} />
            </a>
            <a href="https://wa.me/4372381150" target="_blank" rel="noopener noreferrer">
              <BsWhatsapp size={50} className='border-4 hover:border-black rounded-full' style={{ color: 'green' }} />
            </a>
            <a href="https://github.com/WUDKVN" target="_blank" rel="noopener noreferrer">
              <BsGithub size={50} className='border-4 hover:border-black rounded-full' style={{ color: 'black' }} />
            </a>
            <a href="https://www.instagram.com/wud_kvn___" target="_blank" rel="noopener noreferrer">
              <BsInstagram size={50} className='border-4 hover:border-black rounded-full' style={{ color: 'red' }} />
            </a>
            <a href="https://www.snapchat.com/wud_kvn1" target="_blank" rel="noopener noreferrer">
              <FaSnapchat size={50} className='border-4 hover:border-black rounded-full' style={{ color: 'yellow' }} />
            </a>

          </div>

        </div>

      </div>


      <div className='lg:w-1/3 ssm:w-fit'>

        <h1 className='text-5xl mb-4 font-bold' style={{ color: 'black' }}>About Me</h1>
        <div className='text-slate-300' style={{ color: 'black' }}>
          <ReadMore text={aboutText} />
        </div>

        <div className='mt-4'>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className='text-blue-600 hover:text-blue-800 underline'
          >
            Download my Resume (PDF)
          </a>
        </div>

      </div>
    </section>
  );
}

export default Hero;
