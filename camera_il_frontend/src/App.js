import VideoPlayer from './videoplayer/videoplayer';
import './App.css';
import Header from './header/header';
import Footer from './footer/footer';
import AudioRecorder from './AudioRecorder/AudioRecorder';
import './fontAwesome'; // Importa tu archivo de configuración de FontAwesome
import AppToken from './tokenAcceso/tokenAcceso';


function App() {
  return (
    <div className="App">
      <Header />
      <VideoPlayer />
      <AudioRecorder />
      {/* <AppToken /> */}
      <Footer />
    </div>
  );
}

export default App;
