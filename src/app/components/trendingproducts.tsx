import * as React from "react"
import { Card, CardContent } from "../components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel"
import { trendingProductsData } from "./data/trendingdata"
import Image from "next/image"

function Trendingproducts() {
  return (
    <section className="w-full h-[500px] flex flex-col items-center mt-[50px] mb-[100px] bg-[rgb(211,231,255)]">
      <h1 className="text-[32px] font-semibold pt-[30px]">Trendy Items</h1>
          <Carousel
      opts={{
        align: "start",
        slidesToScroll: 1,
      }}
      className="w-full px-[80px] pt-[104px]"
    >
      <div className="relative">
        <CarouselPrevious className="absolute top-[-50px] left-[92%]" />
        <CarouselNext className="absolute top-[-50px] right-5" />
      </div>
      <CarouselContent>
        {trendingProductsData.map((item) => (
          <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/4">
            <div className="pl-4">
              <Card className="w-[250px] h-[200px] flex justify-center my-2 rounded-[5px] hover:scale-105 transition-all bg-white">
                <CardContent className="flex aspect-square items-center justify-center">
                  <Image src={item.image} alt="Product Images" width={150} height={150} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
    </section>
  )
}

export default Trendingproducts
