# KPI project website

Named project website: https://kpi-robot.github.io/

Repository: https://github.com/kpi-robot/kpi-robot.github.io

This independent repository contains the named KPI project page, authors, affiliations, paper PDF, figures, and all media referenced by the page. It was migrated from `TToTMooN/KPI` on September 26, 2026, retaining its Git history. Future updates belong here.

The anonymous site remains a separate repository at `robot-kpi/robot-kpi.github.io` and is maintained independently.

## Publishing

GitHub Pages publishes the root of the `main` branch. Relative asset paths allow this site to run at the organization root, `https://kpi-robot.github.io/`. There is no custom domain or dependency on `lingfeng.moe/KPI/`.

## Local preview

```sh
python3 -m http.server 8773 --bind 127.0.0.1
```

Open http://127.0.0.1:8773/.

`assets/kpi-paper.pdf` is the named 11-page release PDF. Replace it when a newer public paper version is available. The initial scientific page content came from the anonymous site's `c25ae0d` revision; only assets referenced by the page were copied to stay within the GitHub Pages size limit.
