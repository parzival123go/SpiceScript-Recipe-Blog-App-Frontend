import React from 'react'
import AboutImage from "../../assets/about-image.jpg"
import { Link } from 'react-router'


const AboutSection = () => {
  return (
    <div className='overflow-hidden flex md:flex-row flex-col justify-between items-center sm:my-20 my-4 md:gap-20 gap-12 px-5 lg:px-10' >
            
    
            <div className='text-start sm:w-1/2' >
                <h2 className='text-3xl font-semibold text-secondary sm:text-5xl sm: leading-relaxed' >Welcome to the Spice Script Lab</h2>
                <p className='text-xl mt-4 text-[#5c5c5c]' >
                    At the Spice Script Lab, we believe that every kitchen has a story, and every recipe is a script waiting to be performed. 
                    <br></br><br></br>Whether you're whipping up our signature Pineapple + Smoked Jackfruit Pizza or mastering a quick breakfast, we’re here to 
                    help you turn simple ingredients into culinary blockbusters.
                </p>
                <div className='lg-mt-0 lg:flex-shrink-0' >
                <div className='mt-12 inline-flex' >
                <Link to="/items/697cf61b283198a0c4744ffd" >
                    <button className='py-4 px-8 bg-btnColor text-white hover:text-white w-full transition 
                    ease-in duration-200 text-center text-base font-semibold border boder-[#9c702a] 
                    focus:outline-none rounded-lg' >View Recipe</button>
                </Link>
                </div>
                </div>
            </div>

            <div className='relative' >
                <img src={AboutImage} alt='About Image' className='rounded-md' ></img>
            </div>
        </div>
  )
}

export default AboutSection