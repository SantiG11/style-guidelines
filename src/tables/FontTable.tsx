import { fontHeaders, getFonts } from "@/data/fonts";

import { DataTable } from "./data-table";

export async function FontTable() {
  const fonts = await getFonts();

  return (
    <div className="container mx-auto py-10" key={"font-table"}>
      <DataTable columns={fontHeaders} data={fonts} />
    </div>
  );
}
