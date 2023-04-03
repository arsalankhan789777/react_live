import React from 'react';
import VideoCarousel from './components/VideoCarousel';



const Home = () => {

  return (
    <wrapper>
      <VideoCarousel />
      <div className='section2'>
        <div className='container-max'>
        <div className='left-sec-2'>
          <div className='h4-sec-2'>
            <p>For fifteen years, Ruckus has been delivering work that powers <strong>game-changing companies and global influencers.</strong></p>
          </div>
          <div className='p-sec-2'>
            <p>Our core strategic engagements in branding, platform design, campaigns, and content creation consistently drive desired outcomes and awareness.</p>
          </div>
          <div class="button-content z2">
            <span class="b8 z2">See Who We Are</span>
            <div class="svg svg--arrow button-svg_arrow"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svg-inline--fa fa-long-arrow-right fa-w-14" data-icon="long-arrow-right" data-prefix="fal" viewBox="0 0 448 512">
              <path fill="currentColor" d="M311.03 131.515l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887l-83.928 83.444c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l116.485-116c4.686-4.686 4.686-12.284 0-16.971L328 131.515c-4.686-4.687-12.284-4.687-16.97 0z"></path>
            </svg>
            </div>  
          </div>

        </div>
        <div className='right-sec-2'>
          <img src='/images/sec-2-img.PNG' alt='img' />
        </div>

        </div>
      </div>
    </wrapper>
  )
}

export default Home