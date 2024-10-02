import {Button} from "shared/ui";
import {useDispatch, useSelector} from "react-redux";
import {counterActions} from "entities/Counter";
import {getCounterValue} from "../model/selectors/getCounterValue/getCounterValue";
import {useTranslation} from "react-i18next";

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const {t} = useTranslation()
    const increment = () => {
        dispatch(counterActions.increment())
    }

    const decrement = () => {
        dispatch(counterActions.decrement())
    }
    return (
        <div>
            <h1 data-testid='counter-value'>{t('Значение')}: {counterValue}</h1>
            <Button onClick={increment} data-testid='increment-btn'>
                {t("Увеличить")}
            </Button>
            <Button onClick={decrement} data-testid='decrement-btn'>
                {t("Уменьшить")}
            </Button>
        </div>
    );
};

