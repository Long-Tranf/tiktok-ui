import Header from '~/components/Layout/components/Header';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div classNname="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
