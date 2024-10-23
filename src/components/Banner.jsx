import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import { default as But } from './buttons/Buttons'
import Autoplay from "embla-carousel-autoplay"


const Banner = (props) => {

    return (
        <div className="flex flex-col " id={props.id}>
            <div className="flex flex-col order-2 justify-center items-center md:items-start ">
                <h4 className="c-text-extra-small-small bold mb-[10px] text-primary-1 md:text-warning ">Melhores ofertas personalizadas</h4>
                <h2 className="text-dark-gray font-sans text-[40px] font-extrabold leading-[50px] tracking-[1px] text-center mb-[20px] px-[31px] ">Queima de stoque Nike 🔥</h2>
                <p className={`text-dark-gray-2 c-text-extra-small text-center px-[25px] mb-[30px] ${window.innerWidth <= 768 ? "c-text-extra-small" : "c-text-medium"}`}>{props.textinho}</p>
                <But buttonType="primary" label="Clique Aqui" className="c-text-small bold w-[calc(100%-20px)] mx-[20px] " />
            </div>
            <img className="order-1 mt-[12px] md:w-[733px] md:absolute md:mt-0 md:top-10 md:right-[91px] " src="White-Sneakers.svg" />
            {/* <img className="pirilampos" src="Ornament 11.svg" /> */}
        </div>
    );
}

export default function CarouselDemo() {
    return (
        <Carousel plugins={[
            // Autoplay({
            //     delay: 3000,
            //     stopOnInteraction: false,
            // })
        ]} className="w-[375px] h-[662px] md:w-full md:h-[681px] ">
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className={" "}>
                        <div className=" ">
                            <Card className="bg-light-gray-3 border-none">
                                <CardContent className="flex h-[662px] md:h-[681px] justify-center p-0 ">
                                    <Banner textinho="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam earum est quidem quasi magnam" ></Banner>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            {/* <CarouselPrevious className="w-1 bg-primary-1 absolute left-[6px]" />
            <CarouselNext className="w-1 bg-primary-1 absolute right-[6px]" /> */}
        </Carousel>
    )
}












