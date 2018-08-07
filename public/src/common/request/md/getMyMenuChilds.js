export default (Ajax) => async (sort) => {
    const list = (await Ajax()
        .data(sort)
        .get('GetMyMenuChilds')).data
    
    return list2Tree(list.map(v => ({
            nid: v.MID,
            pid: v.PMID,
            title: v.MNAME,
            sort: v.SORT,
            src: v.URL
        })),
        'nid',
        'pid')[0].children
}


function list2Tree(list = [], id = 'MID', pid = 'PMID') {
    const
        table = {},
        roots = []

    list.forEach(v => {
        const
            _id = v[id],
            _pid = v[pid]

        // 初始化 target
        let target = null

        if (table[_id]) {
            target = table[_id]
        } else {
            table[_id] = target = { children: [] }
        }
        Object.assign(target, v)

        // 判断父级节点
        if (!_pid) {
            roots.push(target)
        } else {
            if (table[_pid]) {
                if (table[_pid].children) table[_pid].children.push(target)
                else table[_pid].children = [target]
            } else {
                table[_pid] = { children: [target] }
            }
        }
    })

    return roots
}