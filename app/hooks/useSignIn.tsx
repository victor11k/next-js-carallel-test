import { BuiltInProviderType } from "next-auth/providers";
import { LiteralUnion, signIn } from "next-auth/react";

//@components
import { toast } from "react-toastify";

// @hooks
import { useState } from "react";

/**
 * Get the sign in methods with loading state.
 * @returns
 */
export function useSignIn() {
  const [loadingState, setLoadingState] = useState<{
    provider: LiteralUnion<BuiltInProviderType>;
    loading: boolean;
  }>({
    provider: "credentials",
    loading: false,
  });

  const isCredentialProviderLoading =
    loadingState.provider === "credentials" && loadingState.loading;

  const signInWithCredentials = async (email: string, password: string) => {
    setLoadingState({
      provider: "credentials",
      loading: true,
    });

    const res = await signIn("credentials", {
      callbackUrl: "/library",
      redirect: true,
      password: password,
      email: email,
    });

    if (res?.error) {
      toast.error(
        `Invalid credentials for user: ${email}! Error: ${res.error}`,
      );
    }

    if (res?.ok) {
      toast.success(`Sign-in successful! Greetings, ${email}!`);
    }

    setLoadingState({
      provider: "credentials",
      loading: false,
    });
  };

  return {
    signInWithCredentials,
    isCredentialProviderLoading,
  };
}

export default useSignIn;
