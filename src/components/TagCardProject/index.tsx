import { ReactNode } from "react"
import { DataTagCardProject } from "./dataTagCardProject"


type TagCardProjectProps = {
  tags: string[]
  children: ReactNode
}

export const TagCardProject = ({tags, children}: TagCardProjectProps) => {
  const dataKey = Object.keys(DataTagCardProject)
  const dataValue = Object.values(DataTagCardProject)
 
   const filterTagName = (arr: typeof dataValue, search: string ) => {
      return arr.filter((value)=> value.nameSearch === search)
  }

  return (
    <div className="relative">
      <div  className={" absolute top-6 right-2 flex flex-col gap-1 items-end"}>
        {tags && tags.length > 0 && tags.map((item) => {
          if(dataKey.includes(item))  {
            const objValue = filterTagName(dataValue, item)
            return (
              <div className=" drop-shadow-[-3px_2px_2px_rgba(0,0,0,0.5)] pl-2 pr-4 py-1 bg-primary text-white text-[12px] w-fit rounded-l-[4px]" key={item}>
              {objValue[0].name}
            </div>
            )
          }
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