/** @format */

import Head from "next/head";

function PagesMetaHead({ title, keywords, description }) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
}

PagesMetaHead.defaultProps = {
  title: "Franky Johan Natama Lumban Gaol Portofolio",
  keywords: "next.js, react, web, ui",
  keywords: "Simple and multi-page next.js and react application",
  keywords: "franky johan natama lumban gaol",
  keywords:
    "portofolio, website, mobile developer, web developer, frontend developer",
  keywords: "franky johan natama lumban gaol portofolio",
};

export default PagesMetaHead;
