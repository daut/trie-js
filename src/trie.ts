import { TrieNode } from "./node";

class Trie {
    private root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    /**
     * Insert word in the Trie.
     *
     * @param {string} word
     * @memberof Trie
     */
    public insert(word: string): void {
        let children = this.root.children;
        let level = 0;

        for (const char of word) {
            let node = children.get(char);
            if (!node) {
                node = new TrieNode(char);
                children.set(char, node);
            }

            children = node.children;

            if (level++ === word.length - 1) {
                node.isLeaf = true;
            }
        }
    }

    /**
     * Check if word exists in the Trie.
     *
     * @param {string} word
     * @returns {boolean}
     * @memberof Trie
     */
    public search(word: string): boolean {
        const node = this.getNode(word);
        if (node && node.isLeaf) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Get a node from the Trie.
     *
     * @param {string} word
     * @returns {TrieNode | null}
     * @memberof Trie
     */
    public getNode(word: string): TrieNode | null {
        let node: TrieNode | null = null;
        let currentNode = this.root.children;

        for (const char of word) {
            const foundNode = currentNode.get(char);
            if (foundNode) {
                node = foundNode;
                currentNode = node.children;
            } else {
                return null;
            }
        }

        return node;
    }

    /**
     * Check if any word in Trie matches given prefix
     *
     * @param {string} prefix
     * @returns {boolean}
     * @memberof Trie
     */
    public startsWith(prefix: string): boolean {
        return this.getNode(prefix) ? true : false;
    }
}

export { Trie };
