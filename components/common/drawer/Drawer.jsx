import React from "react";
import Link from "next/link";

const Drawer = () => {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer"
          className="btn btn-primary drawer-button p-2"
        >
          AdminTools
        </label>
      </div>
      <div className="drawer-side z-10">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-64 p-4">
          {/* Sidebar content here */}
          <li>
            <Link href="/admin/create">Crear producto nuevo</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
