import state from './state'
import * as actions from './actions'
import * as getters from './getters'
import * as mutatoins from './mutations'

const journalModule = {
    namespace: true,
    actions,
    getters,
    mutatoins,
    state
}

export default journalModule