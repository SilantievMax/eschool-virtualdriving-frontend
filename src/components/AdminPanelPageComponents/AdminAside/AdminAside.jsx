import React from "react";
import UserProfile from "components/AdminPanelPageComponents/AdminAside/components/UserProfile"
import AdminNavigation from "components/AdminPanelPageComponents/AdminAside/components/AdminNavigation"

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
