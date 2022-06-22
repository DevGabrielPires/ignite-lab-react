import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"
import { Header } from "./components/Header"
import { Lesson } from "./components/Lesson"
import { Player } from "./components/Player"
import { Sidebar } from "./components/Sidebar"
import { client } from "./lib/apollo"

function App() {


  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        <Player />
        <Sidebar />
      </main>
    </div>
  )
}

export default App
