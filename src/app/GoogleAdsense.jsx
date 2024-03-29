import Script from "next/script";

const GoogleAdsense = ({ ad_id }) => (
  <>
    <Script
      id="google-adsense"
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ad_id}`}
      crossOrigin="anonymous"></Script>
  </>
);
export default GoogleAdsense;
