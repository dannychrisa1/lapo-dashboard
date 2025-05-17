import AccountIcon from "../assets/svg/AccountIcon";
import BranchIcon from "../assets/svg/BranchIcon";
import CardProfileIcon from "../assets/svg/CardProfileIcon";
import CardRequestIcon from "../assets/svg/CardRequestIcon";
import CardSchemeIcon from "../assets/svg/CardSchemeIcon";
import CardsIcon from "../assets/svg/CardsIcon";
import ListIcon from "../assets/svg/ListIcon";
import QueueIcon from "../assets/svg/QueueIcon";
import RoleIcon from "../assets/svg/RoleIcon";
import StockIcon from "../assets/svg/StockIcon";
import TrailIcon from "../assets/svg/TrailIcon";
import UsersIcon from "../assets/svg/UsersIcon";
import Analytic1 from '../assets/analytic1.png'
import Analytic2 from '../assets/analytic2.png'
import Analytic3 from '../assets/analytic3.png'
import Analytic4 from '../assets/analytic4.png'

export const SidebarLinks = [
    {
        id: 0,
        title: "Branches",
        icon: BranchIcon,
        url: "/branches"
    },
    {
        id: 1,
        title: "Roles",
        icon: RoleIcon,
        url: "/roles"
    },
    {
        id: 2,
        title: "Users",
        icon: UsersIcon,
        url: "/users"
    },
    {
        id: 3,
        title: "CardScheme",
        icon: CardSchemeIcon,
        url: "/card-scheme"
    },
    {
        id: 4,
        title: "Card Profile",
        icon: CardProfileIcon,
        url: "/card-profile"
    },
    {
        id: 5,
        title: "Card Request",
        icon: CardRequestIcon,
        url: "/card-request"
    },
    {
        id: 6,
        title: "Stock",
        icon: StockIcon,
        url: "/stock"
    },
    {
        id: 7,
        title: "Cards",
        icon: CardsIcon,
        url: "/cards"
    },
    {
        id: 8,
        title: "Authorization List",
        icon: ListIcon,
        url: "/authorization-list"
    },
    {
        id: 9,
        title: "Authorization Queue",
        icon: QueueIcon,
        url: "/authorization-queue"
    },
    {
        id: 10,
        title: "Trail",
        icon: TrailIcon,
        url: "/trail"
    },
    {
        id: 11,
        title: "Account",
        icon: AccountIcon,
        url: "/account"
    },

]

export const Analytics = [
    {
        id: 0,
        title: 'Total Active Cards',
        Amount: '26,478',
        percent: '+9%',
        duration: 'this month',
        icon: Analytic1
    },
    {
        id: 1,
        title: 'Total Personalized Cards',
        Amount: '15,703',
        percent: '8.5%',
        duration: 'this month',
        icon: Analytic2
    },
    {
        id: 2,
        title: 'Today’s Revenue',
        Amount: '₦9.3M',
        percent: '+6%',
        duration: 'vs yesterday',
        icon: Analytic3
    },
    {
        id: 3,
        title: 'Pending Requests',
        Amount: '38',
        duration: 'Requires attention',
        icon: Analytic4
    },
]

export const CardRequests = [
    {
        id: 0,
        branch: 'Corporate',
        cardType: 'Instant',
        quantity: 10,
        status: 'Ready',
        action: 'view'
    },
    {
        id: 1,
        branch: 'Corporate',
        cardType: 'Personalized',
        quantity: 10,
        status: 'In Progress',
        action: 'view'
    },
    {
        id: 2,
        branch: 'Corporate',
        cardType: 'Personalized',
        quantity: 10,
        status: 'Acknowledged',
        action: 'view'
    },
    {
        id: 3,
        branch: 'Corporate',
        cardType: 'Instant',
        quantity: 10,
        status: 'Pending',
        action: 'view'
    },


]