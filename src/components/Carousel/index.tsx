'use client'
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { PropsWithChildren, useEffect, useState } from "react";
import Dots from "./dots";
import React from "react";
import { MdArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md'
import clsx from "clsx";


type Props = PropsWithChildren & EmblaOptionsType;

export const Carousel = ({ children, ...options }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    function selectHandler() {
      const index = emblaApi?.selectedScrollSnap();
      setSelectedIndex(index || 0);
    }
    emblaApi?.on("select", selectHandler);
    return () => {
      emblaApi?.off("select", selectHandler);
    };
  }, [emblaApi]);

  const length = React.Children.count(children);

  const canScrollPrev = !emblaApi?.canScrollPrev();
  const canScrollNext = !emblaApi?.canScrollNext();
  return (
    <div className=" w-[calc(100%-64px)] m-auto ">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">{children}</div>
      </div>
      <div className="mt-8">
        <Dots itemsLength={length} selectedIndex={selectedIndex} />
      </div>

      <button
        onClick={() => emblaApi?.scrollPrev()}
        disabled={canScrollPrev}
        className={clsx({ "absolute left-0 top-[45%]": true, 'opacity-30': canScrollPrev })}
      >
        <MdOutlineArrowBackIos size={32} color="#BBBBBB" />
      </button>

      <button
        onClick={() => emblaApi?.scrollNext()}
        disabled={canScrollNext}
        className={clsx({ "absolute right-0 top-[45%] ": true, 'opacity-30': canScrollNext })}
      >
        <MdArrowForwardIos size={32} color="#BBBBBB" />
      </button>

    </div>
  );
};
