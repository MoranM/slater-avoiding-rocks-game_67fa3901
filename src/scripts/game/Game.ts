import { SceneManager } from './Scene';
import { Renderer } from './Renderer';
import { Camera } from './Camera';
import { Controls } from './controls/Controls';

export class Game {
    private sceneManager: SceneManager;
    private renderer: Renderer;
    private camera: Camera;
    private controls: Controls;

    constructor() {
        this.renderer = new Renderer();
        this.camera = new Camera();
        this.sceneManager = new SceneManager(this.camera);
        this.controls = new Controls(this.camera, this.renderer.domElement);

        window.addEventListener('resize', this.onWindowResize.bind(this), false);
    }

    public start(): void {
        this.animate();
    }

    private animate(): void {
        requestAnimationFrame(this.animate.bind(this));
        this.controls.update();
        this.renderer.render(this.sceneManager.scene, this.camera.camera);
    }

    private onWindowResize(): void {
        this.camera.onResize();
        this.renderer.onResize();
    }
}