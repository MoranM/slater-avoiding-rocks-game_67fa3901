import * as THREE from 'three';

export abstract class GameObject {
    public abstract mesh: THREE.Object3D;

    constructor() {
        // Initialize the game object
    }

    public update(delta: number): void {
        // Update the game object
    }

    public dispose(): void {
        // Dispose of the object and its resources
    }
}