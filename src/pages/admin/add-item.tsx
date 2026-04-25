import ItemForm from "@/features/Admin/components/ItemForm";
import Layout from "@/features/Admin/AddItem/components/Layout";
import { Pages } from "@/constants/enums";

export default function AddItem() {
  return (
    <Layout>
      <ItemForm slug={Pages.ADD_ITEM} />
    </Layout>
  );
}
