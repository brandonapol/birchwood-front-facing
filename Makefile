.PHONY: lint test build dev help

help: ## Show this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  %-10s %s\n", $$1, $$2}'

lint: ## Run type-checking via vue-tsc
	npx vue-tsc --build --force

test: ## Run tests via vitest
	npx vitest run

build: ## Production build (type-check + vite build)
	npm run build

dev: ## Start the dev server
	npm run dev
