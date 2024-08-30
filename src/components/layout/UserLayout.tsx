import { Outlet } from 'react-router-dom';
import UserLayout from 'src/layouts/UserLayout';
import { useAuth } from 'src/hooks';
import Loading from '../loading';
export default () => {
    const { loading } = useAuth();
    return <>
        <UserLayout>
            <Outlet />
        </UserLayout>
        <Loading open={loading} />
    </>
}