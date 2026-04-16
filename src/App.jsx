import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Section from './components/Section'
import Card from './components/Card'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <Hero />

      <Section title="How does the region effect tree growth?">
        <Card title="Climate" description="Washington's climate ranges from wet, mild coastal weather to much drier inland conditions. The Pacific Ocean keeps the west side cool and rainy, supporting temperate rainforest species, while eastern Washington is warmer and more continental, favoring drought-tolerant trees." />
        <Card title="Elevation" description="Elevations in Washington vary from sea level to over 14,000 feet, and tree species change with altitude. Lowland forests are dominated by fir and hemlock, mid-elevation slopes support conifer stands, and high-elevation ridges are home to subalpine firs." />
      </Section>

      <Section title="State Tree">
        <img src="../public/western_hemlock.jpg" alt="A Western Hemlock tree standing proud with it's needled, evergreen form in the sunlight." />
        <Card title="Western Hemlock" description="Washington's official tree is the largest hemlock species, reaching 100-150 feet tall in moist coastal, lowland, and mountain forests. It has flat needles with rounded tips, tiny cones, thin bark with red inner wood, and a narrow, graceful crown." />
        <Card title="Why is it the state tree?" description="Designated in 1947, the western hemlock represents Washington's evergreen forests and timber legacy. Its broad range across damp forests and recognizable form made it a natural state symbol." />
      </Section>

      <Section title="Other trees in Washington">
        <img src="/douglas_fir.jpg" alt="A Douglas Fir tree in the sunlight." />
        <Card title="Douglas Fir" description="Douglas fir has fast growth, soft blue-green needles, and reddish-brown bark. It thrives in many soils and can reach 200 feet or more in mature forests." />
        <img src="/western_red_cedar.jpg" alt="A Western Red Cedar tree." />
        <Card title="Western Red Cedar" description="This tree has a wide base, and reddish bark. It prefers cool, moist summers, resists rot, and is used for shingles, siding, and traditional cultural carvings." />
        <img src="/sitka_spruce.jpg" alt="A Sitka Spruce standing on it's lonesome." />
        <Card title="Sitka Spruce" description="Sitka spruce is a coastal conifer with blue-green needles and slightly drooping branches, typically found within about 50 miles of the Pacific. Its strong, lightweight wood is prized for aircraft, musical instruments, and boatbuilding." />
        <img src="/ponderosa_pine.jpg" alt="A patch of Ponderosa Pines." />
        <Card title="Ponderosa Pine" description="A tall eastern Washington pine with orange-brown bark and needles usually in threes, Ponderosa thrives in dry, well-drained soils. It adapts to alkaline sites, wind, and high elevation, making it common on open slopes." />
      </Section>

      <Footer />
    </>
  )
}

export default App
