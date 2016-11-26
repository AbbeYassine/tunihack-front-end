/**
 * Created by Abbes on 17/08/2016.
 */
angular
    .module("serviceLik")
    .constant('componentsUrl', 'app/components')
    .constant("BASE_URL", " http://149.202.187.231:81/mbapi.asmx")
    .constant("obj_admin", JSON.stringify({
        userid: "maxbloxpetoveto@gmail.com",
        password: "maxblox123",
        company: ""
    }));

