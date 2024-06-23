import Navbar from "./components/navbar"
import Hilighte from "./components/hilighte"
import Recommend from "./components/recommend"
import Presentation from "./components/Presentation"

export default function App() {
  return (
    <div>
      <Navbar />
      <Hilighte />
      <Recommend />
      <Presentation />

      <h1 className="text-3xl font-bold underline text-red-600" >
        Hello world!
      </h1>
    </div>
  )
}