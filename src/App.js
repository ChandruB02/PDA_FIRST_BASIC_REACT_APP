import Profilecard from "./component/Profilecard";
import 'bulma/css/bulma.css';
import ALexaImage from "./images/alexa.png";
import CortonaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";




function App() {
  return (
    <div>
      {/* <div className="container">
        <h2 className="title is-3 has-text-centered mt-5">Personal Digital Assistants</h2>
      </div> */}
      <section class="hero is-primary">
          <div class="hero-body has-text-centered mt-5">
                <h2 class="title">Personal Digital Assistants</h2>
                
          </div>
        </section>
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-3">
              <Profilecard title="Alexa" handle="@Alexa99" imageUrl={ALexaImage}
              description="Alexa was created by amazon to buy things."/>
              
            </div>
            <div className="column is-3">
                  <Profilecard
                        title="Cortona"
                        handle="@Cortona32"
                        imageUrl={CortonaImage}
                        description="Cortona was made by Microsoft who knows what it does."
                  />
            </div>
            <div className="column is-3">
                  <Profilecard
                      title="Siri"
                      handle="@Siri01"
                      imageUrl={SiriImage}
                      description="Siri was made by Apple have fun by talking with it."
                  />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
