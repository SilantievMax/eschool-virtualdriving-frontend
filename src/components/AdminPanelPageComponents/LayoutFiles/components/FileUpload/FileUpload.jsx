import axios from "utils/axios.js";
import React, { useState, useRef } from "react";
import { toast } from "react-toastify";

const FileUpload = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const fileRef = useRef(null);
  const imgRef = useRef(null);
  const imgCarRef = useRef(null);
  const tracksDataRef = useRef(null);

  const onSubmit = async () => {
    const formData = new FormData();
    // TODO: Form validation
    const file = fileRef.current.files[0];
    const img = imgRef.current.files[0];
    const imgCar = imgCarRef.current.files[0];
    const tracksData = tracksDataRef.current.files[0];

    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);

    formData.append("file", file);
    formData.append("img", img);
    formData.append("imgCar", imgCar);
    formData.append("tracksData", tracksData);

    await axios
      .post("/update/file", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        toast.success(res.data.message);

        clearForm();
      })
      .catch((err) => toast.error("Данные не отправлены"));
  };

  const clearForm = () => {
    setName("");
    setDescription("");
    setPrice("");

    fileRef.current.value = null;
    imgRef.current.value = null;
    imgCarRef.current.value = null;
    tracksDataRef.current.value = null;
  };

  return (
    <div>
      <p>Название</p>
      <input onChange={(e) => setName(e.target.value)} type="text" value={name} />
      <p>Описание</p>
      <textarea onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
      <p>JSON для треков</p>
      <input ref={tracksDataRef} type="file" />
      <p>файл .rar</p>
      <input ref={fileRef} type="file" />
      <p>Изображение</p>
      <input ref={imgRef} type="file" />
      <p>Изображение авто с характеристиками</p>
      <input ref={imgCarRef} type="file" />
      <p>Цена</p>
      <input onChange={(e) => setPrice(e.target.value)} value={price} className="border" type="number" />
      <button onClick={onSubmit}>Добавить</button>
    </div>
  );
};

export default FileUpload;
