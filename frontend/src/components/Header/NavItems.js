import { AiOutlineHome, AiOutlineRight, AiOutlineInfoCircle, AiOutlineContacts, AiOutlineNotification, AiOutlineUser} from 'react-icons';

export const NavItems = [
    {
        title: "Home",
        url: "/home",
        cName: "nav-links",
        // icon: "AiOutlineHome"
        icon: "fa-solid fa-house-user"
    },
    {
        title: "About",
        url: "/about",
        cName: "nav-links",
        // icon: "AiOutlineInfoCircle"
        icon: "fa-solid fa-circle-info"
    },
    {
        title: "Services",
        url: "/service",
        cName: "nav-links",
        icon: "fa-solid fa-briefcase"
        // icon: "fa-solid fa-briefcase"
    },
    {
        title: "Contact",
        url: "/contact",
        cName: "nav-links",
        // icon: "AiOutlineContacts"
        icon: "fa-solid fa-address-book"
    },
    {
        title: "Blog",
        url: "/blog",
        // url: "https://www.healthline.com/find-care/articles/obgyns/what-is-an-obgyn#overview",
        cName: "nav-links",
        // icon: "AiOutlineNotification"
        icon: "fa fa-bullhorn"
    },
    {
        title: "Profile",
        url: "/profile",
        cName: "nav-links",
        // icon: "AiOutlineUser"
        icon: "fa-solid fa-user"
    },
    // {
    //     title: "Logout",
    //     url: "/logout",
    //     cName: "nav-links-mobiles",
    //     // icon: "AiOutlineRight"
    //     icon: "fa-solid fa-address-book"
    // }
]

export default NavItems;