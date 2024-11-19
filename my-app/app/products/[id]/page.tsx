import ProductDetails from "@/components/ProductDetail/ProductDetail";
import ShopInfo from "@/components/ShopInfo/ShopInfo";

const ProductDetailPage = ({ id }: { id: string }) => {
  //   console.log(id);

  const productData = {
    name: "Gấu bông dễ thương",
    price: "39.000 ₫",
    rating: 4.6,
    reviews: 2000,
    images: ["/products/bear.jpg", "/products/bear.jpg", "/products/bear.jpg"],
    freeShipping: true,
    returnPolicy: "15-Day Free Return",
    location: "Huyện Ba Vì",
  };

  return (
    <div className="w-full min-h-screen flex flex-col py-1 2xl:px-60 md:px-20 px-4 sm:px-8">
      <div className="bg-white w-full rounded-md  my-8">
        <ProductDetails product={productData} />
      </div>
      <div className="bg-white w-full rounded-md mb-8">
        <ShopInfo />
      </div>
    </div>
  );
};

export default ProductDetailPage;
