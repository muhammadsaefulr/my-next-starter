import { Navbar } from "@/components/components/Navbar"
import { auth } from "./lib/auth"

export default async function Page() {
  const session = await auth()

  return (
    <main>
      <Navbar />
      <div className="flex justify-center">

        {session?.user ?
          <div className="block">
            <span>Halo, {session?.user?.name} </span>
            </div>
          :
          <p> Null</p>
        }

      </div>
    </main>
  )
}