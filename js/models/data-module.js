define([], function() {
    var DataModule = {
        "JSON_URL": "data/dummy.json",
        "moduleData": "",
        "ERROR_CODE": {
            "DATA_NOT_LOADED": "json-data-not-loaded"
        },
        "initModule": function(options) {
            options = options || {};
            $.ajax({
                "url": DataModule.JSON_URL,
                "success": function(data) {
                    DataModule.moduleData = data;
                    options.onSuccess && options.onSuccess();
                },
                "error": function() {
                    options.onError && options.onError();
                }
            });
        },
        "getPostData": function(options) {
            options = options || {};

            if (!DataModule.moduleData) {
                options.onError && options.onError(DataModule.ERROR_CODE.DATA_NOT_LOADED);
                return;
            }
            var moduleData = DataModule.moduleData,
                data = moduleData.posts;
            options.onSuccess && options.onSuccess(data);
        },
        "getAuthorData": function(options) {
            options = options || {};
            if (!DataModule.moduleData) {
                options.onError && options.onError(DataModule.ERROR_CODE.DATA_NOT_LOADED);
                return;
            }
            var moduleData = DataModule.moduleData,
                data = moduleData.authors;
            options.onSuccess && options.onSuccess(data);
        },
        "getCategoryData": function(options) {
            options = options || {};

            if (!DataModule.moduleData) {
                options.onError && options.onError(DataModule.ERROR_CODE.DATA_NOT_LOADED);
                return;
            }
            var moduleData = DataModule.moduleData,
                data = moduleData.categories;
            options.onSuccess && options.onSuccess(data);
        }
    };
    return DataModule;
});
