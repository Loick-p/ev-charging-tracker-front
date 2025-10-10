import { createBrowserRouter } from 'react-router'

// Layouts
import { DashboardLayout } from '@/components/layout/DashboardLayout'

// Pages
import { Dashboard } from '@/pages/Dashboard'
import { Cars } from "@/pages/Cars.tsx"
import { Stations } from "@/pages/Stations.tsx"
import { Chargings } from "@/pages/Chargings.tsx"

export const router = createBrowserRouter([
    {
        path: '',
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
            {
                path: 'cars',
                element: <Cars />,
            },
            {
                path: 'stations',
                element: <Stations />,
            },
            {
                path: 'chargings',
                element: <Chargings />,
            },
        ],
    },
])