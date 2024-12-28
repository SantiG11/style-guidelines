import { colorHeaders, getColors } from "../data/colors";
import { DataTable } from "./data-table";

export async function ColorTable() {
  const colors = await getColors();

  return (
    <div className="container mx-auto py-10" key={"color-table"}>
      <DataTable columns={colorHeaders} data={colors} />
    </div>
  );
}
