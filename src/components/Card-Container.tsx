import { FC, ReactNode } from 'react';

interface CardContainerProps {
  children: ReactNode;
}

export const CardContainer: FC<CardContainerProps> = ({ children }) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center h-full">{children}</div>
  );
};
