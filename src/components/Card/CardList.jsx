import { data } from "../../data"
import "./Card.css"

export default function CardList() {
    const figureStyle = 'relative w-36 overflow-hidden mx-auto';

    const shouldTranslate = (index) => {
        // Aplica la clase translate-y-14 si el índice es parte de la columna 1 o 3
        return index % 3 === 0 || (index + 1) % 3 === 0;
    };
    
    return (
        <div className="mt-10 px-6 pb-24 mx-auto min-w-[354px] sm:max-w-[500px] md:max-w-[1000px] grid grid-cols-2 gap-y-14 sm:grid-cols-3 sm:gap-x-0">
            {data.map((item, index) => (
                <figure key={index} className={`${figureStyle} ${shouldTranslate(index) ? '' : 'transform translate-y-14'}`}>
                    <img className="w-32 object-cover" src={item.img} alt={item.name} />

                    <span className="item-job absolute w-28 right-0 top-28 transform rotate-90 origin-top-right font-medium uppercase text-gray-500 tracking-tighter">
                        {item.job}
                    </span>

                    <figcaption className="pt-2">
                        <p className="text-xs font-bold">{item.name}</p>
                    </figcaption>
                </figure>
            ))}
        </div>
    )
}
