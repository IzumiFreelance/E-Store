"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import { useCart } from "@/lib/hooks/useCart";
import { CartItem } from "./cart-item";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";

interface CartSheetProps {
  open: boolean;
  onClose: () => void;
}

export function CartSheet({ open, onClose }: CartSheetProps) {
  const { items } = useCart();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-muted-foreground">Your cart is empty</p>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 -mx-6 px-6">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </ScrollArea>
            <div className="border-t pt-4 mt-4">
              <div className="flex justify-between mb-4">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">
                  ${total.toFixed(2)}
                </span>
              </div>
              <Button className="w-full">Checkout</Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}