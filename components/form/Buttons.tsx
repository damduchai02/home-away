"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";

type btnSize = "default" | "sm" | "lg";

type SubmitButtonProps = {
  text?: string;
  className?: string;
  size?: btnSize;
};

export function SubmitButton({
  text = "submit",
  className,
  size = "lg",
}: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      size={size}
      disabled={pending}
      className={`capitalize ${className}`}
    >
      {pending ? (
        <>
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          please wait...
        </>
      ) : (
        text
      )}
    </Button>
  );
}
