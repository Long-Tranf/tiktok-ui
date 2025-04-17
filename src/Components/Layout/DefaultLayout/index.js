import Header from '~/Components/Layout/components/Header';
import Sidebar from './Sidebar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div classname="conntent">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
