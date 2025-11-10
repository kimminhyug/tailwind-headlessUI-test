## 프로젝트 개요

tailwindcss 와 headlessUI가 상당히 좋다는 의견을 들어 테스트를 진행해 보았습니다.

- headlessUI: 디자인이 제외된 오로지 UI의 기능과 웹접근성들이 구현되어 있어, 스타일을 커스텀하기 쉬우며 외부 의존성이 적은 라이브러리로 들었습니다
- tailwindcss: 유틸리티 기반으로 클래스 이름 기반으로 빠르고 일관적이게 스타일을 적용 할 수 있는 라이브러리로 알고 있습니다.
  - 런타임이 아닌 빌드 시점에 사용중인 css만 적용되기에 속도도 더 빠르고 번들 크기면에서 유리한 것으로 알고 있습니다.


### Tailwind CSS의 장점

1. **Utility-First 접근**
   - 클래스 단위로 스타일을 조합해 빠르게 UI를 구성할 수 있습니다.  
   - 불필요한 CSS 중복이 줄어들고 유지보수가 쉬워집니다.(해당 방식이 상당히 괜찮다 생각합니다.)

2. **JIT(Just-In-Time) 빌드 성능**
   - 실제 사용된 클래스만 빌드에 포함되어 **빌드 용량이 작고 빠릅니다.**  
   - 동적 클래스(`hover:bg-blue-500`, `dark:text-gray-200`)도 즉시 반영됩니다.

3. **디자인 일관성 유지**
   - 공통 색상, 폰트, 간격 등을 `tailwind.config.js`에서 통일 관리할 수 있습니다.  
   - CSS 변수와 함께 사용하면 다크모드나 테마 전환도 손쉽게 지원됩니다.(테마 관리가 생각 이상으로 편했습니다.)

4. **CSS-in-JS 대비 성능 및 제어 이점**
   - 런타임 오버헤드가 없고, 빌드 타임에 스타일이 완전히 정리됩니다.  
   - 스타일 충돌이 거의 발생하지 않습니다.

---

### Headless UI의 장점

1. **로직 중심의 Headless 컴포넌트 구조**
   - UI 스타일은 제공하지 않고, **접근성(ARIA)** 과 **상태 로직**만 제공합니다.  
   - Tailwind나 다른 CSS 프레임워크로 자유롭게 커스터마이징할 수 있습니다.
   - 커스터마이징 하기쉬웠으나, 개발 난이도가 좀 있는 것 같습니다.

2. **완벽한 접근성 지원 (A11y)**
   - `Dialog`, `Listbox`, `Menu`, `Switch` 등 컴포넌트들이  
     WCAG 표준에 맞게 동작합니다.

3. **Tailwind와 완벽한 궁합**
   - Tailwind의 유틸리티 클래스로 바로 스타일링 가능해  
     디자인 시스템 개발 속도가 빠릅니다.

4. **React, Vue 모두 지원**
   - 프레임워크에 구애받지 않고, 공통적인 접근성 컴포넌트를 활용할 수 있습니다.
   - 이게 가장 큰것 같네요 외부 의존성이 적습니다.


## 테마 시스템 (Tailwind + CSS Variable)

본 프로젝트는 **Tailwind CSS**와 **CSS 변수 기반의 테마 구조**를 이용하여  
**라이트 / 다크 모드 전환** 및 **컴포넌트 단위 색상 제어**를 테스트 했습니다.  

### 구조 개요
- Tailwind의 `theme.extend.colors` 속성을 활용해 CSS 변수를 바인딩
- 전역 CSS 변수(`:root`, `.dark`)를 통해 모드별 색상 값 정의
- Theme 토글 컴포넌트(`ThemeStatusToggle`)를 통해 모드 전환 수행

### 예시 구조

### `tailwind.config.js`
``` js
// jit --> 실제 사용한 클래스만 빌드에 포함(productuon)
const colors = require("tailwindcss/colors");
export default {
  mode: "aot",
  darkMode: "class",
  // purge: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    borderRadius: { 5: "5px", 10: "10px", 50: "50px" },
    gap: { 0.75: "3px" },
    fontFamily: {
      noto: ["Noto Sans KR", "sans-serif"],
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      height: { "panel-title": "80px" },
      width: {
        "large-panel": "960px",
        "small-panel": "495px",
        "text-field": "360px",
      },
      padding: {
        button: "18px 16px",
        "panel-title": "10px 20px",
        "card-padding": "20px 20px 36px 20px",
      },

      colors: {
        /* html */
        "theme-background": "var(--theme-bg)",
        "theme-color": "var(--theme-color)",
        /* Menu */
        "menu-color": "var(--menu-text-color)",
        "menu-background": "var(--menu-bg)",
        "menu-hover-bg": "var(--menu-hover-bg)",
        /* ThemeStatus */
        "theme-toggle-background": "var(--theme-toggle-bg)",
        "theme-toggle-icon-background": "var(--theme-toggle-icon-bg)",
        "theme-toggle-icon-color": "var(--theme-toggle-icon-color)",
        /* CheckIconToggle */
        "toggle-checked-icon-color": "var(--theme-toggle-checked-icon-color)",
        "toggle-unchecked-icon-color":
          "var(--theme-toggle-unchecked-icon-color)",
        "toggle-checked-icon-background": "var(--theme-toggle-checked-icon-bg)",
        "toggle-unchecked-icon-background":
          "var(--theme-toggle-unchecked-icon-bg)",
        /* SubmitButton */
        "submit-background": "var(--submit-bg)",
        "submit-color": "var(--submit-color)",
        "submit-hover-background": "var(--submit-hover-bg)",
        "submit-disabled-background": "var(--submit-disabled-bg)",
        "submit-disabled-color": "var(--submit-disabled-color)",
        /* Paging Button */
        "paging-background": "var(--paging-bg)",
        "paging-hover-background": "var(--paging-hover-bg)",
        "paging-color": "var(--paging-text-color)",
        /* Card */
        "card-border": "var(--card-border)",
        /* TextField */
        "field-background": "var(--textField-bg)",
        "field-border-color": "var(--textField-border)",
        "field-active-border-color": "var(--textField-active-border)",
        "field-disabled-background": "var(--textField-disabled-bg)",
        "field-disabled-color": "var(--textField-disabled-color)",
        "field-error-border": "var(--textField-error-border)",
        /* Dropdown */
        "dropdown-background": "var(--dropdown-bg)",
        "dropdown-item-hover-background": "var(--dropdown-item-hover-bg)",
        "dropdown-border-color": "var(--dropdown-border-color)",
        "dropdown-disabled-background": "var(--dropdown-disabled-bg)",
        "dropdown-disabled-color": "var(--dropdown-disabled-color)",
        /*Checkbox*/
        "checkbox-border-color": "var(--checkbox-border-color)",
        "checkbox-checked-color": "var(--checkbox-checked-color)",
        "checkbox-background": "var(--checkbox-bg)",
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        button: "10px",
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

```

----

####  `*.css`
```css
:root {
  /*html 배경*/
  --theme-bg-light: #eef0f5;
  --theme-bg-dark: #121212;
  /*html 폰트 컬러*/
  --theme-color-light: black;
  --theme-color-dark: rgb(255 255 255 / 90%);

  /*메뉴 폰트 컬러*/
  --menu-text-color-light: white;
  --menu-text-color-dark: white;
  /*메뉴 배경*/
  --menu-bg-light: #ffa36d;
  --menu-bg-dark: #000000;
  /*메뉴 호버 배경*/
  --menu-hover-bg-light: #f57931;
  --menu-hover-bg-dark: #23262d;

  /*카드 테두리 색*/
  --card-border-light: #d6d5e8;
  --card-border-dark: #d6d5e8;

  /*Submit 버튼 배경*/
  --submit-bg-light: #ffa36d;
  --submit-bg-dark: #ffa36d;
  /*Submit 버튼 호버 배경*/
  --submit-hover-bg-light: #f57931;
  --submit-hover-bg-dark: #f57931;
  /*Submit 버튼 비활성화 배경*/
  --submit-disabled-bg-light: #cccccc;
  --submit-disabled-bg-dark: #cccccc;
  /*Submit 버튼 비활성화 폰트 컬러*/
  --submit-disabled-color-light: #666666;
  --submit-disabled-color-dark: #666666;
  /*Submit 버튼 폰트 컬러*/
  --submit-color-light: white;
  --submit-color-dark: white;

  /*페이징 버튼 배경*/
  --paging-bg-light: #f5f5f5;
  --paging-bg-dark: #f5f5f5;
  /*페이징 버튼 폰트 컬러*/
  --paging-color-light: #666666;
  --paging-color-dark: #666666;
  /*페이징 버튼 호버 배경*/
  --paging-hover-bg-light: rgba(0, 0, 0, 10%);
  --paging-hover-bg-dark: rgba(0, 0, 0, 10%);

  /*ThemeStatusToggle 아이콘 배경*/
  --theme-toggle-icon-bg-light: #f69e38;
  --theme-toggle-icon-bg-dark: #333333;
  /*ThemeStatusToggle 배경*/
  --theme-toggle-bg-light: white;
  --theme-toggle-bg-dark: #999999;
  /*ThemeStatusToggle 아이콘 컬러*/
  --theme-toggle-icon-color-light: white;
  --theme-toggle-icon-color-dark: white;

  /* CheckIconToggle 체크한 경우 아이콘 색   */
  --theme-toggle-checked-icon-color-light: #3bd569;
  --theme-toggle-checked-icon-color-dark: #3bd569;
  /* CheckIconToggle 체크한 경우 아이콘 배경   */
  --theme-toggle-checked-icon-bg-light: white;
  --theme-toggle-checked-icon-bg-dark: white;
  /* CheckIconToggle 체크 해제한 경우 아이콘 색   */
  --theme-toggle-unchecked-icon-color-light: #cccccc;
  --theme-toggle-unchecked-icon-color-dark: #cccccc;
  /* CheckIconToggle 체크 해제한 경우 아이콘 색   */
  --theme-toggle-unchecked-icon-bg-light: white;
  --theme-toggle-unchecked-icon-bg-dark: white;

  /*TextField 배경*/
  --textField-bg-light: white;
  --textField-bg-dark: #333333;
  /*TextField 테두리*/
  --textField-border-light: #d6d5e8;
  --textField-border-dark: #d6d5e8;
  /*TextField active 테두리 컬러*/
  --textField-active-border-light: #ffa36d;
  --textField-active-border-dark: #ffa36d;
  /*TextField disabled 배경 */
  --textField-disabled-bg-light: #cccccc;
  --textField-disabled-bg-dark: #cccccc;
  /*TextField disabled 컬러*/
  --textField-disabled-color-light: #666666;
  --textField-disabled-color-dark: #666666;
  /*TextField 에러 테두리 컬러*/
  --textField-error-border-light: #e21a1a;
  --textField-error-border-dark: #e21a1a;

  /*Dropdown 배경*/
  --dropdown-bg-light: white;
  --dropdown-bg-dark: #333333;
  /*Dropdown Item hover 배경*/
  --dropdown-item-hover-bg-light: #eef0f5;
  --dropdown-item-hover-bg-dark: #eef0f5;
  /*Dropdown 테두리*/
  --dropdown-border-color-light: #d6d5e8;
  --dropdown-border-color-dark: #7d7f90;
  /* Dropdown disabled 배경 */
  --dropdown-disabled-bg-light: #cccccc;
  --dropdown-disabled-bg-dark: #cccccc;
  /* Dropdown disabled 컬러 */
  --dropdown-disabled-color-light: #d6d5e8;
  --dropdown-disabled-color-dark: #d6d5e8;

  /*Checkbox 테두리*/
  --checkbox-border-color-light: #ffa36d;
  --checkbox-border-color-dark: #ffa36d;
  /*Checkbox Checked 테두리 및 체크 컬러*/
  --checkbox-checked-color-light: #ffa36d;
  --checkbox-checked-color-dark: #ffa36d;
  /*Checkbox 배경*/
  --checkbox-bg-light: white;
  --checkbox-bg-dark: white;
}
/* dark */
html.dark {
  /* html */
  --theme-bg: var(--theme-bg-dark);
  --theme-color: var(--theme-color-dark);

  /* Menu */
  --menu-bg: var(--menu-bg-dark);
  --menu-text-color: var(--menu-text-color-dark);
  --menu-hover-bg: var(--menu-hover-bg-dark);

  /* ThemeStatus */
  --theme-toggle-bg: var(--theme-toggle-bg-dark);
  --theme-toggle-icon-bg: var(--theme-toggle-icon-bg-dark);
  --theme-toggle-icon-color: var(--theme-toggle-icon-color-dark);
  --theme-toggle-checked-icon-color: var(
    --theme-toggle-checked-icon-color-dark
  );
  --theme-toggle-unchecked-icon-color: var(
    --theme-toggle-unchecked-icon-color-dark
  );
  --theme-toggle-checked-icon-bg: var(--theme-toggle-checked-icon-bg-dark);
  --theme-toggle-unchecked-icon-bg: var(--theme-toggle-unchecked-icon-bg-dark);

  /* SubmitButton */
  --submit-bg: var(--submit-bg-dark);
  --submit-color: var(--submit-color-dark);
  --submit-hover-bg: var(--submit-hover-bg-dark);
  --submit-disabled-bg: var(--submit-disabled-bg-dark);
  --submit-disabled-color: var(--submit-disabled-color-dark);

  /* Paging Button */
  --paging-bg: var(--paging-bg-dark);
  --paging-hover-bg: var(--paging-hover-bg-dark);
  --paging-text-color: var(--paging-color-dark);

  /* Card */
  --card-border: var(--card-border-dark);

  /*TextField*/
  --textField-bg: var(--textField-bg-dark);
  --textField-border: var(--textField-border-dark);
  --textField-active-border: var(--textField-active-border-dark);
  --textField-disabled-bg: var(--textField-disabled-bg-dark);
  --textField-disabled-color: var(--textField-disabled-color-dark);
  --textField-error-border: var(--textField-error-border-dark);

  /*Dropdown */
  --dropdown-bg: var(--dropdown-bg-dark);
  --dropdown-item-hover-bg: var(--dropdown-item-hover-bg-dark);
  --dropdown-border-color: var(--dropdown-border-color-dark);
  --dropdown-disabled-bg: var(--dropdown-disabled-bg-dark);
  --dropdown-disabled-color: var(--dropdown-disabled-color-dark);

  /*Checkbox*/
  --checkbox-border-color: var(--checkbox-border-color-dark);
  --checkbox-checked-color: var(--checkbox-checked-color-dark);
  --checkbox-bg: var(--checkbox-bg-dark);
}
/* light */

html {
  font-family: Noto Sans KR;
  /* html */
  --theme-bg: var(--theme-bg-light);
  --theme-color: var(--theme-color-light);

  /* Menu */
  --menu-bg: var(--menu-bg-light);
  --menu-text-color: var(--menu-text-color-light);
  --menu-hover-bg: var(--menu-hover-bg-light);

  /* ThemeStatus */
  --theme-toggle-bg: var(--theme-toggle-bg-light);
  --theme-toggle-icon-bg: var(--theme-toggle-icon-bg-light);
  --theme-toggle-icon-color: var(--theme-toggle-icon-color-light);
  --theme-toggle-checked-icon-color: var(
    --theme-toggle-checked-icon-color-light
  );
  --theme-toggle-unchecked-icon-color: var(
    --theme-toggle-unchecked-icon-color-light
  );
  --theme-toggle-checked-icon-bg: var(--theme-toggle-checked-icon-bg-light);
  --theme-toggle-unchecked-icon-bg: var(--theme-toggle-unchecked-icon-bg-light);

  /* SubmitButton */
  --submit-bg: var(--submit-bg-light);
  --submit-color: var(--submit-color-light);
  --submit-hover-bg: var(--submit-hover-bg-light);
  --submit-disabled-bg: var(--submit-disabled-bg-light);
  --submit-disabled-color: var(--submit-disabled-color-light);

  /* Paging Button */
  --paging-bg: var(--paging-bg-light);
  --paging-text-color: var(--paging-color-light);
  --paging-hover-bg: var(--paging-hover-bg-light);

  /* Card */
  --card-border: var(--card-border-light);

  /*TextField*/
  --textField-bg: var(--textField-bg-light);
  --textField-border: var(--textField-border-light);
  --textField-active-border: var(--textField-active-border-light);
  --textField-disabled-bg: var(--textField-disabled-bg-light);
  --textField-disabled-color: var(--textField-disabled-color-light);
  --textField-error-border: var(--textField-error-border-light);

  /*Dropdown */
  --dropdown-bg: var(--dropdown-bg-light);
  --dropdown-item-hover-bg: var(--dropdown-item-hover-bg-light);
  --dropdown-border-color: var(--dropdown-border-color-light);
  --dropdown-disabled-bg: var(--dropdown-disabled-bg-light);
  --dropdown-disabled-color: var(--dropdown-disabled-color-light);

  /*Checkbox*/
  --checkbox-border-color: var(--checkbox-border-color-light);
  --checkbox-checked-color: var(--checkbox-checked-color-light);
  --checkbox-bg: var(--checkbox-bg-light);
}
```
