import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export class Controls {
    private controls: OrbitControls;

    constructor(camera: THREE.Camera, domElement: HTMLElement) {
        this.controls = new OrbitControls(camera, domElement);
    }

    public update(): void {
        this.controls.update();
    }
}