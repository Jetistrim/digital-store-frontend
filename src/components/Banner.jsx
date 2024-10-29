import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem
} from "@/components/ui/carousel"
import { default as But } from './buttons/Buttons'
import Autoplay from "embla-carousel-autoplay"
import { useEffect, useState } from "react"


const Banner = (props) => {
    return (
        <div className="flex flex-col md:relative md:pt-[124px] md:pb-[100px] md:pl-[100px] md:w-[100%] md:mx-auto" id={props.id}>
            <div className="flex flex-col order-2 justify-center items-center md:items-start md:w-[510px]">
                <h4 className="c-text-extra-small-small bold mb-[10px] text-primary-1 md:c-text-small md:mb-[20px] md:text-warning">Melhores ofertas personalizadas</h4>
                <h2 className="text-dark-gray font-sans text-[40px] font-extrabold leading-[50px] tracking-[1px] text-center mb-[20px] px-[31px] md:px-0 md:text-left md:text-[64px] md:leading-[66px]">Queima de stoque Nike 🔥</h2>
                <p className={`text-dark-gray-2 c-text-extra-small text-center px-[25px] mb-[30px] md:px-0 md:mb-[40px] md:text-left md:c-text-medium `}>{props.textinho}</p>
                <But buttonType="primary" label="Clique Aqui" className="c-text-small bold w-[calc(100%-20px)] mx-[20px] md:w-[220px] md:h-[48px] md:mx-0" />
            </div>
            <img className="order-1 mt-[12px] md:w-[733px] md:absolute md:mt-0 md:top-10 md:right-[91px] md:max-w-[50%]" src="White-Sneakers.svg" />
            {/* <img className="pirilampos" src="Ornament 11.svg" /> */}
        </div>
    );
}

export default function CarouselDemo() {

    // Daqui até o return é só pra fazer o banner se mexer e o pingo rosa mudar.
    // Tá fazendo requisições demais pro meu gosto.
    const [api, setApi] = useState()
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        if (!api) {
            return
        }

        setCurrent(api.selectedScrollSnap())

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])

    const handleDotClick = (index) => {
        if (api) {
            api.scrollTo(index)
        }
    }

    return (
        <div className="relative flex flex-col items-center md:w-[100%] ">
            <Carousel
                setApi={setApi}
                plugins={[
                    Autoplay({
                        delay: 4000,
                        stopOnInteraction: false,
                    })
                ]}
                className="w-[375px] h-[auto] md:w-full"
            >
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <Card className="bg-light-gray-3 border-none">
                                <CardContent className="flex h-[auto] justify-center p-0">
                                    <Banner textinho={`Lorem ipsum dolor sit amet consectetur adipisicing elit. hjasvjabsjkgavsiobajkvsajbla`} />
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            <ul className="flex w-fit gap-[10px] justify-center my-[40px]">
                {Array.from({ length: 5 }).map((_, index) => (
                    <li
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`h-[12px] w-[12px] rounded-lg duration-300 cursor-pointer ${index === current ? 'bg-primary-1' : 'bg-light-gray-2'
                            }`}
                    />
                ))}
            </ul>
        </div>
    )
}