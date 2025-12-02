import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-deep-rose text-white py-10 text-center font-sans text-xs tracking-widest relative z-10">
        <p className="mb-3 text-3xl font-script">Mạnh Dũng & Ngọc Ánh</p>
        <p className="opacity-70 mb-4">21 . 12 . 2025</p>
        <div className="flex justify-center gap-4 text-xl opacity-80">
            <a href="#" className="hover:text-rose-200"><i className="fab fa-facebook"></i></a>
            <a href="#" className="hover:text-rose-200"><i className="fab fa-instagram"></i></a>
        </div>
    </footer>
  );
};

export default Footer;