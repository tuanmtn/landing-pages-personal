import { createFileRoute } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"

export const Route = createFileRoute("/")({ component: App })

function App() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-6 gap-8 bg-gray-50 min-h-[60vh]">
      <div className="flex flex-col items-center gap-6 max-w-2xl text-center">
        <img 
          src="/logo_dark.png" 
          alt="Vietnam Food Logo" 
          className="h-32 w-auto animate-in fade-in zoom-in duration-1000"
        />
        <h1 className="text-4xl font-bold text-[#113f7c]">
          SUSTAINING OUR FUTURE
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Welcome to Vietnam Food (VNF). We specialize in sustainable shrimp by-products processing, providing high-value nutrition for BioPolymers, Food Ingredients, and BioNutrients.
        </p>
        <div className="flex gap-4 mt-4">
          <Button className="bg-[#1f5da0] hover:bg-[#113f7c] px-8 py-6 text-lg rounded-full shadow-lg transition-all hover:scale-105 active:scale-95">
            Discover Our Products
          </Button>
          <Button variant="outline" className="px-8 py-6 text-lg rounded-full border-2 border-[#1f5da0] text-[#1f5da0] hover:bg-[#1f5da0] hover:text-white transition-all shadow-md">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  )
}
