/**
 * 合作管理
 */
import DvrOutlinedIcon from '@mui/icons-material/DvrOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
const navigation = () => {
    return [
        {
            title: '客户管理',
            icon: DvrOutlinedIcon,
            children: [
                {
                    title: '客户列表',
                    path: '/provider/cooperation/customer/list'
                },
                {
                    title: '服务合同',
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
}

export default navigation