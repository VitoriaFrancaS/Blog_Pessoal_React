export default function Grid() {
  return (
    <div className="grid grid-cols-12"> 
    <div className="col-span-1 bg-red-300 h-screen" >Servidores</div>

    <div className="col-span-3  bg-green-300 h-screen">canais</div>

    <div className="col-span-6  bg-purple-300 h-screen">feed de mensagens</div>

    <div className="col-span-2  bg-blue-300 h-screen">mebros</div>

    </div>
  )
}

