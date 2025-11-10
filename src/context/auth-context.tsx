import { createContext } from "react";
export const UserRole = {
  ADMIN: "ADMIN",
  USER: "USER",
} as const;
interface IAuth {
  user?: string | null;
  role?: (typeof UserRole)[keyof typeof UserRole] | null;
}

export const AuthContext = createContext<IAuth>({
  user: "mhkim",
  role: "ADMIN",
});
