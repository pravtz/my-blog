import { render, screen } from "@testing-library/react"
import { SolcialMedia } from "."
import React, { ReactElement } from "react";


describe('<SocialMedia />' , () => {




  it('should render wrapper links with buttons of the social media' , () => {
    render(<SolcialMedia />)
    const buttonInstagran = document.querySelector('#linkInstagran > button')
   
   
    
  })
})