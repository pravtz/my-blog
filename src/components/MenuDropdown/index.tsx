import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import {
  FileIcon,
  MixerHorizontalIcon,
} from "@radix-ui/react-icons";
import { clsx } from "clsx";
import React, { ReactNode } from "react";


interface RadixMenuItem {
  label: string;
  shortcut?: string;
  icon?: ReactNode;
}

interface User {
  name: string;
  url?: string;
}

const generalMenuItems: RadixMenuItem[] = [
  {
    label: "New File",
    icon: <FileIcon className="mr-2 h-3.5 w-3.5" />,
    shortcut: "⌘+N",
  },
  {
    label: "Settings",
    icon: <MixerHorizontalIcon className="mr-2 h-3.5 w-3.5" />,
    shortcut: "⌘+,",
  },
];


interface DropdownMenuProps { }

const MenuDropdwn = (props: DropdownMenuProps) => {
  return (
    <div className="relative inline-block text-left">
      <DropdownMenuPrimitive.Root>
        <DropdownMenuPrimitive.Trigger asChild>
          <button>Click</button>
        </DropdownMenuPrimitive.Trigger>

        <DropdownMenuPrimitive.Portal>
          <DropdownMenuPrimitive.Content
            align="end"
            sideOffset={5}
            className={clsx(
              "radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down",
              "w-48 rounded-lg px-1.5 py-1 shadow-md md:w-56",
              "bg-white dark:bg-gray-800"
            )}
          >
            {generalMenuItems.map(({ label, icon, shortcut }, i) => (
              <DropdownMenuPrimitive.Item
                key={`${label}-${i}`}
                className={clsx(
                  "flex cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-none",
                  "text-gray-400 focus:bg-gray-50 dark:text-gray-500 dark:focus:bg-gray-900"
                )}
              >
                {icon}
                <span className="flex-grow text-gray-700 dark:text-gray-300">
                  {label}
                </span>
                {shortcut && <span className="text-xs">{shortcut}</span>}
              </DropdownMenuPrimitive.Item>
            ))}





            <DropdownMenuPrimitive.Separator className="my-1 h-px bg-gray-200 dark:bg-gray-700" />
            <DropdownMenuPrimitive.Item
              className={clsx(
                "flex cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-none",
                "text-gray-400 focus:bg-gray-50 dark:text-gray-500 dark:focus:bg-gray-900"
              )}>
              <span className="flex-grow text-gray-700 dark:text-gray-300">
                Logout
              </span>
            </DropdownMenuPrimitive.Item>


          </DropdownMenuPrimitive.Content>
        </DropdownMenuPrimitive.Portal>
      </DropdownMenuPrimitive.Root>
    </div>
  );
};

export { MenuDropdwn };