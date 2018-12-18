const initState = {
    projects: [
        {id: '1', title: 'titre 1', content: 'content1'},
        {id: '2', title: 'titre 2', content: 'content2'},
        {id: '3', title: 'titre 3', content: 'content3'},
        {id: '4', title: 'titre 4', content: 'content4'},
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created projet', action.project)
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err)
            return state
        default:
            return state
    }
}

export default projectReducer