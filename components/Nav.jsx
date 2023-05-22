"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import { set } from 'mongoose';


function Nav() {
    const isUserLoggedIn = true;
    const [providers, setProviders ] = useState(null);
    const [toggleDropdown, setToggleDropdown] = useState(false);

    useEffect(() => {
        const setProviders = async () => {
            const response = await getProviders();

            setProviders(response);
        }
        
        setProviders();
    }, []) 


  return (
    <nav className="flex-between w-full mb-16 pt-3">
        <Link href="/" className='flex gap-2 flex-center'>
            <Image src="/assets/images/logo.svg"
            alt="Promptopy Logo"
            width={30}
            height={30}
            className='object-contain'
            />
            <p className="text-2xl font-bold hidden md:flex">Promptopy</p>
        </Link>
        {/* Desktop Nav */}
        <div className="sm:flex hidden">
            {isUserLoggedIn ? (
                <div className='flex gap-3 md:gap-5>'>
                    <Link href="/create-prompt" className='black_btn'>
                        Create Prompt
                    </Link>
                <button type="button" onClick={signOut} className="outline_btn">
                    Sign Out
                </button>
                <Link href="/profile" className='flex gap-2'>

                    <Image src="/assets/images/logo.svg"
                    alt="Profile"
                    width={37}
                    height={37}
                    className='rounded-full object-contain'
                    />
                </Link>
                </div>
            ) : (
                <>
                    {providers && Object.values(providers).map((provider) => (
                        <button
                            type="button"
                            key={provider.name}
                            onClick={() => signIn(provider.id)}
                            className='black_btn'
                        >
                            Sign In
                        </button>
                    ))}
                </>
            )
            }
        </div>
        {/* Mobile Nav */}
        <div className="sm:hidden flex relative">
            {isUserLoggedIn ? (
                <div className='flex'>
                    <Image src="/assets/images/logo.svg"
                    alt="Profile"
                    width={37}
                    height={37}
                    className='rounded-full object-contain'
                    onClick={() => setToggleDropdown((prevState) => !prevState)}
                    />
                    {toggleDropdown && (
                        <div className='dropdown'>
                            <Link 
                                href="/profile"
                                className="dropdown_link"
                                onClick={() => setToggleDropdown(false)}
                            >
                                My Profile
                            </Link>
                            <Link 
                                href="/create-prompt"
                                className="dropdown_link"
                                onClick={() => setToggleDropdown(false)}
                            >
                                Create Prompt
                            </Link>
                            <button type='button' 
                            className="mt-5 w-full black_btn"
                                onClick={() => {
                                signOut();
                                setToggleDropdown(false);
                            }}>
                                Sign Out
                            </button>
                        </div>
                    )}
                </div>
            ):(
                <>
                    {providers && Object.values(providers).map((provider) => (
                        <button
                            type="button"
                            key={provider.name}
                            onClick={() => signIn(provider.id)}
                            className='black_btn'
                        >
                            Sign In
                        </button>
                    ))}
                </>
            )
            }
        </div>
    </nav>
  )
}

export default Nav