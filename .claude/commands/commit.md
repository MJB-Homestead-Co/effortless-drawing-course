Commit all staged and unstaged changes using the Conventional Commits specification.

## Conventional Commits Format

```
<type>(<optional scope>): <description>

[optional body]

[optional footer]
```

## Commit Types

- `feat` — a new feature or capability
- `fix` — a bug fix
- `style` — CSS/visual changes with no logic change
- `content` — copy, text, or asset updates
- `chore` — build process, config, tooling, dependencies
- `docs` — documentation only (README, CLAUDE.md, proposal, etc.)
- `refactor` — code restructuring with no behavior change
- `perf` — performance improvements
- `ci` — CI/CD pipeline changes

## Scope Examples (for this project)

- `hero`, `pain`, `breakthrough`, `modules`, `offer`, `faq`, `footer` — page sections
- `css`, `js`, `html` — layer-specific changes
- `deploy` — CI/CD or Cloudflare config
- `affiliate` — affiliate attribution logic

## Instructions

1. Run `git status` and `git diff` to review all changes
2. Stage all relevant files
3. Draft a commit message following the format above
4. Keep the description under 72 characters, imperative mood ("add hero section" not "added hero section")
5. Include a body if the change needs context beyond what the subject line conveys
6. Commit and confirm success

## Examples

```
feat(hero): add full-width hero section with CTA button
fix(affiliate): correctly append ref param when query string already exists
style(css): switch body font from Source Sans to Inter
content(faq): add refund policy and materials questions
chore(deploy): add Cloudflare Pages GitHub Actions workflow
docs: update CLAUDE.md with Thinkific checkout URL
```
