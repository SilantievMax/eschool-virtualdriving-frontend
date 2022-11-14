import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import File from "./components/File/File";
import FileUpload from "./components/FileUpload/FileUpload";

const LayoutFiles = () => {
    return (
        <div>
            <File />
            <FileUpload />
        </div>
    );
};

export default LayoutFiles;
