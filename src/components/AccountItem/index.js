import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/image';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                src='https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/a5d6f67a025f7175ebb766f2532aa4de~c5_720x720.jpeg?lk3s=a5d48078&nonce=32054&refresh_token=ba65482b9174f8de920e47a152a70c4a&x-expires=1732161600&x-signature=7WPkAYAGQ%2BSX9z2cMp%2FUQxIilR4%3D&shp=a5d48078&shcp=81f88b70"'
                className={cx('avatar')}
                alt="Hoa"
            ></Image>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle}
                    />
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
