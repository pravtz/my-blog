
import { CardProjetos } from '.'
import { Carousel } from '../Carousel'


export const WrapperSwiperCardProjects = () => {
  return (

    <div className='container relative m-auto w-full h-[350px] '>
      <Carousel >
        <div className="grow-0 shrink-0 basis-1/3 min-w-0">
          <CardProjetos
            title='My blog 1'
            subtitle='Esta é uma pagina pessoal que divulga meus posts e projetos pessoais. '
            image={{ alt: "projeto 1", url: "/projects/311-276x155.jpg" }}
            like={{ amountOfLike: 16 }}
          />
        </div>
        <div className="grow-0 shrink-0 basis-1/3 min-w-0 m-1">
          <CardProjetos
            title='My blog 2'
            subtitle='Esta é uma pagina pessoal que divulga meus posts e projetos pessoais. '
            image={{ alt: "projeto 1", url: "/projects/311-276x155.jpg" }}
            like={{ amountOfLike: 16 }}
          />
        </div>
        <div className="grow-0 shrink-0 basis-1/3 min-w-0">
          <CardProjetos
            title='My blog 3'
            subtitle='Esta é uma pagina pessoal que divulga meus posts e projetos pessoais. '
            image={{ alt: "projeto 1", url: "/projects/311-276x155.jpg" }}
            like={{ amountOfLike: 16 }}
          />
        </div>
        <div className="grow-0 shrink-0 basis-1/3 min-w-0">
          <CardProjetos
            title='My blog 4'
            subtitle='Esta é uma pagina pessoal que divulga meus posts e projetos pessoais. '
            image={{ alt: "projeto 1", url: "/projects/311-276x155.jpg" }}
            like={{ amountOfLike: 16 }}
          />
        </div>
      </Carousel>



    </div>
  )
}