import classNames from 'classnames/bind';
import Image from '~/Components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/Components/Popper';
import styles from './AccountItem.module.scss';
import AccountPreview from '../AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const preview = (attrs) => {
        return (
            <div tabIndex="-1" {...attrs}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy offset={[-20, 0]} delay={[800, 0]} placement="bottom" render={preview}>
                <div className={cx('account-item')}>
                    <Image className={cx('avatar')} alt="avatar" src="" />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>tranddlong</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Trần Đoàn Đình Long</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default AccountItem;
