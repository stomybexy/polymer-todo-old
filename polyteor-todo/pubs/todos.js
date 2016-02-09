SmartPub.smartPublish('todos', function () {
    return {
        selector:{
         creator: this.userId || Meteor.userId()
        },
        coll: Todos,
        sort: {
            label: 1
        }
    }
})