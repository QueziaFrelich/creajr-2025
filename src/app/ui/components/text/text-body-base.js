export default function Text_body_base({ key, children, className }) {
  return <p className={`text-base ${className}`}>{children}</p>;
}
