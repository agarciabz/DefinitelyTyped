import { ShaderNodeObject } from "three/tsl";
import { Node, TempNode } from "three/webgpu";

declare class FilmNode extends TempNode {
    inputNode: Node;
    intensityNode: Node | null;
    uvNode: Node | null;

    constructor(inputNode: Node, intensityNode?: Node | null, uvNode?: Node | null);
}

export default FilmNode;

export const film: (
    inputNode: Node,
    intensityNode?: Node | null,
    uvNode?: Node | null,
) => ShaderNodeObject<FilmNode>;
