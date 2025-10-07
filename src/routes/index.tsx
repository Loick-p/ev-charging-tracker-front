import { createBrowserRouter } from 'react-router'

// Layouts
import { DashboardLayout } from '@/components/layout/DashboardLayout'

// Dashboard
import { Dashboard } from '@/pages/Dashboard'

export const router = createBrowserRouter([
    {
        path: '',
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
        ],
    },
])