/**
 * description: This file is the entry point for the provider navigation.
 * 
 * 
 */
import goods from './goods';
import cooperation from './cooperation';
import staff from './staff';
const navs = (menuKey) => {
    // console.log(menuKey)
    if (menuKey === 'goods'){
        return goods();
    }
    if (menuKey === 'cooperation'){
        return cooperation();
    }
    if (menuKey === 'staff'){
        return staff();
    }
    return [];
}

export default navs