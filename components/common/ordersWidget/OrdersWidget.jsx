import Link from "next/link";
import React from "react";

const OrdersWidget = () => {
  return (
    <Link href={"/orders"}>
      <button className="btn btn-ghost p-1">
        <span className="text-xs">Pedidos</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-6 w-6 btn-ghost"
        >
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
        </svg>
      </button>
    </Link>
  );
};

export default OrdersWidget;
