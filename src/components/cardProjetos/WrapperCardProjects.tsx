
import { CardProjetos } from '.'
import { Carousel } from '../Carousel'
import { CardProps } from '.'


type WrapperCardProjectsProps = {
  data: CardProps[]
}
export const WrapperCardProjects = ({ data }: WrapperCardProjectsProps) => {
  return (
    < div className='container relative m-auto w-full h-[350px] ' >
      <Carousel slidesToScroll='auto' containScroll='trimSnaps' loop>
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="m-auto overflow-hidden grow-0 shrink-0 flex justify-center basis-[100%] md:basis-1/2 lg:basis-1/3 min-w-0 pl-[2rem] xl:basis-1/4 "
            >
              <CardProjetos
                id={item.id}
                title={item.title}
                subtitle={item.subtitle}
                navigate={{
                  slug: item.navigate.slug
                }}
                image={{ alt: item.image.alt, url: item.image.url }}
              />
            </div>
          )
        })}
      </Carousel>



    </div >
  )
}