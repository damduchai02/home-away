import { Label } from "../ui/label";
import Image from "next/image";
import { formattedCountries } from "@/utils/countries";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function CountriesInput({ defaultValue }: { defaultValue?: string }) {
  const name = "country";
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        country
      </Label>
      <Select
        name={name}
        required
        defaultValue={defaultValue || formattedCountries[0].name}
      >
        <SelectTrigger id={name}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {formattedCountries.map((country) => (
            <SelectItem key={country.name} value={country.name}>
              <span className="flex items-center gap-2">
                <Image
                  src={`https://flagcdn.com/16x12/${country.code.toLowerCase()}.png`}
                  alt="country flag"
                  width={16}
                  height={12}
                />
                {country.name}
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default CountriesInput;
