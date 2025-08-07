"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
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
    <section className="w-full h-[500px] flex flex-col items-center mt-[60px] md:mt-[100px] bg-[rgb(211,231,255)]">
      <h1 className="text-[24px] sm:text-[28px] md:text-[32px] font-semibold pt-[30px]">Trendy Items</h1>
          <Carousel
              plugins={[
                Autoplay({
                  delay: 5000,
              }),
            ]}
            opts={{
              align: "start",
              slidesToScroll: 1,
            }}
      className="w-full px-[40px] sm:px-[80px] pt-[70px] md:pt-[104px] mx-auto max-w-[1280px]"
    >
      <div className="relative">
        <CarouselPrevious className="absolute top-[-50px] left-0 lg:left-[90%] hidden md:flex" />
        <CarouselNext className="absolute top-[-50px] right-0 sm:right-5 hidden md:flex" />
      </div>
      <CarouselContent >
        {trendingProductsData.map((item) => (
          <CarouselItem key={item.id} className="basis-[100%] sm:basis-1/2 lg:basis-1/4 cursor-grab md:cursor-default">
            <div className=" flex justify-center items-center">
              <Card className="w-[250px] h-[200px] flex justify-center my-2 rounded-[5px] bg-white">
                <CardContent className="flex aspect-square items-center justify-center group">
                  <Image src={item.image} alt={item.alt} width={150} height={150} className="group-hover:scale-105 transition-all" />
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
