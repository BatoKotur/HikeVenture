namespace FirstTest {

    window.addEventListener("load", init);
    import f = FudgeCore;

    function init(_event: Event): void {
        let node: f.Node = new f.Node("Node");
        const canvas: HTMLCanvasElement = document.querySelector("canvas");
        console.log(canvas);
        
        let zPos: number = 4;
        let cmpCamera: f.ComponentCamera = new f.ComponentCamera();
        cmpCamera.pivot.translateZ(zPos);

        let mesh: f.MeshCube = new f.MeshCube();
        let cmpMesh: f.ComponentMesh = new f.ComponentMesh(mesh);
        node.addComponent(cmpMesh);

        let mtrSolidWhite: f.Material = new f.Material("SolidWhite", f.ShaderUniColor, new f.CoatColored(new f.Color(Math.random(), Math.random(), Math.random(), 1)));
        let cmpMaterial: f.ComponentMaterial = new f.ComponentMaterial(mtrSolidWhite);
        node.addComponent(cmpMaterial);
        
        let viewport: f.Viewport = new f.Viewport();
        viewport.initialize("Viewport", node, cmpCamera, canvas);
        viewport.draw();
        
    } 
}