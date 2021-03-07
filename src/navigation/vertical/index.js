import { Mail, Home } from 'react-feather'
// ** Icon Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTicketAlt} from "@fortawesome/free-solid-svg-icons";

export default [
  {
    id: 'home',
    title: 'Home',
    icon: <Home size={20} />,
    navLink: '/home'
  },
  // {
  //   id: 'secondPage',
  //   title: 'Second Page',
  //   icon: <Mail size={20} />,
  //   navLink: '/second-page'
  // },
  // {
  //   id: 'profilePage',
  //   title: 'Profile',
  //   icon: <Mail size={20} />,
  //   navLink: '/profile'
  // },
  // {
  //   id: 'trade',
  //   title: 'Trade',
  //   icon: <Mail size={20} />,
  //   children: [
  //     {
  //       id: 'exchangePage',
  //       title: 'Exchange',
  //       icon: <Home size={20} />,
  //       navLink: '/exchange'
  //     },
  //     {
  //       id: 'liquidityPage',
  //       title: 'Liquidity',
  //       icon: <Home size={20} />,
  //       navLink: '/liquidity'
  //     }
  //   ]
  // },
  // {
  //   id: 'farmsPage',
  //   title: 'Farms',
  //   icon: <Mail size={20} />,
  //   navLink: '/farms'
  // },
  // {
  //   id: 'poolsPage',
  //   title: 'Pools',
  //   icon: <Mail size={20} />,
  //   navLink: '/pools'
  // },
  {
    id: 'lotteryPage',
    title: 'Lottery',
    icon: <FontAwesomeIcon icon={faTicketAlt} size={20} />,
    navLink: '/lottery'
  },
  {
    id: 'info',
    title: 'Info',
    icon: <Mail size={20} />,
    children: [
      {
        id: 'overview',
        title: 'Overview',
        icon: <Mail size={20} />,
        externalLink: true,
        newTab: true,
        navLink: '#/'
      },
      {
        id: 'token',
        title: 'Tokens',
        icon: <Mail size={20} />,
        externalLink: true,
        newTab: true,
        navLink: '#/'
      },
      {
        id: 'pairs',
        title: 'Pairs',
        icon: <Mail size={20} />,
        externalLink: true,
        newTab: true,
        navLink: '#/'
      },
      {
        id: 'accounts',
        title: 'Accounts',
        icon: <Mail size={20} />,
        externalLink: true,
        newTab: true,
        navLink: '#/'
      }
    ]
  },
  {
    id: 'IFOPage',
    title: 'IFO',
    icon: <Mail size={20} />,
    navLink: '/ifo'
  },
  {
    id: 'more',
    title: 'More',
    icon: <Mail size={20}/>,
    children: [
      {
        id: 'voting',
        title: 'Voting',
        icon: <Mail size={20}/>,
        externalLink: true,
        newTab: true,
        navLink: '#/'
      },
      {
        id: 'github',
        title: 'Github',
        icon: <Mail size={20}/>,
        externalLink: true,
        newTab: true,
        navLink: '#/'
      },
      {
        id: 'docs',
        title: 'Docs',
        icon: <Mail size={20}/>,
        externalLink: true,
        newTab: true,
        navLink: '#/'
      },
      {
        id: 'blog',
        title: 'Blog',
        icon: <Mail size={20}/>,
        externalLink: true,
        newTab: true,
        navLink: '#/'
      }
    ]
  }
]
