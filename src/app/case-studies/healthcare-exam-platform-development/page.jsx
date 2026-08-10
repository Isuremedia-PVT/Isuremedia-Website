'use client';

import CaseStudyDetail from '@/components/CaseStudyDetail';

export default function MentaraHealthCaseStudyPage() {
  return (
    <CaseStudyDetail data={{
      client: 'Mentara Health',
      leadIn: 'Exam content was managed with no clear hierarchy — no way to organise by certification type, section, or case scenario.',
      hook: 'Now a five-level content structure mirrors exactly how healthcare professionals are trained and assessed.',
      intro: <>Mentara Health operates a healthcare certification and training platform where administrators create, manage, and publish structured exam content. The previous system had <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>no clear hierarchy between categories, sections, case studies, and questions</span>, making progressive, case-based assessment difficult to build and maintain.</>,
      meta: {
        industry: 'Healthcare Education',
        location: 'International',
        duration: 'Platform Development Engagement',
        services: 'Custom Platform & LMS Development',
      },
      heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80',
      resultHeadline: [
        { text: 'A five-level content hierarchy — ' },
        { text: 'Category, Exam, Section, Case Study, and Question — now mirrors real certification program design', highlight: true },
        { text: ', with clone functionality at every level.' },
      ],
      stats: [
        { val: '5-Level', label: 'Content Hierarchy', sub: 'category to question' },
        { val: '3', label: 'Progressive Visit Stages', sub: 'per case study' },
        { val: 'Clone-Enabled', label: 'Every Level', sub: 'exam, section & question' },
        { val: '2', label: 'Question Types', sub: 'single & multiple choice' },
      ],
      quote: '[Client quote pending — replace with Mentara Health\'s actual testimonial]',
      quoteBy: 'Mentara Health',
      quoteRole: 'Platform Team',
      problemHeading: 'A basic platform with no structured workflow for managing exam content.',
      problemIntro: 'Although a basic platform existed, there was no way to organise exam content into a clear hierarchy, no guided workflow for admins, and no way to build real-world, scenario-based assessments.',
      problems: [
        { title: 'No content hierarchy', body: 'Exams lacked a structured parent-child relationship between categories, sections, case studies, and questions, making content difficult to organise or navigate.' },
        { title: 'Admin usability gap', body: 'Content creators had no guided workflow, making exam setup inconsistent and error-prone across different certification programs.' },
        { title: 'No scenario-based learning', body: 'Existing question banks lacked real-world clinical case studies with progressive visit stages, limiting how realistically learners could be assessed.' },
        { title: 'No cloning or reuse', body: 'Administrators had to recreate similar exams entirely from scratch, with no way to clone and adapt existing content for new certification programs.' },
      ],
      overviewTags: [
        { label: 'Content Hierarchy', tone: 'blue' },
        { label: 'Admin Portal', tone: 'blue' },
        { label: 'Custom LMS', tone: 'amber' },
      ],
      overviewHeading: 'What was needed.',
      overviewBody: [
        'Mentara Health needed a robust content management flow that mirrored how healthcare professionals actually learn and are assessed — through progressive, case-based evaluation, with support for multiple certification programs and content reuse through cloning.',
        'Isuremedia designed and implemented a fully structured exam content management system introducing a five-level hierarchy — Category, Exam, Section, Case Study, and Questions — with Visits nested inside each case study.',
      ],
      overviewImage: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=700&q=80',
      didHeading: 'Built as a five-level hierarchy that mirrors real certification program design.',
      didIntro: 'Administrators can now create or clone content at every level of the hierarchy, dramatically reducing the time spent on exam setup for new certification programs.',
      process: [
        { label: 'Discovery', title: 'Workflow analysis & hierarchy design', body: 'Reviewed the existing platform to identify gaps in content organisation, admin usability, and learner experience, then mapped out the Category → Exam → Section → Case Study → Visit → Question data structure with correct parent-child relationships at every level.' },
        { label: 'Build', title: 'Guided admin portal & case study builder', body: 'Built guided creation forms for every level of the hierarchy with clone functionality and inline validation, plus a visit-stage builder inside case studies with a prominent change-impact warning for admins editing live content.' },
        { label: 'Launch', title: 'Question engine, testing & deployment', body: 'Built the question builder with group assignment, answer options, and correct-answer selection, then ran end-to-end testing across content creation, cloning, question linking, and learner-facing exam delivery.' },
      ],
      impactHeading: 'What is now possible that was not before.',
      impactIntro: 'The project transformed a basic exam platform into a structured, scalable content management system built around how certification programs are actually designed.',
      impactCards: [
        { label: 'Structured Hierarchy', title: 'Five-level content structure', body: 'Category, Exam, Section, Case Study, and Question now mirror real healthcare certification program design.' },
        { label: 'Faster Exam Creation', title: 'Clone functionality at every level', body: 'Cloning exams, sections, and questions dramatically reduces admin time spent building similar certification programs.' },
        { label: 'Realistic Assessment', title: 'Case-based, progressive visit stages', body: 'Learners now experience how a clinical scenario evolves across up to three visit stages before answering related questions.' },
        { label: 'Data Integrity Protection', title: 'Admin change-impact warnings', body: 'Editing a case study now triggers a prominent warning, preventing accidental updates that would affect all linked questions.' },
      ],
      nextHeading: 'Already planned. Already architected.',
      nextIntro: 'The content hierarchy built for Mentara Health opens up further platform capability that needs no re-engineering to unlock.',
      nextCards: [
        { title: 'Adaptive question difficulty', body: 'Performance data already captured per question and per visit stage can be used to introduce adaptive difficulty scaling in future certification cycles.' },
        { title: 'Learner analytics dashboard', body: 'The structured hierarchy already captures enough data to power a learner-facing progress and analytics dashboard without further architecture changes.' },
      ],
      ctaEyebrow: 'Build With Isuremedia',
      ctaHeading: [
        { text: 'Need a platform that matches ' },
        { text: 'exactly how your business actually works?', highlight: true },
      ],
      ctaBody: [
        { text: 'Off-the-shelf tools rarely match real operational hierarchies. If your content, workflows, or assessments need ' },
        { text: 'custom structure built around how your team actually works', highlight: true },
        { text: ', that is exactly what we build. Talk to us today.' },
      ],
      ctaPrimaryLabel: 'Get My Free Platform Consultation',
      ctaPrimaryHref: '/services/websites-funnels',
      ctaSecondaryLabel: 'Talk to Our Team',
      ctaSecondaryHref: '/contact',
      ctaImage: '/result_footer/Api.webp',
    }} />
  );
}
