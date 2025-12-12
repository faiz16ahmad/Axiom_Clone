'use client';

import { useEffect } from 'react';
import { Header } from '@/components/organisms/Header';
import { ToolbarRow } from '@/components/organisms/ToolbarRow';
import { SubHeader } from '@/components/organisms/SubHeader';
import { DashboardBoard } from '@/components/organisms/DashboardBoard';
import { GlobalStatusBar } from '@/components/organisms/GlobalStatusBar';
import { useTokenSocketMock } from '@/hooks/useTokenSocketMock';

export default function Home() {
  const { tokens } = useTokenSocketMock();

  useEffect(() => {
    console.log('Page - Tokens received:', tokens.length);
  }, [tokens]);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden max-w-[1920px] mx-auto w-full">
      <Header />
      <main className="flex-1 pt-14 lg:pt-16 pb-10 lg:pb-12">
        <ToolbarRow />
        <SubHeader />
        <DashboardBoard tokens={tokens} />
      </main>
      <GlobalStatusBar />
    </div>
  );
}
