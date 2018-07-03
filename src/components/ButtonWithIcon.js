import React from "react";

const ButtonWithIcon = ({icon, label, styleName}) => {
    const Icon = icon;
    return <div className={styleName}><Icon/> {label}</div>;
};

export default ButtonWithIcon;