import Filter from "@/components/Filter/Filter";

const ProductsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="products-layout flex  md:px-4 lg:px-20 px-4 sm:px-8">
      <Filter />
      <div className="mb-8">{children}</div>
    </div>
  );
};

export default ProductsLayout;
