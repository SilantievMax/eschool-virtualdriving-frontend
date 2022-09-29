import React from "react";
import { AdminNavigation } from "./AsideComponents/AdminNavigation";
import UserProfile from "./AsideComponents/UserProfile";

const AdminAside = () => {
    return (
        <>
            <aside className="fixed w-56 h-screen font-sans bg-slate-50 border-r ">
                <UserProfile />
                <AdminNavigation />
            </aside>
        </>
    );
};

export default AdminAside;
