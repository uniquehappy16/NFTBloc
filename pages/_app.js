import "../styles/globals.css";

import { NavBar, Footer } from "@/components/componentindex";

 const App = ({ Component, pageProps }) => (
 <div>
    <NavBar />
    <Component {...pageProps} />
    <Footer />
 </div>
 );
  
export default App;