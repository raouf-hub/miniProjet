import { Message } from "./Message";

export interface Chat {
    chatID: number | null;
    title: string;
    messages: Message[];
  }
  