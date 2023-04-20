import Link from "next/link"
import { ButtonIcon } from "../ButtonIcon"
import {FaInstagram, FaTwitter, FaGithub, FaLinkedin} from "react-icons/fa"


export const SolcialMedia = () => {
  return (
    <div className="w-full flex gap-4 justify-center">
      <Link target="_blank" href={"https://www.instagram.com/pravtz/"} passHref>
        <ButtonIcon sizeIcon="32" icon={FaInstagram} type="button" />
      </Link>
      <Link target="_blank" href={"https://twitter.com/pravtz"} passHref>
        <ButtonIcon sizeIcon="32" icon={FaTwitter} type="button" />
      </Link>
      <Link target="_blank" href={"https://www.github.com/pravtz/"} passHref>
        <ButtonIcon sizeIcon="32" icon={FaGithub} type="button" />
      </Link>
      <Link target="_blank" href={"https://www.linkedin.com/in/pravtz/"} passHref>
        <ButtonIcon sizeIcon="32" icon={FaLinkedin} type="button" />
      </Link>
    </div>
  )
}