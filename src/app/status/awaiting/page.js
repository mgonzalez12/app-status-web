import { Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AwaitingTransactionPreview({ date = new Date() } = {}) {
    const dateObj = typeof date === "string" ? new Date(date) : date;
    const formattedDate = `${dateObj.toLocaleDateString('es-ES')} ${dateObj.toLocaleTimeString('es-ES')}`;
  
  return (
    <div className="p-4 bg-gray-100 min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="flex flex-col items-center space-y-2">
          <Clock className="w-16 h-16 text-yellow-500" />
          <CardTitle className="text-2xl font-bold text-center text-yellow-700">Esperando Transacción</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center text-muted-foreground">
            Su transacción está siendo procesada. Por favor, espere un momento.
          </div>
          <div className="flex justify-center">
            <div className="w-8 h-8 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
          <div className="space-y-2">
           
            <div className="flex justify-between">
              <span className="font-medium">Iniciado:</span>
              <span>{formattedDate}</span>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">Este proceso puede tardar unos minutos. No cierre esta ventana.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


  