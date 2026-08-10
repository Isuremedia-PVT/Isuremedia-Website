'use client';

import LegalPage from '@/components/LegalPage';

const SECTIONS = [
  {
    title: 'Conditions of Use',
    blocks: [
      { type: 'p', text: 'We will provide their services to you, which are subject to the conditions stated below in this document. Every time you visit this website, use its services or make a purchase, you accept the following conditions. This is why we urge you to read them carefully.' },
    ],
  },
  {
    title: 'Fair Use Policy',
    blocks: [
      { type: 'p', text: 'This policy ensures that our service offerings, particularly tasks under unlimited plans, are used fairly, efficiently, and within the scope of intended use. The aim is to maintain high-quality service for all customers while preventing misuse or exploitation.' },
      { type: 'h3', text: 'Single-Business/Owner Use' },
      { type: 'p', text: 'Isuremedia’s services are designed exclusively for single-business or single-owner use. Examples of unacceptable activities under this policy include but are not limited to:' },
      { type: 'h4', text: '1. Third-Party Work:' },
      { type: 'ul', items: [
        'Requesting tasks for websites, companies, or entities that you do not own, operate, or directly manage.',
        'Assigning tasks related to third-party businesses, organizations, or individuals who are not your clients or directly tied to your subscription agreement with Isuremedia.',
      ] },
      { type: 'h4', text: '2. Suspicious or Abnormal Use:' },
      { type: 'ul', items: [
        'Unusually high task requests that exceed the typical usage of a single owner or business, or behavior inconsistent with reasonable use expectations.',
        'Attempts to manipulate or circumvent task limits, service processes, or support protocols.',
      ] },
      { type: 'p', text: 'Permitted Use: Subject to this policy, Isuremedia allows unlimited requests for design and technical tasks that fall within the scope of the subscribed service plan and are supported under our tools and service capabilities. These tasks will be implemented by our team following plan registration and setup.' },
      { type: 'p', text: 'Determination of Legitimate Use: Isuremedia reserves the sole discretion to evaluate the legitimacy of usage patterns. This includes identifying unlawful, excessive, irregular, or otherwise prohibited use. In such cases, we may take the following actions:' },
      { type: 'h4', text: '1. Notification:' },
      { type: 'p', text: 'Where feasible, Isuremedia will notify you via email regarding any inappropriate use, offering an opportunity to rectify the behavior.' },
      { type: 'h4', text: '2. Suspension or Termination:' },
      { type: 'p', text: 'If inappropriate use persists or is deemed severe, Isuremedia may suspend your subscription or terminate the agreement immediately.' },
      { type: 'h4', text: '3. Service Review:' },
      { type: 'p', text: 'In cases of repeated or egregious violations, Isuremedia may restrict your access to certain services or plans.' },
      { type: 'h3', text: 'Rights of Isuremedia' },
      { type: 'h4', text: '1. Policy Enforcement:' },
      { type: 'p', text: 'Isuremedia retains the right to modify, enforce, or waive any part of this policy to maintain service quality and protect its interests.' },
      { type: 'h4', text: '2. Authority to Investigate:' },
      { type: 'p', text: 'We reserve the right to investigate any usage that appears to violate this policy, including analyzing task patterns, communications, and other relevant data.' },
      { type: 'p', text: 'By using Isuremedia’s services, you acknowledge and agree to adhere to this Fair Use Policy. Failure to comply with these guidelines may result in suspension or termination of services, as determined by Isuremedia in its sole discretion.' },
    ],
  },
  {
    title: 'Copyright',
    blocks: [
      { type: 'p', text: 'Content published on this website (digital downloads, images, texts, graphics, logos) is the property of isuremedia and/or its content creators and protected by international copyright laws. The entire compilation of the content found on this website is the exclusive property of isuremedia.' },
    ],
  },
  {
    title: 'Communications',
    blocks: [
      { type: 'p', text: 'The entire communication with us is electronic. Every time you send us an email or visit our website, you are going to be communicating with us. You hereby consent to receive communications from us. If you subscribe to the news on our website, you are going to receive regular emails from us. We will continue to communicate with you by posting news and notices on our website and by sending you emails. You also agree that all notices, disclosures, agreements and other communications we provide to you electronically meet the legal requirements that such communications be in writing.' },
    ],
  },
  {
    title: 'Privacy & Confidentiality',
    blocks: [
      { type: 'p', text: 'We uphold confidentiality in all communication regarding your brand, business and your clients businesses. We will only communicate to those who have been authorized on your account and will not share any information provided with anyone outside our organization, subject to our Privacy Policy.' },
      { type: 'p', text: 'We do not rent, sell, or share Users’ information with third parties except as described in this Privacy Policy.' },
      { type: 'ul', items: [
        'Communicating with you – sending you notices regarding our services, providing you with technical information and responding to any customer service issue you may have;',
        'To communicate with you and to keep you informed of our latest updates and services;',
        'To serve you advertisements when you use our Site (see more under “Advertisements”);',
        'To market our websites and products (see more under “Marketing”);',
        'Conducting statistical and analytical purposes, intended to improve the Site.',
      ] },
      { type: 'p', text: 'In addition to the different uses listed above, we may transfer or disclose Personal Information to our subsidiaries, affiliated companies and subcontractors.' },
      { type: 'p', text: 'We may also disclose information if we have good faith to believe that disclosure of such information is helpful or reasonably necessary to:' },
      { type: 'ul', items: [
        'comply with any applicable law, regulation, legal process or governmental request;',
        'enforce our policies (including our Agreement), including investigations of potential violations thereof;',
        'investigate, detect, prevent, or take action regarding illegal activities or other wrongdoing, suspected fraud or security issues;',
        'to establish or exercise our rights to defend against legal claims;',
        'prevent harm to the rights, property or safety of us, our users, yourself or any third party; or',
        'for the purpose of collaborating with law enforcement agencies and/or in case we find it necessary in order to enforce intellectual property or other legal rights.',
      ] },
      { type: 'p', text: 'We take great care in implementing and maintaining the security of the Site and your information. We employ industry standard procedures and policies to ensure the safety of the information we collect and retain, and prevent unauthorized use of any such information, and we require any third party to comply with similar security requirements, in accordance with this terms of service. Although we take reasonable steps to safeguard information, we cannot be responsible for the acts of those who gain unauthorized access or abuse our Site, and we make no warranty, express, implied or otherwise, that we will prevent such access.' },
    ],
  },
  {
    title: 'Disclaimer',
    blocks: [
      { type: 'p', text: 'The materials on the isuremedia website are provided “as is”. isuremedia does not guarantee or provide warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, or non-infringement of intellectual property or other violation of rights. isuremedia does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any websites linked to this website.' },
      { type: 'p', text: 'By agreeing to these terms, you acknowledge that we informed you that applicable (state, national, or international) law may require your website to have a Privacy Policy with specific disclosures. We are not a lawyers, we do not provide Privacy Policies as a service, and we are not responsible for your business complying with any applicable privacy laws.' },
      { type: 'p', text: 'You also acknowledge that applicable (state, national, or international) law may require your website to have accessibiity functionality. We do not provide website accessibility as a service and do not gaurantee 100% website accessibility. We are not responsible for your business complying with any applicable website accessibility laws.' },
    ],
  },
  {
    title: 'Earnings Disclaimer',
    blocks: [
      { type: 'p', text: 'From time to time, the Service may report on the success of one of its existing or prior clients/customers. The information about this success is accurately portrayed by the Customer. You acknowledge that the prior success of others does not guarantee your success. As with any business, your results, or the results of your clients may vary and will be based on yours, or your clients’ individual capacity, business experience, expertise, and level of desire. There are no guarantees concerning the level of success you or your clients may experience. There is no guarantee that you or your clients will make any income at all and you accept the risk that the earnings and income statements differ by individual. Each individual’s success depends on his or her background, dedication, desire and motivation. The use of our information, products and services should be based on your own due diligence and you agree that the Service is not liable for any success or failure of your business that is directly or indirectly related to the purchase and use of our information, products, and services reviewed or advertised on this Website.' },
    ],
  },
  {
    title: 'Service Inclusions',
    blocks: [
      { type: 'p', text: 'The cost of third-party tools required for completing tasks requested by customers are not included in the services, plans or product provided by the Service. Additional costs for third-party tools are covered by the customer who agrees to purchase the tool if required, then provide the login to the isuremedia team to implement the required tasks for the customer.' },
    ],
  },
  {
    title: 'Ownership, Trademarks & Provided Assets',
    blocks: [
      { type: 'p', text: 'You own all graphics, websites, funnels, digital assets, and files we create during any month paid in full. You will provide all content/copy to be used in our website development, automation and design. You agree that any materials provided to are proofed and approved to be used in your designs and development and are not owned or trademarked by a different entity. You are responsible that any materials provided can be legally used in our designs. We are not liable for the materials you provide as it pertains to license or trademark issues and you represent to isuremedia that all materials provided do not infringe on the intellectual property rights of third parties.' },
    ],
  },
  {
    title: 'Indemnification',
    blocks: [
      { type: 'p', text: 'You the agency and your agency clients agree to indemnify, defend, and hold harmless isuremedia and its affiliates, staff, contractors, officers, members, managers, agents, successors and assigns (the “Indemnified Parties”) from and against all claims, demands, liabilities, damages, any third-party claims based on accessibility violations, and costs including, without limitation, its reasonable attorneys’ fees, arising out of or relating to (i) your breach of any of the terms of this Agreement, (ii) your use of the services provided pursuant to the Site, and (iii) infringement of third party’s intellectual property rights or other proprietary rights.' },
    ],
  },
  {
    title: 'Limitation of Liability',
    blocks: [
      { type: 'p', text: 'To the extent permitted by applicable law, Isuremedia, its affiliates, employees, contractors, agents, and representatives shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages, including but not limited to:' },
      { type: 'ul', items: [
        'Loss of profits, revenue, or business opportunities;',
        'Loss of data, business interruption, or other intangible losses;',
        'Costs of substitute goods or services;',
        'Any claims, damages, or disputes arising from delays, errors, or omissions in the Services provided.',
      ] },
      { type: 'p', text: 'Isuremedia’s total liability to you for all claims arising under or related to these Terms, whether in contract, tort, or otherwise, shall not exceed the total amount paid by you to Isuremedia in the 1 (one) month preceding the event giving rise to the claim.' },
      { type: 'p', text: 'We disclaims all liability for the actions, functionality, or inaccessibility of third-party tools, software, or content utilized as part of our Services. You agree that such tools are used at your sole risk and discretion.' },
      { type: 'p', text: 'Isuremedia shall not be liable for any failure or delay in performing its obligations due to events beyond its reasonable control, including but not limited to acts of God, natural disasters, cyberattacks, strikes, governmental actions, or technical failures.' },
      { type: 'p', text: 'Nothing in this clause shall exclude or limit liability for' },
      { type: 'ul', items: [
        'Fraud or willful misconduct;',
        'Death or personal injury caused by negligence;',
        'Any liability that cannot be excluded or limited by law.',
      ] },
      { type: 'p', text: 'By using the Services, you agree that these limitations are reasonable and reflect the allocation of risk between the parties, taking into account the nature and cost of the Services.' },
    ],
  },
  {
    title: 'Non-Solicitation of Personnel',
    blocks: [
      { type: 'p', text: 'You agree not to directly or indirectly solicit, hire, or attempt to establish any employment, contractual, or other business relationship with any Isuremedia employee, contractor, or personnel assigned to your projects or involved in the performance of Services during the term of your engagement with Isuremedia and for a period of 24 months following the termination or completion of our Services.' },
      { type: 'p', text: 'This prohibition applies to:' },
      { type: 'ul', items: [
        'Engaging in direct communication with Isuremedia personnel for the purpose of circumventing Isuremedia to secure services or reduce costs;',
        'Offering payment, employment, or business opportunities to Isuremedia personnel outside the scope of their work for Isuremedia; and',
        'Encouraging Isuremedia personnel to leave their engagement or employment with Isuremedia for any reason.',
      ] },
      { type: 'p', text: 'In the event of a breach of this clause:' },
      { type: 'ul', items: [
        'Isuremedia reserves the right to immediately terminate your Services without refund;',
        'You agree to pay Isuremedia liquidated damages for each breach, reflecting the cost of hiring, training, and loss incurred by Isuremedia; and',
        'Isuremedia may seek additional remedies under applicable law, including injunctive relief.',
      ] },
      { type: 'p', text: 'You acknowledge that this restriction is reasonable, necessary to protect Isuremedia’s legitimate business interests, and a condition of your engagement with Isuremedia.' },
    ],
  },
  {
    title: 'Fees, Refunds and No-risk Purchase Guarantee',
    blocks: [
      { type: 'p', text: 'You agree to pay the fees, in such amount and for such billing frequency as specified during registration, in full prior to any obligation of isuremedia to perform under this Agreement. You further agree that, upon registering for the services through the Site and support system, you authorize isuremedia to charge your method of payment (e.g. credit card) for the fee on each anniversary of your registration date, based upon your billing frequency (e.g. monthly, quarterly, annually, one-time). Payment of the fees shall be in such amounts and at such times as set forth by isuremedia through information provided to you and as authorized through the sign-up and registration process. Your account and access to the services provided via the Site and support system may be suspended in the event of non-payment of applicable fees. You represent and warrant to isuremedia that such payment information is accurate and that you are authorized to use the payment instrument. You will promptly update your account information with any changes (for example, a change in your billing address or credit card expiration date) that may occur.' },
      { type: 'p', text: 'You may request a full refund within the 14-day risk-free trial of a purchase of any new subscription plan providing you give geniune evidence of trying the service and showing how it’s no longer a fit. Beyond the 14-day window there are no refunds for partial subscription plans or completed work under custom proposals under any circumstance, including unused time on a plan. Promotions, upgrades, and adjustments to existing plans are non-refundable. You, the client are responsible to use isuremedia after a set-up contract is finalised, and during the period of monthly plans.' },
      { type: 'p', text: 'After the 14-day trial you may cancel your subscription with isuremedia with a minimum of 7 days of written notice before the next billing cycle, otherwise you will be billed for the following cycle. Upon cancellation, you will continue to have access to the isuremedia services through the end of your paid billing term.' },
      { type: 'p', text: 'Isuremedia may change its fees by posting the changes on the Site with 5 days’ prior notice, but with no advance notice required for temporary promotions or reductions in fees.' },
    ],
  },
  {
    title: 'No Guarantees',
    blocks: [
      { type: 'p', text: 'You agree that the Service does not make any guarantees about the results of having used the Service, taking any action, whether recommended on this Website or by the service or not. You as the agency are responsible and expected to review any task outputs and deliverables for your agency and any outputs or deliverables provided for your clients provided to you by isuremedia. Upon purchasing a service plan you agree to, and understand, that any errors or faults that occur in any outputs or deliverables is your responsibility and the responsibilty of your client.' },
      { type: 'p', text: 'The Service provides educational and informational resources that are intended to help users of this website succeed in their online business and otherwise. You nevertheless recognize that your ultimate success or failure will be the result of your own efforts, your particular situation, and innumerable other circumstances beyond the control and/or knowledge of the Service. You also recognize that prior results do not guarantee a similar outcome. Thus, the results obtained by others – whether customers of the Service or otherwise – applying the principles set out in this Website are no guarantee that you or any other person or entity will be able to obtain similar results.' },
    ],
  },
  {
    title: 'Applicable Law',
    blocks: [
      { type: 'p', text: 'By visiting this website, you agree that the laws of India, without regard to principles of conflict of laws, will govern these terms and conditions, or any dispute of any sort that might come between isuremedia, it’s staff, contractors and you, or its business partners and associates.' },
    ],
  },
  {
    title: 'Disputes',
    blocks: [
      { type: 'p', text: 'Any dispute related in any way to your visit to this website or to products you purchase from us shall be arbitrated by state or federal court of India and you consent to the exclusive jurisdiction and venue of such courts.' },
    ],
  },
  {
    title: 'Comments, Reviews, and Emails',
    blocks: [
      { type: 'p', text: 'Visitors may post content as long as it is not obscene, illegal, defamatory, threatening, infringing of intellectual property rights, invasive of privacy or injurious in any other way to third parties. Content has to be free of software viruses, political campaign, and commercial solicitation. We reserve all rights (but not the obligation) to remove and/or edit such content. When you post your content, you grant Isuremedia a non-exclusive, royalty-free and irrevocable right to use, reproduce, publish, modify such content throughout the world in any media.' },
    ],
  },
  {
    title: 'Affiliate Links',
    blocks: [
      { type: 'p', text: 'From time to time, the Service participates in affiliate marketing and may allow affiliate links to be included on some of our pages and blog articles. This means that we may earn a commission if/when you click on or make purchases via affiliate links. As a policy, the Service will only affiliate with products, services, coaches, consultants, and other experts that we believe will provide value to our customers and followers. The Service will inform you when one of the links constitutes an affiliate link. You recognize that it remains your personal responsibility to investigate whether any affiliate offers are right for your business and will benefit you. You will not rely on any recommendation, reference, or information provided by the Service but will instead conduct your own investigation and will rely upon your investigation to decide whether to purchase the affiliate product or service.' },
    ],
  },
  {
    title: 'License and Site Access',
    blocks: [
      { type: 'p', text: 'We grant you a limited license to access and make personal use of this website. You are not allowed to download or modify it. This may be done only with written consent from us.' },
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms and Conditions"
      lastUpdated="Last updated: August 2026"
      intro="Please read these terms and conditions carefully before using the isuremedia website and services operated by isuremedia."
      sections={SECTIONS}
    />
  );
}
