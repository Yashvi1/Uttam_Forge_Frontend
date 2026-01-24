"use client";

// USINGGGGGGGGGGGG

import Image from "next/image";
import Link from "next/link"; 
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Product = {
    id: number;
    name: string;
    use: string;
    price: string;
    image: string;
};

const products: Product[] = [
    {
        id: 1,
        name: "Police Duty Shoe",
        use: "Daily Police Duty",
        price: "₹1500 approx.",
        image: "/shoes1.jpg",
    },
    {
        id: 2,
        name: "Combat / Field Boot",
        use: "Training & Field Operations",
        price: "₹1800 approx.",
        image: "/shoes2.jpg",
    },
    {
        id: 3,
        name: "Parade Shoe",
        use: "Ceremonial & Parade Use",
        price: "₹1700 approx.",
        image: "/main-shoe.jpg",
    },
    {
        id: 4,
        name: "Police Duty Shoe",
        use: "Daily Police Duty",
        price: "₹1500 approx.",
        image: "/shoes1.jpg",
    },
    {
        id: 5,
        name: "Combat / Field Boot",
        use: "Training & Field Operations",
        price: "₹1800 approx.",
        image: "/shoes2.jpg",
    },
    {
        id: 6,
        name: "Parade Shoe",
        use: "Ceremonial & Parade Use",
        price: "₹1700 approx.",
        image: "/main-shoe.jpg",
    },
    {
        id: 7,
        name: "Police Duty Shoe",
        use: "Daily Police Duty",
        price: "₹1500 approx.",
        image: "/shoes1.jpg",
    },
    {
        id: 8,
        name: "Combat / Field Boot",
        use: "Training & Field Operations",
        price: "₹1800 approx.",
        image: "/shoes2.jpg",
    },
    {
        id: 9,
        name: "Parade Shoe",
        use: "Ceremonial & Parade Use",
        price: "₹1700 approx.",
        image: "/main-shoe.jpg",
    },
];


export default function CatalogPage() {
    return (
        <main className="min-h-screen bg-background text-text p-6">
            <div className="max-w-7xl mx-auto">
                {/* Page Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-extrabold">Shoe Catalog</h1>
                    <p className="text-muted-foreground mt-2 mx-w-xl">Select the footwear suitable for your duty. Prices are indicative.
                        Final confirmation will be done over call.</p>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <Card key={product.id} className="shadow-md">
                            <CardContent className="p-4 flex flex-col h-full">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={300}
                                    height={200}
                                    className="rounded-md object-cover mb-4"
                                />

                                {/* Details */}
                                <h2 className="font-bold text-lg">{product.name}</h2>
                                <p className="text-sm text-muted-foreground mb-2">{product.use}</p>
                                <p className="font-semibold mb-4">{product.price}</p>

                                {/* Actions */}
                                <div className="mt-auto flex flex-col gap-2">
                                    <Link href={`/order?productId=${product.id}`}>
                                    <Button className="w-full bg-primary text-primary-foreground font-semibold">
                                        Order Individual</Button>
                                    </Link>

                                    <Link href={`/bulk-order?productId=${product.id}`}>
                                    <Button
                                    variant="outline"
                                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold">
                                        Bulk / Unit Order
                                    </Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </main>
    )
}

