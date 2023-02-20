import React from 'react'

import { ReactNavbar } from "overlay-navbar"
import { MdAccountCircle } from "react-icons/md";
import { MdSearch } from "react-icons/md";
import { MdAddShoppingCart } from "react-icons/md";

import logo from "../../../images/logo.png"

const options ={
    burgerColor:"#eb4034",
    burgerColorHover:"#a62d24",
    logo:logo,
    logoWidth:"9vmax",
    navColor1:"white",
    logoHoverSize:"10px",
    logoHoverColor:"#eb4034",
    link1Text:"Home",
    link2Text:"Product",
    link3Text:"Contact",
    link4Text:"About",
    link1Url:"/",
    link2Url:"/product",
    link3Url:"/contact",
    link4Url:"/about",
    link1Size:"1.3vmax",
    link1Color:"rgba(35,35,35,0.8)",
    // link2Size=
    // link3Size
    // link4Size
    nav1justifyContent:"flex-end",
    nav2justifyContent:"flex-end",
    nav3justifyContent:"flex-start",
    nav4justifyContent:"flex-start",

    link1ColorHover:"#eb4034",
    // link2ColorHover="#eb4034"
    // link3ColorHover="#eb4034"
    // link4ColorHover="#eb4034"

    link1Margin:"1vmax",
    // link2Margin="1vmax"
    // link3Margin="0"
    // link4Margin="1vmax"

    profileIconColor:"rgba(35,35,35,0.8)",
    searchIconColor:"rgba(35,35,35,0.8)",
    cartIconColor:"rgba(35,35,35,0.8)",
    profileIconColorHover:"#eb4034",
    searchIconColorHover:"#eb4034",
    cartIconColorHover:"#eb4034",
    cartIconMargin:"1vmax",
    // profileIcon={true}
    // ProfileIconElement={FaUserAlt}
    profileIcon:true,
    //   profileIconColor= "rgba(35, 35, 35,0.8)"
    ProfileIconElement:MdAccountCircle,
    searchIcon:true,
    //   searchIconColor="rgba(35, 35, 35,0.8)"
    SearchIconElement:MdSearch,
    cartIcon:true,
    //   cartIconColor= "rgba(35, 35, 35,0.8)"
    CartIconElement:MdAddShoppingCart
}

function Header() {
    return (
        <ReactNavbar {...options}/>

    )
}

export default Header