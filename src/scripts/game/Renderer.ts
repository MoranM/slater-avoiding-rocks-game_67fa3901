import * as THREE from 'three';

export class Renderer {
    public renderer: THREE.WebGLRenderer;

    constructor() {
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);
    }

    public render(scene: THREE.Scene, camera: THREE.Camera): void {
        this.renderer.render(scene, camera);
    }

    public onResize(): void {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    public get domElement(): HTMLCanvasElement {
        return this.renderer.domElement;
    }
}