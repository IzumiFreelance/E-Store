import { Button } from "@/components/ui/button";
import ProductCard from "@/components/product-card";
import { featuredProducts } from "@/lib/data";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-cover bg-center" 
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
        }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative text-center text-white space-y-4 px-4">
          <h1 className="text-4xl md:text-6xl font-bold">Welcome to Our Store</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Discover our curated collection of premium products
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-100">
            Shop Now
          </Button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-muted py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Electronics', 'Fashion', 'Home & Living'].map((category) => (
              <div key={category} className="relative h-64 group cursor-pointer overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <img
                  src={`https://source.unsplash.com/featured/?${category.toLowerCase()}`}
                  alt={category}
                  className="h-full w-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">{category}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                title: 'Free Shipping',
                description: 'On orders over $50',
              },
              {
                title: '24/7 Support',
                description: 'Get help when you need it',
              },
              {
                title: 'Money Back Guarantee',
                description: '30-day return policy',
              },
            ].map((feature) => (
              <div key={feature.title} className="p-6 rounded-lg bg-card">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}