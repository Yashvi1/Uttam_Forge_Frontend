import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, PhoneCall, Truck, CheckCircle } from "lucide-react";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background text-text">

     

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-extrabold leading-tight">
            Duty Footwear Built for  
            <span className="text-primary"> Strength & Endurance</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-xl">
            Supplying reliable leather footwear for Police, Army, NCC and
            institutional forces across India.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/catalog">
              <Button className="bg-primary text-primary-foreground px-6 py-3 font-bold">
                View Catalogue
              </Button>
            </Link>

            <Link href="/bulk-order">
              <Button variant="outline" className="px-6 py-3 font-semibold">
                Bulk / Unit Orders
              </Button>
            </Link>
          </div>
        </div>

        <Card className="shadow-lg">
          <CardContent className="p-0">
            <Image
              src="/shoe-banner.jpg"
              alt="Duty Shoes"
              width={600}
              height={400}
              className="rounded-md object-cover"
            />
          </CardContent>
        </Card>
      </section>

      {/* Trust Indicators */}
      <section className="bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="space-y-2">
            <ShieldCheck className="mx-auto h-8 w-8 text-primary" />
            <h3 className="font-semibold">Duty Tested</h3>
            <p className="text-sm text-muted-foreground">
              Designed for long hours and rough conditions
            </p>
          </div>

          <div className="space-y-2">
            <Truck className="mx-auto h-8 w-8 text-primary" />
            <h3 className="font-semibold">Pan-India Delivery</h3>
            <p className="text-sm text-muted-foreground">
              Reliable logistics across states
            </p>
          </div>

          <div className="space-y-2">
            <CheckCircle className="mx-auto h-8 w-8 text-primary" />
            <h3 className="font-semibold">COD & Phone Confirmation</h3>
            <p className="text-sm text-muted-foreground">
              Transparent and secure ordering
            </p>
          </div>
        </div>
      </section>

      {/* Product Preview */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold mb-6">
          Popular Duty Footwear
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {["/shoe1.jpg", "/shoe2.jpg", "/shoe3.jpg", "/shoe4.jpg"].map(
            (src, i) => (
              <Card key={i}>
                <CardContent className="p-4 text-center">
                  <Image
                    src={src}
                    alt="Duty Shoe"
                    width={200}
                    height={150}
                    className="mx-auto rounded-md"
                  />
                  <p className="mt-2 font-semibold">
                    Duty Footwear
                  </p>
                </CardContent>
              </Card>
            )
          )}
        </div>
      </section>

      {/* How Ordering Works */}
      <section className="bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h3 className="text-2xl font-bold mb-8 text-center">
            How Ordering Works
          </h3>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-lg font-bold">1</p>
              <p className="font-semibold">Select Footwear</p>
              <p className="text-sm text-muted-foreground">
                Choose from our catalogue
              </p>
            </div>
            <div>
              <p className="text-lg font-bold">2</p>
              <p className="font-semibold">Submit Requirement</p>
              <p className="text-sm text-muted-foreground">
                Individual or bulk order
              </p>
            </div>
            <div>
              <p className="text-lg font-bold">3</p>
              <p className="font-semibold">Confirmation Call</p>
              <p className="text-sm text-muted-foreground">
                Size, pricing & delivery finalized
              </p>
            </div>
          </div>
        </div>
      </section>


    </main>
  );
}





// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Check } from "lucide-react";
// import Link from "next/link";
// import Navbar from "@/components/NavBar";

// export default function LandingPage() {
//   return (
    
// <main className="min-h-screen bg-background text-foreground font-sans">
//       <div className="max-w-7xl mx-auto px-4">
       
// <div className="p-4 bg-primary text-primary-foreground">Primary OK</div>
// <div className="p-4 bg-secondary text-secondary-foreground">Secondary OK</div>
// <div className="p-4 border border-border">Border OK</div>
 
//         {/* HEADER */}
//         <header className="flex justify-between items-center py-4 mb-8">
//           <h1 className="text-2xl font-extrabold text-primary">Uttam Forge</h1>

//         <a
//   href="tel:+911234567890"
//   className="text-trust font-semibold hover:underline"
// >
//   Call: +91-12345-67890
// </a>
//       </header>

//       {/* Hero Banner */}
//       <section className="flex flex-col md:flex-row items-center mb-12 max-w-7xl mx-auto gap-8">
//         <div className="md:w-1/2 space-y-6">
//           <h2 className="text-4xl font-extrabold leading-tight">
//             Majboot Police Duty Shoes — Cash on Delivery
//           </h2>
//           <p className="text-secondary-foreground text-lg font-medium">
//   Trusted by Police, Army & NCC
// </p>
//           <div className="flex space-x-4">
//             <Link href="/individualOrder">
//             <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-6 py-3">
//   Order Individual Pair
// </Button>
//             </Link>
//             <Link href="/bulkOrders">
//             <Button
//   variant="outline"
//   className="border-trust text-trust hover:bg-trust hover:text-white px-6 py-3 font-semibold"
// >
//   Bulk / Unit Orders
// </Button>
//             </Link>
//             <Link href="/catalog">
//             <Button
//   variant="outline"
//   className="border-trust text-trust hover:bg-trust hover:text-white px-6 py-3 font-semibold"
// >
//   View Catalog
// </Button>
//             </Link>
//           </div>
//         </div>

//         <div className="md:w-1/2">
//           <Card className="shadow-lg rounded-lg">
//             <CardContent className="p-0">
//               <Image
//                 src="/shoe-banner.jpg"
//                 alt="Police Duty Shoe"
//                 width={500}
//                 height={350}
//                 className="rounded-lg object-cover w-full h-full"
//               />
//             </CardContent>
//           </Card>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="max-w-md mx-auto mb-12">
//         <h3 className="text-xl font-semibold mb-6 text-center">Features</h3>
//         <ul className="space-y-4">
//           {[
//             "Duty-tested and durable",
//             "Size confirmed over call",
//             "Cash on Delivery available",
//           ].map((feature, i) => (
//             <li
//               key={i}
//               className="flex items-center space-x-3 text-muted-foreground text-lg"
//             >
//               <Check className="w-5 h-5 text-trust" />
//               <span>{feature}</span>
//             </li>
//           ))}
//         </ul>
//       </section>

//       {/* Product Showcase */}
//       <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
//         {[
//           { src: "/shoe1.jpg", name: "Model A", price: "₹1500 approx." },
//           { src: "/shoe2.jpg", name: "Model B", price: "₹1700 approx." },
//           { src: "/shoe3.jpg", name: "Model C", price: "₹1800 approx." },
//           { src: "/shoe4.jpg", name: "Model D", price: "₹1600 approx." },
//         ].map(({ src, name, price }, idx) => (
//           <Card key={idx} className="shadow-md rounded-md">
//             <CardContent className="p-4 text-center">
//               <Image
//                 src={src}
//                 alt={name}
//                 width={200}
//                 height={150}
//                 className="mx-auto rounded-md"
//               />
//               <h4 className="font-semibold mt-2">{name}</h4>
//               <p className="text-muted-foreground">{price}</p>
//             </CardContent>
//           </Card>
//         ))}
//       </section>

//       {/* Footer */}
//       <footer className="text-center text-muted-foreground text-sm py-6 border-t border-border max-w-7xl mx-auto">
//         © 2026 Uttam Forge. All rights reserved.
//       </footer>
//       </div>
//     </main>
//   );
// }
