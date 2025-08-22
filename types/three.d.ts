declare module 'three' {
  export class Scene {
    add(object: any): void;
  }
  export class PerspectiveCamera {
    constructor(fov: number, aspect: number, near: number, far: number);
    aspect: number;
    position: { z: number };
    updateProjectionMatrix(): void;
  }
  export class WebGLRenderer {
    constructor(options?: any);
    setSize(width: number, height: number): void;
    setClearColor(color: number, alpha: number): void;
    render(scene: any, camera: any): void;
    dispose(): void;
  }
  export class BufferGeometry {
    setAttribute(name: string, attribute: any): void;
  }
  export class BufferAttribute {
    constructor(array: any, itemSize: number);
  }
  export class PointsMaterial {
    constructor(options?: any);
  }
  export class Points {
    constructor(geometry: any, material: any);
    rotation: { x: number; y: number; z: number };
  }
  export class OctahedronGeometry {
    constructor(radius: number, detail: number);
  }
  export class MeshBasicMaterial {
    constructor(options?: any);
  }
  export class Mesh {
    constructor(geometry: any, material: any);
    position: { set(x: number, y: number, z: number): void; y: number };
    rotation: { x: number; y: number; z: number };
  }
  export const AdditiveBlending: number;
}