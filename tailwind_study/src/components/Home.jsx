const Home = () => {
  return (
   <section name="home" className="flex w-full h-screen bg-zinc-200">
    <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
      <div className="flex flex-col justify-center w-full px-2  py-8 md:items-start">
        <p className="text-2xl">Use our chat platform</p>
        <h1 className="py-3 text-5xl font-bold md:7xl"> Chat Matnagement</h1>
        <p className="text-2xl">chatty is th best chat platform</p>
      <button className="py-3 px-6 sm:w-[60%] my-4">Get Started</button>
      </div>
      <div className="flex flex-col justify-center px-2">
        <h2 className="font-semibold xs:text-[48px] text-[40px]
         xs-leading-[76.8px] leading-[66.8px] w-full">Easily download app<br className="hidden sm:block"/>Google & Apple</h2>
      <p className={`text-[18px] leading-[30.8px] max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias provident ratione quisquam aliquam facilis excepturi sapiente, aut sed totam nemo praesentium id officiis, harum ipsa doloribus quidem ducimus placeat reprehenderit!
      </p>
      </div>
    </div>

   </section>

  )
}
export default Home