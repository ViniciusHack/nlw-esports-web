interface GameCardProps {
  title: string;
  adsCount: number;
  bannerUrl: string;
}

export function GameCard({ adsCount, bannerUrl, title }: GameCardProps) {
  return (
    <a href="" className="relative rounded-lg overflow-hidden">
      <img className="w-full" src={bannerUrl} alt={title} />

      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
        <strong className="font-bold text-white block">{title}</strong>
        <span className="text-zinc-300 text-sm block">{adsCount} anúncio(s)</span>
      </div>
    </a>
  )
}