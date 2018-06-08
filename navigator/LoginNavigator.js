import { createSwitchNavigator } from 'react-navigation'
import { Login, Camera } from './../screens'
import Tabs from './Tabs'
export default createSwitchNavigator ({
    Login: Login,
    Main: Tabs
})