import React from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FormValues } from "../Main/contactForm";

export interface ModalItem {
  label: string;
  value: string;
}

export interface StyledModalProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  modalItems: ModalItem[];
  data: FormValues | null;
}

export const StyledModal = ({
  show,
  setShow,
  modalItems,
  data,
}: StyledModalProps) => {
  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <Dialog open={show} onOpenChange={handleClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-xl text-left pb-4 border-solid border-alto border-b font-extrabold text-tundora lg:text-2xl ">
              Thank you for contact with us
              <p>{"The form has been sent"}</p>
            </DialogTitle>
          </DialogHeader>
          <div>
            {" "}
            {modalItems.map(
              (item, index) =>
                data &&
                data[item?.value] && (
                  <div key={index}>
                    {item.label}
                    {": "}
                    <p>{data[item.value]}</p>
                  </div>
                )
            )}
          </div>
          <DialogFooter className="mt-16 flex flex-col max-w-[90%] mx-auto">
            <div className="flex flex-col w-full mx-auto gap-6 mt-2 text-xs items-center xs:flex-row xs:items-end xs: justify-between">
              <button onClick={handleClose}>Close</button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
