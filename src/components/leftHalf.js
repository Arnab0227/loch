import React from 'react';
import EyeIcon from '../icons/eyeIcon';
import ShareIcon from '../icons/shareIcon';
import LuchIcon from '../icons/luchIcon';
import BellIcon from '../icons/bellIcon';
import Carousel from './carousel';
import PressCarousel from './pressCarousel';
import './left.css';

function LeftHalf() {
  return (
    <div className='radial-gradient overflow-hidden'>
      <div className=''>
        <div className='sm:hidden pt-5 sm:mt-0 flex justify-end pr-5'>
          <LuchIcon />
        </div>
        <div className='sm:flex sm:pt-12 pt-5'>
          <div className='sm:w-1/2 sm:pr-4 sm:ml-16 space-y-2 mb-6 sm:mb-0'>
            <div className='sm:block mb-4 flex justify-center'> <BellIcon /></div>

            <p className='text-white text-2xl sm:text-3xl leading-8 sm:text-left text-center'>Get notified when a<br />highly correlated<br />whale makes a move</p>
            <p className='text-white leading-tight text-center sm:text-left'>Find out when a certain whale<br />moves more than any preset amount on-chain or<br />when a dormant whale you care about<br />becomes active. </p>
          </div>
          <div className='sm:w-1/2 sm:pl-4'>
            <Carousel className='w-full' /> 
          </div>
        </div>

        <div className=' sm:flex sm:justify-center'>
          <div className='sm:w-1/2'>
            <ShareIcon className='w-8 sm:w-full' /> 
          </div>
          <div className='sm:w-1/2 sm:pl-4 space-y-4 sm:mr-16 sm:mt-14'>
            <div className='flex justify-center sm:justify-end mb-4'><EyeIcon /></div>
            <p className='text-3xl text-gray-100 text-center sm:text-right'>Watch what the<br />whales are doing?</p>
            <p className='text-center sm:text-right text-gray-100 leading-tight'>All whales are not equal. Know exactly<br />what the whales impacting YOUR<br />portfolio are doing. </p>
          </div>
        </div>

        <div className='mx-4 my-6 sm:mx-0 sm:my-0 sm:pb-10'>
          <div className='border-b pb-4 sm:mx-16'>
            <p className='text-2xl text-white text-center sm:text-right'>Testimonials</p>
          </div>
          <div className='sm:flex items-end'>
            <div className='hidden sm:block sm:mb-3 sm:ml-16'>
              <LuchIcon />
            </div>
            <div className='w-full sm:pl-20 pt-12'>
              <PressCarousel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftHalf;

