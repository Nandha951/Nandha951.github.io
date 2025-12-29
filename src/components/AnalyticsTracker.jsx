import { useEffect } from 'react';
import posthog from 'posthog-js';

const AnalyticsTracker = () => {
    useEffect(() => {
        // Track every page visit with enriched properties
        const captureVisit = () => {
            posthog.capture('portfolio_visit', {
                page: window.location.pathname,
                referrer: document.referrer || 'direct',
                screen_size: `${window.innerWidth}x${window.innerHeight}`,
                user_agent: navigator.userAgent,
                language: navigator.language,
                timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            });
        };

        // Capture initial load
        captureVisit();

        // Optional: If you had client-side routing (react-router), you'd listen to route changes here.
        // Since we currently have a single-page scroll layout, we mostly just care about the initial land.

        return () => {
            // Clean up if necessary
        };
    }, []);

    return null;
};

export default AnalyticsTracker;
