import '../App.css'
import image1 from '../assets/images/component-02/Image-01.jpg';
import image2 from '../assets/images/component-02/Image-02.jpg';
import image3 from '../assets/images/component-02/Image-03.jpg';

interface Data {
  image: string;
  title: string;
  description: string;
}

const Section2 = () => {
  const data: Data[] = [
    {
      image: image1,
      title: 'summer lunch menu by mark best',
      description: `AEG ambassador Mark Best's summer eats are guaranteed to help you make the most of the warmer weather and entertaining at home.`
    },
    {
      image: image2,
      title: 'a traditional christmas eve, mark best style',
      description: `One of Australia's best chefs and AEG ambassador, Mark Best, shares hi favourite Christmas Eve menu which is sure to impress your guests.`
    },
    {
      image: image3,
      title: 'taking taste further',
      description: `This exclusive cookbook gives you all the know-how you need. We've designed it to make sure you get the most out of our products - and the best out of your food.`
    }
  ];
  return (
    <section className="section-2-wrapper">
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%', marginBottom: '35px'}}>
        <span style={{fontFamily: 'Open Sans', fontWeight: '300', textTransform: 'uppercase', fontSize: '45px', textAlign: 'center'}}>
          all the latest from AEG
        </span>
      </div>
      <div className="section-2-content">
        {data.map(item => (
          <div className="section-item" style={{flexDirection: 'column'}}>
            <div style={{ marginTop: '20px', width: '100%'}}>
              <img className="small-image full-image" src={item.image}/>
              <div style={{border: '2px solid red', marginTop: '-6px'}}/>
            </div>
            <p style={{fontFamily: 'Open Sans', fontWeight: 'bold', fontSize: '18px', textTransform: 'capitalize'}}>
              {item.title}
            </p>
            <p style={{fontFamily: 'Open Sans', fontWeight: '300', fontSize: '16px', margin: '0px'}}>
              {item.description}
            </p>
            <div style={{ marginTop: '20px' }}>
              <a style={{fontFamily: 'Open Sans', fontWeight: '700', fontSize: '16px', color: 'white'}}>Read More</a>
              <div style={{border: '1px solid red', width: '85px'}}/>
            </div>
          </div>
        ))} 
      </div>
    </section>
  );
}

export default Section2;
