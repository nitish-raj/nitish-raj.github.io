# AGENTS.md

## Build Commands
- `quarto render` - Build the entire site to `docs/` directory
- `quarto preview` - Start development server on port 8000
- `quarto render <filename>.qmd` - Build single file

## Code Style Guidelines

### Quarto/Markdown (.qmd)
- Use YAML frontmatter with title, subtitle, and page-layout
- Follow existing template structure (trestles for about pages)
- Use semantic HTML5 elements within markdown
- Keep line length under 100 characters

### SCSS/CSS
- Use SCSS variables for colors and spacing (defined in styles.scss)
- Follow BEM methodology for custom class names
- Mobile-first responsive design with breakpoints at 768px
- Use Bootstrap variables and mixins when available

### JavaScript
- Use modern ES6+ syntax
- Event delegation for dynamic content
- Smooth scrolling and accessibility features
- Follow existing pattern of DOMContentLoaded initialization

### File Organization
- Assets in `images/`, scripts in `script/`, styles in root
- Partials in `_partials/` for reusable HTML
- Quarto config files: `_quarto.yml`, `_format.yml`, `_website.yml`

### Naming Conventions
- Kebab-case for filenames and CSS classes
- camelCase for JavaScript variables and functions
- Consistent color scheme using SCSS variables