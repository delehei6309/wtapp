import { useState, Fragment } from 'react'

import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

// ** Icons Imports
// import CogOutline from 'mdi-material-ui/CogOutline'
// import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
// import EmailOutline from 'mdi-material-ui/EmailOutline'
import LogoutVariant from 'mdi-material-ui/LogoutVariant'
import AccountOutline from 'mdi-material-ui/AccountOutline'
// import MessageOutline from 'mdi-material-ui/MessageOutline'
// import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'

// ** Context
import { useAuth, useModal } from 'src/hooks';

import EllipsisTooltip from 'src/components/EllipsisTooltip';

import avatar from 'src/images/avatars/user.png'

// ** Styled Components
const BadgeContentSpan = styled('span')(({ theme }) => ({
	width: 8,
	height: 8,
	borderRadius: '50%',
	backgroundColor: theme.palette.success.main,
	boxShadow: `0 0 0 2px ${theme.palette.background.paper}`
}))

const UserDropdown = props => {
	// ** Props
	const { settings } = props

	// ** States
	const [anchorEl, setAnchorEl] = useState(null)

	// ** Hooks
	const navigate = useNavigate()
	const { logout } = useAuth();

	const { dialog, setDialogOpen } = useModal();

	// ** Vars
	const { direction } = settings

	const handleDropdownOpen = event => {
		setAnchorEl(event.currentTarget)
	}

	const handleDropdownClose = url => {
		if (url) {
			navigate(url)
		}
		setAnchorEl(null)
	}

	const styles = {
		py: 2,
		px: 4,
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		color: 'text.primary',
		textDecoration: 'none',
		'& svg': {
            fontSize: '1.375rem',
            color: 'text.secondary'
		}
	}
	const handleLogout = () => {
		
		handleDropdownClose()
		dialog({
			title: '提示',
			children: <Typography padding="5px 8px">您确定要退出登录吗？</Typography>,
			handleConfirm: () => {
				logout();
				setDialogOpen(false);
			}
		})
		
	}

  	return (
		<Fragment>
			<Badge
				overlap='circular'
				onClick={handleDropdownOpen}
				sx={{ ml: 2, cursor: 'pointer' }}
				badgeContent={<BadgeContentSpan />}
				anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
				}}>
			<Avatar
                alt='John Doe'
                onClick={handleDropdownOpen}
                sx={{ width: 40, height: 40 }}
                src={avatar}/>
      	</Badge>
		<Menu
			anchorEl={anchorEl}
			open={Boolean(anchorEl)}
			onClose={() => handleDropdownClose()}
			sx={{ '& .MuiMenu-paper': { width: 230, marginTop: 4 } }}
			anchorOrigin={{ vertical: 'bottom', horizontal: direction === 'ltr' ? 'right' : 'left' }}
			transformOrigin={{ vertical: 'top', horizontal: direction === 'ltr' ? 'right' : 'left' }}>
			<Box sx={{ pt: 2, pb: 3, px: 4 }}>
				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					<Badge
						overlap='circular'
						badgeContent={<BadgeContentSpan />}
						anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'right'
						}}>
						<Avatar alt='王静茹' src={avatar} sx={{ width: '2.5rem', height: '2.5rem' }} />
					</Badge>
					<Box sx={{ display: 'flex', marginLeft: 3, alignItems: 'flex-start', flexDirection: 'column' }}>
						<Typography sx={{ fontWeight: 600 }}>王静茹</Typography>
						<Typography variant='body2' sx={{ fontSize: '0.8rem', color: 'text.disabled',  }}>202311221324</Typography>
						<EllipsisTooltip width={144}>
							<Typography variant='body2' sx={{ fontSize: '0.8rem', color: 'text.disabled',  }}>北京薪八达智赋科技有限公司</Typography>
						</EllipsisTooltip>
					</Box>
				</Box>
			</Box>
			<Divider sx={{ mt: 0, mb: 1 }} />
			<MenuItem sx={{ p: 0 }} onClick={() => handleDropdownClose(`/${'provider'}/auth-settings`)}> {/* 暂时写作 provider*/}
				<Box sx={styles}>
					<AccountOutline sx={{ marginRight: 2 }} />
					账号与安全
				</Box>
			</MenuItem>
			{/* <MenuItem sx={{ p: 0 }} onClick={() => handleDropdownClose('/apps/email')}>
				<Box sx={styles}>
					<EmailOutline sx={{ marginRight: 2 }} />
					切换账号
				</Box>
			</MenuItem> */}
			{/* <MenuItem sx={{ p: 0 }} onClick={() => handleDropdownClose('/apps/chat')}>
			<Box sx={styles}>
				<MessageOutline sx={{ marginRight: 2 }} />
				Chat
			</Box>
			</MenuItem>
			<Divider />
			<MenuItem sx={{ p: 0 }} onClick={() => handleDropdownClose('/pages/account-settings')}>
			<Box sx={styles}>
				<CogOutline sx={{ marginRight: 2 }} />
				Settings
			</Box>
			</MenuItem>
			<MenuItem sx={{ p: 0 }} onClick={() => handleDropdownClose('/pages/pricing')}>
			<Box sx={styles}>
				<CurrencyUsd sx={{ marginRight: 2 }} />
				Pricing
			</Box>
			</MenuItem>
			<MenuItem sx={{ p: 0 }} onClick={() => handleDropdownClose('/pages/faq')}>
			<Box sx={styles}>
				<HelpCircleOutline sx={{ marginRight: 2 }} />
				FAQ
			</Box>
			</MenuItem> */}
			<Divider />
			<MenuItem sx={{ py: 2 }} onClick={handleLogout}>
				<LogoutVariant sx={{ marginRight: 2, fontSize: '1.375rem', color: 'text.secondary' }} />
				退出登录
			</MenuItem>
		</Menu>
		</Fragment>
  	)
}

export default UserDropdown
