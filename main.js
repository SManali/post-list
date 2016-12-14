define([
    "js/models/data-module",
    "js/models/post-model",
    "js/views/post-list",
    "js/views/author",
    "js/routes/router"
], function(DataModule, PostModel, PostList, AuthorView, RouterClass) {
    init();

    function init() {
        DataModule.initModule({
            "onSuccess": createMainView,
            "onError": function() {
                console.log("There is error in init module.")
            }
        });
    }

    function createMainView() {
        var model = new PostModel();
        //     mainView = new PostList({
        //         "el": ".main-container",
        //         "model": model
        //     });
        // mainView.render();


        window.router = new RouterClass();
        router.model = model;
        Backbone.history.start();
        // router.navigate("post-list/", {
        //     "trigger": true
        // });
    }
});
