import Link from 'next/link';

const EXTERNAL_HREF = /^(https?:|mailto:|tel:|\/\/)/i;

export default function SmartLink({ href, children, ...props }) {
  if (typeof href !== 'string' || EXTERNAL_HREF.test(href)) {
    return <a href={href} {...props}>{children}</a>;
  }
  return <Link href={href} {...props}>{children}</Link>;
}
