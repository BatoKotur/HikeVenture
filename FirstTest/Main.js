"use strict";
var FirstTest;
(function (FirstTest) {
    window.addEventListener("load", init);
    var f = FudgeCore;
    function init(_event) {
        let node = new f.Node("Node");
        const canvas = document.querySelector("canvas");
        console.log(canvas);
        let zPos = 4;
        let cmpCamera = new f.ComponentCamera();
        cmpCamera.pivot.translateZ(zPos);
        let mesh = new f.MeshCube();
        let cmpMesh = new f.ComponentMesh(mesh);
        node.addComponent(cmpMesh);
        let mtrSolidWhite = new f.Material("SolidWhite", f.ShaderUniColor, new f.CoatColored(new f.Color(Math.random(), Math.random(), Math.random(), 1)));
        let cmpMaterial = new f.ComponentMaterial(mtrSolidWhite);
        node.addComponent(cmpMaterial);
        let viewport = new f.Viewport();
        viewport.initialize("Viewport", node, cmpCamera, canvas);
        viewport.draw();
    }
})(FirstTest || (FirstTest = {}));
//# sourceMappingURL=Main.js.map