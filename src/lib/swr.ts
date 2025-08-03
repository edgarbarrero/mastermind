import { SWRConfiguration } from 'swr';
import useSWR from 'swr';

// Custom fetcher function for API calls
export const fetcher = async (url: string, options?: RequestInit) => {
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'An error occurred' }));
    throw new Error(error.error || `HTTP error! status: ${response.status}`);
  }

  return response.json();
};

// Default SWR configuration
export const swrConfig: SWRConfiguration = {
  revalidateOnFocus: false,
  revalidateOnReconnect: true,
  dedupingInterval: 2000,
  errorRetryCount: 3,
  errorRetryInterval: 5000,
};

// Custom hook for authentication mutations
export const useAuthMutation = () => {
  const login = async (credentials: { email: string; password: string }) => {
    try {
      const data = await fetcher('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify(credentials),
      });
      return { data, error: null };
    } catch (error) {
      return { data: null, error: error instanceof Error ? error.message : 'Login failed' };
    }
  };

  const register = async (userData: {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
  }) => {
    try {
      const data = await fetcher('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify(userData),
      });
      return { data, error: null };
    } catch (error) {
      return { data: null, error: error instanceof Error ? error.message : 'Registration failed' };
    }
  };

  return { login, register };
};

// Hook for fetching user data (example of SWR data fetching)
export const useUser = (userId?: string) => {
  const { data, error, isLoading, mutate } = useSWR(
    userId ? `/api/users/${userId}` : null,
    fetcher
  );

  return {
    user: data,
    isLoading,
    isError: error,
    mutate,
  };
};

// Hook for fetching game data (example)
export const useGameData = (gameId?: string) => {
  const { data, error, isLoading, mutate } = useSWR(
    gameId ? `/api/games/${gameId}` : null,
    fetcher,
    {
      refreshInterval: 5000, // Refresh every 5 seconds for real-time updates
      revalidateOnFocus: true,
    }
  );

  return {
    game: data,
    isLoading,
    isError: error,
    mutate,
  };
}; 