import Link from "next/link";

export default function Icon_twitter({href, setClass}) {
    return (
      <>
      <Link href={href}>
        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg" className={setClass}>
        <path d="M11.9771 0.360352H14.1244L9.4344 5.7346L14.9521 13.0479H10.6323L7.24865 8.6116L3.37677 13.0479H1.22865L6.24502 7.2991L0.952148 0.360352H5.38227L8.4404 4.41423L11.9771 0.360352ZM11.2246 11.7599H12.4146L4.73477 1.58098H3.45902L11.2246 11.7599Z" fill="currentColor"/>
        </svg>      
      </Link>
      </>)
}

