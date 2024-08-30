import DvrOutlinedIcon from '@mui/icons-material/DvrOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import FolderSharedOutlinedIcon from '@mui/icons-material/FolderSharedOutlined';
const navigation = () => [
    {
        title: '账户中心',
        icon: FolderSharedOutlinedIcon,
        children: [
            {
                title: '应用管理',
                path: '/provider/cooperation/customer/list'
            },
            {
                title: '账户管理',
                path: '/provider/cooperation/customer/contract'
            },{
                title: '签章管理',
                path: '/provider/cooperation/customer/contract'
            }
        ]
    },{
        title: '供应商管理',
        icon: BusinessOutlinedIcon,
        children: [
            {
                title: '供应商列表',
                path: '/provider/cooperation/provider/list'
            },
            {
                title: '采购合同',
                path: '/provider/cooperation/provider/contract'
            }
        ]
    }
]

export default navigation
