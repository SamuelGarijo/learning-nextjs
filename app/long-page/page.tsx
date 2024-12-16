import PopupForm from '@/components/PopupForm'

export default function LongPage() {
  return (
    <div className="min-h-[700vh] p-8">
      <h1 className="text-4xl font-bold mb-4">Página Larga para Demostración de Scroll</h1>
      <p className="mb-4">Esta página tiene una altura mínima de 700vh para permitir suficiente scroll.</p>
      <div className="space-y-8">
        {Array.from({ length: 20 }).map((_, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">Sección {index + 1}</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        ))}
      </div>
      <PopupForm />
    </div>
  )
}



