'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { CardProjetos } from '.'
//import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';



export const WrapperSwiperCardProjects = () => {


  return (
    <div className='container m-auto w-full h-[300px] border'>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className='w-full h-full'
      >
        <SwiperSlide className='flex justify-center items-center'>
          <CardProjetos
            title='My blog'
            subtitle='Esta é uma pagina pessoal que divulga meus posts e projetos pessoais. '
            image={{ alt: "projeto 1", url: "/projects/311-276x155.jpg" }}
            like={{ amountOfLike: 16 }}
          />
          <CardProjetos
            title='My blog'
            subtitle='Esta é uma pagina pessoal que divulga meus posts e projetos pessoais. '
            image={{ alt: "projeto 1", url: "/projects/311-276x155.jpg" }}
            like={{ amountOfLike: 16 }}
          />
          <CardProjetos
            title='My blog'
            subtitle='Esta é uma pagina pessoal que divulga meus posts e projetos pessoais. '
            image={{ alt: "projeto 1", url: "/projects/311-276x155.jpg" }}
            like={{ amountOfLike: 16 }}
          />
          <CardProjetos
            title='My blog'
            subtitle='Esta é uma pagina pessoal que divulga meus posts e projetos pessoais. '
            image={{ alt: "projeto 1", url: "/projects/311-276x155.jpg" }}
            like={{ amountOfLike: 16 }}
          />
          <CardProjetos
            title='My blog'
            subtitle='Esta é uma pagina pessoal que divulga meus posts e projetos pessoais. '
            image={{ alt: "projeto 1", url: "/projects/311-276x155.jpg" }}
            like={{ amountOfLike: 16 }}
          />

        </SwiperSlide>
        ...
      </Swiper>
    </div>
  )
}