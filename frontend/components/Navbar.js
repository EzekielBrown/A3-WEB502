import Link from "next/link"
import NextImage from "./Image"

const Navbar = () => {
  return (
    <div className="flex justify-between ml-6 mr-6 mt-4">
      <Link href="/">
        <a>
          <NextImage
            src="/ectitle.svg"
            alt="home"
            className="logo"
            height="70"
            width="300"
          />
        </a>
      </Link>
      <button className="snipcart-checkout flex items-center">
        <NextImage height="40" width="40" src="/cart.svg" alt="Cart" />
        <span className="snipcart-total-price ml-3 font-semibold text-sm text-indigo-500"></span>
      </button>
    </div>
  )
}

export default Navbar
