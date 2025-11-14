# Trie.ts

Trie data structure implementation in TypeScript.

## Usage

### Create new Trie
```typescript
import { Trie } from 'trie-js';

const trie = new Trie();
```

### Insert element
```typescript
trie.insert('Tree');
```

### Search for an element
```typescript
trie.search('Tree'); // Returns: true
```

### Check if prefix exists
```typescript
trie.startsWith('Tr'); // Returns: true
trie.startsWith('Xyz'); // Returns: false
```

### Get node by word/prefix
```typescript
const node = trie.getNode('Tre'); // Returns: TrieNode | null
```

## Build

Run `npm run build` to build project.
