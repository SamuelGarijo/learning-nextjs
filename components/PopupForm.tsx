'use client'

import React, { useState, useEffect } from 'react'
import { X } from 'lucide-react'

const PopupForm = () => {
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight
      const pageHeight = document.body.offsetHeight
      if (scrollPosition >= pageHeight / 2 && !showPopup) {
        setShowPopup(true)
        window.removeEventListener('scroll', handleScroll)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [showPopup])

  const handleClose = () => {
    setShowPopup(false)
    // Guardar en sessionStorage para que no reaparezca en esta sesión
    sessionStorage.setItem('popupClosed', 'true')
  }

  if (typeof window !== 'undefined' && sessionStorage.getItem('popupClosed') === 'true') {
    return null
  }

  if (!showPopup) {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-fadeInSlideUp">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-[400px] text-center">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={handleClose}
        >
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold mb-2">Subscribe for Updates</h2>
        <p className="text-gray-600 mb-4">
          Join our mailing list to receive the latest news and offers.
        </p>
        <form
          method="POST"
          action="https://YOUR_MAILCHIMP_URL"
          className="flex flex-col gap-4"
        >
          <input
            type="email"
            name="EMAIL"
            placeholder="Enter your email"
            required
            className="px-4 py-2 border border-gray-300 rounded-md text-base"
          />
          <button
            type="submit"
            className="bg-purple-700 text-white py-2 px-4 rounded-md text-base hover:bg-purple-800 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  )
}

export default PopupForm