export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="
      mt-16
      border-t border-[#26351F]
      bg-[#1c3119]
      text-[#E6F4D7]
    ">
      <div className="max-w-6xl mx-auto px-4 py-12 grid gap-8 md:grid-cols-4">

    
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="
              h-9 w-9 rounded-lg
              bg-[#9FD36A]
              flex items-center justify-center
              font-extrabold text-[#0B120A]
            ">
              C
            </div>
            <div>
              <h2 className="font-extrabold text-lg">
                Care.IO
              </h2>
              <p className="text-xs text-[#8E9C7C] tracking-wide">
                Care · Trust · Peace of Mind
              </p>
            </div>
          </div>

          <p className="text-sm text-[#B7C6A3] max-w-md">
            Care.IO helps families find verified babysitters, elderly caregivers,
            and special care providers with confidence and peace of mind.
          </p>
        </div>

      
        <div>
          <h3 className="text-sm font-semibold uppercase mb-3 text-[#E6F4D7]">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-[#B7C6A3]">
            <li><a href="/items" className="hover:text-[#9FD36A">Browse Services</a></li>
            <li><a href="/my-bookings" className="hover:text-[#9FD36A]">My Bookings</a></li>
            <li><a href="/login" className="hover:text-[#9FD36A]">Login / Register</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-sm font-semibold uppercase mb-3 text-[#E6F4D7]">
            Support
          </h3>
          <ul className="space-y-2 text-sm text-[#B7C6A3]">
            <li>Email: support@care.io</li>
            <li>Phone: +880 1234-567890</li>
            <li className="text-[#8E9C7C]">
              9:00 AM - 10:00 PM (GMT+6)
            </li>
          </ul>
        </div>
      </div>

      
      <div className="border-t border-[#1E2A19] bg-[#182517]">
        <div className="max-w-6xl mx-auto px-4 py-4 text-center text-xs text-[#8E9C7C]">
          © {year} Care.IO — Making caregiving simple & secure.
        </div>
      </div>
    </footer>
  );
}
