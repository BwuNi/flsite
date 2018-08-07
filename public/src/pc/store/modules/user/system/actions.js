import { md } from '../../../../../common/request'

export default {
    ['CHANGE_MOD']({ commit, state, getters }, { sort, nid }) {
        // 如果存在则直接跳转
        if (getters['MOD_BY_NID'](nid).pages.length)
            return commit('CHANGE_MOD', nid)

        // 如果不存在则获取 pages
        md.getMyMenuChilds(sort)
            .then((tree) => {
                commit('SET_PAGE', {
                    nid,
                    pages: tree
                })
                // 跳转
                commit('CHANGE_MOD', nid)
            })

    }
}

