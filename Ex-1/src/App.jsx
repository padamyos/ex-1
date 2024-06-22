import Navbar from "./components/navbar"
import Hilighte from "./components/hilighte"

export default function App() {
  return (
    <div>
      <Navbar />
      <Hilighte />

      <h1 className="text-3xl font-bold underline text-red-600" >
        Hello world!
      </h1>
    </div>
  )
}