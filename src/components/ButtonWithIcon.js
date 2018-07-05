import React from "react";

const ButtonWithIcon = ({icon, label, styleName, clickHandler}) => {
    const Icon = icon;
    return <button className={styleName} onClick={clickHandler}><Icon/> {label}</button>;
};

export default ButtonWithIcon;