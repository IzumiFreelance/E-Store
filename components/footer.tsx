export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">About Us</h3>
            <p className="text-muted-foreground">
              We're dedicated to providing the best shopping experience with quality products and exceptional service.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">Contact Us</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">Shipping Policy</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">Returns & Exchanges</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">FAQ</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">Shop All</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">New Arrivals</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">Sale</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">Blog</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border rounded-md"
              />
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground px-3 py-2 rounded-md hover:opacity-90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Modern E-commerce Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}