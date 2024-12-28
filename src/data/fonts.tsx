import { ColumnDef } from "@tanstack/react-table";

export type Font = {
  id: string;
  name: string;
  family: string;
  size: string;
  color: string;
};

export const fontHeaders: ColumnDef<Font>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "family",
    header: "Font Family",
  },
  {
    accessorKey: "size",
    header: "Size and Weight",
  },
  {
    accessorKey: "color",
    header: "Color",
  },
];

export async function getFonts(): Promise<Font[]> {
  return [
    {
      id: "1",
      name: "title-font",
      family: "Arial",
      size: "16px bold",
      color: "#000",
    },
    {
      id: "2",
      name: "subtitle-font",
      family: "Sans",
      size: "12px semi bold",
      color: "#cc0",
    },
    {
      id: "3",
      name: "text-font",
      family: "Sans",
      size: "12px regular",
      color: "#e45",
    },
  ];
}
