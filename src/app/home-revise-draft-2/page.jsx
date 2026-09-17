'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HomeReviseDraft2() {
  const router = useRouter();
  useEffect(() => { router.replace('/'); }, [router]);
  return null;
}
