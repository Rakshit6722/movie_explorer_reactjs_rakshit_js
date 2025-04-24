import React from 'react'
import coverImage from '../../assets/images/coverImage5.jpg'

const AuthTemplate = ({ type }) => {
  return (
    <main className="relative flex flex-col items-center h-screen">
      <div className="absolute inset-0 z-0">
        <img src={coverImage} alt="Cover" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#f02c48]/20 via-black/75 to-black/60" />
      </div>
      <div className="absolute top-1/2 left-1/2 z-20 w-full max-w-sm transform -translate-x-1/2 -translate-y-1/2 rounded-lg border border-white/20 bg-white/20 p-8 shadow-xl backdrop-blur-md">
        <div className="mb-6">
          <h1 className="mb-2 text-2xl font-bold text-white">
            {type === 'login' ? 'Sign in' : type === 'register' ? 'Create Account' : ''}
          </h1>
          <div className="h-1 w-12 bg-[#f02c48] rounded-full"></div>
        </div>
        <form className="space-y-4">

          {
            type === 'login' && (
              <>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-md border border-white/30 bg-white/10 p-2.5 text-white backdrop-blur-sm placeholder-white/60 focus:border-[#f02c48] focus:outline-none focus:ring-1 focus:ring-[#f02c48]"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    className="w-full rounded-md border border-white/30 bg-white/10 p-2.5 text-white backdrop-blur-sm placeholder-white/60 focus:border-[#f02c48] focus:outline-none focus:ring-1 focus:ring-[#f02c48]"
                    placeholder="Enter your password"
                  />
                </div>
              </>
            )
          }

          {
            type === 'register' && (
              <div className='flex flex-col gap-3'>
                <div className='flex gap-4'>
                  <div className='w-1/2'>
                    <label htmlFor="firstname" className="mb-1.5 block text-sm font-medium text-white">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      required
                      className="w-full rounded-md border border-white/30 bg-white/10 p-2.5 text-white backdrop-blur-sm placeholder-white/60 focus:border-[#f02c48] focus:outline-none focus:ring-1 focus:ring-[#f02c48]"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className='w-1/2'>
                    <label htmlFor="lastname" className="mb-1.5 block text-sm font-medium text-white">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      required
                      className="w-full rounded-md border border-white/30 bg-white/10 p-2.5 text-white backdrop-blur-sm placeholder-white/60 focus:border-[#f02c48] focus:outline-none focus:ring-1 focus:ring-[#f02c48]"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-md border border-white/30 bg-white/10 p-2.5 text-white backdrop-blur-sm placeholder-white/60 focus:border-[#f02c48] focus:outline-none focus:ring-1 focus:ring-[#f02c48]"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="number" className="mb-1.5 block text-sm font-medium text-white">
                    Mobile Number
                  </label>
                  <input
                    type="number"
                    id="number"
                    name="number"
                    required
                    className="w-full rounded-md border border-white/30 bg-white/10 p-2.5 text-white backdrop-blur-sm placeholder-white/60 focus:border-[#f02c48] focus:outline-none focus:ring-1 focus:ring-[#f02c48]"
                    placeholder="Enter your email"
                  />
                </div>
                <div className='flex gap-4'>
                  <div className='w-1/2'>
                    <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-white">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      required
                      className="w-full rounded-md border border-white/30 bg-white/10 p-2.5 text-white backdrop-blur-sm placeholder-white/60 focus:border-[#f02c48] focus:outline-none focus:ring-1 focus:ring-[#f02c48]"
                      placeholder="Enter your password"
                    />
                  </div>
                  <div className='w-1/2'>
                    <label htmlFor="confirmpassword" className="mb-1.5 block text-sm font-medium text-white">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="confirmpassword"
                      name="confirmpassword"
                      required
                      className="w-full rounded-md border border-white/30 bg-white/10 p-2.5 text-white backdrop-blur-sm placeholder-white/60 focus:border-[#f02c48] focus:outline-none focus:ring-1 focus:ring-[#f02c48]"
                      placeholder="Confirm your password"
                    />
                  </div>
                </div>
              </div>

            )
          }

          <button
            type="submit"
            className="mt-4 w-full rounded-md bg-[#f02c48] py-2.5 px-4 font-medium text-white transition-colors duration-300 hover:bg-[#d01c38] focus:outline-none focus:ring-2 focus:ring-[#f02c48] focus:ring-offset-2 focus:ring-offset-black/30"
          >
            {type === 'login' ? 'Sign in' : 'Create Account'}
          </button>
          <div className="relative mt-6 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            {
              type === 'login' && (
                <div className="relative flex justify-center text-sm">
                  <span className="bg-black/10 backdrop-blur-md px-3 py-0.5 rounded-full text-white">
                    Don't have an account?
                  </span>
                </div>
              )
            }

          </div>
          <div className="mt-5">
            <a
              href={type === 'login' ? '/register' : '/login'}
              className="block w-full rounded-md border border-white/30 bg-white/10 px-4 py-2.5 text-center text-white transition-colors duration-300 hover:bg-white/20"
            >
              {type === 'login' ? 'Create account' : 'Already have an account? Sign in'}
            </a>
          </div>
        </form>
      </div>
    </main>
  );
};

export default AuthTemplate
