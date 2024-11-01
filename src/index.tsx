export * from '@parse/react-base';
// Re-export AuthProvider and useAuth hook
export { AuthProvider, useAuth } from './AppProvider';

// Re-export AuthProviderProps and AuthContextType for TypeScript users
export type { AuthProviderProps, AuthContextType } from './AppProvider';
