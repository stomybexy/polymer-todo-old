SmartPub.smartPublish('todos', function () {
    return {
        selector:{
            // $or: [
            //     // {
            //     //     private: false
                    
            //     // },
            //     // // {
            //     // //     private : {
            //     // //         $exists: false
            //     // //     }  
            //     // // },
            //     // {
            //     //     creator: this.userId || Meteor.userId
            //     // }
            // ]
        },
        coll: Todos,
        sort: {
            label: 1
        }
    }
})