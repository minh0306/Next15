"use client";
import Link from "next/link";
import data from "../Data/NavData.json";
import IconMUI from "../Icon/IconMUI";
import { useAuth } from "@/contexts/AuthContext";
import { useLogoutConfirmation } from "@/hooks/useLogoutConfirmation";
import ConfirmModal from "../ConfirmationModal/ConfirmationModal";
import { useEffect, useState } from "react";

const HeaderNav = () => {
  const auth = useAuth();
  const [account, setAccount] = useState({});
  const { open, handleOpen, handleClose } = useLogoutConfirmation();
  const handleLogout = () => {
    auth?.logOut();
    handleClose();
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentUser = localStorage.getItem("ACCOUNT");
      if (currentUser) {
        setAccount(currentUser);
      }
    }
  }, []);

  return (
    <nav className="flex justify-between items-center text-xs">
      {data.map((list, index) => (
        <div key={index} className=" flex gap-3 md:gap-1 xs:gap-1">
          {list.map((item) => (
            <div key={item.id} className="flex gap-1 items-center ">
              <>
                <div>{item.icon && <IconMUI name={item.icon} />}</div>
                <Link href={item.link}>
                  <div>{item.name}</div>
                </Link>
                {item.childs &&
                  item.childs.map((child) => (
                    <div key={child.id}>
                      <IconMUI name={child.icon} />
                    </div>
                  ))}
              </>
              {/* )} */}
            </div>
          ))}
          {index === 1 && (
            <>
              {account ? (
                <button onClick={handleOpen} className="pl-2">
                  Logout
                </button>
              ) : (
                <div className="flex gap-2 items-center pl-3">
                  <Link href={"/auth/signup"}>
                    <div>Sign Up</div>
                  </Link>
                  <Link href={"/auth/login"}>
                    <div>Log in</div>
                  </Link>
                </div>
              )}
            </>
          )}
        </div>
      ))}
      <ConfirmModal
        open={open}
        title="Logout"
        buttonConfirm="Logout"
        description="Are you sure you want to log out?"
        onConfirm={handleLogout}
        onCancel={handleClose}
      />
    </nav>
  );
};
export default HeaderNav;
