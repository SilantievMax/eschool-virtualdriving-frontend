import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetcFile } from "../../../../../redux/features/fileSlice";

const File = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetcFile());
    }, []);

    const { filesInfo } = useSelector((state) => state.file);
    console.log(filesInfo);
    return (
        <ul className="flex">
            {filesInfo.map((file) => (
                <li className="flex flex-col flex-wrap m-2">
                    <img
                        className=" w-80"
                        src={file.accessLinkImg}
                        alt="avatar"
                    />
                    <span>{file.file.name}</span>
                    <span>{file.file.prise} руб.</span>
                    <a href={file.accessLinkFile}>ссылка для скачивания</a>
                </li>
            ))}
        </ul>
    );
};

export default File;
