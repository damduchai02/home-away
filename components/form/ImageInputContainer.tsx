"use client";

import { actionFunction } from "@/utils/types";
import Image from "next/image";
import { LuUser2 } from "react-icons/lu";
import { Button } from "../ui/button";
import { useState } from "react";
import FormContainer from "./FormContainer";
import ImageInput from "./ImageInput";
import { SubmitButton } from "./Buttons";

type ImageInputContainerProps = {
  name: string;
  image: string;
  action: actionFunction;
  text: string;
  children?: React.ReactNode;
};

function ImageInputContainer(props: ImageInputContainerProps) {
  const { name, image, action, text } = props;
  const [isUpdateFormVisible, setUpdateFormVisible] = useState(false);

  const userIcon = (
    <LuUser2 className="mb-4 h-24 w-24 rounded-md bg-primary text-white" />
  );

  return (
    <div>
      {image ? (
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          className="mb-4 h-24 w-24 rounded-md object-cover"
        />
      ) : (
        userIcon
      )}
      <Button
        variant="outline"
        size="sm"
        className="capitalize"
        onClick={() => setUpdateFormVisible((prev) => !prev)}
      >
        {text}
      </Button>
      {isUpdateFormVisible && (
        <div className="mt-4 max-w-sm">
          <FormContainer action={action}>
            {props.children}
            <ImageInput />
            <SubmitButton size="sm" text="upload" />
          </FormContainer>
        </div>
      )}
    </div>
  );
}

export default ImageInputContainer;
