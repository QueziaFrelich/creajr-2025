export default function Text_footer ( { children, className } ) {
  return (
    <p className={`text-sm ${className}`}>
        { children }
    </p>
  );
}