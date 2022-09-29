import React from "react";
import { AdminNavigation } from "./AsideComponents/AdminNavigation";
import UserProfile from "./AsideComponents/UserProfile";
import { useSelector } from "react-redux";

const AdminAside = () => {
    const user = useSelector((state) => state.auth);
    const { fullName, role, avatarUrl } = user.data;

    return (
        <>
            <aside className="fixed w-56 h-screen font-sans bg-slate-50 border-r ">
                <UserProfile
                    fullName={fullName}
                    role={role}
                    avatarUrl={avatarUrl}
                />
                <AdminNavigation />
            </aside>
        </>
    );
};

export default AdminAside;
