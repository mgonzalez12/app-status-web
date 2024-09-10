import { XOctagon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CancelledTransactionPreview({ date = new Date() } = {}) {
    const dateObj = typeof date === "string" ? new Date(date) : date;
    const formattedDate = `${dateObj.toLocaleDateString('es-ES')} ${dateObj.toLocaleTimeString('es-ES')}`;
   return (
    <div className="p-4 bg-gray-100 min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="flex flex-col items-center space-y-2">
          <XOctagon className="w-16 h-16 text-orange-500" />
          <CardTitle className="text-2xl font-bold text-center text-orange-700">Transacción Cancelada</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center text-muted-foreground">
            La transacción ha sido cancelada. Si esto fue un error, por favor intente nuevamente.
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">Fecha de Cancelación:</span>
              <span>{formattedDate}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Motivo:</span>
              <span>Cancelado por el usuario</span>
            </div>
          </div>
       
        </CardContent>
      </Card>
    </div>
  )
}