/**
 * description: 商品管理
 */


// import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';

import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';

const navigation = () => {
    return [
        {
            title: '服务配置',
            icon: SettingsSuggestOutlinedIcon,
            path: '/provider/goods/setting'
        },{
            title: '商品列表',
            icon: FormatListBulletedOutlinedIcon,
            path: '/provider/goods/list'
        }
    ]
}

export default navigation