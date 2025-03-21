export type Blog = {
  id: number | string;
  title: string;
  ingredients: string[];
  instructions: string[];
  notes: string[] | [];
  nutrition: string[] | [];
  macros?: string[] | [];
};
