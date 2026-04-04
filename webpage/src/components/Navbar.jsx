import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className="flex items-center justify-between px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 shadow-md">

            <div className="logo">
                <h3 className="text-2xl font-bold text-white tracking-wide cursor-pointer">
                Bloom
                </h3>
            </div>

            <div className="content hidden md:flex items-center gap-8 text-white font-medium">
                <p className="cursor-pointer hover:text-yellow-300 transition duration-300">Home</p>
                <p className="cursor-pointer hover:text-yellow-300 transition duration-300">About Us</p>
                <p className="cursor-pointer hover:text-yellow-300 transition duration-300">Trending</p>
                <p className="cursor-pointer hover:text-yellow-300 transition duration-300">Profile</p>
                <p className="cursor-pointer hover:text-yellow-300 transition duration-300">Contact Us</p>
            </div>
            
            <div className="search relative">
                <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 pl-10 rounded-full outline-none border-none bg-white/20 text-white placeholder-gray-200 backdrop-blur-md focus:bg-white/30 transition duration-300"
                />
                <span className="absolute left-3 top-2.5 text-gray-200">
                🔍
                </span>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
