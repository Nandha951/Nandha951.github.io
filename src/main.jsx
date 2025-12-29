import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

// Initialize PostHog
const posthogKey = import.meta.env.VITE_PUBLIC_POSTHOG_KEY
const posthogHost = import.meta.env.VITE_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com'

if (posthogKey) {
    posthog.init(posthogKey, {
        api_host: posthogHost,
        // Disable automatic pageview capture, as we handle it manually in AnalyticsTracker
        capture_pageview: false,
    })
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <PostHogProvider client={posthog}>
            <App />
        </PostHogProvider>
    </React.StrictMode>,
)
