import { Outlet } from 'react-router'

import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AppSidebar } from "@/components/layout/AppSidebar.tsx"

export const DashboardLayout = () => {
    return (
        <>
            <SidebarProvider>
                <AppSidebar />

                <SidebarInset>
                    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                        <div className="flex w-full items-center gap-1">
                            <SidebarTrigger className="-ml-1" />
                            <Separator
                                orientation="vertical"
                                className="mx-2 data-[orientation=vertical]:h-4"
                            />
                            <h1 className="text-base font-medium">Page title</h1>

                            <div className="ml-auto flex items-center gap-2">
                                <Avatar>
                                    <AvatarImage src="" />
                                    <AvatarFallback className="bg-primary text-white">JD</AvatarFallback>
                                </Avatar>
                                <span>John Doe</span>
                            </div>
                        </div>
                    </header>

                    <div className="px-6 py-4">
                        <Outlet />
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </>
    )
}