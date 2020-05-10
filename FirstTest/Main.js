"use strict";
var FirstTest;
(function (FirstTest) {
    console.log("Hello");
    window.addEventListener("load", init);
    var f = FudgeCore;
    function init(_event) {
        let node = new f.Node("Node");
        let cmpCamera = new f.ComponentCamera();
        let canvas = document.querySelector("canvas");
        console.log(canvas);
        let mesh = new f.MeshCube();
        let cmpMesh = new f.ComponentMesh(mesh);
        node.addComponent(cmpMesh);
        let viewport = new f.Viewport();
        viewport.initialize("Viewport", node, cmpCamera, canvas);
        viewport.draw();
    }
})(FirstTest || (FirstTest = {}));
//# sourceMappingURL=Main.js.map