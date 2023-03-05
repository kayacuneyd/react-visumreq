import React, { useState } from 'react';
import { Countries } from "../data";
import FooterSection from './FooterSection';



export default function HeroSection() {
  const [query, setQuery] = useState("");
  return (
    
    <>
    <div className="relative">
        <div className="sticky top-0 h-screen flex flex-col items-center justify-between pt-5 pb-5 bg-blue-400">
                <h1 className="lg:text-7xl md:text-5xl sm:text-4xl pb-8 text-center">
                  Visa Information For Foreigners - Republic of Türkiye
                </h1>
                <input 
                    type="text" 
                    onChange={(e) => setQuery(e.target.value)} 
                    placeholder="Search" 
                    className="input input-bordered sm:input-sm md:input-md lg:input-lg lg:w-96 md:w-72 sm:w-3/4" 
                />
                <div className="align-middle justify-center flex flex-col">
                    <p className="text-center mb-2">Write the country. Then click the button below to see it!</p>
                    <a href='#answer' className="bg-green-300 px-3 py-1 text-red-500 rounded-lg mt-2 text-center pt-2 pb-2">Click me!</a>
                </div>
        </div>
        
    </div>
    
    <div className="relative dataContainer">

    {
        Countries
            .filter((val) =>{
                if (query.length > 3) {
                    return val.ulke.toLowerCase().includes(query)
                }
            }).map((val) => {
                if(query.length > 3){
                    return <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-green-400" key={val.id}>
                        <div id='answer' className="w-full max-w-sm overflow-hidden py-6 px-3 rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-xl">
                            <p>There are {val.ulke.length} answer</p>
                            <p className="text-5xl text-center">
                                {val.bayrak} | {val.ulke}
                            </p>
                            
                            <h3 className="mt-2 text-center text-xl text-gray-500 bg-gray-200 px-10 py-2 ">E-visa: {val.e_vize}</h3>

                            <p className="mt-2 text-center text-2xl text-gray-500">
                            <span className="bg-red-500 px-3 py-1 text-green-300 mr-1">Q</span> 
                            Can the citizens of {val.ulke} travel to Turkey if they hold an 
                            ordinary passport without visa?   
                            <span className="bg-green-300 px-3 py-1 text-red-500 ml-1">{val.umuma_mahsus}</span>
                            </p>

                            <p className="mt-2 text-center text-2xl text-gray-500">
                            <span className="bg-red-500 px-3 py-1 text-green-300 mr-1">Q</span> 
                            Can the citizens of {val.ulke} travel to Turkey if they hold an 
                            ordinary passport without visa?   
                            <span className="bg-green-300 px-3 py-1 text-red-500 ml-1">{val.resmi_pasaport}</span>
                            </p>
                        </div>
                    </div>
                }
        })
    }
        
    </div>
    <FooterSection/>
        
    </>
  )
}
