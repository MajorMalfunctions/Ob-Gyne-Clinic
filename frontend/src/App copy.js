import Layout from  './screens/Layout/Layout';
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react"

import AOS from "aos"
import "aos/dist/aos.css"

function App () {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <>
      <Layout />
    </>
  );
}

export default App;