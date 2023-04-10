This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

---

# 導入フロー

Next

- npx create-next-app app-name --use-yarn
  - option: TypeScript EsLint

Storybook

- npx sb@next init
  - option: eslint-plugin-storybook

pacakges

- yarn add @mui/material @emotion/react @emotion/styled @emotion/server ag-grid-community ag-grid-enterprise chart.js

# Docs

## Storybook 環境構築

### eslint-plugin-storybook

- [Next.js のバージョン 12 での Storybook の設定方法を理- 解する \| アールエフェクト](https://reffect.co.jp/react/next-js-12-storybook)

### CSF3.0

- [Next.js に Storybook(CSF3.0)を導入して Snapshot Test や Unit Test を実行する \| ZUMA Lab](https://zuma-lab.com/posts/next-story-book-csf3)
- [Storybook 駆動開発 @ CSF3.0](https://zenn.dev/takepepe/articles/storybook-driven-development)

### テスト導入

- [Next.js に Storybook(CSF3.0)を導入して Snapshot Test や Unit Test を実行する \| ZUMA Lab](https://zuma-lab.com/posts/next-story-book-csf3)
- [StoryBook の Storyshots アドオンが React18 で動かない時の対応](https://zenn.dev/sum0/scraps/89f0aac4486446)
- [Storybook の Storyshots 入れるだけでやたら手こずった](https://zenn.dev/ucwork/articles/c331de8917ea5b#%E3%81%A4%E3%81%BE%E3%81%9A%E3%81%84%E3%81%9F%E3%81%A8%E3%81%93)
- [Next.js 12+Storybook(CSF3.0) で StoryShots を実現する](https://zenn.dev/toono_f/articles/4d1dc926c4e041)

---

## Getting Started

First, run the development server:

```bash
yarn dev
yarn storybook
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
