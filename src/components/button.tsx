import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

export default function Button({
  ...props
}: DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) {
  return (
    <button
      className={
        "px-4 py-2 transition-transform active:scale-95 duration-150 rounded-lg bg-rosePine-surface hover:bg-rosePine-overlay text-rosePine-muted flex gap-2 items-center"
      }
      {...props}
    />
  );
}
