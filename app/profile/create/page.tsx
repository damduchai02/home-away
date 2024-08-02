import { SubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import { createProfileAction } from "@/utils/actions";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

async function CreateProfile() {
  const user = await currentUser();
  if (user?.privateMetadata?.hasProfile) redirect("/");

  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold capitalize">new user</h1>
      <div className="rounded-md border p-8">
        <FormContainer action={createProfileAction}>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <FormInput type="text" name="firstName" label="first name" />
            <FormInput type="text" name="lastName" label="last name" />
            <FormInput type="text" name="username" label="Username" />
          </div>
          <SubmitButton text="create profile" className="mt-8 capitalize" />
        </FormContainer>
      </div>
    </section>
  );
}

export default CreateProfile;
