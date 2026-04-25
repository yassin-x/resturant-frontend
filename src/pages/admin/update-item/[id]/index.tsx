import { Pages } from "@/constants/enums";
import ItemForm from "@/features/Admin/components/ItemForm";
import Layout from "@/features/Admin/UpdateItem/Layout";

export default function UpdateItemId() {
  return (
    <Layout>
      <ItemForm slug={Pages.UPDATE_ITEM} />
    </Layout>
  );
}
