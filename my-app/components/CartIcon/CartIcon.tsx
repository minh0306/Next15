import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Link from "next/link";

const Cart = () => {
  return (
    <div className="w-36 flex justify-center">
      <Link href={"/cart"}>
        <ShoppingCartOutlinedIcon fontSize="large" />
      </Link>
    </div>
  );
};

export default Cart;
