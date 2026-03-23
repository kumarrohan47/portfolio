# Rohan Kumar Jha — Portfolio

Personal portfolio website for a Data Analyst Student.

---

## Folder Structure

```
rohan-portfolio/
│
├── index.html                  ← Main HTML file (open this in browser)
│
├── assets/
│   ├── css/
│   │   └── styles.css          ← All styles (design tokens, dark mode, layout)
│   │
│   ├── js/
│   │   └── main.js             ← All JavaScript (theme toggle, animations, form)
│   │
│   └── images/
│       └── rohan.jpg           ← Profile photo (also embedded in index.html)
│
└── README.md                   ← This file
```

---

## How to Use

## Customise

| What                  | Where in index.html                       |
|-----------------------|-------------------------------------------|
| Your name             | `<title>` tag and `.hero-name`            |
| Email / LinkedIn      | Contact section `href` values             |
| Your photo            | Already embedded — replace `rohan.jpg` in `assets/images/` and re-embed |
| Skill percentages     | `data-w="80"` on each `.bar-fill`         |
| Projects              | `.project-card` blocks in Projects section |
| Stats (10+, 2nd year) | `.stat-box` blocks in Hero section        |
| Resume PDF            | Place `resume.pdf` in `assets/` folder   |

---

## Connect Contact Form to Real Email

1. Sign up free at [Formspree.io](https://formspree.io)
2. Create a form and copy your form ID
3. In `assets/js/main.js`, find the comment `TO CONNECT A REAL EMAIL SERVICE`
4. Replace the `setTimeout` block with the fetch code shown in the comment

---

## Tech Used

- Pure HTML5, CSS3, Vanilla JavaScript
- Google Fonts: Syne (headings) + Mulish (body)
- No frameworks, no build tools, no dependencies
- Works offline (photo is embedded as base64)
=======
# portfolio
>>>>>>> 22f45d2fb70a453b5385736b79612502f7190b5e
