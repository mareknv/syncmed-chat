# Syncmed Chat Development Guide

## Commands
- **Frontend**: 
  - Build: `cd frontend && npm run build`
  - Dev server: `cd frontend && npm run dev`
  - Lint: `cd frontend && npm run lint`
  - Lint & fix: `cd frontend && npm run lint:fix`
  - Format: `cd frontend && npm run format`
  - Test all: `cd frontend && npm test`
  - Test single file: `cd frontend && npx jest path/to/file.test.ts`

- **Backend**:
  - Run: `python app.py`
  - Run tests: `pytest`
  - Run single test: `pytest tests/path/to/test_file.py::test_function`

## Code Style
- **TypeScript**: Use strict typing, organize imports with `simple-import-sort`
- **Python**: PEP 8 conventions, type hints recommended
- **Naming**: Components in PascalCase, functions in camelCase, constants in UPPER_SNAKE_CASE
- **Error handling**: Use try/catch blocks with specific error types
- **Components**: Each in own directory with index.ts for exports
- **CSS**: Use CSS modules with ComponentName.module.css naming

Remember to run linters before committing changes.