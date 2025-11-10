import { useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Checkbox, ICommonComponentProps } from "./base/Headless-ui-wrapper";

interface ICheckBoxProps extends ICommonComponentProps {
  children?: React.ReactElement;
  checked?: boolean;
  onChange?: (v: boolean) => void;
}
interface IDropdownCheckBoxProps extends ICommonComponentProps {
  children?: React.ReactElement;
  checked?: boolean;
}

const checkboxCLassName = "flex items-center  text-sm w-full cursor-pointer";
const CheckSvg = ({ checked }: { checked: boolean }) => {
  return (
    <svg
      className={twMerge(
        "stroke-checkbox-checked-color opacity-0  w-[12px] h-[12px]",
        checked && "opacity-100"
      )}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M3 8L6 11L11 3.5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const CheckboxItem = ({
  isChecked,
  disabled = false,
}: { isChecked: boolean } & ICommonComponentProps) => {
  const memoizedClass = useMemo(() => {
    return twMerge(
      "inline-block w-full h-full group    border-checkbox-border-color rounded border-1 bg-checkbox-background data-[checked]:border-checkbox-checked-color ",
      isChecked && "opacity-100",
      disabled && "bg-dropdown-disabled-background border-none"
    );
  }, [isChecked, disabled]);

  return (
    <Checkbox
      checked={isChecked}
      disabled={disabled}
      className={"flex border-0 w-[12px] h-[12px]"}
    >
      <span className={memoizedClass}>
        <CheckSvg checked={isChecked} />
      </span>
    </Checkbox>
  );
};
export const DropdownCheckBox: React.FC<IDropdownCheckBoxProps> = ({
  children,
  checked = false,
  disabled = false,
}) => {
  // const [isChecked, setIsChecked] = useState(checked);
  // useEffect(() => {
  //   if (disabled) return;
  //   setIsChecked(checked);
  // }, [checked]);

  return (
    <div className={checkboxCLassName}>
      <CheckboxItem disabled={disabled} isChecked={checked} />
      <span className="ml-1.5">{children}</span>
    </div>
  );
};

export const DefaultCheckbox: React.FC<ICheckBoxProps> = ({
  children,
  checked = false,
  onChange,
  disabled = false,
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    setIsChecked((prev) => !prev);
    onChange?.(!isChecked);
  };

  return (
    <div
      tabIndex={0}
      className={checkboxCLassName}
      onClick={disabled ? () => null : handleChange}
    >
      <CheckboxItem disabled={disabled} isChecked={isChecked} />
      <span className="ml-1.5">{children}</span>
    </div>
  );
};
