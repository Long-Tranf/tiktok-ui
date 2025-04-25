import Header from '~/layouts/components/Header';

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div classname="conntent">{children}</div>
            </div>
        </div>
    );
}

export default HeaderOnly;
