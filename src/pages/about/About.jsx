import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";

const About = () => {
  return (
    <section className='px-6 lg:px-12 py-20' >
        <h1 className='text-center text-3xl pt-10 pb-4 font-semibold text-secondary sm:text-6xl sm:leading-relaxed' >About</h1>
        <p className='text-center sm:w-1/2 mx-auto mb-20' >
            At the Spice Script Lab, we believe that every kitchen has a story, and every recipe is a script waiting to be performed.</p>

            <article className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
                <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
                    <svg
                    className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
                    viewBox="0 0 100 100"
                    fill="currentColor"
                    preserveAspectRatio="none slice"
                    >
                    <path d="M50 0H100L50 100H0L50 0Z" />
                    </svg>
                    <img
                    className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt=""
                    />
                </div>
                <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
                    <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                        Brand new
                    </p>
                    <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                        Everything you
                        <br className="hidden md:block" />
                        can imagine{' '}
                        <span className="inline-block text-deep-purple-accent-400">
                        is real
                        </span>
                    </h2>
                    <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                        quae. explicabo.
                    </p>
                    <div className="flex items-center">
                        <a
                        href="/"
                        className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                        >
                        Get started
                        </a>
                        <a
                        href="/"
                        aria-label=""
                        className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
                        >
                        Learn more
                        </a>
                    </div>
                    </div>
                </div>
                </article>

            <div className='container mx-auto px-6 py-40' >
                <div className='flex flex-col md:flex-row items-center justify-between relative-w-100 h-auto md:h-64 bg-white shadow-2xl rounded-lg p-8' >
                    <div className='w-8/12 text-2xl' >
                        <FaQuoteLeft className='float-left mr-2' />
                    <span className='flex' >SpiceScript is a React-powered recipe blog that blends a modern frontend with a 
                        robust MongoDB backend to deliver kitchen-tested culinary scripts directly to food enthusiasts.</span>
                     </div>
                     <div  className='relative shadow-md font-medium my-5 py-2 px-4 text-white cursor-pointer
                     bg-yellow-600 hover:bg-yellow-500 rounded text-lg text-center w-48'>
                        <span className='absolute right-0 top-0 animate-ping inline-flex rounded-full
                        h-3 w-3 bg-yellow-600'></span>
                        Call Now
                     </div>
                </div>
            </div>
    </section>
  )
}

export default About