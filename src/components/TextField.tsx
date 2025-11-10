import { Fragment, useState } from "react";
import { twMerge } from "tailwind-merge";
import {
  Description,
  Field,
  ICommonComponentProps,
  Input,
  Label,
} from "./base/Headless-ui-wrapper";

interface ITextFieldProps extends ICommonComponentProps {
  inputClassName?: string;
  value?: string;
  name?: string;
  placeHolder?: string;
  label?: string;
  onChange?: (value: string) => void;
}
export const TextFiled: React.FC<ITextFieldProps> = ({
  inputClassName,
  name = "",
  value = "",
  label,
  placeHolder = "",
  onChange,
  disabled = false,
  readonly = false,
}) => {
  const [inputValue, setInputValue] = useState(value);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const changedValue = e.target.value;
    setInputValue(changedValue);
    if (onChange) {
      onChange(changedValue);
    }
  };

  return (
    <div className="w-full max-w-md px-4">
      <Field
        data-disabled={disabled}
        data-readonly={readonly}
        className={`group`}
      >
        <Label className={`group-data-[disabled='true']:opacity-50 h-6 flex`}>
          {label}
        </Label>

        <Description className="group-data-[disabled='true']:opacity-50"></Description>
        <Input as={Fragment} disabled={disabled} readonly={readonly}>
          {({ disabled, focus }) => (
            <input
              name={name}
              placeholder={placeHolder}
              value={inputValue}
              onChange={disabled || readonly ? () => null : handleChange}
              readOnly={disabled || readonly}
              className={twMerge(
                "bg-field-background  border-1 border-field-border-color rounded-5  px-5 h-9 w-text-field",
                focus && "border-field-active-border-color outline-none",
                disabled &&
                  "bg-field-disabled-background  text-field-disabled-color",
                readonly && "bg-field-disabled-background",
                inputClassName
              )}
            />
          )}
        </Input>
      </Field>
    </div>
  );
};

export const sTextFiled = () => {
  return (
    <div className="w-full max-w-md px-4">
      <Field>
        <Label className="data-[disabled]:opacity-50">Name</Label>
        <Description className="data-[disabled]:opacity-50"></Description>
        <Input as={"input"}>
          {({ disabled, focus }) => (
            <input
              name="full_name"
              className={twMerge(
                "bg-field-background  border-1 border-field-border-color rounded-5  px-5 h-9 w-text-field",
                focus && "border-field-active-border-color outline-none",
                disabled &&
                  "bg-field-disabled-background  text-field-disabled-color"
              )}
            />
          )}
        </Input>
      </Field>
    </div>
  );
};
