import { useEffect } from 'react';
import { useRouter, useRootNavigationState } from 'expo-router';

export default function Index() {
  const router = useRouter();
  const navReady = useRootNavigationState();

  useEffect(() => {
    if (!navReady?.key) return; // 라우터 준비될 때까지 기다림
    router.replace('/home');
  }, [navReady]);

  return null; // 로딩 중 화면도 가능
}