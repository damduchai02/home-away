import AmenitiesInput from "@/components/form/AmenitiesInput";
import { SubmitButton } from "@/components/form/Buttons";
import CategoriesInput from "@/components/form/CategoriesInput";
import CounterInput from "@/components/form/CounterInput";
import CountriesInput from "@/components/form/CountriesInput";
import DescriptionInput from "@/components/form/DescriptionInput";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import ImageInput from "@/components/form/ImageInput";
import PriceInput from "@/components/form/PriceInput";
import { createPropertyAction } from "@/utils/actions";

function CreatePropertyPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold capitalize">
        create property
      </h1>
      <div className="rounded-md border p-8">
        <h3 className="mb-8 text-lg font-medium">General Info</h3>
        <FormContainer action={createPropertyAction}>
          <div className="mb-4 grid gap-4 md:grid-cols-2">
            <FormInput
              type="text"
              name="name"
              label="Name (20 limit)"
              defaultValue="Cabin in Latvia"
            />
            <FormInput
              type="text "
              name="tagline"
              label="Tagline (30 limit)"
              defaultValue="Dream Getaway Awaits You Here!"
            />
            <PriceInput />
            <CategoriesInput />
          </div>
          <DescriptionInput />
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <CountriesInput />
            <ImageInput />
          </div>
          <h3 className="mb-4 mt-8 text-lg font-medium">
            Accommodation Details
          </h3>
          <CounterInput detail="guests" />
          <CounterInput detail="bedrooms" />
          <CounterInput detail="beds" />
          <CounterInput detail="baths" />
          <h3 className="mb-6 mt-10 text-lg font-medium">Amenities</h3>
          <AmenitiesInput />
          <SubmitButton text="create rental" className="mt-12" />
        </FormContainer>
      </div>
    </section>
  );
}

export default CreatePropertyPage;
