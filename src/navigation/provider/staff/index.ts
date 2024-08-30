/**
 * 员工管理
 */
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
const navigation = () => {
    return [
        {
            title: '入离职管理',
            icon: AccountBoxOutlinedIcon,
            children: [
                {
                    title: '入职管理',
                    path: '/provider/staff/entry-and-exit/entry'
                },
                {
                    title: '员工档案',
                    path: '/provider/staff/entry-and-exit/files'
                }
            ]
        },{
            title: '合同管理',
            icon: DescriptionOutlinedIcon,
            path: '/provider/staff/contract'
        }
    ]
}

export default navigation