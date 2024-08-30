import { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import BlankLayout from 'src/@core/layouts/BlankLayout';
import { useAuth } from 'src/hooks';
import { useSettings } from 'src/@core/hooks/useSettings';
import { session } from 'src/tools/store';
import { SOURCE_PLATFORM } from 'src/private/configs';


export default () => {
    const params = useParams() as any;
    const { setUser, user } = useAuth() as any;
    const { settings, saveSettings } = useSettings() as any;
    const testData = {
        "system_code": 1,
        "xinbada_platform_user_id": "669f5bd7ed3ab962ae033d1e",
        "system_token": decodeURIComponent("vIyUEb6oIGHqhwfNTMiNuEuvVxOHGLhM9KERC3Z9XFMBjFynKgAuUdVJqHUfbOYM5A4PlOfBXKor7%2FCFi1Jj1%2Frh%2Bo%2B2rOzcta7ixXKfn1rARHB%2BpbHDmf1YnFuXUG2lz5eLF%2FtdBv6aYD0HKzgki603IAPtDgI6%2BEvFmmSf3Nk%3D"),
        "source_platform": 2
    };
    useEffect(() => {
        const { system_token, system_code, user_id } = params;
        if(user_id){
            setUser({ system_code, user_id, system_token: decodeURIComponent(system_token) });
            session.set('user', { system_code, user_id, system_token: decodeURIComponent(system_token) });
        }

        setUser({ ...testData });
        session.set('user', { ...testData });

        window.addEventListener('message', ({data}) => {
            // 接受到数据后的操作
            console.log('data', data)
            if(data.hasOwnProperty('source_platform')){
                setUser({ ...data })
                session.set('user', { ...data });
                if(data.source_platform == SOURCE_PLATFORM.OPERATE){
                    // oss 后台
                    saveSettings({ ...settings, themeColor: 'vue' }) // 设置主题
                }
            }
        })
        return () => {
            // 组件销毁时，取消监听
            window.removeEventListener('message', () => { })
        }
    }, [])
    return <BlankLayout>
        {
            user?.system_code && <Outlet />
        }
        </BlankLayout>
}