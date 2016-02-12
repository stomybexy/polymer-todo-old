Meteor.startup(() => {
    console.log('Bootstraping the app');
    if (Todos.find().count() === 0) {
        var todos = [
            {
                label: 'Responsive Web App boilerplate',
                isComplete: false,
                x:{
                    y: 'test 1'
                },
                owner: 'focoFFZm452d9mM5S'
            },
            {
                label: 'Iron Elements and Paper Elements',
                isComplete: false,
                 x:{
                    y: 'test 2'
                },
                owner: 'focoFFZm452d9mM5S'
            },
            {
                label: 'End-to-end Build Tooling (including Vulcanize)',
                isComplete: false,
                 x:{
                    y: 'test 3'
                },
                owner: '3X6e82h2otx52QtEN'
            }
        ];

        todos.forEach((todo) => Todos.insert(todo));
    }

    if (Comments.find().count() === 0) {
        Todos.find().forEach((todo) => {
            var data = [
                {
                    value: todo.label + ' comment 1',
                    createdAt: new Date(),
                    modifiedAt: new Date()
                    , todoId: todo._id
                }, {
                    value: todo.label + ' comment 2',
                    createdAt: new Date(),
                    modifiedAt: new Date()
                    , todoId: todo._id
                }, {
                    value: todo.label + ' comment 3',
                    createdAt: new Date(),
                    modifiedAt: new Date()
                    , todoId: todo._id
                }, {
                    value: todo.label + ' comment 4',
                    createdAt: new Date(),
                    modifiedAt: new Date()
                    , todoId: todo._id
                }
            ]
            data.forEach((d) => Comments.insert(d)); 
        })
    }

    accountConfig(); 
})

function accountConfig() {
    ServiceConfiguration.configurations.upsert(
        { service: "google" },
        {
            $set: {
                clientId: "369079704085-1vod2pg02hikeg5qfbsg54352s9bg3or.apps.googleusercontent.com",
                loginStyle: "popup",
                secret: "BZH6bHBW9zvW5aL4ysiu3qNC"
            }
        }
        );
}