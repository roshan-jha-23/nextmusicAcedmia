function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            Music School is a premier institution dedicated to teaching the art
            and science of music. We nurture talent from the ground up,
            fostering a vibrant community of musicians.
          </p>
          {/* Add your details here */}
          <p className="mb-2">Founded in 2024</p>
          <p>Founder:Roshan Jha</p>
        </div>
        <div>{/* Quick Links */}</div>
        <div>{/* Follow Us */}</div>
        <div>{/* Contact Us */}</div>
      </div>
      <p className="text-center text-xs pt-8">
        © 2024 Music School. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
