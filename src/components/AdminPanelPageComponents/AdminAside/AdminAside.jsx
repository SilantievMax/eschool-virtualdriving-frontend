import React from "react";
import { AdminNavigation } from "./components/AdminNavigation";
import UserProfile from "./components/UserProfile";

const AdminAside = () => {
    return (
        <>
            <aside className="fixed w-56 h-screen font-sans bg-slate-50 border-r">
                <UserProfile />
                <AdminNavigation />
            </aside>
        </>
    );
};

export default AdminAside;
