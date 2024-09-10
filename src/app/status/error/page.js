import { CheckCircle } from "lucide-react"
import { XCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function error({ errorCode = "ERR-001",
  errorMessage = "Ha ocurrido un error en la transacción.",
  date = new Date().toLocaleString() 
} = {}) {
  return (
    <div className="p-4 bg-gray-100 min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="flex flex-col items-center space-y-2">
          <XCircle className="w-16 h-16 text-red-500" />
          <CardTitle className="text-2xl font-bold text-center text-red-700">Error en la Transacción</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center text-muted-foreground">
            Lo sentimos, no se pudo procesar su transacción. Por favor, inténtelo de nuevo más tarde.
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">Código de Error:</span>
              <span>ERR-001</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Fecha:</span>
              <span>{new Date().toLocaleString()}</span>
            </div>
          </div>
          <div className="mt-6 text-center">
            <a href="#" className="text-blue-600 hover:underline">Intentar nuevamente</a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default error