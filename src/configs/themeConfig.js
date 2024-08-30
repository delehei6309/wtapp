/*
 * @Author: chunting
 * @Date: 2022-12-05 11:29:30
 * @LastEditTime: 2022-12-05 19:05:43
 * @Description: 请填写简介
 */
// ** Icon Import
import CircleOutline from '@mui/icons-material/CircleOutlined';

const themeConfig = {
    // ** Layout Configs
    templateName: 'HRO系统' /* App Name */,
    layout: 'vertical' /* vertical | horizontal */,
    mode: 'light' /* light | dark */,
    direction: 'ltr' /* ltr | rtl */,
    skin: 'default' /* default | bordered | semi-dark /*! Note: semi-dark value will only work for Vertical Layout */,
    contentWidth: 'full' /* full | boxed */, //内容宽度
    footer: 'hidden' /* fixed | static | hidden */,
    // ** Routing Configs
    routingLoader: false /* true | false */,
    // ** Navigation (Menu) Configs
    navHidden: false /* true | false */,
    menuTextTruncate: true /* true | false */,
    navSubItemIcon: CircleOutline /* Icon Element */,
    verticalNavToggleType: 'accordion' /* accordion | collapse /*! Note: This is for Vertical navigation menu only */,
    navCollapsed: false /* true | false /*! Note: This is for Vertical navigation menu only */,
    navigationSize: 260 /* Number in PX(Pixels) /*! Note: This is for Vertical navigation menu only */,
    collapsedNavigationSize: 68 /* Number in PX(Pixels) /*! Note: This is for Vertical navigation menu only */,
    horizontalMenuToggle: 'hover' /* click | hover /*! Note: This is for Horizontal navigation menu only */,
    horizontalMenuAnimation: true /* true | false */,
    // ** AppBar Configs
    appBar: 'fixed' /* fixed | static | hidden /*! Note: hidden value will only work for Vertical Layout */,
    appBarBlur: true /* true | false */,
    // ** Other Configs
    responsiveFontSizes: true /* true | false */,
    disableRipple: false /* true | false */,
    disableCustomizer: true /* true | false */, //关闭 自定义主题
    toastPosition: 'top-center' /* top-left | top-center | top-right | bottom-left | bottom-center | bottom-right */
}

export default themeConfig
