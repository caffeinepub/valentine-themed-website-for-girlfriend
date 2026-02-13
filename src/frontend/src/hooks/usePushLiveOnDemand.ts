import { useEffect, useRef } from 'react';
import { useActor } from './useActor';

/**
 * Hook that triggers the platform's Push Live flow when explicitly opted-in via query parameter.
 * Checks for ?pushLive=true in the URL and calls the backend pushLive() method once.
 * Logs success/failure to the developer console.
 */
export function usePushLiveOnDemand() {
  const { actor } = useActor();
  const hasTriggered = useRef(false);

  useEffect(() => {
    // Only run once and only if actor is available
    if (!actor || hasTriggered.current) return;

    // Check for explicit opt-in trigger
    const urlParams = new URLSearchParams(window.location.search);
    const shouldPushLive = urlParams.get('pushLive') === 'true';

    if (!shouldPushLive) return;

    // Mark as triggered to prevent duplicate calls
    hasTriggered.current = true;

    // Execute push live
    (async () => {
      try {
        console.log('[Push Live] Initiating push to live...');
        await actor.pushLive();
        console.log('[Push Live] Successfully pushed to live!');
      } catch (error) {
        console.error('[Push Live] Failed to push to live:', error);
      }
    })();
  }, [actor]);
}
