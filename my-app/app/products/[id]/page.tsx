import ProductDetails from "@/components/ProductDetail/ProductDetail";
import ShopInfo from "@/components/ShopInfo/ShopInfo";

const ProductDetailPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  // const productData = {
  //   id: id,
  //   name: "Gấu bông dễ thương",
  //   price: 39000,
  //   rating: 4.6,
  //   reviews: 2000,
  //   imageUrls: [
  //     "/products/bear.jpg",
  //     "/products/bear.jpg",
  //     "/products/bear.jpg",
  //   ],
  //   freeShipping: true,
  //   returnPolicy: "15-Day Free Return",
  //   location: "Huyện Ba Vì",
  //   description: "Bluetooth 24key control, 5m",
  //   discount: 10,
  // };

  return (
    <div className="w-full min-h-screen flex flex-col py-1  md:px-20 px-4 sm:px-8">
      <div className="bg-white w-full rounded-md  my-8">
        <ProductDetails id={id} />
      </div>
      <div className="bg-white w-full rounded-md mb-8">
        <ShopInfo />
      </div>
    </div>
  );
};

export default ProductDetailPage;
