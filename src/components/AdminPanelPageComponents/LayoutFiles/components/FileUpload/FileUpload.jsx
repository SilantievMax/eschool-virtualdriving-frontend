import axios from "../../../../../utils/axios.js";
import React, { useState } from "react";
import { toast } from "react-toastify";

const FileUpload = () => {
    const formData = new FormData();
    const [file, setFile] = useState();
    const [img, setimg] = useState();
    const [price, setPrice] = useState();

    const onSubmit = async () => {
        formData.append("file", file);
        formData.append("img", img);
        formData.append("price", price);

        const data = await axios
            .post("/update/file", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((res) => toast.success(res.data.message))
            .catch((err) => toast.error("Данные не отправлены"));
    };

    return (
        <div>
            <p>файл .rar</p>
            <input onChange={(e) => setFile(e.target.files[0])} type="file" />
            <p>Изображение</p>
            <input onChange={(e) => setimg(e.target.files[0])} type="file" />
            <p>Цена</p>
            <input
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                className="border"
                type="number"
            />
            <button onClick={onSubmit}>Отправить</button>
        </div>
    );
};

export default FileUpload;
