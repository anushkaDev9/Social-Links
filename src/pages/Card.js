import React from 'react'
import Profile from '../components/profile.jpeg'
const Card = () => {
  return (
    <div
      className="bg-gray w-[80%] rounded-[3%] lg:w-[20%] md:h-[43rem]
    h-[33rem] mt-[15%] ml-[11%] lg:mt-[8%] lg:ml-[40%] md:w-[50%] md:ml-[25%]"
    >
      <img
        src={Profile}
        alt="profile"
        className="rounded-[50%] w-[25%] ml-[25%] lg:w-[5%] lg:ml-[7%] lg:mt-[2%]
        mt-[5%] absolute md:w-[18%] md:ml-[15%]"
      />

      <h3
        className="mt-[35%] 
      absolute ml-[15%] font-medium lg:mt-[8.5%] lg:ml-[4%] 
       text-white text-[1.5rem] font-inter md:mt-[28%] md:ml-[13%]"
      >
        Jessica Randall
      </h3>
      <p
        className="absolute mt-[46%] ml-[19%] text-[0.8rem] md:mt-[34%] md:ml-[15%]
       text-yellowGreen font-inter font-bold lg:mt-[11%] lg:ml-[5%] "
      >
        London,United Kingdom
      </p>
      <p
        className="absolute mt-[58%] ml-[9%] text-[0.8rem] md:mt-[40%] md:ml-[10%]
       text-white font-inter lg:mt-[14%] lg:ml-[2.5%] "
      >
        "Front-end developer and avid reader"
      </p>
      <a href="#" className=" hover:text-black">
        <div
          className="bg-greyLight w-[70%] lg:w-[15%] lg:mt-[17%] lg:ml-[2.5%] md:mt-[47%] md:w-[40%]
      absolute rounded-[4px] mt-[70%] h-[2rem] ml-[4.5%] hover:bg-yellowGreen hover:text-black"
        >
          <p className="text-center mt-[3%] hover:text-black font-medium text-white text-[0.8rem] font-inter">
            GitHub
          </p>
        </div>
      </a>
      <a href="#">
        <div
          className="bg-greyLight w-[70%] lg:w-[15%] lg:mt-[20%] lg:ml-[2.5%]  hover:bg-yellowGreen hover:text-black
      absolute rounded-[4px] mt-[84%] h-[2rem] ml-[4.5%]  md:mt-[55%] md:w-[40%]"
        >
          <p className="text-center mt-[3%] hover:text-black font-medium text-white text-[0.8rem] font-inter">
            Frontend Mentor
          </p>
        </div>
      </a>
      <a href="#">
        <div
          className="bg-greyLight w-[70%] lg:w-[15%] lg:mt-[23%] lg:ml-[2.5%] hover:bg-yellowGreen hover:text-black
      absolute rounded-[4px] mt-[98%] h-[2rem] ml-[4.5%] md:mt-[63%] md:w-[40%]"
        >
          <p className="text-center mt-[3%] hover:text-black font-medium text-white text-[0.8rem] font-inter">
            LinkedIn
          </p>
        </div>
      </a>
      <a href="#">
        <div
          className="bg-greyLight w-[70%] lg:w-[15%] lg:mt-[26%] lg:ml-[2.5%]  hover:bg-yellowGreen hover:text-black
      absolute rounded-[4px] mt-[113%] h-[2rem] ml-[4.5%] md:mt-[70%] md:w-[40%]"
        >
          <p className="text-center mt-[3%] hover:text-black font-medium text-white text-[0.8rem] font-inter">
            Twitter
          </p>
        </div>
      </a>
      <a href="#" className="">
        <div
          className="bg-greyLight w-[70%] lg:w-[15%] lg:mt-[29%] lg:ml-[2.5%] md:mt-[78%] md:w-[40%]
      absolute rounded-[4px] mt-[127%] h-[2rem]  ml-[4.5%] hover:bg-yellowGreen hover:text-black"
        >
          <p
            className="text-center mt-[3%] hover:text-black
           font-medium text-white text-[0.8rem] 
           font-inter"
          >
            Instagram
          </p>
        </div>
      </a>
    </div>
  );
}

export default Card
