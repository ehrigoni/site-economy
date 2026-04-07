'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 font-bold text-xl">
            <span>📊</span>
            <span>Nova Economia</span>
          </Link>

          {/* Menu Items */}
          <div className="flex space-x-1">
            <Link
              href="/"
              className={`px-4 py-2 rounded-md transition-all ${
                pathname === '/'
                  ? 'bg-white text-blue-600 font-semibold'
                  : 'hover:bg-blue-700'
              }`}
            >
              Economy
            </Link>
            <Link
              href="/blog"
              className={`px-4 py-2 rounded-md transition-all ${
                pathname === '/blog'
                  ? 'bg-white text-blue-600 font-semibold'
                  : 'hover:bg-blue-700'
              }`}
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
