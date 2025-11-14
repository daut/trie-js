import * as assert from "assert";
import { Trie } from "../src/trie";

describe("Trie", () => {
    let trie: Trie;

    beforeEach(() => {
        trie = new Trie();
    });

    describe("#insert()", () => {
        it("should insert three strings 'Bozidar', 'Tree' and 'Trie'", () => {
            trie.insert("Bozidar");
            trie.insert("Tree");
            trie.insert("Trie");
            assert.equal(true, trie.search("Bozidar"));
        });
    });

    describe("#search()", () => {
        it("should find 'Tree' string", () => {
            trie.insert("Tree");
            assert.equal(true, trie.search("Tree"));
        });
    });

    describe("#startsWith()", () => {
        it("should find string with 'Tr' prefix", () => {
            trie.insert("Tree");
            trie.insert("Trie");
            assert.equal(true, trie.startsWith("Tr"));
        });
    });
});
