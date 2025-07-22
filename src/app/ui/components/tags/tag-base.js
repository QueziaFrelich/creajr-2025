"use client";
import Text_body_base from "../text/text-body-base";

export default function TagBase({ children, className }) {
  return (
    <Text_body_base
      className={`${
        className
          ? className
          : "text-gray-500 dark:bg-slate-600 dark:text-slate-100 bg-gray-200"
      } px-3 w-min text-nowrap rounded-full `}
    >
      {children}
    </Text_body_base>
  );
}
