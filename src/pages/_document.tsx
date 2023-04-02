import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta property="og:title" content="めっちゃはやくちでしゃべりたい🤓" />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="つい早口になっちゃうくらいしゃべりたいことを投稿しよう"
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_API_BASE_URL}/hayakuchi.png`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_API_BASE_URL}/hayakuchi.png`} />
        <link
          rel="icon"
          href="https://twemoji.maxcdn.com/v/latest/svg/1f913.svg"
        />
        <link
          href="https://fonts.googleapis.com/earlyaccess/nicomoji.css"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
