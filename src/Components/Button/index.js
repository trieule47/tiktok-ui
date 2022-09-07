import classNames from "classnames/bind";
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

export default function Button({
    to,
    href,
    className,
    leftIcon,
    rightIcon,
    primary = false,
    small = false,
    large = false,
    outline = false,
    text = false,
    disabled = false,
    children = false,
    rounded = false,
    onClick,
    ...passProp
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProp
    }

    //Remove event listener when btn is disabled
    if (disabled) {
        Object.keys(props).forEach(key => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        small,
        large,
        text,
        disabled,
        rounded
    });
    console.log(classes)


    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')} >{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    )
}
