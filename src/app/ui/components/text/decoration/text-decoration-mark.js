export default function Text_decoration_mark({ children, className }) {
  return (
    <span className={`bg-gray-200 font-bold ${className}`}>{children}</span>
  );
}
