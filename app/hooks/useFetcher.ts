import { getSession } from "next-auth/react";

/**
 * Get the fetcher instance
 * @returns
 */
export function useFetcher() {
  const fetcher = async (
    input: RequestInfo | URL,
    init?: RequestInit | undefined,
  ) => {
    try {
      const session = await getSession();

      const res = await fetch(input, {
        ...init,
        headers: {
          ...(init?.headers ?? {}),
          authorization: session?.user.accessToken ?? "",
        },
      });

      return await res.json();
    } catch (error) {
      throw error;
    }
  };

  return fetcher;
}

export default useFetcher;
