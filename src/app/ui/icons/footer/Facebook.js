import Link from "next/link";

export default function Icon_facebook({href, setClass}) {
    return (
      <>
      <Link href={href}>
        <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"  className={setClass}>
        <path d="M6.52102 15.7041V8.54072H9.04649L9.4246 5.749H6.52095V3.96662C6.52095 3.15835 6.75666 2.60756 7.97412 2.60756L9.5268 2.60687V0.109991C9.25826 0.0760304 8.3365 0 7.26428 0C5.02555 0 3.49289 1.30097 3.49289 3.69022V5.749H0.960938V8.54072H3.49289V15.704H6.52102V15.7041Z" fill="currentColor"/>
        </svg> 
      </Link>    
      </>)
}

