import Link from "next/link";

export default function Button_outline({
  href,
  text,
  icon,
  className,
  target,
  iconFirst,
  hiddenText,
  onClick,
  ...props
}) {
  const ButtonContent = (
    <button
      onClick={onClick}
      className={`${icon && "flex gap-2 items-center"} ${
        iconFirst && "flex-row-reverse justify-center"
      } border ${className}`}
      {...props}
    >
      {text && <p className={hiddenText && "hidden xl:block"}>{text}</p>}
      {icon}
    </button>
  );

  return href ? (
    <Link href={href} target={target && "_blank"}>
      {ButtonContent}
    </Link>
  ) : (
    ButtonContent
  );
}
