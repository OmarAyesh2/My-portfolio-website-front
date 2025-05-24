import React, { useRef, useEffect, useState, useCallback } from 'react';
import {IoClose} from 'react-icons/io5';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const baseURL = import.meta.env.VITE_BASE_URL;

function MediaPlayer({activeWorks, setActiveWorks}) {
  const worksContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateVal, setTranslateVal] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleNext = useCallback(() => {
    if (!worksContainerRef.current) return;
    
    const scrollAmount = worksContainerRef.current.firstElementChild.offsetWidth;
    const maxScroll = scrollAmount * (activeWorks.length);
    
    setTranslateVal(prev => {
      const newTranslate = prev - scrollAmount;
      if (newTranslate <= -maxScroll) {
        worksContainerRef.current.style.transform = `translateX(0px)`;
        setCurrentIndex(0);
        return 0;
      } else {
        worksContainerRef.current.style.transform = `translateX(${newTranslate}px)`;
        setCurrentIndex(curr => curr + 1);
        return newTranslate;
      }
    });
  }, [activeWorks.length]);

  const handlePrev = useCallback(() => {
    if (!worksContainerRef.current) return;
    
    const scrollAmount = worksContainerRef.current.firstElementChild.offsetWidth;
    
    setTranslateVal(prev => {
      const newTranslate = prev + scrollAmount;
      if (newTranslate > 0) {
        const finalTranslate = -scrollAmount * (activeWorks.length - 1);
        worksContainerRef.current.style.transform = `translateX(${finalTranslate}px)`;
        setCurrentIndex(activeWorks.length - 1);
        return finalTranslate;
      } else {
        worksContainerRef.current.style.transform = `translateX(${newTranslate}px)`;
        setCurrentIndex(curr => curr - 1);
        return newTranslate;
      }
    });
  }, [activeWorks.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      e.preventDefault();
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    const handleTouchStart = (e) => {
      setTouchStart(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
      e.preventDefault();
    };

    const handleTouchEnd = (e) => {
      const endTouch = e.changedTouches[0].clientX;
      setTouchEnd(endTouch);
      
      if ((touchStart - endTouch) > 5) {
        handleNext();
      } else if ((touchStart - endTouch) < -5) {
        handlePrev();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    if (window.matchMedia('(max-width: 912px)').matches) {
      document.addEventListener('touchstart', handleTouchStart);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      if (window.matchMedia('(max-width: 912px)').matches) {
        document.removeEventListener('touchstart', handleTouchStart);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [handleNext, handlePrev, touchStart]);

  return (
    <div className='media-player'>
        <button className='close' onClick={() => {
          document.querySelector('main').classList.remove('no-scroll');
          setActiveWorks(null);
        }}>
            <IoClose style={{pointerEvents: 'none'}} />
        </button>
        <div className="active-works" ref={worksContainerRef}>
            {activeWorks.map((work, idx) => {
                return (
                    <div key={work.id} className='active-work'>
                        {currentIndex === idx && (work.media.split('.')[1] === 'mp4' ? (
                            <video preload='none' className='media' controls>
                                <source src={baseURL+work.media} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>) : (
                                <img loading='lazy' src={baseURL+work.media} />
                            ))}
                    </div>
                )
            })}
            
        </div>
        <button className='next' onClick={(e) => {
           e.preventDefault();
           handleNext()
           
         }}>
             <IoIosArrowForward className='arrow' />
         </button>
         <button className='prev' onClick={(e) => {
           e.preventDefault();
           handlePrev();
           
         }}>
             <IoIosArrowBack className='arrow' />
         </button>
        {!window.matchMedia('(max-width: 912px)').matches && (
          <div className="media-points">
            {activeWorks.map((_, index) => (
                <div 
                    key={`p-${index}`} 
                    id={`p-${index}`} 
                    className={`point ${index === currentIndex ? 'active' : ''}`}
                ></div>
            ))}
          </div>
        )}
    </div>
  )
}

export default MediaPlayer
