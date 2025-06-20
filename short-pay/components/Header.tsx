import Link from 'next/link';

export default function Header() {
    return (
        <header className='bg-white shadow-sm'>
            <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
                {/*--Logo--*/}
                <Link href="/">
                    <div className='flex items-center space-x-2 cursor-pointer'>
                        <div className='h-10 w-12 bg-blue-500 rounded-full'>
                            <img src="/eLogo.webp" alt="Logo"  />
                        </div>
                        <span className='text-xl font-bold text-gray-800'>
                            E-SHORP
                        </span>
                    </div>
                </Link>

                {/*--Navigation--*/}
                <nav className='hidden md:flex space-x-10'>
                    <Link href="/">
                        <span className='text-gray hover:text-orange-500 transition-colors duration-300 cursor-pointer font-meduim'>
                            Accueil
                        </span>
                    </Link>
                    <Link href="/produits">
                        <span className='text-gray hover:text-orange-500 transition-colors duration-300 cursor-pointer font-meduim'>
                            Produits
                        </span>
                    </Link>
                    <Link href="/services">
                        <span className='text-gray hover:text-orange-500 transition duration-300 cursor-pointer font-meduim'>
                            Services
                        </span>
                    </Link>
                </nav>

                
                {/*--Bouton de connexion--*/}
                <button className='bg-blue-600 text-white hover:bg-orange-500 transition duration-300 cursor-pointer px-4 py-2 rounded-lg'>
                    <Link href="/connexion">
                        Se Connecter 
                    </Link>
                </button>

            </div>
        </header>
    )
}