import '../App.css'
import component1Image1 from '../assets/images/component-01/Image-01.jpg';
import component1Image2 from '../assets/images/component-01/Image-02.jpg';
import component1Image3 from '../assets/images/component-01/Image-03.jpg';

const Section1 = () => {
  return (
    <section className="section-1-wrapper">
      <div className="section-item large-image">
        <img className="full-image" src={component1Image1}/>
      </div>
      <div className="section-item" style={{flexDirection: 'column', justifyContent: 'space-between'}}>
        <div className="small-image" style={{marginBottom: '20px'}}>
          <img className="full-image" src={component1Image2} />
        </div> 
        <div className="small-image">
          <img className="full-image" src={component1Image3}/>
        </div>
      </div>
      <div className="section-item" style={{flexDirection: 'column', justifyContent: 'flex-start'}}>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%', marginBottom: '10px'}}>
          <h2 style={{margin: 0, fontFamily: 'Open Sans', fontWeight: '400', textTransform: 'uppercase'}}>answer your body needs</h2>
        </div>
        <div style={{border: '1px solid white'}}/>
        <p style={{fontFamily: 'Open Sans',  fontWeight: '300', fontSize: '18px', padding: 0}}>
          The way the ingredients are sourced affects the way we nourished our bodies. Author Mark Schatzer believes our body naturally develops an appetite for the foods
          and nutrients it needs to be healthy, but that artificial flavourings are getting in the way. This can be reversed by focusing on high-quality ingredients and being
          mindful as your appetite guides you to consume according to your body's needs.
        </p>
        <h3 style={{color: 'red'}}>Be mindful</h3>
        <p style={{fontFamily: 'Open Sans', fontWeight: 'bold', fontSize: '20px', margin: 0, padding: 0}}>Sourcing local or oganic foods is a good way to start being more mindful about what you're cooking and eating.</p>
      </div>
    </section>
  );
}

export default Section1;
