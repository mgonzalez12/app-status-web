import Image from "next/image";
import { CheckCircle, XOctagon, AlertTriangle, Clock, ShieldCheck } from "lucide-react"
import Link from 'next/link'

export default function Home() {
  return (
   <>

    <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center mb-8">Bienvenidos a la App de Status</h1>
      <p className="text-lg text-center mb-6 text-muted-foreground">Seleccione el estado de la transacción para más detalles:</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
        
        {/* Success */}
        <Link href="/status/success" className="group block p-6 bg-white shadow-lg rounded-lg text-center hover:shadow-2xl transition">
          <div className="flex flex-col items-center">
            <CheckCircle className="w-12 h-12 text-green-500 group-hover:text-green-600 mb-4" />
            <h2 className="text-2xl font-semibold">Success</h2>
          </div>
        </Link>

        {/* Error */}
        <Link href="/status/error" className="group block p-6 bg-white shadow-lg rounded-lg text-center hover:shadow-2xl transition">
          <div className="flex flex-col items-center">
            <AlertTriangle className="w-12 h-12 text-red-500 group-hover:text-red-600 mb-4" />
            <h2 className="text-2xl font-semibold">Error</h2>
          </div>
        </Link>

        {/* Cancelled */}
        <Link href="/status/cancelled" className="group block p-6 bg-white shadow-lg rounded-lg text-center hover:shadow-2xl transition">
          <div className="flex flex-col items-center">
            <XOctagon className="w-12 h-12 text-orange-500 group-hover:text-orange-600 mb-4" />
            <h2 className="text-2xl font-semibold">Cancelled</h2>
          </div>
        </Link>

        {/* Awaiting */}
        <Link href="/status/awaiting" className="group block p-6 bg-white shadow-lg rounded-lg text-center hover:shadow-2xl transition">
          <div className="flex flex-col items-center">
            <Clock className="w-12 h-12 text-yellow-500 group-hover:text-yellow-600 mb-4" />
            <h2 className="text-2xl font-semibold">Awaiting</h2>
          </div>
        </Link>

        {/* Preauth */}
        <Link href="/status/preauth" className="group block p-6 bg-white shadow-lg rounded-lg text-center hover:shadow-2xl transition">
          <div className="flex flex-col items-center">
            <ShieldCheck className="w-12 h-12 text-blue-500 group-hover:text-blue-600 mb-4" />
            <h2 className="text-2xl font-semibold">Preauth</h2>
          </div>
        </Link>

      </div>
    </div>
  
   </>
  );
}
