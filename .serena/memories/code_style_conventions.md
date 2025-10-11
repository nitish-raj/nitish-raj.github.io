# Code Style and Conventions

## Quarto/Markdown (.qmd)
- Use YAML frontmatter with title, subtitle, and page-layout
- Follow existing template structure (trestles for about pages)
- Use semantic HTML5 elements within markdown
- Keep line length under 100 characters
- Include proper alt text for images
- Use consistent heading hierarchy

## SCSS/CSS
- Use SCSS variables for colors and spacing (defined in styles.scss)
- Follow BEM methodology for custom class names
- Mobile-first responsive design with breakpoints at 768px
- Use Bootstrap variables and mixins when available
- Organize styles into logical sections (defaults, rules, components)
- Use CSS custom properties for theme switching

## JavaScript
- Use modern ES6+ syntax (const/let, arrow functions, template literals)
- Event delegation for dynamic content
- Smooth scrolling and accessibility features
- Follow existing pattern of DOMContentLoaded initialization
- Use semantic HTML5 and ARIA attributes
- Proper error handling and feature detection

## File Organization
- Assets in `images/`, scripts in `script/`, styles in root
- Partials in `_partials/` for reusable HTML
- Quarto config files: `_quarto.yml`, `_format.yml`, `_website.yml`
- Keep related files together in logical directories

## Naming Conventions
- Kebab-case for filenames and CSS classes
- camelCase for JavaScript variables and functions
- SCSS variables use kebab-case with $ prefix
- Consistent color scheme using SCSS variables
- Use descriptive, semantic names

## Accessibility
- Include ARIA labels for interactive elements
- Ensure keyboard navigation support
- Use semantic HTML5 elements appropriately
- Provide alt text for images
- Maintain color contrast ratios