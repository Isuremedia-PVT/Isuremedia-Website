'use client';

import Script from 'next/script';

export default function BookingWidget() {
  return (
    <>
      <iframe
        src="https://crm.isuremedia.com/widget/booking/MbMHwrIm82UZj6DPVDwg"
        style={{ display: 'block', width: '100%', maxWidth: '100%', height: 700, border: 'none', overflow: 'hidden' }}
        scrolling="no"
        id="gmq18K15T6olsuSkPq2Z_1789746941859"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Events-LevelUp2026-Booking"
        data-height="700"
        data-layout-iframe-id="gmq18K15T6olsuSkPq2Z_1789746941859"
        data-form-id="MbMHwrIm82UZj6DPVDwg"
        title="Book time with Ty"
      />
      <Script src="https://crm.isuremedia.com/js/form_embed.js" strategy="afterInteractive" />
    </>
  );
}
