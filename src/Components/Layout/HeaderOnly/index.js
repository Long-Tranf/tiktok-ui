import Header from '~/Components/Layout/components/Header';

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
