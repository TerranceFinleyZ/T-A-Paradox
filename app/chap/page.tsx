import React from 'react';
import Image from 'next/image';
import { Lines } from '@/constants';
import Link from 'next/link';


const Page: React.FC = () => {
  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        {/* text */}
        <div className='flex flex-col w-full max-w-[700px]'>
          {/* text */}
          <h2 className='text-orange-400 text-center text-[55px] mb-12'>
          Chapter 3
          </h2>
          <p className="text-white">
          Hello to everyone. I'll skip the usual, "I've never felt comfortable with talking about myself." It seems to be too common a statement these days. Instead, I'll tell you about myself. I've lived all over the United States. From California to Ohio, and from Texas to Nebraska; where I currently reside. I have an Associates of Science in General Academics and a Bachelors of Science in Criminal Justice. Growing up, I enjoyed a great many genres of fiction. My preferred genres are Fantasy and Science Fiction. These are the two main genres I will be writing. My desire in this endeavor, is to earn enough to become a full-time author, and to bring to you many stories, rich in lore and character.
          A promise and a threat from their kidnappers, "complete their Crucible or face the annihilation of Earth." This is the situation 24 young men find themselves in upon waking up in a barren room. What is the Crucible and what awaits them inside it? Who is behind it? And why were they specifically chosen out of the 7 billion people Earth has to offer?
          </p>
        </div>
      </div>

    </div>
  );
};

export default Page;