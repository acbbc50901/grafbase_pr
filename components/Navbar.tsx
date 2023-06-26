import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NavLinks } from '@/constants'

import AuthProviders from './AuthProviders'

const Navbar = () => {

  const session = null;

  return (
    <nav>
      <div className=' flexBetween navbar'>
        <div className=' flex-1 flexStart gap-10'>
          <Link href='/'>
            <Image src='/logo.svg' alt='' width={115} height={43}/>
          </Link>
          <ul className=' xl:flex hidden text-small gap-7'>
            {
              NavLinks.map((item) => <Link href={item.href} key={item.key}>{item.text}</Link>)
            }
          </ul>
        </div>
        <div className=' flexCenter gap-4'>
            {
              session ? (
                <>
                  UserPhoto
                  <Link href='/create-project'>
                    Share Work
                  </Link>
                </>
              ) : (
                <AuthProviders/>
              )
            }
        </div>
      </div>
    </nav>
  )
}

export default Navbar