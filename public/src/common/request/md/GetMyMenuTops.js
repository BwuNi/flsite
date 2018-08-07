export default Ajax => async () => (
    (await Ajax()
        .get('GetMyMenuTops')).data.map(i => ({
        name: i.MNAME,
        nid: i.MID,
        icon: i.ICON.split('-').join('s-'),
        pages: [],
        sort: i.SORT
    }))
)