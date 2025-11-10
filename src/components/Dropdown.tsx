import { faCaretDown, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import {
  ICommonComponentProps,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "./base/Headless-ui-wrapper";

interface IDropdownProps extends ICommonComponentProps {
  options: IDropdownItem[];
  onChange: (key: string) => void;
  defaultValue?: string;
}
interface IDropdownItemProps {
  option: IDropdownItem;
  onClick: (key: string) => void;
}
interface IDropdownItem {
  key: string;
  label: string;
  icon?: IconDefinition;
}
export const DefaultDropdown: React.FC<IDropdownProps> = ({
  options,
  onChange,
  defaultValue,
  disabled = false,
}) => {
  const [selectedOption, setSelectedOption] = useState(
    defaultValue || options?.[0]?.key
  );
  const handleClickOption = (key: string) => {
    setSelectedOption(key);
  };
  useEffect(() => {
    onChange(selectedOption);
  }, [selectedOption]);

  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left">
        <MenuButton
          disabled={disabled}
          // className="bg-dropdown-background border-1 border-dropdown-border-color rounded-5 inline-flex gap-3 items-center w-full h-9 px-5 data-[disabled]:bg-dropdown-disabled-background "
        >
          {({ disabled, focus }) => (
            <div
              className={twMerge(
                "bg-dropdown-background border-1 border-dropdown-border-color rounded-5 inline-flex gap-3 items-center w-full h-9 px-5  ",
                disabled &&
                  "bg-dropdown-disabled-background text-field-disabled-color",
                focus && ""
              )}
            >
              {selectedOption || "Select an Option"}
              {!disabled && <FontAwesomeIcon icon={faCaretDown} />}
            </div>
          )}
        </MenuButton>

        <MenuItems className="absolute right-0 border-1 border-dropdown-border-color rounded-5 w-full mt-1 origin-top-right bg-white divide-y divide-gray-100  shadow-lg  focus:outline-none">
          <div className="p-1">
            {options.map((option) => (
              <DropdownItems
                key={option.key}
                option={option}
                onClick={handleClickOption}
              />
            ))}
          </div>
        </MenuItems>
      </Menu>
    </div>
  );
};

const DropdownItems: React.FC<IDropdownItemProps> = ({ option, onClick }) => {
  return (
    <MenuItem>
      {({ focus }) => (
        <button
          onClick={() => onClick(option.key)}
          className={twMerge(
            focus
              ? "bg-dropdown-item-hover-background text-blue-900"
              : "text-gray-900",
            "group flex rounded-md items-center w-full p-2 text-sm"
          )}
        >
          {option.icon && <FontAwesomeIcon icon={option.icon} />}
          {option.label}
        </button>
      )}
    </MenuItem>
  );
};
