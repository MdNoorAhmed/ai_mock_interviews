import React, { ReactNode } from 'react';
import { redirect } from 'next/navigation';
import { isAuthenticated } from '@/lib/actions/auth.action';

const AuthLayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();

  // Redirect logged-in users away from auth pages (to dashboard or home)
  if (isUserAuthenticated) redirect('/');

  return <div className='auth-layout'>{children}</div>;
};

export default AuthLayout;
