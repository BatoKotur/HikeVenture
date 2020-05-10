namespace FirstTest {
    console.log("Hello");

    window.addEventListener("load", init);
    import f = FudgeCore;

    function init(_event: Event): void {
        let node: f.Node = new f.Node("Node");
        let cmpCamera: f.ComponentCamera = new f.ComponentCamera();
        let canvas: HTMLCanvasElement = document.querySelector("canvas");
        console.log(canvas);

        let mesh: f.MeshCube = new f.MeshCube();
        let cmpMesh: f.ComponentMesh = new f.ComponentMesh(mesh);
        node.addComponent(cmpMesh);
        
        let viewport: f.Viewport = new f.Viewport();
        viewport.initialize("Viewport", node, cmpCamera, canvas);
        viewport.draw();
        
    } 
}