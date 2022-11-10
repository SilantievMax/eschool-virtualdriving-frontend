import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetcFile } from "../../../redux/features/fileSlice";

const AdminLayoutFiles = () => {
    const dispatch = useDispatch();

    dispatch(fetcFile());
    // const { files } = useSelector((state) => state.ordersTraining);
    // console.log(files);
    return (
        <>
            {/* {files.items.map((file) => (
                <p>{file}</p>
            ))} */}
        </>
    );
};

export default AdminLayoutFiles;
