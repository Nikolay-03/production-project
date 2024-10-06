import {FC} from 'react';
import {classNames} from "shared/lib/helpers";
import {LoginForm} from "features/AuthByUsername/ui/LoginForm/LoginForm";
import {Modal} from "shared/ui";

interface LoginModalProps{
    className?:string,
    isOpen:boolean,
    onClose:()=>void
}

export const LoginModal:FC<LoginModalProps> = (props) => {
    const {
        className,
        isOpen,
        onClose
    } = props
    return (
        <Modal
            className={classNames('', {}, [className])}
            isOpen={isOpen}
            lazy
            onClose={onClose}
        >
            <LoginForm/>
        </Modal>
    );
};

