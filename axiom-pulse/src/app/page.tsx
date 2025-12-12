'use client';

import { useEffect } from 'react';
import { DashboardBoard } from '@/components/organisms/DashboardBoard';
import { useTokenSocketMock } from '@/hooks/useTokenSocketMock';

export default function Home() {
  const { tokens } = useTokenSocketMock();

  useEffect(() => {
    console.log('Page - Tokens received:', tokens.length);
  }, [tokens]);

  return <DashboardBoard tokens={tokens} />;
}
