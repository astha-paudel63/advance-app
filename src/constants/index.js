import { RiDashboardLine } from "react-icons/ri";
import { RiShoppingBagLine } from "react-icons/ri";
import { BsPerson } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";
import { MdOutlineSell } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

import * as PATHS from './URLS';

export const ADMIN_PAGES = [
   { 
       title: 'Dashboard',
       path: PATHS.ROOT,
       icons : (props) => <RiDashboardLine {...props}/>
    },
    { 
        title: 'Manage Vendors',
        path: PATHS.MANGAE_VENDORS,
       icons : (props) => <BsPerson {...props}/>

     },
     { 
        title: 'Manage Products',
        path: PATHS.MANGAE_PRODUCTS,
       icons : (props) => <MdOutlineProductionQuantityLimits {...props}/>

     },
     { 
      title: 'Vendor Requests',
      path: PATHS.VENDOR_REQUESTS,
     icons : (props) => <MdOutlineSell {...props}/>

   },
   { 
      title: 'Product Requests',
      path: PATHS.PRODUCT_REQUESTS,
     icons : (props) => <RiShoppingBagLine {...props}/>

   },
     { 
        title: 'Setting',
        path: PATHS.SETTINGS,
       icons : (props) => <AiOutlineSetting {...props}/>

     },

]

export const VENDOR_PAGES = [
   { 
      title: 'Dashboard',
      path: PATHS.ROOT,
      icons : (props) => <RiDashboardLine {...props}/>
   },
   {
      title: 'Orders',
      path: PATHS.ORDERS,
      icons : (props) => <RiDashboardLine {...props}/>
   },
   {
      title: 'Products',
      path: PATHS.PRODUCTS,
      icons : (props) => <RiDashboardLine {...props}/>
   },
   {
      title: 'Settings',
      path: PATHS.SETTINGS,
      icons : (props) => <RiDashboardLine {...props}/>
   },
]