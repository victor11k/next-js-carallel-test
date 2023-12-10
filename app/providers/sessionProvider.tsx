"use client";

import { SessionProvider as Provider } from "next-auth/react";
import { ReactNode } from "react";

interface SessionProviderProps {
  children: ReactNode;
}

/**
 * Returns the session provider for next-auth
 * @returns JSX.Element
 */
const SessionProvider = ({ children }: SessionProviderProps) => {
  return <Provider>{children}</Provider>;
};

export default SessionProvider;
