'use client';

import LegalPage from '@/components/LegalPage';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const INTRO = (
  <>
    <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.82, margin: '0 0 18px' }}>
      This privacy policy describes how ISUREMEDIA PRIVATE LIMITED (collectively “iSureMedia, we, us and our”) collect, use, share or otherwise process your personal information through website https://isuremedia.com/, hereinafter referred to as (the “website”).
    </p>
    <h3 style={{ fontFamily: J, fontSize: 19, fontWeight: 800, color: 'var(--color-navy)', margin: '30px 0 14px' }}>Security Note</h3>
    <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.82, margin: '0 0 18px' }}>
      Before you process or decide to avail our Services, it is noteworthy to take into account that we do not hereby guarantee zero-risk protection or absolute success rate of our privacy safeguards. As all measures are dependent upon technology/software that may malfunction or be ineffective due to virus(s), error(s), system hacks or unavailability of proper internet connection, despite implementing proper shields in the form of software or other. However, we value the trust shown while opting out of our website, thus we implement reasonable software and procedural safeguards to ensure the protection of your information. Secure servers are employed when accessing users’ or clients’ personal information. Once your personal information is under our control, we follow our security guidelines to prevent unauthorised access. We are conscious and devoted to protecting your privacy rights. We endeavour to provide a secure and reliable website for our user’s and clients’.
    </p>
    <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.82, margin: '0 0 18px' }}>
      This policy is applicable only when we are operating in the capacity of a data controller with regard to the Personal Information of such individuals, that is, when we choose the objectives and methods for which personal information is processed.
    </p>
    <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.82, margin: 0 }}>
      By accessing this website or submitting your Personal Information to our system, you are freely and explicitly consent to be bound by the terms of this Privacy Policy and the Terms of Use of this Website. If you do not agree with the terms provided herein, we kindly request that you refrain from using this Website.
    </p>
  </>
);

const SECTIONS = [
  {
    title: 'What information do we collect?',
    blocks: [
      { type: 'p', text: '1.1 When you use or access our website, we may only collect and store your personal information which is provided voluntarily by filing the Contact Form and Billing Details, namely:' },
      { type: 'h4', text: 'Contact Form :-' },
      { type: 'ul', items: ['Full Name;', 'Email Address;', 'Mobile Number; and', 'Message'] },
      { type: 'h4', text: 'Billing Information :-' },
      { type: 'ul', items: ['Company Name;', 'Full Name;', 'Email Address;', 'Phone;', 'Full Address;', 'Country & State Name;', 'City Name;', 'PIN Code'] },
      { type: 'p', text: '1.2. When you submit your Personal Information, you will no longer be unknown to us and we may process the provided Information when it is necessary to meet or perform business obligations mentioned hereinafter.' },
      { type: 'p', text: '1.3 In general, you may explore our website without providing or submitting Personal Information. However, our web servers or integrated partners may collect and share some analytical and performance enhancement data:' },
      { type: 'ul', items: ['IP addresses;', 'location:', 'operating system details;', 'browsing details; and/or', 'device and connectivity details.'] },
      { type: 'p', text: '1.4. The objective behind the collection of above-mentioned information is to measure the number of visits, average time spent on the website, pages viewed, site you came from and the one you go to next, and similar information. ISURMEDIA uses this information to measure the website usage, to improve content, to ensure safety and security, and to enhance total performance and website experience.' },
      { type: 'p', text: '1.5. All the card and online banking details are collected by a third-party payment gateway. We receive and store limited information, including the transaction ID, time, name, and other details entered by you on the Platform of the payment gateway, necessary to identify and verify the payment made by you. We do not store any information related to a credit or debit card, CVV number, expiry date, 3-D secure password, or online banking user name or password.' },
      { type: 'p', text: '1.6. Privacy measures of our payment partner(s) are effective and have enough shields to safeguard your information from unauthorised access and other privacy breaches, however subject to software/system malfunction or hacks, notwithstanding exercising care. Links to read payment partners privacy policy: https://razorpay.com/privacy/, https://stripe.com/in/privacy, https://www.paypal.com/us/legalhub/privacy-full. While availing any of the payment method(s) available on our website, we do not assume liability, monetary or consequential for any loss caused to you due to any payment issue arising out of the transaction or of usage of data provided by our payment gateway partner.' },
      { type: 'p', text: '1.7. If you choose to message ISURMEDIA other than the options contact us such as e-mail, postal, or whatsapp in order to know about service procedure, methods, team, terms, pricing, or for other purposes, then we may retain such information in a dedicated folder under the sender or clients’ name and may be destroy/ or delete upon our discretion. We may process all such information to perform contractual or legal obligations imposed on us.' },
    ],
  },
  {
    title: 'How do we use the information?',
    blocks: [
      { type: 'p', text: '2.1 ISURMEDIA maintains internal records of your personal information to manage and improve our business processes and customer interactions.' },
      { type: 'p', text: '2.2 We may use the personal information to enhance our products and services, ensuring they meet your needs and expectations more effectively.' },
      { type: 'p', text: '2.3 We may periodically send you promotional emails about new products, special offers, new services, or other information that we believe you may find interesting. These communications will be sent using the email address you have provided.' },
      { type: 'p', text: '2.4 From time to time, we may use your information to contact you for feedback or to conduct market research. We may reach out to you via email, phone, fax, or mail to gather your opinions and insights.' },
      { type: 'p', text: '2.5 We may use the information to customize our website according to your interests, providing a more personalized and engaging user experience.' },
      { type: 'p', text: '2.6 WHAT WE DO NOT CARRY OUT? – ISURMEDIA does not nor it does induce others to sell, share, transfer users’ or clients’ personal information either in whole or in part for wrongful or unlawful purposes. Also, we are not under any contractual relationship with any such organisation or corporation which sell, share, transfer users’ or clients’ personal information for unlawful gains. We are not aware or know any of our integrated partners are engaged in such wrongful or unlawful selling, sharing or transferring of your personal information. ISURMEDIA shall not be liable nor will we be held accountable for any data breach consequently appeared due to our integrated partners’ knowingly or unknowingly selling, sharing, or transferring of your personal information for wrongful or unlawful purposes.' },
    ],
  },
  {
    title: 'Sharing of Personal Information',
    blocks: [
      { type: 'p', text: '3.1 We may share, use or preserve your personal information if appear necessary to:' },
      { type: 'ul', items: [
        'comply with a law, regulation, legal process, or governmental request;',
        'protect the safety of any person, protect the safety or integrity of our platform, including to help prevent spam, abuse, or malicious actors on our services;',
        'explain why we have to remove you accessing the website;',
        'address fraud, security, or technical issues; or',
        'protect our rights or property, or the rights or property of those who use our services.',
      ] },
      { type: 'p', text: '3.2 ISURMEDIA may share or transfer your personal information with service providers who help us to facilitate our services to your utmost satisfaction, with advertisers to deliver relevant advertisements of your choice, with third-party content providers and integrations to innovate, smooth functioning and scale the website to the masses, and through our APIs to enable interoperability with other applications and services.' },
      { type: 'p', text: '3.3 Our website host may store all personal information/ or information that comes to our website in order to ensure our website’s content and service details are easily accessible to the users or clients worldwide.' },
      { type: 'p', text: '3.4 We may also share, sell, or transfer information about you in connection with a merger, acquisition, reorganization, sale of assets, or bankruptcy. This Privacy Policy will apply to your personal information that is shared with (before and after the close of any transaction) or transferred to the new entity.' },
    ],
  },
  {
    title: 'Cookies and similar technology',
    blocks: [
      { type: 'p', text: '4.1 In the course of operating our website and delivering content and services, we utilize cookies and similar tracking technologies to collect and process data. This clause outlines how we deploy such technologies and the types of data they help us gather.' },
      { type: 'p', text: '4.2 Session Management Cookies: We utilize strictly necessary cookies, such as _gcl_au, SM, and elementor, to enable core website functionality, including authenticating users, maintaining secure sessions, and ensuring seamless operation of our web applications.' },
      { type: 'p', text: '4.3 Functionality Cookies: Our website employs functionality cookies, such as _clck, _clsk, _cltk, and i18n.en-us, to support enhanced features that improve the user experience. These cookies enable functions such as user interaction tracking, language preferences, and personalization.' },
      { type: 'p', text: '4.4 Analytics Cookies: We use first-party and third-party analytics cookies, such as _ga, _ga_*, _fbp, _uetsid, _uetvid, MUID, CLID, and SRM_B, to collect aggregated usage data. These cookies provide insights into website traffic, user behavior, content performance, and opportunities for improvement.' },
      { type: 'p', text: '4.5 Advertising Cookies: To deliver tailored advertisements, we partner with advertising networks that use cookies such as VISITOR_PRIVACY_METADATA, MR, ANONCHK, and _uetsid_exp. These cookies track browsing behavior and user preferences, ensuring compliance with user consent preferences.' },
      { type: 'p', text: '4.6 YouTube Cookies: Embedded YouTube video players on our website may deploy cookies, including YSC, VISITOR_INFO1_LIVE, yt-remote-device-id, yt-remote-connected-devices, and others from the yt.innertube namespace. These facilitate video playback, player customization, and related YouTube platform functionalities.' },
      { type: 'p', text: '4.7 Supplementary Cookies; Additional cookies deployed include: Campaign and Attribution: lastExternalReferrer, lastExternalReferrerTime, and v3_first_session_event_jnLK3WXibjhfqnyON1Ru. Session and Interaction Tracking: v2_history_jnLK3WXibjhfqnyON1Ru, v2_session_history_jnLK3WXibjhfqnyON1Ru, and v2_contact_session_jnLK3WXibjhfqnyON1Ru_session_id. Security and Spam Protection: _GRECAPTCHA. Customization and Miscellaneous: wpEmojiSettingsSupports, ytidb::LAST_RESULT_ENTRY_KEY, and others such as yt-remote-cast-installed.' },
      { type: 'p', text: '4.8 The data collected by our deployed cookies encompasses online identifiers, browsing actions, IP addresses, geographic locations, and details about the devices and browsers used to access our services.' },
      { type: 'p', text: '4.9 While the privacy-centric configuration minimizes third-party tracking, users maintain the ability to review and revise their cookie preferences through standard browser or device settings. Restricting cookies may impact certain functionalities dependent on them.' },
      { type: 'p', text: '4.10 Our Cookie Management Policy is regularly reviewed to comply with data protection laws and market-leading practices. For detailed data handling transparency, please refer to our comprehensive Privacy Policy.' },
    ],
  },
  {
    title: 'How long do we store the information?',
    blocks: [
      { type: 'p', text: '5.1 We may store your personal information as long as we need to comply with legal requirements and for safety and security purposes. As well as destruction/ or deletion of your personal information depends on our business requirements, hence shall be done at our discretion.' },
      { type: 'p', text: '5.2 If you request to delete your personal information from our system, then we may do so upon a written request. We will try to comply with your written request, however absolute deletion may not be done due to technological/ or server reasons which are beyond our control.' },
    ],
  },
  {
    title: 'Your Rights and Responsibilities',
    blocks: [
      { type: 'p', text: '6.1 ISUREMEDIA provides rights to all user/ or client of its website across the globe, followings are the granted rights:' },
      { type: 'p', text: '6.1.1 This privacy policy provides you with clear, transparent, and easily accessible information about how we collect, use, store, and share your personal information. If you’re dissatisfied with our privacy policy and/or have any query around its objectives, processing or other reasons then kindly write a mail us on: support@isuremedia.com. Upon request, we will provide you with a copy of your personal information that we hold, free of charge. We will respond to your request within one month, unless the request is complex or numerous, in which case we may extend this period by up to two additional months.' },
      { type: 'p', text: '6.1.2 If you believe that the personal information we hold about you is inaccurate or incomplete, you have the right to request that we correct or complete it. We will respond to your request within one month.' },
      { type: 'p', text: '6.1.3 In certain circumstances, such as when we no longer need your information for the purposes for which it was collected, you have the right to request that we delete your personal information. We will consider each request based on the specific business circumstances/ or requirements and our legal obligations.' },
      { type: 'p', text: '6.1.4 You have the right to object to the processing of your personal information for direct marketing purposes or based on our legitimate interests. Upon receiving your objection, we will stop processing your data unless we can demonstrate compelling legitimate grounds for the processing that override your interests, rights, and freedoms.' },
      { type: 'p', text: '6.1.5 You have the right to nominate by notifying through an email and lawful verification in event of death and subsequently becoming unsound or infirmity of body, who shall exercise the rights granted to you as prescribed herein.' },
      { type: 'p', text: '6.1.6 If you believe your personal information has been mishandled or you have concerns regarding our data practices, you can file a complaint with our designated data protection officer. We are committed to addressing and resolving your grievances promptly and in accordance with applicable laws and regulations. Your satisfaction and trust are paramount, and we strive to ensure transparency and fairness in our data handling practices.' },
      { type: 'h4', text: 'Your duties:' },
      { type: 'p', text: '6.2.1 It is your responsibility to provide real or true information asked by us and to ensure not to suppress any material information while providing your personal information for service requests, service inquiry, contact us, and promotional mails, any document, unique identifier, proof of identity or proof of address.' },
      { type: 'p', text: '6.2.2 To ensure not to impersonate another person while providing your personal information for purposes laid down herein or in a separate contract between us.' },
      { type: 'p', text: '6.2.3 You are bound to not register a false or frivolous grievance or complaint against the ISUREMEDIA, integrated partners, and affiliate(s).' },
    ],
  },
  {
    title: 'Legal basis of information processing',
    blocks: [
      { type: 'p', text: '7.1 We may process your personal information when you have given consent. You have the right to withdraw your consent at any time, and upon withdrawal, we will stop processing your data for the purposes covered by the consent, unless we have another legal basis to continue. Your consent shall be deemed accepted promptly after accepting this privacy policy.' },
      { type: 'p', text: '7.2 Processing your data is necessary for the performance of a contract to which you are a party or to take steps at your request before entering into a contract.' },
      { type: 'p', text: '7.3 We process your personal information to comply with legal and regulatory obligations, such as tax laws, reporting requirements, and other mandatory disclosures.' },
      { type: 'p', text: '7.4 Processing your information is necessary for our legitimate business interests, such as improving our services, conducting marketing activities, or ensuring the security of our systems, provided these interests are not overridden by your privacy rights.' },
      { type: 'p', text: '7.5 In rare cases, we may process your personal information to protect your vital interests or those of another person.' },
    ],
  },
  {
    title: 'Children and persons with disabilities',
    blocks: [
      { type: 'p', text: '8.1 We do not collect, process and track data of a minor/child (subject to the Indian Contract Act of 1872) and a person with disability(s).' },
      { type: 'p', text: '8.2 If you provide any personal information of a person under the age of 18 (the “Child”/ or “Children”) and/ or person with any disability, you confirm that you have the right to do so being a parent or a lawful guardian, and you give us permission to use the information as described in this privacy policy, including but not limited to perform contractual relationship with you or other party.' },
    ],
  },
  {
    title: 'About updates',
    blocks: [
      { type: 'p', text: '9.1 We may from time to time post an updated version of this policy on our Platform.' },
      { type: 'p', text: '9.2 You should periodically review this page to make sure you are in agreement with any updates to this policy. We may contact you to let you know if this policy has (changed) or (significantly changed).' },
    ],
  },
  {
    title: 'Grievance redressal',
    blocks: [
      { type: 'p', text: '10.1 In the event of any concerns, queries, or grievances pertaining to the collection, processing, storage, or utilisation of your personal information, you have the inherent right to seek recourse through our established grievance redressal mechanism. This mechanism ensures that your grievances are acknowledged, addressed, and resolved in a timely and effective manner. To exercise this right, you can contact our designated grievance officer.' },
      { type: 'p', text: '10.2 The name and contact details of the Grievance Officer are provided below:' },
      { type: 'ul', items: ['Name:', 'Address:', 'Mail ID:', 'Telephone number:'] },
      { type: 'p', text: '10.3 We are committed to maintaining transparency and accountability in our data practices and aim to provide you with the necessary support for a satisfactory resolution of any privacy-related issues you may encounter.' },
    ],
  },
  {
    title: 'Governing law',
    blocks: [
      { type: 'p', text: '11.1 This Privacy Policy and our data processing practices are governed by the laws of India, specifically the Digital Personal Data Protection Act, 2023 (“DPDP Act”). The DPDP Act provides a comprehensive framework for the protection of personal data of individuals (data principals) in India and establishes rules for the collection, processing, storage, and transfer of personal data by data fiduciaries like us.' },
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      lastUpdated="Last updated: August 2026"
      intro={INTRO}
      sections={SECTIONS}
    />
  );
}
