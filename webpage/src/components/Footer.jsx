import React from 'react'

const Footer = () => {
  return (
      <footer className="bg-gray-900 text-gray-300 px-6 py-10 mt-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div>
            <h2 className="text-2xl font-bold text-white mb-3">Bloom</h2>
            <p className="text-sm leading-relaxed">
                Grow your capital with smart DeFi strategies. Safe, stable, and fully automated.
            </p>
            </div>

        
            <div>
            <h3 className="text-white font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
                <li className="hover:text-white cursor-pointer">About</li>
                <li className="hover:text-white cursor-pointer">Careers</li>
                <li className="hover:text-white cursor-pointer">Blog</li>
            </ul>
            </div>

            <div>
            <h3 className="text-white font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
                <li className="hover:text-white cursor-pointer">Docs</li>
                <li className="hover:text-white cursor-pointer">Help Center</li>
                <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            </ul>
            </div>

            <div>
            <h3 className="text-white font-semibold mb-3">Follow Us</h3>
            <div className="flex gap-4 text-lg">
                <span className="hover:text-white cursor-pointer">🌐</span>
                <span className="hover:text-white cursor-pointer">🐦</span>
                <span className="hover:text-white cursor-pointer">💼</span>
            </div>
            </div>

        </div>

        <div className="border-t border-gray-700 mt-8 pt-5 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Bloom. All rights reserved.
        </div>
        </footer>
  )
}

export default Footer
