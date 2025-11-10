import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigator = useNavigate();
  return (
    <div className="login-wrapper">
      <div className="login-card">
        <div className="login-form">
          <div className="form-title">LOGIN</div>
          <div className="id">
            <label htmlFor="login-id">ID</label>
            <input id="login-id" type="text" placeholder="입력하세요"></input>
          </div>
          <div className="password">
            <label htmlFor="login-password">PASSWORD</label>
            <input
              id="login-password"
              type="password"
              placeholder="입력하세요"
            ></input>
          </div>
          <input
            type="button"
            onClick={() => navigator(`preview`)}
            className="login-submit cursor-pointer"
            value={"로그인"}
          />
        </div>
      </div>
    </div>
  );
};
export default Login;
