export default function Text_decoration_border({ children, borderLarge }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`${
          borderLarge ? "w-2" : "w-1"
        } h-7 bg-creajovem-green-500 rounded-full`}
      ></div>
      {children}
    </div>
  );
}
