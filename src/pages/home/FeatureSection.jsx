import React from 'react'
import FeaturedImage from "../../assets/featured.webp"
import { Link } from 'react-router'

const FeatureSection = () => {
  return (
    <div className='overflow-hidden flex md:flex-row flex-col justify-between items-center sm:my-20 my-4 md:gap-20 gap-12 px-5 lg:px-10' >
        <div className='relative' >
            <div className='absolute top-4 left-5 bg-white text-secondary px-3 py-1 rounded-md uppercase tracking-wider' >Featured Recipe</div>
            <img src={FeaturedImage} alt='Featured Image' className='rounded-md' ></img>
        </div>

        <div className='text-start sm:w-1/2' >
            <h2 className='text-3xl font-semibold text-secondary sm:text-5xl sm: leading-relaxed' >Pineapple + Smoked Jackfruit Pizza</h2>
            <p className='text-xl mt-4 text-[#5c5c5c]' >
                Indulge in a vibrant culinary fusion with this Pineapple + Smoked Jackfruit Pizza. 
                This flavorful entree features a satisfying blend of sweet pineapple and savory smoked jackfruit, offering a unique twist on a classic favorite.
                Whether you're a seasoned chef or a kitchen novice, the easy difficulty level ensures a delicious result every time.
            </p>
            <div className='lg-mt-0 lg:flex-shrink-0' >
                
            <div className='mt-12 inline-flex' >
                <Link to="/items/697cf61b283198a0c4744ffd" >
                <button className='py-4 px-8 hover:bg-btnColor text-secondary hover:text-white w-full transition 
                ease-in duration-200 text-center text-base font-semibold border boder-[#9c702a] 
                focus:outline-none rounded-lg' >View Recipe</button>
                </Link>
            </div>
            </div>
        </div>
    </div>
  )
}

export default FeatureSection