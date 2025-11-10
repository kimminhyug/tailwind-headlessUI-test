import { faCheck, faMoon, faSun, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { twMerge } from "tailwind-merge";
import { useBoolean } from "usehooks-ts";
import { Switch } from "./base/Headless-ui-wrapper";

interface IStatusToggleProps {
  status: boolean;
  toggle: (status: boolean) => void;
  statusClassName?: string;
  toggleClassName?: string;
  children?: React.ReactElement;
  label?: string;
  disableLabel?: boolean;
}
export const DefaultStatusToggle: React.FC<IStatusToggleProps> = ({
  statusClassName = "",
  toggleClassName = "",
  children,
  status = false,
  toggle,
  label,
  disableLabel = true,
}) => {
  return (
    <div className="flex gap-1">
      <Switch
        checked={status}
        onChange={toggle}
        className={twMerge(
          "cursor-pointer group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-blue-600",
          statusClassName
        )}
        // className="cursor-pointer group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-blue-600"
      >
        {children ? (
          children
        ) : (
          <span
            className={twMerge(
              "size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6",
              toggleClassName
            )}
          />
        )}
      </Switch>
      {!disableLabel && (label ? label : status?.toString())}
    </div>
  );
};
export const ThemeStatusToggle = ({ setDark = false }) => {
  const { toggle, value } = useBoolean(setDark);
  const isDark = value;

  const toggleDarkMode = () => {
    toggle();
    if (!value) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };
  // const isLight = !isDark;
  return (
    <div className="flex gap-1 ">
      <DefaultStatusToggle
        status={value}
        toggle={toggleDarkMode}
        label={""}
        // label={isDark ? "Dark" : "Light"}
        statusClassName=" cursor-pointer group inline-flex h-6 w-11 items-center rounded-full  transition bg-theme-toggle-background data-[checked]:bg-theme-toggle-background w-16 h-9 rounded-50"
        // toggleClassName="bg-theme-toggle-background"
      >
        <FontAwesomeIcon
          className="bg-theme-toggle-icon-background text-theme-toggle-icon-color p-2 size-4 translate-x-1 rounded-full transition group-data-[checked]:translate-x-7 delay-50"
          icon={isDark ? faMoon : faSun}
        ></FontAwesomeIcon>
        {/* <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6">
          
        </span> */}
      </DefaultStatusToggle>
    </div>
  );
};

export const CheckIconToggle: React.FC<IStatusToggleProps> = ({
  // statusClassName = "",
  // toggleClassName = "",
  status = false,
  toggle,
  label,
  disableLabel = true,
}) => {
  return (
    <div className="flex gap-1 ">
      <DefaultStatusToggle
        statusClassName={"data-[checked]:bg-toggle-checked-icon-color"}
        // toggleClassName={}
        status={status}
        toggle={toggle}
        label={label}
        disableLabel={disableLabel}
      >
        <FontAwesomeIcon
          className={twMerge(
            "bg-toggle-unchecked-icon-background text-toggle-unchecked-icon-color p-1 w-3 h-3 max-w-3 max-h-3 translate-x-1 rounded-full transition group-data-[checked]:translate-x-5 delay-50",
            status &&
              "bg-toggle-checked-icon-background text-toggle-checked-icon-color"
          )}
          icon={status ? faCheck : faX}
        ></FontAwesomeIcon>
      </DefaultStatusToggle>
    </div>
  );
};
