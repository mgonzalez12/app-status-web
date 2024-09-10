import { ShieldCheck } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PreAuthTransactionPreview({ date = new Date() } = {}) {
    const dateObj = typeof date === "string" ? new Date(date) : date;
    const formattedDate = `${dateObj.toLocaleDateString('es-ES')} ${dateObj.toLocaleTimeString('es-ES')}`;

    return (
        <div className="p-4 bg-gray-100 min-h-screen flex items-center justify-center">
            <Card className="w-full max-w-md mx-auto">
                <CardHeader className="flex flex-col items-center space-y-2">
                    <ShieldCheck className="w-16 h-16 text-blue-500" />
                    <CardTitle className="text-2xl font-bold text-center text-blue-700">Transacción en Preautorización</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="text-center text-muted-foreground">
                        Su transacción ha sido preautorizada. Esperando confirmación final.
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <span className="font-medium">Fecha de Preautorización:</span>
                            <span>{formattedDate}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium">Estado:</span>
                            <span>En espera de confirmación</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
