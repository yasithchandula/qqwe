import React from 'react';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

export const  HeaderData =  [ 
    {
        // link represents where it should redirect to
        title: "User Account",
        icon:<AccountCircleSharpIcon/>,
        link:"/user"

    },
    {
        title: "Inventory ",
        icon:<InsertChartIcon/>,
        link:"/supplier"

    },
    {
        title: "Labour Management",
        icon:<EmojiPeopleIcon/>,
        link:"/labour"

    },
    {
        title: "Analytics Management",
        icon:<TrendingUpIcon/>,
        link:"/anylitics"

    },
    {
        title: "Inbound Management",
        icon:<LocalShippingIcon/>,
        link:"/inbound"

    },
    {
        title: "Supplier Management",
        icon:<SupervisedUserCircleIcon/>,
        link:"/suppler"

    },
    {
        title: "Outbound Management",
        icon:<AirplanemodeActiveIcon/>,
        link:"/suplier"

    },
    {
        title: "Agent Management",
        icon:<ContactMailIcon/>,
        link:"/upplier"

    },
    {
        title: "Order Management",
        icon:<ShoppingCartIcon/>,
        link:"/suppli"

    },




];


  