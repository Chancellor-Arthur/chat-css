import { ReactNode } from 'react';

export interface MessageProps {
  id: number;
  isUser: boolean;
  author?: string;
  time: string;
  children: ReactNode;
}

export interface EntryButtonProps {
  visible: boolean;
  onClick: () => void;
}

export interface SmileModalProps {
  value: string;
  setValue: (str: string) => void;
}
