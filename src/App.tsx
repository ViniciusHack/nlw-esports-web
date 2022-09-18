import './styles/main.css';

import logoImg from './assets/logo-nlw-esports.svg';
import { CreateAdBanner } from './components/CreateAdBanner';
import { GameCard } from './components/GameCard';

export function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex items-center flex-col my-20">
      <img src={logoImg} alt="" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="bg-nlw-gradient text-transparent bg-clip-text">duo</span> está aqui
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <GameCard
          title='League of Legends'
          bannerUrl='https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg'
          adsCount={1}
        />
      </div>

      <CreateAdBanner />
    </div>
  )
}