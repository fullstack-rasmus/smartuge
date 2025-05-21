export default function Footer() {
    return (
      <footer className="bg-white border-t mt-8">
        <div className="container mx-auto px-4 py-6 text-center text-gray-600">
          © {new Date().getFullYear()} SmartUge. Alle rettigheder forbeholdes.
        </div>
      </footer>
    );
  }