install:
        npm ci
        node bin/brain-games.js
publish:
        npm publish --dry-run
all: lint
lint:
        npx eslint .