import { create } from 'zustand'

const INITIAL_VALUE = 10;

interface CounterState {
  counter : number;
  incrementValue : (value : number) => void;
  reset: () => void;
}
export const useCounterStore = create<CounterState>((set)=>({
  counter : INITIAL_VALUE,
  incrementValue : (value : number) => set(state => ({counter: state.counter + value})),
  reset: () => set({counter: INITIAL_VALUE}),
}));
