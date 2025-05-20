import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    Drawer,
    DrawerContent,
    DrawerTrigger,
} from "@/components/ui/drawer";

// Constants
const NAVIGATION_ITEMS = [
    { path: '/', label: 'home' },
    { path: '/works', label: 'works' },
    { path: '/about-me', label: 'about-me' },
    { path: '/contacts', label: 'contacts' },
] as const;

const SOCIAL_LINKS = [
    {
        href: 'https://github.com',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
            </svg>
        ),
        label: 'GitHub'
    },
    {
        href: 'https://dribbble.com',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm7.938 5.5a10.203 10.203 0 012.262 6.425c-3.3-.75-6.325-.788-9.037-.238a39.265 39.265 0 00-.988-2.125c2.95-1.213 5.387-2.925 7.763-4.062zM12 1.5c2.475 0 4.738.9 6.488 2.375-2.15 1.025-4.375 2.587-7.113 3.675A53.487 53.487 0 008.687 1.9 10.424 10.424 0 0112 1.5zM6.925 2.688c.575 1.125 1.725 3.3 3.238 6.275a23.203 23.203 0 00-8.238 1.075 10.378 10.378 0 015-7.35zm-5.413 9.25c0-.138 0-.275.013-.413 1.125-.25 3.55-.725 7.238-.725 1.175 0 2.4.088 3.662.25-.2.463-.388.9-.575 1.338-3.475 1.1-6.762 3.725-8.5 5.95a10.434 10.434 0 01-1.838-6.4zm4.025 7.375c1.55-2 4.537-4.375 7.825-5.325 1.037 2.7 1.875 5.675 2.25 8.75a10.424 10.424 0 01-10.075-3.425zm11.988 2.475c-.4-2.875-1.188-5.65-2.15-8.175 2.425-.425 5.188-.325 8.137.35a10.44 10.44 0 01-5.987 7.825z" />
            </svg>
        ),
        label: 'Dribble'
    },
    {
        href: 'https://figma.com',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z" />
            </svg>
        ),
        label: 'Figma'
    },
] as const;

// Components
const Logo = () => (
    <div className='flex items-center gap-2'>
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 0.5H8V4.5H4H0V8.5V12.5V16.5H4H8V12.5H12H16V8.5V4.5V0.5H12ZM4 12.5H8V8.5H12V4.5H8V8.5H4V12.5Z" fill="white" />
        </svg>
        <h3 className='text-xl font-bold text-beauty-pink'>MT</h3>
    </div>
);

const DesktopNav = () => {
    const [language, setLanguage] = React.useState('EN');
    const location = useLocation();
    
    return (
        <nav className='hidden md:flex items-center gap-6'>
            <ul className='flex items-center gap-6'>
                {NAVIGATION_ITEMS.map(({ path, label }) => (
                    <li key={path} className='flex items-center'>
                        <Link
                            to={path}
                            className={`text-sm text-cadet-blue font-medium transition-colors hover:text-white ${location.pathname === path ? 'text-white' : ''}`}
                        >
                            <label className='text-turquoise'>#</label>{label}
                        </Link>
                    </li>
                ))}
                <div
                    className="flex items-center gap-2 hover:text-primary text-sm leading-[24px]"
                    onClick={() => setLanguage(language === 'EN' ? 'VI' : 'EN')}
                    aria-label={`Change language to ${language === 'EN' ? 'Vietnamese' : 'English'}`}
                >
                    {language}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M6 9l6 6 6-6" />
                    </svg> 
                </div>
            </ul>
        </nav>
    );
};

const MobileNav = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void }) => {
    const [language, setLanguage] = React.useState('EN');

    return (
        <nav className='md:hidden'>
            <Drawer open={isOpen} onOpenChange={setIsOpen}>
                <DrawerTrigger asChild>
                    {!isOpen ? (
                        <button
                            className='text-sm font-medium transition-colors hover:text-primary relative w-8 h-8 flex items-center justify-center'
                            aria-label={isOpen ? 'Close menu' : 'Open menu'}
                        >
                            <div className={`absolute transform transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180 opacity-100' : 'rotate-0 opacity-0'}`}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <rect width="1" height="1" transform="matrix(1 0 0 -1 11 12)" fill="#D9D9D9" />
                                    <rect x="3" y="19.9706" width="24" height="2" transform="rotate(-45 3 19.9706)" fill="#D9D9D9" />
                                    <rect x="4" y="3" width="24" height="2" transform="rotate(45 4 3)" fill="#D9D9D9" />
                                </svg>
                            </div>
                            <div className={`absolute transform transition-transform duration-300 ease-in-out ${!isOpen ? 'rotate-0 opacity-100' : '-rotate-180 opacity-0'}`}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <rect y="5" width="24" height="2" fill="#D9D9D9" />
                                    <rect x="9" y="12" width="15" height="2" fill="#D9D9D9" />
                                </svg>
                            </div>
                        </button>
                    ) : null}
                </DrawerTrigger>
                <DrawerContent className="h-full w-[300px] bg-zinc-900 text-white !border-none !rounded-none">
                    <div className="flex flex-col h-full p-6">
                        <div className="flex justify-between items-center mb-8">
                            <span className="text-xl font-bold">MT</span>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 hover:text-primary"
                                aria-label="Close menu"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                    <path d="M18 6L6 18M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <nav className="space-y-6">
                            {NAVIGATION_ITEMS.map(({ path, label }) => (
                                <Link
                                    key={path}
                                    to={path}
                                    className={`block text-2xl text-cadet-blue font-medium transition-colors hover:text-white ${location.pathname === path ? 'text-white' : ''}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    <label className='text-turquoise'>#</label>{label}
                                </Link>
                            ))}
                        </nav>

                        <div className="mt-auto">
                            <button
                                className="flex items-center gap-2 mb-6 hover:text-primary"
                                onClick={() => setLanguage(language === 'EN' ? 'VI' : 'EN')}
                                aria-label={`Change language to ${language === 'EN' ? 'Vietnamese' : 'English'}`}
                            >
                                {language}
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                    <path d="M6 9l6 6 6-6" />
                                </svg>
                            </button>

                            <div className="flex gap-4">
                                {SOCIAL_LINKS.map(({ href, icon, label }) => (
                                    <a
                                        key={href}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-primary"
                                        aria-label={label}
                                    >
                                        {icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </DrawerContent>
            </Drawer>
        </nav>
    );
};

export default function Header() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <header className='py-2 sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 w-full'>
            <div className='w-full flex justify-between items-center px-2 md:px-0'>
                <Logo />
                <DesktopNav />
                <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
        </header>
    );
}
