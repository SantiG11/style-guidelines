import { ColumnDef } from "@tanstack/react-table";

export type Color = {
  id: string;
  name: string;
  value: string;
};

export const colorHeaders: ColumnDef<Color>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "value",
    header: "Value",
  },
];

export async function getColors(): Promise<Color[]> {
  return [
    {
      id: "1",
      name: "main-color",
      value: "#333",
    },
    {
      id: "2",
      name: "bg-color",
      value: "#000",
    },
    {
      id: "3",
      name: "text-color",
      value: "#fff",
    },
  ];
}
