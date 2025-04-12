import * as THREE from 'three';

export class SceneManager {
    public scene: THREE.Scene;

    constructor(camera: THREE.Camera) {
        this.scene = new THREE.Scene();
        this.addLighting();
    }

    private addLighting(): void {
        const ambientLight = new THREE.AmbientLight(0x404040); // Ambient light with soft white color
        this.scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight.position.set(0, 1, 1).normalize();
        this.scene.add(directionalLight);
    }
}