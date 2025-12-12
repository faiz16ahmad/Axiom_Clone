'use client';

import {
  ChevronDown,
  HelpCircle,
  Bookmark,
  LayoutGrid,
  Volume2,
  Settings2,
  FolderOpen,
  Menu,
} from 'lucide-react';
import { SolanaIcon } from '@/components/atoms/SolanaIcon';

function SolanaIconBadge() {
  return (
    <div className="w-8 h-8 rounded-full bg-[#16191F] flex items-center justify-center">
      <SolanaIcon size="md" className="w-5 h-5" />
    </div>
  );
}

function BNBCubeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.57583 9L3.58452 12.0945L6.29036 13.6418V15.4535L2.00097 13.0088V8.09508L3.57583 9ZM3.57583 5.90546V7.70873L2 6.80288V4.99961L3.57583 4.09375L5.15939 4.99961L3.57583 5.90546ZM7.42036 4.99961L8.9962 4.09375L10.5797 4.99961L8.9962 5.90546L7.42036 4.99961Z" fill="#F0B90B" />
      <path d="M4.71436 11.4531V9.64141L6.29019 10.5473V12.3505L4.71436 11.4531ZM7.4202 14.2907L8.99603 15.1966L10.5796 14.2907V16.094L8.99603 16.9998L7.4202 16.094V14.2907ZM12.8396 4.99961L14.4154 4.09375L15.999 4.99961V6.80288L14.4154 7.70873V5.90546L12.8396 4.99961ZM14.4154 12.0945L14.4241 9L15.9999 8.09414V13.0079L11.7106 15.4526V13.6409L14.4154 12.0945Z" fill="#F0B90B" />
      <path d="M13.2853 11.4543L11.7095 12.3517V10.5484L13.2853 9.64258V11.4543Z" fill="#F0B90B" />
      <path d="M13.2854 6.54672L13.2941 8.35843L10.5805 9.9057V13.0077L9.00471 13.9052L7.42888 13.0077V9.9057L4.71532 8.35843V6.54672L6.29791 5.64087L8.99506 7.19564L11.7086 5.64087L13.2922 6.54672H13.2854ZM4.71436 3.45312L8.99603 1L13.2854 3.45312L11.7096 4.35898L8.99603 2.80421L6.29019 4.35898L4.71436 3.45312Z" fill="#F0B90B" />
    </svg>
  );
}

export function SubHeader() {
  return (
    <div className="w-full h-14 bg-[#06070B] mt-1">
      <div className="h-full flex items-center justify-between px-4">
        {/* Left Side: Title + Chain Icons */}
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-bold text-white">Pulse</h1>
          <div className="flex items-center gap-2">
            <SolanaIconBadge />
            <BNBCubeIcon />
          </div>
        </div>

        {/* Right Side: Global Controls */}
        <div className="flex items-center gap-2">
          {/* Help Icon */}
          <button className="p-2 text-gray-500 hover:text-white transition-colors">
            <HelpCircle className="w-4 h-4" />
          </button>

          {/* Display Button */}
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 rounded-full text-sm text-gray-300 transition-colors border border-zinc-700">
            <Menu className="w-4 h-4" />
            <span>Display</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </button>

          {/* Tool Icons */}
          <div className="flex items-center gap-1">
            <button className="p-2 text-gray-500 hover:text-white transition-colors">
              <Bookmark className="w-4 h-4" />
            </button>
            <button className="p-2 text-gray-500 hover:text-white transition-colors">
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button className="p-2 text-gray-500 hover:text-white transition-colors">
              <Volume2 className="w-4 h-4" />
            </button>
            <button className="p-2 text-gray-500 hover:text-white transition-colors">
              <Settings2 className="w-4 h-4" />
            </button>
          </div>

          {/* Layout Selector */}
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-900 hover:bg-zinc-800 rounded-md text-sm text-gray-300 transition-colors border border-zinc-800">
            <FolderOpen className="w-4 h-4" />
            <span>1</span>
            <span className="text-gray-500">≡ 0</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  );
}
