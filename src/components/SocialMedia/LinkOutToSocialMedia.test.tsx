import { render, screen } from "@testing-library/react"
import React, { ReactElement } from "react";
import { LinkOutToSocialMedia } from "./LinkOutToSocialMedia";
import { FaApple } from "react-icons/fa";


describe('<LinkOutToSocialMedia />' , () => {

  jest.mock(
    'next/link',
    () =>
      ({ children, ...rest }: { children: ReactElement }) =>
        React.cloneElement(children, { ...rest }),
  );


  it('should render a links ' , () => {
    render(< LinkOutToSocialMedia name="Teste"  url="http://teste"><FaApple/></LinkOutToSocialMedia>)
    const link = document.querySelector("#link-Teste")
    expect(link).toHaveAttribute('href','http://teste')
  })
})