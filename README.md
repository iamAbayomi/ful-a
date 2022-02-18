

# web-fulfilment-center
Web-app  for fulfilment center with Next.js


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
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



Folder structure

📦src
 ┣ 📂app
 ┃ ┗ 📂Layout
 ┃ ┃ ┣ 📂Content
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┗ 📜index.tsx
 ┣ 📂components
 ┃ ┗ 📂ui
 ┃ ┃ ┣ 📂Account
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂AccountReconciliation
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂Agent
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂CenterPage
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂CouponNotifications
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂FulfilmentCenters
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂Home
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂IssuesAndRedFlags
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂NotificationsIssuesAndAlerts
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂OrderId
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂Orders
 ┃ ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜orders.module.scss
 ┃ ┃ ┣ 📂Report
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂RiderId
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂Riders
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂RidersHistory
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂RidersHistoryTable
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂TableList
 ┃ ┃ ┃ ┣ 📜tableList.module.scss
 ┃ ┃ ┃ ┗ 📜TableList.tsx
 ┃ ┃ ┗ 📂TabPanels
 ┃ ┃ ┃ ┣ 📂Agents
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📂Home
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📂Orders
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┣ 📂Riders
 ┃ ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┣ 📂pages
 ┃ ┣ 📂account
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂account_reconciliation
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂api
 ┃ ┃ ┗ 📜hello.ts
 ┃ ┣ 📂coupons
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂fulfilments
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂fulfilment_centers
 ┃ ┃ ┣ 📂agent
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂home
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂issues
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂notifications_issuesalerts
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂orders
 ┃ ┃ ┣ 📂orderid
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂posts
 ┃ ┃ ┗ 📜first-posts.tsx
 ┃ ┣ 📂reports
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂riderhistorytable
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂riders
 ┃ ┃ ┣ 📂riderid
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂ridershistory
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📜index.tsx
 ┃ ┗ 📜_app.tsx
 ┣ 📂stories
 ┃ ┣ 📂assets
 ┃ ┃ ┣ 📜code-brackets.svg
 ┃ ┃ ┣ 📜colors.svg
 ┃ ┃ ┣ 📜comments.svg
 ┃ ┃ ┣ 📜direction.svg
 ┃ ┃ ┣ 📜flow.svg
 ┃ ┃ ┣ 📜plugin.svg
 ┃ ┃ ┣ 📜repo.svg
 ┃ ┃ ┗ 📜stackalt.svg
 ┃ ┣ 📜button.css
 ┃ ┣ 📜Button.stories.tsx
 ┃ ┣ 📜Button.tsx
 ┃ ┣ 📜header.css
 ┃ ┣ 📜Header.stories.tsx
 ┃ ┣ 📜Header.tsx
 ┃ ┣ 📜Introduction.stories.mdx
 ┃ ┣ 📜page.css
 ┃ ┣ 📜Page.stories.tsx
 ┃ ┗ 📜Page.tsx
 ┣ 📂styles
 ┃ ┗ 📜globals.scss
 ┗ 📂_shared
 ┃ ┗ 📂dummydata
 ┃ ┃ ┗ 📜index.tsx
