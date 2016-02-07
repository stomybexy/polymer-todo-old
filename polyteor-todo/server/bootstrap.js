Meteor.startup(() => {
    console.log('Bootstraping the app');
    if (Todos.find().count() === 0) {
        var todos = [
            {
                label: 'Responsive Web App boilerplate',
                isComplete: false
            },
            {
                label: 'Iron Elements and Paper Elements',
                isComplete: false
            },
            {
                label: 'End-to-end Build Tooling (including Vulcanize)',
                isComplete: false
            }
        ];

        todos.forEach((todo) => Todos.insert(todo));
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