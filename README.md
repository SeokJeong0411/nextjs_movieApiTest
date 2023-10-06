# Nextjs Intoduction

첫 NextJS 사용

기본 사용법 익히기 및 영화 API 호출

강의영상은 아래를 보았고, DOCS를 통해 migration 해가며 진행

- 강의 : [NextJS 시작하기](https://nomadcoders.co/nextjs-fundamentals)
- DOCS : https://nextjs.org/docs

후기 : Page 라우터 방식을 App 라우터 방식으로 마이그레이션 해가며 진행했는데, 단순히 라우팅 구조 뿐만 아니라 내부 함수도 변경된 사항이 많아서 쉽지 않았음. "use client" 라고 최상위에 적어서 직접 클라이언트 사이드 렌더링과 서버 사이드 렌더링을 구분해 주어야 했으며, 각각의 렌더링 방식에 따라 사용할 수 있고 없는 것이 구분되어 있었음. useRouting에서 as를 통해 마스킹하는 부분은 마이그레이션이 불가능 했음. 

- 2023-09-26 : first created
- 2023-10-05 : git upload
- 2023-10-06 : finish

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
