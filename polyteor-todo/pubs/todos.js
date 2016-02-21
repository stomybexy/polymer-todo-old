// SmartPub.smartPublish('todos', function () {
//     return {
//         selector:{
         
//         },
//         coll: Todos,
//         sort: {
//             label: 1
//         }
//     }
// })

SmartPub.smartPublishComposite('todos', {
    find: function(){
        return {
            coll: Todos,
            sort: {
                label: 1
            }
        }
    },
    children: [
        {
            find: function(todo){
                return {
                    selector: {
                        _id: todo.owner
                    },
                    coll: Meteor.users,
                    single: true
                }
            },
            name: 'user'
        }
    ]
})