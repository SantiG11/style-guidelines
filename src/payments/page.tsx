import { colorHeaders, getColors } from "./colors";
import { DataTable } from "./data-table";

export default async function DemoPage() {
  const data = await getColors();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={colorHeaders} data={data} />
    </div>
  );
}
