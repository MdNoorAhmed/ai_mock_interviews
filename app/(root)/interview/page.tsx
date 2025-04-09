import Agent from '@/components/Agent'
import { getCurrentUser } from '@/lib/actions/auth.action'
import { redirect } from 'next/navigation';
import React from 'react'

const page = async () => {
  const user = await getCurrentUser();

  // 👇 If user is not logged in, redirect them
  if (!user || !user.name || !user.id) redirect('/');

  return (
    <>
      <h3>Interview Generation</h3>
      <Agent userName={user.name} userId={user.id} type="generate" />
    </>
  );
}

export default page;
