"use client";

import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

interface ConfirmModalProps {
  open: boolean;
  title: string;
  description: string;
  buttonConfirm?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  open,
  title,
  description,
  buttonConfirm = "Confirm",
  onConfirm,
  onCancel,
}) => {
  return (
    <Dialog open={open} onClose={onCancel}>
      <div className="p-8 text-center flex items-center flex-col">
        <DialogTitle>
          <p className="text-2xl">{title}</p>
        </DialogTitle>
        <DialogContent>
          <p>{description}</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancel} variant="outlined">
            Cancel
          </Button>
          <Button onClick={onConfirm} color="primary" variant="contained">
            {buttonConfirm}
          </Button>
        </DialogActions>
      </div>
    </Dialog>
  );
};

export default ConfirmModal;
