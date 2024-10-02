import {CounterSchema} from "../types/counterSchema";
import {counterActions, counterReducer} from "entities/Counter";

describe('counterSlice.test', () => {
    test('increment', () => {
        const state: CounterSchema = {value: 10}
        expect(counterReducer(state, counterActions.increment())).toEqual({value: 11});
    })
    test('decrement', () => {
        const state: CounterSchema = {value: 10}
        expect(counterReducer(state, counterActions.decrement())).toEqual({value: 9});
    })
    test('should return correct value with empty', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({value: 1});
    })
})