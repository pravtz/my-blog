import { ReactNode } from "react"

type TagCardProjectProps = {
  tags: string[]
  children: ReactNode
}

export const TagCardProject = ({tags, children}: TagCardProjectProps) => {
  return (
    <div className="relative">
      <div  className={" absolute top-6 right-2 flex flex-col gap-1 items-end"}>
        {tags && tags.length > 0 && tags.map((item,index) => {
          return (
              <div className=" drop-shadow-[-3px_2px_2px_rgba(0,0,0,0.5)] pl-2 pr-4 py-1 bg-primary text-white text-[12px] w-fit rounded-l-[4px]" key={item}>
                {item.replace("_"," ")}
              </div>
          )
        })}
      </div>
        {children}
    </div>
  )
}