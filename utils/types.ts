export interface File {
  id: string;
  name: string;
}

export interface Record {
  id: string;
  salary: number;
  documents: File[];
}
