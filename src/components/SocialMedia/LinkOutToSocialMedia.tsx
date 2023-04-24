
import Link from 'next/link'

type LinkOutToSocialMediaType = {
  name: string,
  url: string,
  children: React.ReactNode
}

export const LinkOutToSocialMedia = ({name, url, children}: LinkOutToSocialMediaType) => {
  return (
    <Link target="_blank" id={`link-${name}`} href={url} passHref>
      {children}
    </Link>
  )
}