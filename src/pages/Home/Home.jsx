import './Home.scss'
import Layout from '../../components/Layout/Layout'
import MenuVertical from '../../components/MenuVertical/MenuVertical'

function Home() {
  return (
    <Layout>
      <MenuVertical />
      <div className="charts-wrapper">Titre + Graphiques</div>
    </Layout>
  )
}

export default Home
