# SWR Implementation in Mastermind Game

This document describes the SWR implementation for data fetching in the Mastermind game application.

## Overview

SWR (Stale-While-Revalidate) is a React Hooks library for data fetching that provides:
- **Fast**: Lightweight and reusable data fetching
- **Realtime**: Automatic revalidation and real-time experience
- **Suspense**: Built-in support for React Suspense
- **TypeScript**: Full TypeScript support
- **Backend Agnostic**: Works with any API

## Implementation Details

### 1. Installation
```bash
npm install swr
```

### 2. Configuration (`src/lib/swr.ts`)

#### Custom Fetcher
```typescript
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
```

#### Global Configuration
```typescript
export const swrConfig: SWRConfiguration = {
  revalidateOnFocus: false,
  revalidateOnReconnect: true,
  dedupingInterval: 2000,
  errorRetryCount: 3,
  errorRetryInterval: 5000,
};
```

### 3. SWR Provider (`src/app/providers/SWRProvider.tsx`)

The SWR provider wraps the application to provide global configuration:

```typescript
export const SWRProvider: React.FC<SWRProviderProps> = ({ children }) => {
  return (
    <SWRConfig value={swrConfig}>
      {children}
    </SWRConfig>
  );
};
```

### 4. Authentication Hooks (`src/lib/swr.ts`)

#### useAuthMutation Hook
Provides login and register functions with error handling:

```typescript
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
    // Similar implementation for registration
  };

  return { login, register };
};
```

### 5. Refactored Components

#### LoginForm (`src/app/auth/components/LoginForm.tsx`)
- Uses `useAuthMutation` hook for login
- Simplified error handling
- Cleaner separation of concerns

#### RegisterForm (`src/app/auth/components/RegisterForm.tsx`)
- Uses `useAuthMutation` hook for registration
- Consistent error handling with login
- Better state management

### 6. Example Data Fetching Hooks

#### useUser Hook
```typescript
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
```

#### useGameData Hook
```typescript
export const useGameData = (gameId?: string) => {
  const { data, error, isLoading, mutate } = useSWR(
    gameId ? `/api/games/${gameId}` : null,
    fetcher,
    {
      refreshInterval: 5000, // Real-time updates
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
```

## Benefits of SWR Implementation

1. **Automatic Caching**: SWR automatically caches data and provides instant loading states
2. **Real-time Updates**: Automatic revalidation on focus, network recovery, and intervals
3. **Error Handling**: Built-in error retry and error states
4. **Request Deduplication**: Multiple components requesting the same data share the same request
5. **TypeScript Support**: Full type safety throughout the application
6. **Suspense Support**: Ready for React Suspense integration
7. **Optimistic Updates**: Easy to implement optimistic UI updates

## Usage Examples

### Basic Data Fetching
```typescript
const { user, isLoading, isError } = useUser(userId);

if (isLoading) return <div>Loading...</div>;
if (isError) return <div>Error loading user</div>;
return <div>Hello {user.name}!</div>;
```

### Authentication
```typescript
const { login } = useAuthMutation();

const handleLogin = async () => {
  const { data, error } = await login({ email, password });
  if (error) {
    setError(error);
  } else {
    // Handle successful login
  }
};
```

### Real-time Game Data
```typescript
const { game, isLoading } = useGameData(gameId);

// Data automatically refreshes every 5 seconds
// and on window focus
```

## Configuration Options

The global SWR configuration can be customized in `src/lib/swr.ts`:

- `revalidateOnFocus`: Revalidate when window gains focus
- `revalidateOnReconnect`: Revalidate when network reconnects
- `dedupingInterval`: Time to deduplicate requests
- `errorRetryCount`: Number of retries on error
- `errorRetryInterval`: Interval between retries

## Next Steps

1. **Implement Game Data Fetching**: Use the `useGameData` hook for real-time game updates
2. **Add Optimistic Updates**: Implement optimistic UI for better user experience
3. **Suspense Integration**: Add React Suspense for loading states
4. **Infinite Loading**: Implement pagination for game history
5. **Offline Support**: Add offline-first capabilities

## Resources

- [SWR Documentation](https://swr.vercel.app/)
- [SWR Examples](https://swr.vercel.app/examples)
- [SWR GitHub Repository](https://github.com/vercel/swr) 