export default {
    ['INIT_MOD'](state, {
        modules,
        active
    }) {
        state.active = active ? active : modules[0].nid
        state.modules = modules

    },
    ['CHANGE_MOD'](state, nid) {
        state.active = nid ? nid : state.modules[0].nid
    },
    ['SET_PAGE'](state, { nid, pages = [] }) {
        state.modules.forEach(v => {
            if (v.nid === nid) {
                v.pages = pages
            }
        })
    }
}