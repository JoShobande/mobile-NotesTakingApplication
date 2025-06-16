import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
  } from 'react';
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import { useRouter } from 'expo-router';
  
  export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    createdAt: string;
  }
  
  type AuthContextType = {
    user: User | null;
    token: string | null;
    loading: boolean;
    signIn: (email: string, password: string) => Promise<void>;
    // signUp: (
    //   firstName: string,
    //   lastName: string,
    //   email: string,
    //   password: string
    // ) => Promise<void>;
    signOut: () => Promise<void>;
  };
  
  const AuthContext = createContext<AuthContextType | undefined>(undefined);
  
  const API_BASE = __DEV__
    ? 'http://localhost:4000/api'
    : 'https://your-production-url.com/api';
  
  export function AuthProvider({ children }: { children: ReactNode }) {
    const router = useRouter();
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
  
    // Load stored auth state
    useEffect(() => {
      (async () => {
        try {
          const storedToken = await AsyncStorage.getItem('jwt');
          const storedUser = await AsyncStorage.getItem('user');
          if (storedToken && storedUser) {
            setToken(storedToken);
            setUser(JSON.parse(storedUser));
          }
        } catch {
          /* ignore */
        } finally {
          setLoading(false);
        }
      })();
    }, []);
  
    // Persist auth state whenever it changes
    useEffect(() => {
      if (token && user) {
        AsyncStorage.setItem('jwt', token);
        AsyncStorage.setItem('user', JSON.stringify(user));
      } else {
        AsyncStorage.removeItem('jwt');
        AsyncStorage.removeItem('user');
      }
    }, [token, user]);
  
    const signIn = async (email: string, password: string) => {
      setLoading(true);
      try {
        const res = await fetch(`${API_BASE}/auth/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        });
        // if (!res.ok) throw new Error('Login failed');
        const { token: newToken, user: u } = await res.json();
        setToken(newToken);
        setUser(u);
        router.replace('/home');
      } catch(error){
        console.log(error)
      }
      finally {
        setLoading(false);
      }
    };
  
    // const signUp = async (
    //   firstName: string,
    //   lastName: string,
    //   email: string,
    //   password: string
    // ) => {
    //   setLoading(true);
    //   try {
    //     const res = await fetch(`${API_BASE}/auth/signup`, {
    //       method: 'POST',
    //       headers: { 'Content-Type': 'application/json' },
    //       body: JSON.stringify({ firstName, lastName, email, password }),
    //     });
    //     if (!res.ok) throw new Error('Signup failed');
    //     const { token: newToken, user: u } = await res.json();
    //     setToken(newToken);
    //     setUser(u);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
  
    const signOut = async () => {
      setToken(null);
      setUser(null);
      router.replace('/signin');
    };
  
    return (
      <AuthContext.Provider
        value={{ user, token, loading, signIn, signOut }}
      >
        {children}
      </AuthContext.Provider>
    );
  }
  
  export function useAuth(): AuthContextType {
    const ctx = useContext(AuthContext);
    if (!ctx) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return ctx;
  }
  