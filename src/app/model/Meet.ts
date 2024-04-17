
export class Meet {
  meetID?: number;
  title!: string;
  startDate!: Date;
  endDate!: Date;

constructor(title: string, startDate: Date, endDate: Date) {
  this.title = title;
  this.startDate = startDate;
  this.endDate = endDate;
}
}
