"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import { set } from 'mongoose';


function Nav() {
    const { data: session } = useSession();

    const [providers, setProviders ] = useState(null);
    const [toggleDropdown, setToggleDropdown] = useState(false);

    useEffect(() => {
        const setUpProviders = async () => {
            const response = await getProviders();

            setProviders(response);
        }

        setUpProviders();
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
            <p className="text-2xl font-bold hidden md:flex">Weavers CRM</p>
        </Link>
        {/* Desktop Nav */}
        <div className="sm:flex hidden">
            {session?.user ? (
                <div className='flex gap-3 md:gap-5>'>
                    <Link href="/add-client" className='black_btn'>
                        Add Client
                    </Link>
                <button type="button" onClick={signOut} className="outline_btn">
                    Sign Out
                </button>
                <Link href="/profile" className='flex gap-2'>

                    <Image src={session?.user.image}
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
            {session?.user ? (
                <div className='flex'>
                    <Image src={session?.user.image}
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
                                href="/add-client"
                                className="dropdown_link"
                                onClick={() => setToggleDropdown(false)}
                            >
                                Add Client
                            </Link>
                            <button type='button'
                            className="mt-5 w-full black_btn"
                                onClick={() => {
                                    setToggleDropdown(false);
                                    signOut();
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
