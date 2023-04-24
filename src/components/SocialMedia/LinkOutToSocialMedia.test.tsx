import { render, screen } from "@testing-library/react"
import React, { ReactElement } from "react";
import { LinkOutToSocialMedia } from "./LinkOutToSocialMedia";


describe('<LinkOutToSocialMedia />' , () => {

  jest.mock(
    'next/link',
    () =>
      ({ children, ...rest }: { children: ReactElement }) =>
        React.cloneElement(children, { ...rest }),
  );


  it('should render wrapper links ' , () => {
    render(< LinkOutToSocialMedia name="Teste" url="http://teste"> </LinkOutToSocialMedia>)
 
    screen.logTestingPlaygroundURL()
    
    
  })
})