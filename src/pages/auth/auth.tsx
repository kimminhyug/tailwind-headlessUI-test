import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext, UserRole } from "../../context/auth-context";
import { Layout } from "../../layouts/layout";
export const rootPath = "/app";

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { user } = useContext(AuthContext);
  return user ? children : <Navigate to={`${rootPath}/login`} replace />;
};

export const AuthenticatedPage = ({ children }: { children: JSX.Element }) => {
  const auth = useContext(AuthContext);

  return auth.user &&
    (auth.role === UserRole.ADMIN || auth.role === UserRole.USER) ? (
    <Layout>{children}</Layout>
  ) : (
    <Navigate to={`${rootPath}/login`} replace />
  );
};
// /app/
