
// UI
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Skeleton } from "@/components/ui/skeleton"

export const StationsTable = () => {
    return (
        <>
            <div className="overflow-hidden rounded-lg border my-4">
                <Table>
                    <TableHeader className="bg-muted">
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Output power</TableHead>
                            <TableHead>Electricity price</TableHead>
                            <TableHead></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>

                    </TableBody>
                </Table>
            </div>
        </>
    )
}