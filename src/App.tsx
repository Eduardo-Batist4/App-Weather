import { InfoWather } from "./components/InfoWather"
import { SearchWather } from "./components/SearchWather"

function App() {
  return (
    <>
    <main className="wather-container"> 
      <SearchWather />
      <InfoWather />
    </main>
    </>
  )
}

export default App
