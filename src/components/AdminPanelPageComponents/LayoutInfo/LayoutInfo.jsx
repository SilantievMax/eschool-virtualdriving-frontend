import React from "react";
import CardCar from "./components/CardCar/CardCar";
import CardTrack from "./components/CardTrack/CardTrack";

const LayoutInfo = () => {
    return (
        <div className="flex">
            <CardCar />
            <CardTrack />
        </div>
    );
};

export default LayoutInfo;
