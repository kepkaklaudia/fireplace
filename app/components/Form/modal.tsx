import React from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FormValues } from "@/app/components/Main/contactForm";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DialogDescription } from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";

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
            <DialogTitle className="text-xl text-left pb-4 border-solid border-alto border-b font-bold lg:text-2xl ">
              Thank you for contact with&nbsp;us
              <p className="font-normal text-base">The form has been sent</p>
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-2 text-sm md:text-base">
            {" "}
            {modalItems.map(
              (item, index) =>
                data &&
                data[item?.value] &&
                (item?.value === "description" ? (
                  <ScrollArea
                    className="text-gray-400 flex gap-2 max-h-[200px]"
                    key={index}
                  >
                    <p>
                      {item.label} {": "}{" "}
                    </p>

                    <DialogDescription className="text-black mt-2 pr-2">
                      {data[item.value]}
                    </DialogDescription>
                  </ScrollArea>
                ) : (
                  <div
                    className="text-gray-400 flex gap-2 max-h-[200px]"
                    key={index}
                  >
                    <p className="w-[90px]">
                      {" "}
                      {item.label} {": "}
                    </p>

                    <p
                      className={cn(
                        "text-black",
                        item.value === "email" && "break-all"
                      )}
                    >
                      {data[item.value]}
                    </p>
                  </div>
                ))
            )}
          </div>
          <DialogFooter className="flex flex-col max-w-[90%] mx-auto mt-6">
            <button
              className="text-white bg-blue p-3 text-xs focus-visible:outline-none focus-visible:ring-blue focus-visible:ring-1 focus-visible:ring-offset-1 transition-colors"
              onClick={handleClose}
            >
              Close
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
