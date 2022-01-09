/* eslint-disable tailwindcss/no-custom-classname */

const WavesBackground: React.VFC = () => {
  return (
    <div className="flex absolute inset-0 flex-col bg-cream -z-50">
      <div className="h-[640px] bg-top bg-no-repeat bg-layered-waves-bottom bg-[length:100%_640px]" />
      <div className="flex-1 mt-[-370px] bg-repeat-y bg-stacked-waves bg-center-top bg-[length:100%_900px]" />
    </div>
  )
}

export default WavesBackground
