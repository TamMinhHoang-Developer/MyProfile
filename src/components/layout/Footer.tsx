import * as React from 'react';
import { SiDiscord, SiFigma, SiGithub } from 'react-icons/si';

export default function Footer() {
    return (
        <div className='border-t-2 border-cadet-blue py-8'>
            <div className='flex justify-between flex-col md:flex-row gap-10 md:gap-0'>
                <div className='text-center md:text-left'>
                    <div className='flex gap-6 items-center justify-center md:justify-start'>
                        <div className='flex gap-2 items-center'>
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 0.5H8V4.5H4H0V8.5V12.5V16.5H4H8V12.5H12H16V8.5V4.5V0.5H12ZM4 12.5H8V8.5H12V4.5H8V8.5H4V12.5Z" fill="white" />
                            </svg>
                            <span className='font-bold text-base'>MT</span>
                        </div>
                        <div className='text-cadet-blue' role='email'>tam.hoang.developer@gmail.com</div>
                    </div>
                    <div className='mt-4 text-base'>Web designer and front-end developer</div>
                </div>
                <div className='flex justify-center'>
                    <div>
                        <div className='font-medium text-2xl md:text-left text-center'>Media</div>
                        <div className='flex gap-2 mt-3'>
                            <SiGithub size={32} className='text-cadet-blue hover:text-white'></SiGithub>
                            <SiFigma size={32} className='text-cadet-blue hover:text-white'></SiFigma>
                            <SiDiscord size={32} className='text-cadet-blue hover:text-white'></SiDiscord>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-12 text-center text-cadet-blue text-base'>© Copyright 2025. Made by MTam</div>
        </div>
    );
}
