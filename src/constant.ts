'use client';

import ArticleIcon from "../public/components/Article";
import ProfileIcon from "../public/components/Profille";
import ScrollIcon from "../public/components/Scroll";
import TaskSquareIcon from "../public/components/task-square";
import ToolboxIcon from "../public/components/Toolbox";
import HomeIcon from "../public/components/Vector";
import { NavItem } from "./components/sub-navbar";


export  const NAV_ITEMS: NavItem[] = [
  { name: 'Dashboard', link: '/', icon: HomeIcon },
  { name: 'Listings', link: '/listings', icon: ToolboxIcon },
  { name: 'Users', link: '/users', icon: ProfileIcon },
  { name: 'Request', link: '/request', icon: ArticleIcon },
  { name: 'Applications', link: '/applications', icon: ScrollIcon },
  { name: 'Tasks', link: '/tasks', icon: TaskSquareIcon },
  
];