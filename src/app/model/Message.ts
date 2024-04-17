export class Message {
  messageID?: number;
  chatID!: number;
  content!: string;
  sentAt!: Date;
  likes?: number;
  dislikes?: number;
}
