import Link from "next/link";

export default function Text_link ( { href, children, underline, className } ) {
  return (
    <Link href={href} target="blank" className={`text-current ${underline && 'underline'} ${className}`}>
        { children }
    </Link>
  );
}