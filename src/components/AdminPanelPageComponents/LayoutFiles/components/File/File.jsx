import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFile, fetcFile } from "redux/features/fileSlice";
import { accessUrl } from "utils/axios";

const File = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetcFile());
    }, []);

    const { filesInfo } = useSelector((state) => state.file);

    const onSubmitDeleteFile = (id) => {
        dispatch(deleteFile(id));
    };

    return (
        <>
            <ul className="flex">
                {filesInfo &&
                    filesInfo.map((file) => (
                        <li
                            key={file._id}
                            className="flex flex-col flex-wrap m-2"
                        >
                            <img
                                className=" w-80"
                                src={accessUrl + file.imgFile}
                                alt="avatar"
                            />
                            <span>{file.name}</span>
                            <span>{file.price} руб.</span>
                            <a href={accessUrl + file.pathFile}>
                                ссылка для скачивания
                            </a>
                            <div>
                                <button className=" bg-slate-600 m-2 px-2 py-1">
                                    update
                                </button>
                                <button
                                    onClick={() => {
                                        onSubmitDeleteFile(file._id);
                                    }}
                                    className=" bg-slate-600 m-2 px-2 py-1"
                                >
                                    delete
                                </button>
                            </div>
                        </li>
                    ))}
            </ul>
        </>
    );
};

export default File;
