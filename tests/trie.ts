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

        it("should return false for non-existent prefix", () => {
            trie.insert("Tree");
            assert.equal(false, trie.startsWith("Xyz"));
        });
    });

    describe("Edge Cases", () => {
        it("should return false when searching for non-existent word", () => {
            trie.insert("Tree");
            assert.equal(false, trie.search("Treehouse"));
            assert.equal(false, trie.search("Tre"));
        });

        it("should not support empty string (current limitation)", () => {
            trie.insert("");
            assert.equal(false, trie.search(""));
        });

        it("should handle single character words", () => {
            trie.insert("a");
            assert.equal(true, trie.search("a"));
            assert.equal(false, trie.search("ab"));
        });

        it("should distinguish between prefix and complete word", () => {
            trie.insert("Tree");
            assert.equal(true, trie.startsWith("Tre"));
            assert.equal(false, trie.search("Tre"));
        });

        it("should handle overlapping words", () => {
            trie.insert("tree");
            trie.insert("trees");
            assert.equal(true, trie.search("tree"));
            assert.equal(true, trie.search("trees"));
            assert.equal(false, trie.search("tre"));
        });
    });
});
