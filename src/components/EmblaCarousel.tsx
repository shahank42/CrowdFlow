"use client";

import React from 'react'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import { X } from 'lucide-react';
import { Button } from './ui/button';

type PropType = {
  slides: Blob[]
  deleteSlide: (index: number) => void
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, deleteSlide, options } = props
  const [emblaRef] = useEmblaCarousel(options)

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((blob, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <span>{index + 1}</span>
              </div>
              <Button className="absolute top-0 right-0 -mr-1 -mt-1 p-0 h-5 w-5" variant="destructive" onClick={() => deleteSlide(index)}>
                <X className="h-3 w-3" />
              </Button>
              <img
                className="embla__slide__img object-contain h-20 w-10"
                src={URL.createObjectURL(blob)}
                alt="Your alt text"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
