'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/lib/queryClient';
import { ReduxProvider } from '@/store/provider';
import { TooltipProvider } from '@/components/ui/tooltip';

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReduxProvider>
        <TooltipProvider delayDuration={100}>
          {children}
        </TooltipProvider>
      </ReduxProvider>
    </QueryClientProvider>
  );
}
