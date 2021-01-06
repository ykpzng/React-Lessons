import { INCREASE_COUNT, DECREASE_COUNT } from "./actionTypes";

export const increaseCount = () => ({
  type: INCREASE_COUNT
})

export const decraseCount = () => ({
  type: DECREASE_COUNT
})