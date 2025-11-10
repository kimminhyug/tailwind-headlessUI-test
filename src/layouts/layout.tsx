import { useEffect } from "react";
import { ContentContainer } from "./contents/content-container";

const getCSSVariables = () => {
  const styles = getComputedStyle(document.documentElement);
  const vars = {} as Record<string, string>;

  for (let i = 0; i < styles.length; i++) {
    const prop = styles[i];
    if (prop.startsWith("--")) {
      vars[prop] = styles.getPropertyValue(prop).trim();
    }
  }

  return vars;
};
/**
 * 로그인 후 페이지의 레이아웃을 담당
 * 각 페이지는 재사용 할 필요가 없으므로 유지보수 하기 편하게 현재 파일에서 layout css 구성
 */
export const Layout = ({ children }: { children: JSX.Element }) => {
  useEffect(() => {
    console.log("mount", getCSSVariables());
  }, []);
  return (
    <div className="flex w-full h-full">
      <div className="flex-1 bg-inherit p-4 h-full">
        <ContentContainer>{children}</ContentContainer>
      </div>
    </div>
  );
};

export const PageTitle = ({ name = "" }) => {
  return <div className="text-2xl font-medium">{name}</div>;
};
