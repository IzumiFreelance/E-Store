"use client";

import { Product } from "@/lib/types";
import { useCart } from "@/lib/hooks/useCart";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "../ui/button";

interface CartItemProps {
  item: Product & { quantity: number };
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="flex items-center gap-4 py-4">
      <div className="w-20 h-20 relative rounded-lg overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex-1">
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
        >
          <Minus className="h-4 w-4" />
        </Button>
        <span className="w-8 text-center">{item.quantity}</span>
        <Button
          variant="outline"
          size="icon"
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="text-destructive"
        onClick={() => removeItem(item.id)}
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
}