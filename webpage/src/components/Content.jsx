import React from 'react'

const Content = () => {
  return (
    <>
    <div>
        <div className="p-5 ">
            <img className='rounded-xl w-full h-100 object-cover' src="https://i.pinimg.com/1200x/05/ca/32/05ca3281ed00a2632c716b0f9db298ce.jpg" alt="" />
        
        <div className='flex flex-col p-1 md:p-5 md:flex md:flex-row'>
            <div className='w-full p-1 md:p-5 md:w-1/2'>
                <h1 className='font-semibold text-black text-3xl md:text-6xl'>What is USD Bloom?</h1>
                <button className='p-4 bg-gray-950 text-white rounded-2xl mt-4 text-xl'>Explore now</button>
            </div>
            <div className='w-full mt-2 p-1 md:p-5 md:w-1/2'>
                <p className='text-2xl md:text-4xl text-gray-500 font-light'>USD Bloom is a yield-bearing stablrcoin that helps your capital grow while staying pegged to the U.S. dollar.</p>
            </div>
        </div>


        <div className="w-full px-5 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                <div className="flex flex-col justify-between min-h-[250px] bg-gradient-to-br from-amber-200 to-amber-100 rounded-3xl p-6 shadow-lg hover:scale-105 transition-all duration-300">
                <h1 className="text-2xl font-bold text-gray-800">
                    Capital that grows
                </h1>
                <p className="text-gray-700 mt-3 leading-relaxed">
                    Earn passive income as your stablecoins are deployed into high-performing DeFi protocols.
                </p>
                </div>

                
                <div className="flex flex-col justify-between min-h-[250px] bg-gradient-to-br from-gray-800 to-gray-700 rounded-3xl p-6 shadow-lg hover:scale-105 transition-all duration-300">
                <h1 className="text-2xl font-semibold text-white">
                    Always liquid, always stable
                </h1>
                <p className="text-gray-300 mt-3 leading-relaxed">
                    Stay fully dollar-pegged with instant access to your funds — no lockups or delays.
                </p>
                </div>

                
                <div className="flex flex-col justify-between min-h-[250px] bg-gradient-to-br from-gray-800 to-gray-700 rounded-3xl p-6 shadow-lg hover:scale-105 transition-all duration-300">
                <h1 className="text-2xl font-semibold text-white">
                    100% hands-free
                </h1>
                <p className="text-gray-300 mt-3 leading-relaxed">
                    No need to manage strategies manually. USD Bloom works in the background for you.
                </p>
                </div>
            </div>
            </div>


            <div className="w-full px-5 py-12">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-center">

                    <div className="w-full lg:w-1/2">
                    <p className="text-xl md:text-4xl text-blue-500 font-semibold mb-2">
                        USD Bloom in Action
                    </p>

                    <h1 className="text-3xl md:text-9xl font-bold text-gray-900 mb-4">
                        Use Cases
                    </h1>

                    <p className="text-gray-600 text-lg leading-relaxed text-base md:text-2xl">
                        USD Bloom offers a variety of use cases for developers, businesses, and treasuries seeking secure and profitable stablecoin integrations.
                    </p>
                    </div>

                    <div className="w-full lg:w-1/2">
                    <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">

                        <img
                        src="https://i.pinimg.com/736x/17/45/15/1745158c2072e09c1e5014e3fe767592.jpg"
                        alt="Business Use Case"
                        className="w-full"
                        />

                        <div className="p-6">
                        <h1 className="text-xl font-semibold text-gray-900 mb-3">
                            Business
                        </h1>

                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                            Boost users by offering USD Bloom, a secure-backed stablecoin with high yields, allowing your customers to earn effortlessly on your platform.
                        </p>

                        <button className="text-blue-600 font-medium hover:underline">
                            Learn more →
                        </button>
                        </div>

                    </div>
                    </div>

                </div>
                </div>



        </div>
    </div>
    </>
  )
}

export default Content
