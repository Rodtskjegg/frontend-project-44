install:
        npm ci
publish:
        npm publish --dry-run
all: lint
lint:
        npx eslint .
brain-even:
        bin/brain-even.js

brain-calc:
        bin/brain-calc.js

brain-gcd:
        bin/brain-gcd.js

brain-progression:
        bin/brain-progression.js

brain-prime:
        bin/brain-prime.js

brain-games:
        bin/brain-games.js