import {FC, Suspense} from 'react';
import {Loader, Modal} from "shared/ui";
import {LoginFormLazy} from "features/AuthByUsername/ui/LoginForm/LoginForm.lazy";
import {classNames} from "shared/lib";

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
            <Suspense fallback={<Loader/>}>
                <LoginFormLazy onSuccess={onClose}/>
            </Suspense>
        </Modal>
    );
};

