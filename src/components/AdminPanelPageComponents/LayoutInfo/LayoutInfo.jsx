import React from "react";
import CardCa from "components/AdminPanelPageComponents/LayoutInfo/components/CardCar/CardCar";
import CardTrack from "components/AdminPanelPageComponents/LayoutInfo/components/CardTrack/CardTrack"

const LayoutInfo = () => {
    return (
        <div className="flex">
            <CardCa />
            <CardTrack />
        </div>
    );
};

export default LayoutInfo;
