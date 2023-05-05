import Link from "next/link"
import { ButtonIcon } from "../ButtonIcon"
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa"




export const SolcialMedia = () => {
  return (
    <div className="w-full flex gap-4 justify-center">
      <Link target="_blank" id="linkInstagran" href={"https://www.instagram.com/pravtz/"} passHref>
        <ButtonIcon className=" hover:opacity-50" sizeIcon="32" colorIcon="#8E8E8E" icon={FaInstagram} type="button" />
      </Link>
      <Link target="_blank" id="linkTwitter" href={"https://twitter.com/pravtz"} passHref>
        <ButtonIcon className=" hover:opacity-50" sizeIcon="32" colorIcon="#8E8E8E" icon={FaTwitter} type="button" />
      </Link>
      <Link target="_blank" id="linkGithub" href={"https://www.github.com/pravtz/"} passHref>
        <ButtonIcon className=" hover:opacity-50" sizeIcon="32" colorIcon="#8E8E8E" icon={FaGithub} type="button" />
      </Link>
      <Link target="_blank" id="linklinkedin" href={"https://www.linkedin.com/in/pravtz/"} passHref>
        <ButtonIcon className=" hover:opacity-50" sizeIcon="32" colorIcon="#8E8E8E" icon={FaLinkedin} type="button" />
      </Link>
    </div>
  )
}