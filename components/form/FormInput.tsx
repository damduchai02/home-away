import { Input } from "../ui/input";
import { Label } from "../ui/label";

type FormInputProps = {
  type: string;
  name: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
};

function FormInput({
  type,
  name,
  label,
  defaultValue,
  placeholder,
}: FormInputProps) {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        {label}
      </Label>
      <Input
        type={type}
        id={name}
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required
      />
    </div>
  );
}

export default FormInput;
