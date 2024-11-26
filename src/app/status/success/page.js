import { CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function success({ date = new Date().toLocaleString() } = {}) {
    return (
      <Card className="w-full max-w-md mx-auto mt-60">
        <CardHeader className="flex flex-col items-center space-y-2">
          <CheckCircle className="w-16 h-16 text-green-500" />
          <CardTitle className="text-2xl font-bold text-center">¡Transacción Exitosa!</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center text-muted-foreground">
            Su transacción se ha completado con éxito.
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Gracias</span>
            </div>
          
          </div>
        </CardContent>
      </Card>
    )
}

export default success