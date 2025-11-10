import {
  faArrowLeft,
  faArrowRight,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@headlessui/react";

import React from "react";
import { twMerge } from "tailwind-merge";

interface IDefaultButtonProps {
  onClick: () => void; // 클릭 이벤트 핸들러의 타입
  className?: string;
  children?: React.ReactNode; // 버튼 안에 들어갈 내용
  disabled?: boolean;
  hoverColor?: string;
}
const pagingDefaultButtonCommonClassNames =
  "text-paging-color bg-paging-background hover:bg-paging-hover-background border-1 border-gray-300 ";
export const DefaultButton: React.FC<IDefaultButtonProps> = ({
  children,
  onClick,
  className = "",
  disabled,
  hoverColor,
}) => (
  <Button disabled={disabled} as={React.Fragment}>
    {({ disabled, hover }) => {
      console.log(disabled);
      return (
        <button
          className={twMerge(
            "px-button cursor-pointer text-base bg-blue-500 rounded-button rounded min-w-20 min-h-10 h-fit px-3 ",
            className,
            hover && hoverColor ? hoverColor : "",
            disabled &&
              "cursor-auto bg-submit-disabled-background text-submit-disabled-color border-none hover:bg-submit-disabled-background"
          )}
          onClick={onClick}
        >
          {children}
        </button>
      );
    }}
  </Button>
);

export const SubmitButton: React.FC<IDefaultButtonProps> = ({
  disabled,
  onClick,
}) => {
  return (
    <DefaultButton
      disabled={disabled}
      className="text-base bg-submit-background text-submit-color rounded-button   hover:bg-submit-hover-background"
      onClick={onClick}
    >
      Submit
    </DefaultButton>
  );
};
export const CancelButton: React.FC<IDefaultButtonProps> = ({
  disabled,
  onClick,
}) => {
  return (
    <DefaultButton
      disabled={disabled}
      className="text-base bg-transparent border-1 border-submit-background text-submit-background  rounded-button   "
      hoverColor={"hover:bg-transparent"}
      onClick={onClick}
    >
      Cancel
    </DefaultButton>
  );
};

interface IIconButtonProps extends IDefaultButtonProps {
  icon: IconDefinition;
}
export const IconButton: React.FC<IIconButtonProps> = ({
  icon,
  onClick,
  children,
  className,
  disabled,
}) => (
  <DefaultButton
    disabled={disabled}
    className={twMerge(
      "text-base border-1 border-submit-background rounded-button min-w-20  px-3   ",
      className
    )}
    onClick={onClick}
  >
    <>
      <FontAwesomeIcon icon={icon} />
      <span className="ml-2">{children}</span>
    </>
  </DefaultButton>
);

export const PagingButton: React.FC<IDefaultButtonProps> = ({
  children,
  disabled,
}) => {
  return (
    <DefaultButton
      disabled={disabled}
      className={`${pagingDefaultButtonCommonClassNames}  min-w-10`}
      onClick={function (): void {}}
    >
      {children}
    </DefaultButton>
  );
};
export const PrevButton: React.FC<IDefaultButtonProps> = ({
  disabled,
  onClick,
}) => {
  return (
    <IconButton
      disabled={disabled}
      onClick={onClick}
      icon={faArrowLeft}
      className={pagingDefaultButtonCommonClassNames}
    >
      이전 페이지
    </IconButton>
  );
};
export const NextButton: React.FC<IDefaultButtonProps> = ({
  disabled,
  onClick,
}) => {
  return (
    <IconButton
      disabled={disabled}
      onClick={onClick}
      icon={faArrowRight}
      className={pagingDefaultButtonCommonClassNames}
    >
      다음 페이지
    </IconButton>
  );
};
