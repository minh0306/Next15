"use client";

import { useState } from "react";

export const useLogoutConfirmation = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleConfirm = () => {
    setOpen(false);
    window.location.href = "/";
  };

  return {
    open,
    handleOpen,
    handleClose,
    handleConfirm,
  };
};
