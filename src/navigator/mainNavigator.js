import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile185949Navigator from '../features/UserProfile185949/navigator';
import Maps185930Navigator from '../features/Maps185930/navigator';
import Settings185908Navigator from '../features/Settings185908/navigator';
import Settings185893Navigator from '../features/Settings185893/navigator';
import NotificationList185892Navigator from '../features/NotificationList185892/navigator';
import Maps185891Navigator from '../features/Maps185891/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile185949: { screen: UserProfile185949Navigator },
Maps185930: { screen: Maps185930Navigator },
Settings185908: { screen: Settings185908Navigator },
Settings185893: { screen: Settings185893Navigator },
NotificationList185892: { screen: NotificationList185892Navigator },
Maps185891: { screen: Maps185891Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
