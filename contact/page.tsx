import Footer from '@/components/Footer';
import React from 'react';

const Page: React.FC = () => {
  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        {/* text */}
        <div className='flex flex-col w-full max-w-[700px]'>
          {/* text */}
          <h2 className='text-white text-center text-[25px] font-semibold mb-12'>
          Support Us Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7614d2] via-orange-400 to-[#7614d2]"> Donations </span>
          </h2>
          {/* text */}
          <form className='flex-1 flex flex-col gap-6 mx-auto '>
            {/* text */}
            <div className='flex gap-x-6'>
              <input type='text' placeholder='name' className='bg-[#7614d2]' />
              <input type='text' placeholder='email' className='bg-[#7614d2]' />
            </div>
            <input type='text' placeholder='subject' className='bg-[#7614d2]' />
            <textarea placeholder='message' className='bg-[#7614d2]'></textarea>
            <button className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-red group bg-orange-400'>
              <span className='text-white group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Donate</span>
              <span className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-200 absolute text-[15px] text-white'> Thank you </span>
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;