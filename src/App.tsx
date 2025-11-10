import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useBoolean } from "usehooks-ts";
import "./App.css";
import {
  CancelButton,
  IconButton,
  NextButton,
  PagingButton,
  PrevButton,
  SubmitButton,
} from "./components/Button";
import { Card } from "./components/Card";
import { DefaultCheckbox } from "./components/Checkbox";
import { ChipListbox } from "./components/Listbox";
import {
  CheckIconToggle,
  DefaultStatusToggle,
  ThemeStatusToggle,
} from "./components/Status-toggle";
import { TextFiled } from "./components/TextField";
import { AuthenticatedPage } from "./pages/auth/auth";
import Login from "./pages/login/login";

function App() {
  const { value: autoBackup, toggle: toggleAutoBackup } = useBoolean(true);
  const { value: notifications, toggle: toggleNotifications } =
    useBoolean(false);
  useEffect(() => {
    console.log("app mount");
  }, []);

  const containerClass = "w-fit bg-[#f4f7e9]";
  const contentClass = "flex gap-3 flex-wrap";

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/preview"
          element={
            <AuthenticatedPage>
              <div className="flex gap-10 flex-wrap">
                {/* 토글 위젯 카드 */}
                <Card
                  containerClassName={containerClass}
                  contentClassName={contentClass}
                >
                  <DefaultStatusToggle
                    status={autoBackup}
                    toggle={toggleAutoBackup}
                    label="자동 백업"
                  />
                  <CheckIconToggle
                    status={notifications}
                    toggle={toggleNotifications}
                    label="알림 켜기"
                  />
                  <ThemeStatusToggle />
                  <ThemeStatusToggle setDark={true} />
                </Card>

                {/* 사용자 정보 카드 */}
                <Card
                  containerClassName={containerClass}
                  contentClassName={contentClass}
                >
                  <TextFiled value="kimminhyeok" label="사용자 이름" />
                  <TextFiled
                    value="kimminhyug@naver.com"
                    label="이메일"
                    disabled
                  />
                  <TextFiled value="서울특별시" label="주소" readonly />
                  <TextFiled
                    value="서울특별시"
                    label="주소 (읽기전용)"
                    disabled
                    readonly
                  />
                  <TextFiled value="no label" />
                </Card>

                {/* 태그/카테고리 카드 */}
                <Card
                  containerClassName={containerClass}
                  contentClassName={contentClass}
                >
                  <ChipListbox
                    items={[
                      { id: 1, name: "프론트엔드" },
                      { id: 2, name: "백엔드" },
                      { id: 3, name: "DevOps" },
                    ]}
                  />
                </Card>

                {/* 액션 버튼 카드 */}
                <Card
                  containerClassName={containerClass}
                  contentClassName={contentClass}
                >
                  <CancelButton onClick={() => console.log("취소 클릭")} />
                  <CancelButton disabled onClick={() => null} />
                  <SubmitButton onClick={() => console.log("저장 클릭")}>
                    저장
                  </SubmitButton>
                  <SubmitButton disabled onClick={() => null}>
                    저장
                  </SubmitButton>
                  <IconButton
                    onClick={() => console.log("사용자 추가")}
                    icon={faAdd}
                    className="text-submit-color bg-submit-background hover:bg-menu-hover-bg"
                  >
                    새 사용자 추가
                  </IconButton>
                </Card>

                {/* 페이징 카드 */}
                <Card
                  containerClassName={containerClass}
                  contentClassName={contentClass}
                >
                  <PrevButton onClick={() => console.log("이전 페이지")} />
                  {[...Array(5)].map((_, i) => (
                    <PagingButton
                      key={i}
                      onClick={() => console.log(`${i + 1} 페이지 클릭`)}
                    >
                      {i + 1}
                    </PagingButton>
                  ))}
                  <NextButton onClick={() => console.log("다음 페이지")} />
                </Card>

                {/* 체크박스 카드 */}
                <Card
                  containerClassName={containerClass}
                  contentClassName={contentClass}
                >
                  <DefaultCheckbox>
                    <span>이메일 수신 동의</span>
                  </DefaultCheckbox>
                  <DefaultCheckbox disabled>
                    <span>SMS 수신 동의</span>
                  </DefaultCheckbox>
                </Card>

                {/* 기타 카드 */}
                <Card
                  containerClassName={containerClass}
                  contentClassName={contentClass}
                >
                  테스트 영역
                </Card>
              </div>
            </AuthenticatedPage>
          }
        />

        {/* Not Found */}
        <Route
          path="*"
          element={
            <div className="text-center py-16">페이지를 찾을 수 없습니다.</div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
