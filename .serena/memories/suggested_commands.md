# Suggested Commands

## Development Commands
- `quarto preview` - Start development server on port 8000 with live reload
- `quarto render` - Build the entire site to `docs/` directory
- `quarto render <filename>.qmd` - Build single file
- `quarto clean` - Clean the output directory

## Git Commands
- `git status` - Check working tree status
- `git add .` - Stage all changes
- `git commit -m "message"` - Commit changes
- `git push` - Push to remote repository
- `git pull` - Pull latest changes from remote

## File System Commands
- `ls -la` - List all files with details
- `find . -name "*.qmd"` - Find all Quarto files
- `grep -r "pattern" .` - Search for pattern in files
- `cd directory` - Change directory
- `mkdir newdir` - Create new directory

## Utility Commands
- `code .` - Open project in VS Code
- `open docs/index.html` - Open built site in browser (macOS)
- `xdg-open docs/index.html` - Open built site in browser (Linux)
- `quarto check` - Check Quarto installation and configuration

## Testing and Validation
- `quarto check` - Verify Quarto installation
- Manual testing: Check responsive design at different viewport sizes
- Manual testing: Test dark/light mode toggle
- Manual testing: Verify all links work correctly
- Manual testing: Check accessibility features