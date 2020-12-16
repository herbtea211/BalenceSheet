
import { reducer } from './reducer'
import { createStore } from 'redux'

export const store = createStore(reducer)

export function mapState(store) {
    const mpaToComponentSate = { ...store }
    return { ...mpaToComponentSate }
}