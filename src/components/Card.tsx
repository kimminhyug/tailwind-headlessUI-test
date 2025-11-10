import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface CardProps {
  children: ReactNode;
  size?:
    | "small"
    | "medium"
    | "large"
    | "setting"
    | "mini-setting"
    | "view"
    | "full";
  title?: string;
  content?: string;
  containerClassName?: string;
  contentClassName?: string;
}

export const Card: FC<CardProps> = ({
  size = "medium",
  title,
  content,
  children,
  containerClassName,
  contentClassName,
}) => {
  const sizeClasses = {
    small: "w-64 p-4", // 작은 카드
    medium: "w-96 p-6", // 기본 크기 카드
    large: "w-128 p-8", // 큰 카드
    setting: "w-3/5 h-full p-6", // 설정용 카드 (예시로 고정된 크기)
    "mini-setting": "w-2/6 h-full p-6", // 설정용 카드 (예시로 고정된 크기)
    view: "w-full h-full p-6", // 뷰어용? 전체 사이즈 쯤
    full: "w-full h-full,",
  };

  const cardClass = sizeClasses[size] || sizeClasses.medium;

  return (
    <div
      className={twMerge(
        `bg-white shadow-md   border-card-border border-1 rounded-5 p-card-padding`,
        cardClass,
        containerClassName
      )}
    >
      {title && <h3 className="text-xl font-bold mb-4">{title}</h3>}
      {content && <p className="mb-4 text-gray-700">{content}</p>}
      <div className={contentClassName}>{children}</div>
    </div>
  );
};
