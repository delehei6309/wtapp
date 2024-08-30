
import UserLayout from "./UserLayout";
import BlankLayout from "./BlankLayout";
import { AuthProvider } from 'src/context/AuthContext';
import { ModalProvider } from "src/context/ModalContext";
interface Props {
    blankLayout?: boolean;
}
export default ({ blankLayout }: Props) => <ModalProvider><AuthProvider>{blankLayout ? <BlankLayout /> : <UserLayout />}</AuthProvider></ModalProvider>