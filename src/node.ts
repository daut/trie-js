class TrieNode {
    public isLeaf: boolean;
    public character: string | undefined;
    public children: Map<string, TrieNode>;

    constructor(key?: string) {
        this.isLeaf = false;
        this.character = key;
        this.children = new Map<string, TrieNode>();
    }
}

export { TrieNode };
