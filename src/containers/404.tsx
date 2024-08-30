/**
 * 404 page
 */
// import { useLocation } from 'react-router-dom';
// import {Link} from 'react-router-dom';
// ** Next Import
// import Link from 'next/link'

// ** MUI Components
// import Button from '@mui/material/Button'
import { styled, useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

// ** Layout Import
import BlankLayout from '../@core/layouts/BlankLayout'

// ** Demo Imports
import FooterIllustrations from '../components/pages/FooterIllustrations'


// ** Styled Components
const BoxWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    width: '90vw'
  }
}))
// const MyLink = styled(Link)(
//     {
//         textDecoration:'none'
//     }
// )
const Img = styled('img')(({ theme }) => ({
  marginBottom: theme.spacing(10),
  [theme.breakpoints.down('lg')]: {
    height: 450,
    marginTop: theme.spacing(10)
  },
  [theme.breakpoints.down('md')]: {
    height: 400
  },
  [theme.breakpoints.up('lg')]: {
    marginTop: theme.spacing(13)
  }
}))

const TreeIllustration = styled('img')(({ theme }) => ({
  left: 0,
  bottom: '5rem',
  position: 'absolute',
  [theme.breakpoints.down('lg')]: {
    bottom: 0
  }
}))

const Error404 = () => {
    // const loaction = useLocation();
    const theme = useTheme()
    console.log('99999', theme)
    return (
        <BlankLayout>
        <Box className='content-center'>
        <Box sx={{ p: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <BoxWrapper>
            <Typography variant='h1'>404</Typography>
            <Typography variant='h5' sx={{ mb: 1, fontSize: '1.5rem !important' }}>找不到页面⚠️</Typography>
            <Typography variant='body2'>请检查您的网址是否正确。</Typography>
            </BoxWrapper>
            <Img height='487' alt='error-illustration' src='/images/pages/404.png' />
            {/* <MyLink to={loaction.pathname.indexOf('/agnet') === 0 ? '/agent' : '/provider' }>
            <Button variant='contained' sx={{ px: 5.5 }}>回到首页</Button>
            </MyLink> */}
        </Box>
        <FooterIllustrations image={<TreeIllustration alt='tree' src='/images/pages/tree.png' />} />
        </Box>
        </BlankLayout>
    )
}

export default Error404
