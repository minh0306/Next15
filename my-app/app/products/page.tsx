import Filter from "@/components/Filter/Filter";
import ItemList from "@/components/Item/Items";

const Products = () => {
  return (
    <div className="products-layout flex">
      <Filter />
      <main>
        <div className="sort-pagination" />
        <ItemList />
      </main>
    </div>
  );
};
export default Products;
