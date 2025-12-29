import { useEffect } from 'react';
import { usePostHog } from 'posthog-js/react';

const AnalyticsTracker = () => {
    const posthog = usePostHog();

    useEffect(() => {
        if (posthog) {
            posthog.capture('$pageview');
        }
    }, [posthog]);

    return null;
};

export default AnalyticsTracker;
