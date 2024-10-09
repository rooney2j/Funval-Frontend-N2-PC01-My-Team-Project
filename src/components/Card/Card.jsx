export default function Card() {
  return (
    <figure className="relative w-52 overflow-hidden">
      {/* Imagen del perfil */}
      <img className="w-48 h-full object-cover" src="photos/photo1.png" alt="Bill Mahoney" />

      {/* Título del cargo rotado */}
      <span className="absolute w-36 -right-1 top-36 transform rotate-90 origin-top-right text-sm font-semibold uppercase text-gray-500">
        Product Owner
      </span>

      {/* Nombre debajo de la imagen */}
      <figcaption className="pt-2">
        <p className="text-xl font-bold">Bill Mahoney</p>
      </figcaption>
    </figure>
  )
}
