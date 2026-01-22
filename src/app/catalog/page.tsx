"use client";

import Image from "next/image";
import Link from "next/link";
import shoes3 from "@/public/shoes3.jpg";
import shoes4 from "@/public/shoes4.jpg";    
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Shoes from "../shoes/page";

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
        image: "/shoes1.jpg",
    },
    {
        id: 3,
        name: "Parade Shoe",
        use: "Ceremonial & Parade Use",
        price: "₹1700 approx.",
        image: "/shoes1.jpg",
    },
    {
        id: 4,
        name: "Heavy Duty Boot",
        use: "Rough & Long Duty",
        price: "₹2000 approx.",
        image: "/shoes1.jpg",
    },
];


export default function CatalogPage() {
    return (
        <main className="min-h-screen bg-background text-text p-6">
            <div className="max-w-7xl max-auto">
                {/* Page Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-extrabold">Shoe Catalog</h1>
                    <p className="text-muted-foreground mt-2 max-w-xl">Select the footwear suitable for your duty. Prices are indicative.
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

// import Image from "next/image";
// import Navbar from "@/components/NavBar";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { StaticImageData } from "next/image";
// import ShoesImg from "@/public/main-shoe.jpg"
// import Shoe1 from "@/public/shoes1.jpg"
// import Shoe2 from "@/public/shoes2.jpg"
// import { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

// type Shoe = {
//     id: number;
//     name: string;
//     use: string;
//     price: string;
//     image: StaticImageData;
// };



// const shoes: Shoe[] = [
//     {
//         id: 1,
//         name: "Police Duty Shoe – Model A",
//         use: "Daily Police Duty",
//         price: "₹1500 approx.",
//         image: Shoe1,
//     },
//     {
//         id: 2,
//         name: "Combat Boot – Model B",
//         use: "Training & Field Use",
//         price: "₹1800 approx.",
//         image: Shoe2,
//     },
//     {
//         id: 3,
//         name: "Parade Shoe – Model C",
//         use: "Ceremonial / Parade",
//         price: "₹1700 approx.",
//         image: ShoesImg,
//     },
//     {
//         id: 4,
//         name: "Heavy Duty Boot – Model D",
//         use: "Rough & Long Duty",
//         price: "₹2000 approx.",
//         image: Shoe1,
//     },
//     {
//         id: 5,
//         name: "NCC Training Shoe – Model E",
//         use: "NCC & Cadet Training",
//         price: "₹1400 approx.",
//         image: Shoe2,
//     },
//     {
//         id: 6,
//         name: "Army Field Boot – Model F",
//         use: "Army & Field Operations",
//         price: "₹2200 approx.",
//         image: ShoesImg,
//     },
// ];

// export default function CataloguePage() {

//     const [selectedShoe, setSelectedShoe] = useState<Shoe | null>(null);
//     const[open, setOpen] = useState(false);

//     return (
//         <>
//             {/* <Navbar /> */}

//             <main className="min-h-screen bg-background text-foreground px-6 py-10">
//                 {/* Page Heading */}
//                 <div className="max-w-7xl mx-auto mb-10">
//                     <h1 className="text-3xl font-extrabold tracking-wide">
//                         Shoe Catalogue
//                     </h1>
//                     <p className="text-muted-foreground mt-2 max-w-xl">
//                         Official duty footwear suitable for Police, Army, NCC and allied
//                         services.
//                     </p>
//                 </div>

//                 {/* Shoe Grid */}
//                 <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//                     {shoes.map((shoe) => (
//                         <Card key={shoe.id} className="shadow-md">
//                             <CardContent className="p-4">
//                                 <Image
//                                     src={shoe.image}
//                                     alt={shoe.name}
//                                     width={400}
//                                     height={250}
//                                     className="rounded-md object-cover mb-3"
//                                 />

//                                 <h2 className="font-bold text-lg">{shoe.name}</h2>
//                                 <p className="text-sm text-muted-foreground">{shoe.use}</p>

//                                 <div className="flex justify-between items-center mt-4">
//                                     <span className="font-semibold">{shoe.price}</span>

//                                     <Button
//                                         variant="outline"
//                                         className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
//                                         onClick={() => {
//                                             setSelectedShoe(shoe);
//                                             setOpen(true);
//                                         }}
//                                     >
//                                         Order
//                                     </Button>
//                                     <Dialog open={open} onOpenChange={setOpen}>
//   <DialogContent>
//     <DialogTitle className="text-xl font-bold mb-4">
//       Order Details
//     </DialogTitle>
//     {selectedShoe && (
//       <>
//         <h2 className="text-lg font-bold">
//           Order: {selectedShoe.name}
//         </h2>

//         <p className="text-sm text-muted-foreground">
//           Price: {selectedShoe.price}
//         </p>

//         <div className="space-y-3 mt-4">
//           <Input placeholder="Full Name" />
//           <Input placeholder="Mobile Number" />
//           <Input placeholder="Shoe Size" />
//           <Textarea placeholder="Delivery Address" />

//           <Button className="w-full">
//             Place COD Order
//           </Button>
//         </div>
//       </>
//     )}
//   </DialogContent>
// </Dialog>

//                                 </div>
//                             </CardContent>
//                         </Card>
//                     ))}
//                 </div>
//                 {selectedShoe && (
//                     <div className="max-w-7xl mx-auto mt-10 p-4 border rounded-md">
//                         <h3 className="font-bold">Selected Shoe:</h3>
//                         <p>{selectedShoe.name}</p>
//                     </div>
//                 )}

//             </main>
//         </>
//     );
// }
