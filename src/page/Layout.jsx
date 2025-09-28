
import { Outlet } from 'react-router'
import Navbar from '../components/ui/Navbar'
import Footer from '../components/ui/Footer'
import WhatsAppButton from '../components/ui/WhatsAppButton'

const Layout = () => {
  return (
    <div>
        {/* Navigation */}
        <Navbar />
        <Outlet />
       {/* Footer */}
        <Footer />
        
        {/* WhatsApp Floating Button */}
        <WhatsAppButton />
    </div>
  )
}

export default Layout
