# Font Installation Instructions

## Britany Cursive Font

To use the Britany cursive font from Canva:

1. Download the Britany font file from Canva (requires Canva Pro)
2. Convert the font to `.woff2` format (use a tool like [Font Squirrel Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator))
3. Save the font file as `Britany.woff2` in this directory (`public/fonts/`)

The font is already configured in the project:
- Font-face declaration: `src/index.css`
- Tailwind config: `tailwind.config.ts`
- Utility classes: `.text-script` and `.text-script-accent`

## Usage

Once installed, use the Britany font with these Tailwind classes:
- `font-script` - Apply the Britany font family
- `text-script` - Styled script text (slightly larger, proper spacing)
- `text-script-accent` - Coral-colored script text for emphasis

**Note:** The font file is not included in the repository due to licensing. You must download it separately from Canva.
